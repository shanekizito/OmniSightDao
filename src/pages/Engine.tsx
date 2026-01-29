import OmniNavbar from "@/components/OmniNavbar";
import {
    Dna,
    Cpu,
    Waves,
    Box,
    Zap,
    Signal,
    Command,
    Shield,
    Satellite
} from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const performanceData = [
    { time: "00:00", accuracy: 98.2 },
    { time: "04:00", accuracy: 97.9 },
    { time: "08:00", accuracy: 98.5 },
    { time: "12:00", accuracy: 99.1 },
    { time: "16:00", accuracy: 99.4 },
    { time: "20:00", accuracy: 98.8 },
    { time: "24:00", accuracy: 99.0 },
];

const Engine = () => {
    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-orange-500 text-[9px] font-mono tracking-[0.3em] uppercase animate-pulse">
                            <Signal className="w-3 h-3" /> Core_Resolution_Stream: ACTIVE
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Omni Oracle</span>
                            <br />Neural Engine
                        </h1>
                        <p className="text-lg text-gray-500 font-mono uppercase leading-relaxed tracking-tight max-w-2xl">
                            A high-fidelity neuro-symbolic processing layer resolving global prediction streams in sub-second intervals. Secured by the UMA optimistic resolution protocol.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
                        <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl text-center min-w-[200px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.02] to-transparent" />
                            <div className="text-gray-600 text-[9px] font-mono font-bold uppercase mb-3 tracking-widest relative z-10">Active_Nodes</div>
                            <div className="text-4xl font-mono font-bold text-white relative z-10">4.29k</div>
                            <div className="mt-4 text-[8px] font-mono text-emerald-500/50 uppercase relative z-10">SYST_HEALTH: 100%</div>
                        </div>
                        <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl text-center min-w-[200px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] to-transparent" />
                            <div className="text-gray-600 text-[9px] font-mono font-bold uppercase mb-3 tracking-widest relative z-10">Latency_V2</div>
                            <div className="text-4xl font-mono font-bold text-emerald-500 relative z-10">14ms</div>
                            <div className="mt-4 text-[8px] font-mono text-gray-700 uppercase relative z-10">OP_CODE: 0xFD2</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Primary Visualization Area */}
                    <div className="lg:col-span-8 bg-[#0a0a0a] border border-[#222] rounded-2xl p-10 shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                            <Dna className="w-64 h-64 text-white" />
                        </div>
                        <div className="flex items-center justify-between mb-10 relative z-10">
                            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] flex items-center gap-3">
                                <Command className="w-4 h-4 text-orange-500" />
                                Accuracy_Convergence_Log
                            </h3>
                            <div className="flex gap-4">
                                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono font-bold text-gray-500 uppercase">24H_STREAM</div>
                            </div>
                        </div>
                        <div className="h-[450px] w-full relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={performanceData}>
                                    <defs>
                                        <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF5500" stopOpacity={0.15} />
                                            <stop offset="95%" stopColor="#FF5500" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a1a1a" />
                                    <XAxis dataKey="time" stroke="#333" tick={{ fill: '#555', fontSize: 10, fontFamily: 'monospace' }} tickLine={false} axisLine={false} dy={20} />
                                    <YAxis domain={[97, 100]} stroke="#333" tick={{ fill: '#555', fontSize: 10, fontFamily: 'monospace' }} tickLine={false} axisLine={false} dx={-10} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#050505', borderColor: '#222', borderRadius: '12px', padding: '12px' }}
                                        labelStyle={{ color: '#555', fontFamily: 'monospace', fontSize: '10px', marginBottom: '8px' }}
                                        itemStyle={{ color: '#FF5500', fontFamily: 'monospace', fontSize: '12px', fontWeight: 'bold' }}
                                    />
                                    <Area type="monotone" dataKey="accuracy" stroke="#FF5500" strokeWidth={3} fillOpacity={1} fill="url(#colorAccuracy)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Secondary Telemetry Grid */}
                    <div className="lg:col-span-4 space-y-6">
                        {[
                            { label: "NET_COMPUTE_POWER", val: "12.5 PFlops", sub: "DIST_14_NETWORKS", icon: Cpu, color: "white" },
                            { label: "ORACLE_INGESTION", val: "140+ SOURCE_APIS", sub: "BLOOMBERG_LINKED", icon: Waves, color: "emerald-500" },
                            { label: "DAO_SECURITY_BOND", val: "$50.4M USDC", sub: "TREASURY_BACKED", icon: Box, color: "orange-500" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 relative overflow-hidden group hover:border-orange-500/20 transition-all shadow-xl">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-all">
                                    <stat.icon className="w-20 h-20" />
                                </div>
                                <h4 className="text-gray-600 text-[10px] font-mono font-bold uppercase mb-4 tracking-widest">{stat.label}</h4>
                                <div className="text-2xl font-mono font-bold text-white mb-4 uppercase">{stat.val}</div>
                                <div className="inline-flex items-center gap-2 text-[9px] font-mono text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase">
                                    <Satellite className="w-3 h-3 text-orange-500" /> {stat.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 p-10 border border-white/5 bg-white/[0.01] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex gap-16">
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Protocol Version</div>
                            <div className="text-[12px] font-mono font-bold text-white uppercase">OMNI_CORE_V4.2.1-STABLE</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Verification Hash</div>
                            <div className="text-[12px] font-mono font-bold text-orange-500 uppercase">SHA-256_0x9B2C...F5A</div>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-600 font-mono uppercase max-w-md text-center md:text-right leading-relaxed tracking-tight">
                        Node operators are rewarded based on resolution fidelity and response latency. All computations are verifiable on-chain via the Omni Resolution Layer.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Engine;

