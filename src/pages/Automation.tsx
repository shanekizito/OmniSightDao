import OmniNavbar from "@/components/OmniNavbar";
import {
    Cpu,
    Zap,
    Workflow,
    Activity,
    Terminal,
    Network,
    Code,
    Settings,
    Binary,
    Waves,
    Box,
    Radio,
    Compass,
    Unlink,
    Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Automation = () => {
    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-cyan-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                            <Zap className="w-3 h-3 text-cyan-500" />
                            Optimization Layer v4.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 uppercase leading-[0.9]">
                            Autonomous <br />
                            <span className="text-gray-500">Execution</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl border-l border-cyan-500/30 pl-8">
                            Zero-touch market resolution and automated liquidity scaling. From local neural hooks to air-gapped resolution clusters, the OmniSight engine runs wherever the signal lives.
                        </p>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl flex flex-col gap-8 min-w-[320px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent pointer-events-none" />
                        <div>
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Throughput Sync</div>
                            <div className="text-3xl font-bold text-white font-mono uppercase tracking-tighter">14,284 TPS</div>
                            <div className="text-[9px] font-mono text-emerald-500 mt-1 flex items-center gap-1 uppercase tracking-widest">
                                <Activity className="w-3 h-3" />
                                Optimal Signal Path
                            </div>
                        </div>
                        <div className="h-px bg-white/5 w-full" />
                        <div>
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Network Nodes</div>
                            <div className="text-3xl font-bold text-white font-mono uppercase tracking-tighter">1,024 ACTIVE</div>
                            <div className="text-[9px] font-mono text-gray-500 mt-1 uppercase tracking-widest">VERIFIED_QUORUMS</div>
                        </div>
                    </div>
                </div>

                {/* Pipeline Block */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-[11px] font-mono text-cyan-500 tracking-[0.5em] uppercase whitespace-nowrap">EXECUTION_LIFECYCLE</h2>
                        <div className="h-px bg-[#222] flex-1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-0">
                        {[
                            { title: "Input_Signal", icon: <Radio className="w-6 h-6" />, desc: "Global telemetry streams ingested via decentralized oracle nodes." },
                            { title: "Process_Logic", icon: <Cpu className="w-6 h-6" />, desc: "Neuro-symbolic engines verify signal conviction in < 20ms.", badge: "20ms" },
                            { title: "Consensus_Final", icon: <Workflow className="w-6 h-6" />, desc: "Truth resolution finalized via reputation-weighted hashing." },
                            { title: "State_Update", icon: <Binary className="w-6 h-6" />, desc: "On-chain state synchronized globally across all forecasting nodes." }
                        ].map((step, i) => (
                            <div key={i} className="group p-8 bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-cyan-500/30 transition-all relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-[#111] border border-[#222] flex items-center justify-center mb-8 relative z-10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all text-gray-100 group-hover:text-cyan-500">
                                    {step.icon}
                                    {step.badge && <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-[8px] font-bold px-1.5 py-0.5 font-mono uppercase tracking-wider">{step.badge}</span>}
                                </div>
                                <h3 className="font-bold text-white text-lg mb-4 font-mono uppercase tracking-tight relative z-10">{step.title}</h3>
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed tracking-tight relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Integration Grid */}
                <section className="mb-32">
                    <div className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-12 lg:p-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />

                        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-tighter">Universal <br />Connectivity</h2>
                                <p className="text-[13px] font-mono text-gray-500 uppercase leading-relaxed mb-10 tracking-tight max-w-md">
                                    OmniSight provides native hooks for institutional infrastructure. Resolve probability wherever your stack operates.
                                </p>
                                <Link to="/docs" className="inline-flex h-14 px-10 bg-white hover:bg-cyan-500 hover:text-white text-black font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all items-center gap-3">
                                    Integration_Manuals <Terminal className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { name: "Sovereign_Node", icon: <Globe className="w-5 h-5" /> },
                                    { name: "Cloud_Sync", icon: <Box className="w-5 h-5" /> },
                                    { name: "Oracle_Stream", icon: <Waves className="w-5 h-5" /> },
                                    { name: "Neural_Link", icon: <Settings className="w-5 h-5" /> },
                                    { name: "Consensus_Hub", icon: <Network className="w-5 h-5" /> },
                                    { name: "State_Relay", icon: <Unlink className="w-5 h-5" /> },
                                    { name: "Execution_API", icon: <Code className="w-5 h-5" /> },
                                    { name: "Admin_Control", icon: <Compass className="w-5 h-5" /> },
                                ].map((item) => (
                                    <div key={item.name} className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all group aspect-square">
                                        <div className="text-gray-600 mb-3 group-hover:text-cyan-500 transition-colors">{item.icon}</div>
                                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Insight */}
                <div className="p-12 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-16">
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Protocol Version</div>
                            <div className="text-[12px] font-mono font-bold text-white uppercase tracking-widest">AUTOMA_V4.2.0-STABLE</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Sync Hash</div>
                            <div className="text-[12px] font-mono font-bold text-cyan-500 uppercase tracking-widest">0xFB...C82F</div>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-600 font-mono uppercase max-w-sm text-center md:text-right leading-relaxed tracking-tight">
                        Autonomous execution is governed by the reputation protocol. All state transitions are verifiable via the specialized node network.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Automation;

