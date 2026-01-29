import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";


export interface Position {
    marketId: string | number;
    marketTitle: string;
    type: "YES" | "NO";
    price: number;
    shares: number;
    pnl: number;
    leverage?: number;
    category?: string;
    entryDate?: number;
}

export interface CategoryReputation {
    category: string;
    accuracy: number;
    predictions: number;
    totalPnL: number;
}

export interface ReputationProfile {
    overall: number;
    byCategory: CategoryReputation[];
    riskAdjustedScore: number;
    totalPredictions: number;
    winRate: number;
}

interface UserContextType {
    balance: number;
    stakedBalance: number;
    reputation: number;
    reputationProfile: ReputationProfile;
    positions: Position[];
    isWalletConnected: boolean;
    walletAddress: string | null;
    placeBet: (marketId: string, marketTitle: string, type: "YES" | "NO", amount: number, price: number, leverage?: number, category?: string) => boolean;
    stake: (amount: number, vaultName: string) => boolean;
    vote: (caseId: number, decision: "UPHOLD" | "STRIKE") => void;
    copyTrader: (traderName: string) => void;
    connectWallet: () => void;
    disconnectWallet: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    // Persist to localStorage for "End to End" feel across reloads
    const [balance, setBalance] = useState(() => {
        const saved = localStorage.getItem("omni_balance");
        return saved ? parseFloat(saved) : 1250.00; // Default Mock Balance
    });

    const [stakedBalance, setStakedBalance] = useState(() => {
        const saved = localStorage.getItem("omni_staked");
        return saved ? parseFloat(saved) : 0;
    });

    const [reputation, setReputation] = useState(() => {
        const saved = localStorage.getItem("omni_reputation");
        return saved ? parseFloat(saved) : 24.5;
    });

    const [reputationProfile, setReputationProfile] = useState<ReputationProfile>(() => {
        const saved = localStorage.getItem("omni_reputation_profile");
        if (saved) return JSON.parse(saved);
        return {
            overall: 24.5,
            byCategory: [
                { category: "Crypto", accuracy: 78.5, predictions: 12, totalPnL: 245 },
                { category: "Politics", accuracy: 65.2, predictions: 5, totalPnL: -45 },
                { category: "Sports", accuracy: 82.1, predictions: 8, totalPnL: 180 }
            ],
            riskAdjustedScore: 1.85,
            totalPredictions: 25,
            winRate: 68.0
        };
    });

    const [positions, setPositions] = useState<Position[]>(() => {
        const saved = localStorage.getItem("omni_positions");
        return saved ? JSON.parse(saved) : [];
    });

    const [isWalletConnected, setIsWalletConnected] = useState(() => {
        const saved = localStorage.getItem("omni_wallet_connected");
        return saved === "true";
    });

    const [walletAddress, setWalletAddress] = useState<string | null>(() => {
        return localStorage.getItem("omni_wallet_address");
    });

    useEffect(() => {
        localStorage.setItem("omni_balance", balance.toString());
    }, [balance]);

    useEffect(() => {
        localStorage.setItem("omni_staked", stakedBalance.toString());
    }, [stakedBalance]);

    useEffect(() => {
        localStorage.setItem("omni_reputation", reputation.toString());
    }, [reputation]);

    useEffect(() => {
        localStorage.setItem("omni_reputation_profile", JSON.stringify(reputationProfile));
    }, [reputationProfile]);

    useEffect(() => {
        localStorage.setItem("omni_positions", JSON.stringify(positions));
    }, [positions]);

    useEffect(() => {
        localStorage.setItem("omni_wallet_connected", isWalletConnected.toString());
    }, [isWalletConnected]);

    useEffect(() => {
        if (walletAddress) {
            localStorage.setItem("omni_wallet_address", walletAddress);
        } else {
            localStorage.removeItem("omni_wallet_address");
        }
    }, [walletAddress]);

