import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, ArrowDownRight, Activity, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
    { user: "0x8a...42", action: "BUY_YES", market: "Bitcoin > $100k", amount: "$5,000", time: "2s ago", type: "buy" },
    { user: "Whale_01", action: "SELL_NO", market: "Fed Rate Cut", amount: "$12,400", time: "5s ago", type: "sell" },
    { user: "Degen.eth", action: "BUY_NO", market: "Super Bowl: Chiefs", amount: "$500", time: "12s ago", type: "buy" },
    { user: "0x2b...99", action: "BUY_YES", market: "SpaceX Launch", amount: "$2,100", time: "45s ago", type: "buy" },
    { user: "TraderJoe", action: "SELL_YES", market: "ETH > $4k", amount: "$8,000", time: "1m ago", type: "sell" },
    { user: "Polymarket", action: "BUY_YES", market: "US Acquisition", amount: "$150", time: "1m ago", type: "buy" },
    { user: "Vitalik.eth", action: "BUY_YES", market: "Eth Upgrade", amount: "$50,000", time: "2m ago", type: "buy" },
    { user: "0x99...11", action: "BUY_NO", market: "Taylor Swift", amount: "$10", time: "3m ago", type: "buy" },
    { user: "Satoshi", action: "BUY_YES", market: "BTC > 1M", amount: "$1,000,000", time: "5m ago", type: "buy" },
];

const LiveActivitySidebar = () => {
    return (
        <div className="hidden xl:flex flex-col w-80 shrink-0 border-l border-[#222] bg-[#050505] h-[calc(100vh-120px)] sticky top-[120px] selection:bg-orange-500/20 selection:text-white">
            <div className="p-6 border-b border-[#222] flex items-center justify-between bg-[#111]/30">
                <h3 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.3em] flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-orange-500" />
                    Activity_Log
                </h3>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-[8px] font-mono text-gray-600 uppercase">Live</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-1">
                {activities.map((item, i) => (
                    <Link to={`/profile/${item.user}`} key={i} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 block text-left">
                        <Avatar className="w-9 h-9 rounded-lg border border-[#222] group-hover:border-orange-500/30 transition-colors bg-[#111]">
                            <AvatarImage src={`https://api.dicebear.com/7.x/identicon/svg?seed=${item.user}`} className="transition-all opacity-80" />
                            <AvatarFallback className="bg-[#111] text-[10px] font-mono text-gray-600">ID</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-mono font-bold text-gray-400 truncate group-hover:text-orange-500 transition-colors uppercase tracking-tight">{item.user}</span>
                                <span className="text-[8px] text-gray-600 font-mono tracking-tighter uppercase">{item.time}</span>
                            </div>
                            <p className="text-[10px] text-gray-500 mb-2 truncate font-mono uppercase">
                                <span className={item.type === 'buy' ? 'text-emerald-500/80' : 'text-red-500/80'}>{item.action}</span>
                                <span className="mx-1 text-gray-700">➜</span>
                                <span className="text-gray-400 group-hover:text-white transition-colors">{item.market}</span>
                            </p>
                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-bold font-mono ${item.type === 'buy' ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {item.amount}
                                </span>
                                <Activity className={`w-2.5 h-2.5 ${item.type === 'buy' ? 'text-emerald-500/30' : 'text-red-500/30'}`} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="p-6 border-t border-[#222] bg-[#111]/20">
                <button className="w-full py-2.5 bg-[#050505] hover:bg-white/5 text-[9px] font-mono font-bold text-gray-500 hover:text-white uppercase tracking-widest rounded-lg transition-all border border-[#222] hover:border-orange-500/30 text-center">
                    FULL_STREAM_SCAN
                </button>
            </div>
        </div>
    );
};

export default LiveActivitySidebar;

