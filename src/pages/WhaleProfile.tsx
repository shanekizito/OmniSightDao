import OmniNavbar from "@/components/OmniNavbar";
import { useParams } from "react-router-dom";
import {
    Copy,
    Waves,
    Box,
    Target,
    Command,
    Satellite,
    Shield,
    Signal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const tradeHistory = [
    { market: "Bitcoin > $100k", action: "BUY_YES", amount: "$5,000", price: "0.62", time: "2h ago", roi: "+12%" },
    { market: "Fed Cut March", action: "SELL_NO", amount: "$12,000", price: "0.15", time: "1d ago", roi: "+45%" },
    { market: "NVIDIA Earnings", action: "BUY_YES", amount: "$2,500", price: "0.45", time: "3d ago", roi: "-5%" },
];

const WhaleProfile = () => {
    const { id } = useParams();
    const { copyTrader } = useUser();

    const handleCopy = () => {
        copyTrader(id || "Whale_Alert_0x");
        toast.success("Wallet signature copied to clipboard");
    };

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                {/* Profile Telemetry Header */}
                <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-10 mb-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-2xl border border-[#222] p-2 bg-[#111] group-hover:border-orange-500/30 transition-all">
                                <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${id || 'whale'}`} className="w-full h-full rounded-xl transition-all opacity-80" alt="Identity" />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full border-2 border-[#050505] shadow-xl">
                                RANK_01
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[9px] font-mono tracking-widest uppercase">
                                <Satellite className="w-3 h-3 text-orange-500" /> Authorized Operator
                            </div>
                            <h1 className="text-4xl font-bold text-white tracking-tight uppercase mb-4 flex items-center justify-center lg:justify-start gap-4">
                                {id || "Whale_Alert_0x"}
                                <Shield className="w-5 h-5 text-emerald-500" />
                            </h1>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Box className="w-3.5 h-3.5" /> Risk_Level: 02</span>
                                <span className="flex items-center gap-2"><Waves className="w-3.5 h-3.5" /> Epoch_Start: 2024</span>
                                <span className="flex items-center gap-2 text-white"><Target className="w-3.5 h-3.5 text-orange-500" /> Net_Profit: $1.2M</span>
                            </div>
                        </div>

                        <div className="flex gap-10 py-6 px-10 border-l border-white/5 hidden lg:flex">
                            <div className="text-center">
                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-2 tracking-widest">Win Rate</div>
                                <div className="text-3xl font-mono font-bold text-white uppercase">88.4%</div>
                            </div>
                            <div className="text-center">
                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-2 tracking-widest">30d Delta</div>
                                <div className="text-3xl font-mono font-bold text-emerald-500 uppercase">+452%</div>
                            </div>
                        </div>

                        <Button
                            onClick={handleCopy}
                            className="bg-white hover:bg-orange-500 hover:text-white text-black font-mono text-xs font-bold uppercase tracking-[0.2em] px-10 py-8 rounded-xl transition-all shadow-2xl shadow-white/5 hover:shadow-orange-500/20"
                        >
                            <Copy className="w-4 h-4 mr-2" /> COPY_SIGNATURE
                        </Button>
                    </div>
                </div>

                {/* Trade History Log */}
                <div className="flex items-center gap-3 mb-8 px-4">
                    <Command className="w-4 h-4 text-orange-500" />
                    <h2 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em]">Historical_Execution_Stream</h2>
                </div>

                <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#111]/50 text-[10px] font-mono uppercase text-gray-500 tracking-widest border-b border-[#222]">
                                    <th className="py-6 px-8">Market Entity</th>
                                    <th className="py-6 px-4">Operation</th>
                                    <th className="py-6 px-4 text-right">Exposure</th>
                                    <th className="py-6 px-4 text-right">Avg Entry</th>
                                    <th className="py-6 px-4 text-right">Delta_ROI</th>
                                    <th className="py-6 px-8 text-right">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[11px] font-mono">
                                {tradeHistory.map((trade, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="py-6 px-8 font-bold text-white group-hover:text-orange-500 transition-colors uppercase">{trade.market}</td>
                                        <td className="py-6 px-4">
                                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-tighter ${trade.action.includes("BUY") ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                                                }`}>
                                                {trade.action}
                                            </span>
                                        </td>
                                        <td className="py-6 px-4 text-right text-gray-400 group-hover:text-white transition-colors uppercase">{trade.amount}</td>
                                        <td className="py-6 px-4 text-right text-gray-500">{trade.price}</td>
                                        <td className={`py-6 px-4 text-right font-bold ${trade.roi.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {trade.roi}
                                        </td>
                                        <td className="py-6 px-8 text-right text-gray-600 uppercase tracking-tighter">{trade.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Logistics */}
                <div className="mt-12 p-8 border border-white/5 bg-white/[0.02] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-12">
                        <div className="space-y-1">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Verification Status</div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-3 h-3 text-emerald-500" />
                                <span className="text-[10px] font-mono text-white uppercase">FULLY_VETTED</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Reputation Rank</div>
                            <div className="text-[10px] font-mono text-orange-500 uppercase">Top 0.01% Global</div>
                        </div>
                    </div>
                    <p className="text-[9px] text-gray-600 font-mono uppercase max-w-sm text-center md:text-right leading-relaxed">
                        Signal metrics are calculated based on historical resolution accuracy. Performance data is cryptographically signed by the resolution layer.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default WhaleProfile;