    // Auto-connect on page load if previously connected
    useEffect(() => {
        const autoConnect = async () => {
            // Only try to auto-connect if user was previously connected
            const wasConnected = localStorage.getItem("omni_wallet_connected") === "true";
            if (!wasConnected) return;

            // Check if MetaMask is available
            if (typeof window.ethereum === 'undefined') return;

            try {
                const { BrowserProvider } = await import('ethers');
                const provider = new BrowserProvider(window.ethereum);

                // Check for existing accounts (doesn't trigger popup)
                const accounts = await provider.send("eth_accounts", []);

                if (accounts.length > 0) {
                    const address = accounts[0];
                    const shortAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)} `;

                    setWalletAddress(shortAddress);
                    setIsWalletConnected(true);

                    console.log("Auto-connected to wallet:", shortAddress);
                }
            } catch (error) {
                console.log("Auto-connect failed:", error);
                // Silently fail - user can manually connect
            }
        };

        autoConnect();

        // Listen for MetaMask unlock events
        if (window.ethereum?.on) {
            const handleUnlock = () => {
                console.log("MetaMask unlocked - attempting auto-connect");
                autoConnect();
            };

            window.ethereum.on('accountsChanged', handleUnlock);

            return () => {
                window.ethereum?.removeListener?.('accountsChanged', handleUnlock);
            };
        }
    }, []); // Run only once on mount

    const connectWallet = async () => {
        try {
            // Check if any ethereum provider is available
            if (typeof window.ethereum === 'undefined') {
                toast.error("No Wallet Detected", {
                    description: "Please install MetaMask, Coinbase Wallet, or another Web3 wallet",
                    action: {
                        label: "Get MetaMask",
                        onClick: () => window.open('https://metamask.io/download/', '_blank')
                    }
                });
                return;
            }

            // Import ethers dynamically
            const { BrowserProvider } = await import('ethers');

            // Create provider
            const provider = new BrowserProvider(window.ethereum);

            // First, check if wallet is locked by trying to get existing accounts
            let accounts: string[] = [];
            try {
                accounts = await provider.send("eth_accounts", []);
            } catch (err) {
                console.log("Could not get existing accounts:", err);
            }

            // If no accounts, request permission
            if (accounts.length === 0) {
                try {
                    accounts = await provider.send("eth_requestAccounts", []);
                } catch (requestError: any) {
                    // Handle specific error cases
                    if (requestError.code === 4001 || requestError.code === "ACTION_REJECTED") {
                        toast.error("Connection Rejected", {
                            description: "You rejected the connection request"
                        });
                        return;
                    }

                    if (requestError.message?.includes("No active wallet") || requestError.code === -32603) {
                        toast.error("Wallet Not Ready", {
                            description: "Please unlock your MetaMask wallet and try again",
                            action: {
                                label: "Retry",
                                onClick: () => connectWallet()
                            }
                        });
                        return;
                    }

                    throw requestError; // Re-throw if unhandled
                }
            }

            if (accounts.length > 0) {
                const address = accounts[0];
                const shortAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)} `;

                setWalletAddress(shortAddress);
                setIsWalletConnected(true);

                // Get network info
                let networkName = "Unknown Network";
                try {
                    const network = await provider.getNetwork();
                    const chainId = Number(network.chainId);
                    const networkNames: { [key: number]: string } = {
                        1: "Ethereum Mainnet",
                        5: "Goerli Testnet",
                        11155111: "Sepolia Testnet",
                        137: "Polygon",
                        80001: "Mumbai Testnet"
                    };
                    networkName = networkNames[chainId] || `Chain ${chainId} `;
                } catch (err) {
                    console.log("Could not get network:", err);
                }

                toast.success("Wallet Connected", {
                    description: `${shortAddress} on ${networkName} `
                });

                // Listen for account changes
                if (window.ethereum.on) {
                    window.ethereum.on('accountsChanged', (newAccounts: string[]) => {
                        if (newAccounts.length === 0) {
                            disconnectWallet();
                        } else {
                            const newAddress = newAccounts[0];
                            const newShortAddress = `${newAddress.substring(0, 6)}...${newAddress.substring(newAddress.length - 4)} `;
                            setWalletAddress(newShortAddress);
                            toast.info("Account Changed", {
                                description: `Now using ${newShortAddress}`
                            });
                        }
                    });

                    // Listen for chain changes
                    window.ethereum.on('chainChanged', () => {
                        toast.info("Network Changed", {
                            description: "Reloading application..."
                        });
                        setTimeout(() => window.location.reload(), 1000);
                    });
                }
            } else {
                toast.error("No Accounts Found", {
                    description: "Please create or import an account in your wallet"
                });
            }
        } catch (error: any) {
            console.error("Wallet connection error:", error);

            // Enhanced error messages
            let errorMessage = "Failed to connect wallet";
            let errorDescription = error.message || "An unknown error occurred";

            if (error.code === 4001 || error.code === "ACTION_REJECTED") {
                errorMessage = "Connection Rejected";
                errorDescription = "You rejected the connection request";
            } else if (error.message?.includes("User rejected")) {
                errorMessage = "Connection Rejected";
                errorDescription = "You rejected the connection request";
            } else if (error.message?.includes("Already processing")) {
                errorMessage = "Request Pending";
                errorDescription = "Please check your wallet for a pending request";
            } else if (error.code === -32002) {
                errorMessage = "Request Pending";
                errorDescription = "A connection request is already pending. Check your wallet.";
            }

            toast.error(errorMessage, {
                description: errorDescription,
                action: {
                    label: "Retry",
                    onClick: () => connectWallet()
                }
            });
        }
    };

