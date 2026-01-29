import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Wallet, Info } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useSearchParams } from "react-router-dom";

interface TradeFormProps {
    marketTitle?: string;
    marketId?: string;
}

const TradeForm = ({ marketTitle = "Unknown Market", marketId = "1" }: TradeFormProps) => {
    const { balance, placeBet } = useUser();
    const [searchParams] = useSearchParams();

    // Initialize from URL param (e.g. ?side=NO)
    const initialSide = searchParams.get("side") === "NO" ? "NO" : "YES";
    const [side, setSide] = useState<"YES" | "NO">(initialSide);

    const [orderType, setOrderType] = useState<"MARKET" | "LIMIT">("MARKET");
    const [leverage, setLeverage] = useState([1]);
    const [amount, setAmount] = useState("");
    const [limitPrice, setLimitPrice] = useState("");
    const [yieldBoost, setYieldBoost] = useState(false);

    const basePrice = side === "YES" ? 0.62 : 0.38;
    const price = orderType === "LIMIT" && limitPrice ? parseFloat(limitPrice) : basePrice;

    // Leverage calculations
    const leverageMultiplier = leverage[0];
    const actualAmount = amount ? parseFloat(amount) : 0;
    const buyingPower = actualAmount * leverageMultiplier;
    const borrowedAmount = buyingPower - actualAmount;
    const potentialShares = buyingPower / price;
    const roi = ((potentialShares * 1.0) - buyingPower) / actualAmount * 100;

    // Liquidation calculations
    const maintenanceMarginRatio = 0.15; // 15% maintenance margin
    const liquidationPrice = side === "YES"
        ? price * (1 - (1 / leverageMultiplier) + maintenanceMarginRatio)
        : price * (1 + (1 / leverageMultiplier) - maintenanceMarginRatio);

    // Health factor (>1 is safe, <1 is liquidation)
    const currentValue = potentialShares * price;
    const healthFactor = leverageMultiplier > 1
        ? (currentValue - borrowedAmount) / (borrowedAmount * maintenanceMarginRatio)
        : 999;

    // Hourly interest (0.01% per hour for borrowed funds)
    const hourlyInterest = (borrowedAmount * 0.0001);
    const dailyInterest = hourlyInterest * 24;

    const color = side === "YES" ? "text-[#059669]" : "text-[#dc2626]";
    const bgColor = side === "YES" ? "bg-[#059669]" : "bg-[#dc2626]";
    const borderColor = side === "YES" ? "border-[#059669]" : "border-[#dc2626]";

    // Listen for URL changes
    useEffect(() => {
        const paramSide = searchParams.get("side");
        if (paramSide === "YES" || paramSide === "NO") {
            setSide(paramSide);
        }
    }, [searchParams]);

    const handleTrade = () => {
        if (!amount) return;
        const success = placeBet(marketId, marketTitle, side, actualAmount, price, leverageMultiplier);
        if (success) {
            setAmount("");
            setLimitPrice("");
        }
    };

    // Health factor color
    const getHealthColor = () => {
        if (healthFactor >= 2) return "text-[#059669]";
        if (healthFactor >= 1.5) return "text-yellow-500";
        if (healthFactor >= 1.2) return "text-orange-500";
        return "text-[#dc2626]";
    };

    return (
        <div className="flex flex-col h-full">
            {/* Order Type Toggle */}
            <div className="flex gap-4 border-b border-[#27272a] mb-4 pb-2">
                <button onClick={() => setOrderType("MARKET")} className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-all ${orderType === "MARKET" ? "text-white border-white" : "text-gray-500 border-transparent hover:text-gray-300"}`}>
                    Market
                </button>
                <button onClick={() => setOrderType("LIMIT")} className={`text-xs font-bold uppercase tracking-wider pb-2 border-b-2 transition-all ${orderType === "LIMIT" ? "text-white border-white" : "text-gray-500 border-transparent hover:text-gray-300"}`}>
                    Limit
                </button>
            </div>

            {/* Outcome Toggle */}
            <div className="grid grid-cols-2 p-1 rounded bg-[#0a0a0c] border border-[#27272a] mb-6">
                <button onClick={() => setSide("YES")} className={`py-3 text-sm font-bold uppercase rounded-sm transition-all flex flex-col items-center ${side === "YES" ? "bg-[#059669] text-white shadow-lg" : "text-gray-500 hover:text-white"}`}>
                    Buy Yes <span className={`text-xs font-mono opacity-80 ${side === "YES" ? "text-white" : "text-[#059669]"}`}>62¢</span>
                </button>
                <button onClick={() => setSide("NO")} className={`py-3 text-sm font-bold uppercase rounded-sm transition-all flex flex-col items-center ${side === "NO" ? "bg-[#dc2626] text-white shadow-lg" : "text-gray-500 hover:text-white"}`}>
                    Buy No <span className={`text-xs font-mono opacity-80 ${side === "NO" ? "text-white" : "text-[#dc2626]"}`}>38¢</span>
                </button>
            </div>

            {/* Amount Input */}
            <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[11px] text-gray-500 font-bold uppercase tracking-wide">
                    <span>Collateral (USDC)</span>
                    <span className={`flex items-center gap-1 font-mono ${balance < actualAmount ? "text-red-500" : "text-gray-400"}`}>
                        <Wallet className="w-3 h-3" /> ${balance.toFixed(2)}
                    </span>
                </div>
                <div className="relative group transition-all duration-300">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-lg">$</span>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className={`w-full bg-[#0a0a0c] border rounded-sm py-4 pl-8 pr-4 text-2xl font-mono text-white focus:outline-none transition-colors placeholder:text-[#222] ${amount ? borderColor : "border-[#27272a] focus:border-gray-500"}`} placeholder="0.00" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                        <button onClick={() => setAmount(balance.toString())} className="px-2 py-1 bg-[#1a1a1a] rounded text-[10px] text-gray-400 hover:text-white border border-[#333]">Max</button>
                    </div>
                </div>
            </div>

            {/* Limit Price (if LIMIT order) */}
            {orderType === "LIMIT" && (
                <div className="space-y-2 mb-6 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex justify-between text-[11px] text-gray-500 font-bold uppercase tracking-wide">
                        <span>Limit Price</span>
                        <span className="text-gray-600">Market: ${basePrice.toFixed(2)}</span>
                    </div>
                    <div className="relative">
                        <input type="number" value={limitPrice} onChange={(e) => setLimitPrice(e.target.value)} step="0.01" className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-sm py-3 px-4 text-white font-mono focus:border-white focus:outline-none" placeholder={basePrice.toFixed(2)} />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">USDC</span>
                    </div>
                </div>
            )}

            {/* Leverage Slider */}
            <div className="mb-6 p-4 bg-[#121212] rounded border border-[#27272a]">
                <div className="flex justify-between mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        Leverage <Info className="w-3 h-3" />
                    </span>
                    <span className={`text-xs font-mono font-bold ${leverageMultiplier > 5 ? "text-orange-500" : leverageMultiplier > 1 ? "text-yellow-500" : "text-gray-400"}`}>{leverageMultiplier}x</span>
                </div>
                <Slider value={leverage} onValueChange={setLeverage} max={10} min={1} step={1} className="my-3" />

                {leverageMultiplier > 1 && actualAmount > 0 && (
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Buying Power</span>
                            <span className="text-white font-mono font-bold">${buyingPower.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Borrowed</span>
                            <span className="text-orange-400 font-mono">${borrowedAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Daily Interest</span>
                            <span className="text-gray-400 font-mono">${dailyInterest.toFixed(2)}</span>
                        </div>
                        <div className="bg-[#1a1a1a] p-2 rounded flex justify-between items-center border border-[#dc2626]/30">
                            <span className="text-[10px] text-gray-500">Liq. Price</span>
                            <span className="text-[#dc2626] font-mono font-bold text-sm">${liquidationPrice.toFixed(2)}</span>
                        </div>
                        <div className="bg-[#1a1a1a] p-2 rounded flex justify-between items-center">
                            <span className="text-[10px] text-gray-500">Health Factor</span>
                            <span className={`${getHealthColor()} font-mono font-bold text-sm`}>{healthFactor.toFixed(2)}</span>
                        </div>
                        {healthFactor < 1.5 && (
                            <div className="bg-orange-500/10 border border-orange-500/30 p-2 rounded">
                                <p className="text-orange-400 text-[10px] font-bold">⚠️ LIQUIDATION RISK HIGH</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Yield Boost Toggle */}
            <div className="mb-6 p-3 bg-[#121212] rounded border border-[#27272a] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="yield-boost" checked={yieldBoost} onChange={(e) => setYieldBoost(e.target.checked)} className="w-4 h-4 rounded border-gray-600 text-[#FF5500] focus:ring-[#FF5500]" />
                    <label htmlFor="yield-boost" className="text-xs font-bold text-gray-300 cursor-pointer">Auto-Compound to Vault</label>
                </div>
                {yieldBoost && <span className="text-[10px] text-[#059669]">+5.2% APY</span>}
            </div>

            {/* Order Summary */}
            <div className="mt-auto space-y-3 pt-6 border-t border-[#1a1a1a]">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Est. Shares</span>
                    <span className="text-white font-mono">{potentialShares.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                    <span>Potential ROI</span>
                    <span className={`${color} font-mono font-bold`}>+{roi.toFixed(2)}%</span>
                </div>

                <Button onClick={handleTrade} disabled={!amount || actualAmount <= 0 || actualAmount > balance} className={`w-full py-6 mt-2 text-white text-lg font-bold uppercase rounded-sm tracking-widest shadow-lg transition-all ${!amount || actualAmount <= 0 || actualAmount > balance ? "bg-[#1a1a1a] text-gray-600 cursor-not-allowed" : `${bgColor} hover:brightness-110`}`}>
                    {orderType === "LIMIT" ? `Place Limit ${side}` : `Buy ${side}`} {leverageMultiplier > 1 && `${leverageMultiplier}x`}
                </Button>
                <div className="flex justify-center gap-4 text-[10px] text-gray-600 font-mono">
                    <span>Fees: $0.00</span>
                    <span>Slippage: &lt;0.1%</span>
                </div>
            </div>
        </div>
    );
};

export default TradeForm;
