import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, AreaChart } from "recharts";
import {
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    PieChart,
    Trash2,
    Signal,
    Satellite,
    Command,
    Layers,
    Shield
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const pnlData = [
    { day: "Mon", val: 1000 },
    { day: "Tue", val: 1120 },
    { day: "Wed", val: 1080 },
    { day: "Thu", val: 1300 },
    { day: "Fri", val: 1250 },
    { day: "Sat", val: 1400 },
    { day: "Sun", val: 1550 },
];

const Portfolio = () => {
    const { positions, balance } = useUser();
    const totalValue = positions.reduce((acc, p) => acc + (p.shares * p.price), balance);

    const resetData = () => {
        localStorage.clear();
        toast.info("Clearing memory sequence...");
        setTimeout(() => window.location.reload(), 1000);
    };

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />
            <OmniSubnav />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase text-orange-500/80">
                            Operator ID: 0xFF...E9A2
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                            Portfolio <span className="text-gray-500">Telemetry</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Full-spectrum analysis of active positions and capital allocation. Performance metrics synchronized with the global reputation protocol.
                        </p>
                    </div>
                    <button
                        onClick={resetData}
                        className="px-6 py-3 border border-red-900/30 bg-red-900/5 hover:bg-red-500 hover:text-white transition-all rounded text-[10px] font-mono tracking-widest uppercase text-red-500 flex items-center gap-2"
                    >
                        <Command className="w-3 h-3" /> WIPE SESSION CACHE
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {/* Primary Capital Stats */}
                    <div className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden flex flex-col justify-between group">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-12">
                                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Aggregate Exposure</div>
                                <Shield className="w-4 h-4 text-orange-500" />
                            </div>
                            <div className="text-5xl font-bold text-white tracking-tighter mb-4">${totalValue.toFixed(2)}</div>
                            <div className="inline-flex items-center gap-2 text-emerald-500 text-[10px] font-mono uppercase bg-emerald-500/5 px-2 py-0.5 rounded">
                                <Signal className="w-3 h-3" /> +4.2% PERFORMANCE DELTA
                            </div>
                        </div>
                        <div className="p-8 border-t border-[#222] bg-[#111]/30">
                            <div className="flex justify-between text-[10px] font-mono uppercase mb-4">
                                <span className="text-gray-600">Liquid Reserves</span>
                                <span className="text-white">${balance.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono uppercase">
                                <span className="text-gray-600">Avg Protocol Yield</span>
                                <span className="text-orange-500">4.2% APY</span>
                            </div>
                        </div>
                    </div>

                    {/* Chart Performance */}
                    <div className="bg-[#0a0a0a] border border-[#222] rounded-xl p-8 col-span-1 lg:col-span-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">7D Historical Path</div>
                        </div>

                        <div className="h-[240px] mt-12">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={pnlData}>
                                    <defs>
                                        <linearGradient id="colorPnL" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF5500" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#FF5500" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#050505', border: '1px solid #222', borderRadius: '4px', fontSize: '10px', fontFamily: 'monospace' }}
                                        itemStyle={{ color: '#FF5500' }}
                                        cursor={{ stroke: '#222', strokeWidth: 1 }}
                                    />
                                    <Area type="monotone" dataKey="val" stroke="#FF5500" strokeWidth={2} fillOpacity={1} fill="url(#colorPnL)" dot={{ r: 2, fill: '#FF5500' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Positions Tracking */}
                <div className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden min-h-[400px]">
                    <div className="p-8 border-b border-[#222] flex justify-between items-center bg-[#111]/50">
                        <div className="flex items-center gap-3">
                            <Layers className="w-4 h-4 text-orange-500" />
                            <h2 className="text-sm font-mono text-white uppercase tracking-widest">Active Signal Paths</h2>
                        </div>
                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{positions.length} DEPLOYED TOKENS</div>
                    </div>

                    {positions.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <Satellite className="w-12 h-12 text-gray-800 mb-6" />
                            <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em]">No active telemetry detected.</p>
                            <button className="mt-8 text-xs text-orange-500 hover:text-white transition-colors underline font-mono">INITIATE MARKET SCAN</button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#222] bg-[#050505]/50">
                                        <th className="py-6 px-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Market Entity</th>
                                        <th className="py-6 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Position</th>
                                        <th className="py-6 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right">Avg Price</th>
                                        <th className="py-6 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right">Shares</th>
                                        <th className="py-6 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right">Exposure</th>
                                        <th className="py-6 px-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right">Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {positions.map((pos, i) => (
                                        <tr key={i} className="border-b border-[#222]/50 hover:bg-white/5 transition-colors group">
                                            <td className="py-6 px-8">
                                                <div className="text-xs font-bold text-white group-hover:text-orange-500 transition-colors uppercase">{pos.marketTitle}</div>
                                            </td>
                                            <td className="py-6 px-4">
                                                <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-widest font-bold uppercase ${pos.type === 'YES' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                                                    }`}>
                                                    TOKEN_{pos.type}
                                                </span>
                                            </td>
                                            <td className="py-6 px-4 text-right font-mono text-[10px] text-gray-400 group-hover:text-white">${pos.price.toFixed(2)}</td>
                                            <td className="py-6 px-4 text-right font-mono text-[10px] text-gray-200">{pos.shares.toFixed(2)}</td>
                                            <td className="py-6 px-4 text-right font-mono text-xs font-bold text-white">${(pos.shares * pos.price).toFixed(2)}</td>
                                            <td className="py-6 px-8 text-right">
                                                <button className="px-4 py-2 border border-[#222] hover:border-orange-500 bg-[#050505] text-gray-500 hover:text-white transition-all rounded text-[9px] font-mono tracking-widest uppercase">
                                                    MANAGE_ENTITY
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer Logistics */}
                <div className="mt-20 p-8 border border-white/5 bg-white/2 rounded-xl flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="flex gap-12">
                        <div>
                            <div className="text-[9px] font-mono text-gray-600 uppercase mb-2">Sync Status</div>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="text-[10px] font-mono text-white uppercase tracking-widest">REALTIME_CONNECTED</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[9px] font-mono text-gray-600 uppercase mb-2">Hashing Speed</div>
                            <div className="text-[10px] font-mono text-white uppercase tracking-widest">12.4 GH/s</div>
                        </div>
                    </div>
                    <p className="text-[9px] text-gray-500 font-mono uppercase max-w-sm text-center md:text-right leading-relaxed">
                        Assets are protected by multi-sig consensus. All performance data is derived from the OmniSight Resolution Layer.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;