    const disconnectWallet = () => {
        setWalletAddress(null);
        setIsWalletConnected(false);
        toast.info("Wallet Disconnected");
    };

    const placeBet = (marketId: string, marketTitle: string, type: "YES" | "NO", amount: number, price: number, leverage: number = 1) => {
        if (!isWalletConnected) {
            toast.error("Please connect your wallet first");
            return false;
        }

        if (amount <= 0) {
            toast.error("Invalid amount entered.");
            return false;
        }

        if (amount > balance) {
            toast.error("Insufficient funds in wallet.", {
                description: `You need $${(amount - balance).toFixed(2)} more.`
            });
            return false;
        }

        // Deduct Balance (only collateral amount)
        setBalance(prev => prev - amount);

        // Calculate actual position with leverage
        const buyingPower = amount * leverage;
        const shares = buyingPower / price;
        const newPos: Position = {
            marketId,
            marketTitle,
            type,
            price,
            shares,
            pnl: 0,
            leverage: leverage > 1 ? leverage : undefined
        };

        setPositions(prev => {
            // Check if existing position exists to merge
            const existingIdx = prev.findIndex(p => p.marketId === marketId && p.type === type);
            if (existingIdx >= 0) {
                const updated = [...prev];
                const existing = updated[existingIdx];
                // Weighted average price calculation
                const totalShares = existing.shares + shares;
                const totalCost = (existing.shares * existing.price) + (shares * price);
                existing.price = totalCost / totalShares;
                existing.shares = totalShares;
                if (leverage > 1) existing.leverage = leverage;
                return updated;
            }
            return [...prev, newPos];
        });

        const leverageText = leverage > 1 ? ` with ${leverage}x leverage` : "";
        toast.success("Order Filled Successfully", {
            description: `Bought ${shares.toFixed(2)} ${type} shares of ${marketTitle}${leverageText} `
        });

        return true;
    };

    const stake = (amount: number, vaultName: string) => {
        if (!isWalletConnected) {
            toast.error("Please connect your wallet first");
            return false;
        }

        if (amount <= 0) {
            toast.error("Invalid amount.");
            return false;
        }
        if (amount > balance) {
            toast.error("Insufficient funds to stake.");
            return false;
        }
        setBalance(prev => prev - amount);
        setStakedBalance(prev => prev + amount);
        toast.success(`Staked $${amount} into ${vaultName} `, {
            description: "You are now earning yield."
        });
        return true;
    };

    const vote = (caseId: number, decision: "UPHOLD" | "STRIKE") => {
        if (!isWalletConnected) {
            toast.error("Please connect your wallet first");
            return;
        }

        toast.success("Vote Submitted On-Chain", {
            description: `You voted to ${decision} case #${caseId}.+0.5 Rep earned.`
        });
        setReputation(prev => prev + 0.5);
    };

    const copyTrader = (traderName: string) => {
        if (!isWalletConnected) {
            toast.error("Please connect your wallet first");
            return;
        }

        toast.success(`Now Copying ${traderName} `, {
            description: "Future trades will be mirrored automatically."
        });
    }

    return (
        <UserContext.Provider value={{
            balance,
            stakedBalance,
            reputation,
            reputationProfile,
            positions,
            isWalletConnected,
            walletAddress,
            placeBet,
            stake,
            vote,
            copyTrader,
            connectWallet,
            disconnectWallet
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
