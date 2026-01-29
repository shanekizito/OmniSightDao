import OmniNavbar from "@/components/OmniNavbar";
import {
    User,
    TrendingUp,
    Trophy,
    Target,
    Wallet,
    BarChart3,
    Signal,
    ScanFace,
    Activity,
    Shield,
    Command,
    Cpu,
    Database,
    Award,
    Crosshair,
    Radio,
    Satellite,
    LayoutGrid,
    Waves
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const { balance, stakedBalance, reputation, positions, walletAddress, isWalletConnected } = useUser();

    const totalInvested = positions.reduce((sum, pos) => sum + (pos.shares * pos.price), 0);
    const totalPnL = positions.reduce((sum, pos) => sum + pos.pnl, 0);
    const winRate = positions.length > 0 ? ((positions.filter(p => p.pnl > 0).length / positions.length) * 100).toFixed(1) : "0.0";

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                {/* Operator Telemetry Header */}
                <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-10 mb-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-2xl border border-[#222] p-2 bg-[#111] group-hover:border-orange-500/30 transition-all flex items-center justify-center">
                                <ScanFace className="w-16 h-16 text-gray-700 group-hover:text-orange-500 transition-colors" />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-[#059669] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full border-2 border-[#050505] shadow-xl">
                                LVL_72
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[9px] font-mono tracking-widest uppercase">
                                <Cpu className="w-3 h-3 text-orange-500" /> Neural_Stream_Online
                            </div>
                            <h1 className="text-4xl font-bold text-white tracking-tight uppercase mb-4">Operator Dashboard</h1>
                            {isWalletConnected ? (
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                        <span className="text-white">{walletAddress}</span>
                                    </div>
                                    <span className="text-gray-800">|</span>
                                    <span>Initialized: Epoch_0x2024</span>
                                </div>
                            ) : (
                                <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">Awaiting Identity Verification...</p>
                            )}
                        </div>

                        <Link to="/portfolio" className="px-10 py-5 bg-white hover:bg-orange-500 hover:text-white text-black font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-2xl shadow-white/5">
                            PORTFOLIO_HUB
                        </Link>
                    </div>
                </div>

                {/* Logistics Meter Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "NET_BALANCE", val: `$${balance.toFixed(2)}`, sub: "Liquidity_Available", icon: Command, color: "orange" },
                        { label: "YIELD_STAKED", val: `$${stakedBalance.toFixed(2)}`, sub: "+27.4% APY_LIVE", icon: Signal, color: "emerald" },
                        { label: "REP_INDEX", val: reputation.toFixed(1), sub: "Juror_Authority_04", icon: Award, color: "purple" },
                        { label: "SIG_ACCURACY", val: `${winRate}%`, sub: `${positions.length} Resolved_Signals`, icon: Target, color: "blue" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 hover:border-orange-500/30 transition-all group overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                <stat.icon className="w-16 h-16" />
                            </div>
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                            <div className="text-3xl font-mono font-bold text-white mb-2">{stat.val}</div>
                            <div className={`text-[9px] font-mono font-bold uppercase tracking-wider ${stat.color === 'emerald' ? 'text-emerald-500' : 'text-gray-500'
                                }`}>{stat.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Content Stream */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Signal Stream */}
                    <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                        <div className="px-8 py-6 border-b border-[#222] bg-[#111]/30 flex items-center justify-between">
                            <h3 className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.3em] flex items-center gap-3">
                                <Signal className="w-4 h-4 text-orange-500" />
                                Active_Signals ({positions.length})
                            </h3>
                            <div className="text-[8px] font-mono text-gray-600">STREAMING</div>
                        </div>
                        <div className="p-8 flex-1">
                            {positions.length === 0 ? (
                                <div className="text-center py-20">
                                    <div className="w-16 h-16 bg-white/[0.02] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Waves className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em] mb-6">No localized data detected</p>
                                    <Link to="/" className="text-orange-500 hover:text-white transition-colors text-[10px] font-mono font-bold uppercase tracking-widest border border-orange-500/20 px-6 py-3 rounded-lg">
                                        RESTORE_FEED
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {positions.slice(0, 5).map((pos, i) => (
                                        <div key={i} className="flex items-center justify-between p-5 bg-white/[0.02] rounded-xl border border-white/5 hover:border-orange-500/30 transition-all group">
                                            <div>
                                                <div className="text-[11px] font-mono font-bold text-white mb-2 uppercase group-hover:text-orange-500 transition-colors">{pos.marketTitle}</div>
                                                <div className="flex items-center gap-3">
                                                    <span className={`text-[9px] font-mono font-bold uppercase tracking-tighter px-2 py-0.5 rounded ${pos.type === "YES" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                                                        }`}>
                                                        {pos.type}_SIGNAL
                                                    </span>
                                                    <span className="text-[9px] font-mono text-gray-600 uppercase">{pos.shares.toFixed(0)} UNITS</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[11px] font-mono font-bold text-white mb-1 uppercase">${(pos.shares * pos.price).toFixed(0)} VAL</div>
                                                <div className={`text-[10px] font-mono font-bold ${pos.pnl >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                                                    {pos.pnl >= 0 ? "+" : ""}{pos.pnl.toFixed(2)}% DELTA
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Meta Performance */}
                    <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                        <div className="px-8 py-6 border-b border-[#222] bg-[#111]/30 flex items-center justify-between">
                            <h3 className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.3em] flex items-center gap-3">
                                <LayoutGrid className="w-4 h-4 text-emerald-500" />
                                Meta_Logistics
                            </h3>
                            <div className="text-[8px] font-mono text-gray-600">COMPILED_AT_EPOCH</div>
                        </div>
                        <div className="p-8 space-y-4 flex-1">
                            {[
                                { label: "TOTAL_INVESTED", val: `$${totalInvested.toFixed(2)}`, icon: Wallet },
                                { label: "NET_DELTA_LOG", val: `${totalPnL >= 0 ? "+" : ""}$${totalPnL.toFixed(2)}`, trend: totalPnL >= 0 ? "up" : "down" },
                                { label: "NODES_DEPLOYED", val: positions.length },
                                { label: "PEAK_CONVERGENCE", val: `+${Math.max(...positions.map(p => p.pnl), 0).toFixed(2)}%`, trend: "up" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-6 bg-white/[0.02] rounded-xl border border-white/5">
                                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{item.label}</span>
                                    <span className={`text-lg font-mono font-bold uppercase ${item.trend === 'up' ? 'text-emerald-500' : item.trend === 'down' ? 'text-red-500' : 'text-white'
                                        }`}>
                                        {item.val}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 border-t border-white/5 bg-[#050505]">
                            <p className="text-[9px] text-gray-700 font-mono uppercase tracking-widest leading-relaxed text-center">
                                Telemetry logs are synthesized across all connected forecasting nodes. Verification ID: {Math.random().toString(36).substring(7).toUpperCase()}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyProfile;

