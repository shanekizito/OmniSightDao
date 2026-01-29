import { Search, Menu, Bell, LogOut, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import { NotificationCenter } from "@/components/NotificationCenter";
import { useState, useEffect } from "react";

const OmniNavbar = () => {
    const { isWalletConnected, walletAddress, connectWallet, disconnectWallet } = useUser();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`flex items-center justify-between px-6 py-2 border-b text-white transition-all duration-300 ${isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-cyan-500/30 shadow-lg shadow-cyan-500/10'
            : 'bg-[#0a0a0a] border-[#2a2a2a]'
            }`}>
            <div className="flex items-center gap-2 flex-1">
                <Link to="/" className="flex items-center group -ml-10">
                    <div className="w-[100px] h-[100px] -my-4 relative flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                        <img src="/logo.png" alt="OmniSight Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xl font-display font-semibold tracking-tight leading-none -ml-7 relative z-10 -mt-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400">mni</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#FF8F6B] via-[#FF5500] to-[#e04b00]">sight</span>
                    </span>
                </Link>

                <div className="hidden xl:flex items-center gap-1 text-sm font-medium">
                    {[
                        { name: 'Propose', path: '/propose' },
                        { name: 'Governance', path: '/governance' },
                        { name: 'Analytics', path: '/analytics' },
                        { name: 'Earn', path: '/earn' },
                        { name: 'Court', path: '/court' },
                        { name: 'Leaderboard', path: '/leaderboard' },
                        { name: 'Portfolio', path: '/portfolio' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-[#FF5500]/10 transition-all duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex flex-1 max-w-xs relative ml-auto mr-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search markets..."
                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-sm py-2 pl-10 pr-4 text-sm text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-gray-500 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Link to="/whitepaper" className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-[#FF5500] hover:bg-[#e04b00] rounded-md transition-all transform hover:scale-105">
                    <FileText className="w-4 h-4" />
                    Whitepaper
                </Link>

                <div className="h-5 w-px bg-[#27272a] hidden md:block mx-2" />

                <div className="flex items-center gap-3">
                    <NotificationCenter />

                    {isWalletConnected ? (
                        <>
                            <Link to="/me" className="flex items-center gap-2 px-3 py-1.5 bg-[#121212] border border-[#27272a] rounded-md hover:border-cyan-500/50 hover:bg-[#1a1a1a] transition-all group">
                                <div className="w-2 h-2 bg-[#059669] rounded-full"></div>
                                <span className="text-sm font-mono text-gray-200">{walletAddress}</span>
                            </Link>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500 hover:bg-red-500/10" onClick={disconnectWallet}>
                                <LogOut className="w-4 h-4" />
                            </Button>
                        </>
                    ) : (
                        <Button className="bg-[#FF5500] hover:bg-[#e04b00] text-white font-semibold rounded-sm tracking-wide px-6" onClick={connectWallet}>
                            Connect Wallet
                        </Button>
                    )}
                </div>

                <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    );
};

export default OmniNavbar;
