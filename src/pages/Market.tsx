import OmniNavbar from "@/components/OmniNavbar";
import PriceChart from "@/components/PriceChart";
import TradeForm from "@/components/TradeForm";
import TopHolders from "@/components/TopHolders";
import CommentsSection from "@/components/CommentsSection";
import MarketContext from "@/components/MarketContext";
import OrderBook from "@/components/OrderBook";
import { useParams } from "react-router-dom";
import {
    ArrowLeft,
    Clock,
    BarChart2,
    Share2,
    User,
    Signal,
    Shield,
    Command,
    Zap,
    Compass,
    Target,
    Box,
    Unlink,
    Waves,
    Satellite
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { getMarketById } from "@/data/markets";

const Market = () => {
    const { id } = useParams();
    const [activeChartTab, setActiveChartTab] = useState("CHART");
    const [activeInfoTab, setActiveInfoTab] = useState("COMMENTS");

    const { positions } = useUser();
    const market = getMarketById(id || "1");

    if (!market) {
        return (
            <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col">
                <OmniNavbar />
                <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Entity Not Detected</h1>
                        <Link to="/" className="text-orange-500 hover:underline font-mono text-xs tracking-widest uppercase">← RESTORE_STREAM</Link>
                    </div>
                </main>
            </div>
        );
    }

    const marketPositions = positions.filter(p => p.marketId == id);

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />

            <main className="flex-1 w-full max-w-[1920px] mx-auto px-6 py-6 relative z-10">
                {/* Protocol Header */}
                <div className="mb-8 flex justify-between items-center bg-[#0a0a0a] border border-[#222] p-4 rounded-xl">
                    <Link to="/" className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-[10px] font-mono font-bold uppercase tracking-widest group">
                        <div className="p-1.5 border border-[#222] group-hover:border-orange-500/50 rounded transition-colors">
                            <Compass className="w-3 h-3" />
                        </div>
                        Back to Stream
                    </Link>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-4 px-4 py-1.5 border-r border-[#222]">
                            <div className="text-[9px] font-mono text-gray-600 uppercase">Latency</div>
                            <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">14ms</div>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* LEFT: Main Content (Chart + Context) */}
                    <div className="lg:col-span-9 flex flex-col gap-6">

                        {/* Market Telemetry Hero */}
                        <div className="flex items-center gap-8 p-10 bg-[#0a0a0a] border border-[#222] rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.03] to-transparent" />
                            <div className="w-20 h-20 bg-[#111] border border-[#222] rounded-xl p-3 shrink-0 flex items-center justify-center relative z-10">
                                <img src={market.icon} className="w-full h-full object-contain transition-all opacity-80" />
                            </div>
                            <div className="relative z-10 flex-1">
                                <div className="text-[10px] font-mono text-orange-500/80 uppercase tracking-[0.3em] mb-3">Live Forecasting Node</div>
                                <h1 className="text-4xl font-bold text-white tracking-tight uppercase mb-4">{market.title}</h1>
                                <div className="flex items-center gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-1">Expiration</span>
                                        <span className="text-xs font-mono text-white uppercase">{market.endDate}</span>
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/5" />
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-1">Volume</span>
                                        <span className="text-xs font-mono text-white uppercase">${market.volume}</span>
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/5" />
                                    <div className="flex items-center gap-3">
                                        <div className="px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[9px] font-mono text-emerald-500 uppercase font-bold">Consensus Finalization Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Primary Visualization Tabbed Interface */}
                        <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl flex flex-col overflow-hidden min-h-[600px]">
                            <div className="border-b border-[#222] px-8 flex justify-between items-center bg-[#050505]/50">
                                <div className="flex gap-10">
                                    <button
                                        onClick={() => setActiveChartTab("CHART")}
                                        className={`py-5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${activeChartTab === "CHART" ? "text-orange-500 border-orange-500" : "text-gray-600 border-transparent hover:text-gray-400"
                                            }`}
                                    >
                                        Price_Path
                                    </button>
                                    <button
                                        onClick={() => setActiveChartTab("DEPTH")}
                                        className={`py-5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${activeChartTab === "DEPTH" ? "text-orange-500 border-orange-500" : "text-gray-600 border-transparent hover:text-gray-400"
                                            }`}
                                    >
                                        Order_Flow
                                    </button>
                                </div>
                                <div className="flex gap-3">
                                    {activeChartTab === "CHART" && ["5M", "1H", "1D", "1W", "ALL"].map(t => (
                                        <button key={t} className="px-3 py-1 text-[9px] font-mono font-bold text-gray-600 hover:text-white rounded border border-transparent hover:border-[#222] transition-all">{t}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 relative p-8">
                                {activeChartTab === "CHART" ? (
                                    <>
                                        <div className="absolute top-8 left-8 flex gap-12 z-20 pointer-events-none">
                                            <div className="space-y-1">
                                                <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Convergence YES</div>
                                                <div className="text-4xl font-mono font-bold text-emerald-500">{(market.chance / 100).toFixed(2)}<span className="text-xl ml-1">¢</span></div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Convergence NO</div>
                                                <div className="text-4xl font-mono font-bold text-red-500">{((100 - market.chance) / 100).toFixed(2)}<span className="text-xl ml-1">¢</span></div>
                                            </div>
                                        </div>
                                        <div className="w-full h-[450px]">
                                            <PriceChart />
                                        </div>
                                    </>
                                ) : (
                                    <OrderBook />
                                )}
                            </div>
                        </div>

                        {/* Information telemetry */}
                        <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden">
                            <div className="flex px-8 border-b border-[#222] bg-[#050505]/50 overflow-x-auto no-scrollbar">
                                {[
                                    { id: "COMMENTS", label: "DISCOURSE", count: 487 },
                                    { id: "HOLDERS", label: "HOLDERS", count: null },
                                    { id: "RULES", label: "CONDITIONS", count: null },
                                    { id: "ACTIVITY", label: "LOG_STREAM", count: null }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveInfoTab(tab.id)}
                                        className={`py-5 px-6 text-[10px] font-mono font-bold tracking-widest transition-all whitespace-nowrap border-b-2 ${activeInfoTab === tab.id ? "text-orange-500 border-orange-500" : "text-gray-600 border-transparent hover:text-gray-400"
                                            }`}
                                    >
                                        {tab.label} {tab.count && <span className="ml-2 text-[8px] opacity-40">[{tab.count}]</span>}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 min-h-[400px]">
                                {activeInfoTab === "COMMENTS" && <CommentsSection />}
                                {activeInfoTab === "HOLDERS" && <TopHolders />}
                                {activeInfoTab === "RULES" && <MarketContext market={market} />}
                                {activeInfoTab === "ACTIVITY" && (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <Waves className="w-12 h-12 text-gray-800 mb-6" />
                                        <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">Stream initializing...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Trade Form & Positions */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-6 ring-1 ring-orange-500/10">
                            <TradeForm marketTitle={market.title} marketId={id || "1"} />
                        </div>

                        <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-[#222] bg-[#050505]/50 flex items-center justify-between">
                                <h3 className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                    <Target className="w-3 h-3 text-orange-500" /> Operator Status
                                </h3>
                                <div className="text-[8px] font-mono text-gray-600">SYNCED</div>
                            </div>
                            <div className="p-6">
                                {marketPositions.length === 0 ? (
                                    <div className="flex flex-col items-center py-12 text-center">
                                        <Box className="w-8 h-8 text-gray-800 mb-4" />
                                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">No active telemetry detected</p>
                                    </div>
                                ) : (
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-[8px] font-mono text-gray-600 uppercase tracking-widest border-b border-[#222]">
                                                <th className="pb-3 px-1">Signal</th>
                                                <th className="pb-3 text-right">Shares</th>
                                                <th className="pb-3 text-right">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[10px] font-mono">
                                            {marketPositions.map((pos, i) => (
                                                <tr key={i} className="border-b border-[#222]/50 last:border-0 hover:bg-white/5 transition-colors">
                                                    <td className={`py-4 px-1 font-bold ${pos.type === "YES" ? "text-emerald-500" : "text-red-500"}`}>
                                                        _{pos.type}
                                                    </td>
                                                    <td className="py-4 text-right text-white uppercase">{pos.shares.toFixed(0)}</td>
                                                    <td className="py-4 text-right text-gray-500 font-bold">${(pos.shares * pos.price).toFixed(0)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Market;

