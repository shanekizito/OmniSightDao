import OmniNavbar from "@/components/OmniNavbar";
import {
    ShieldCheck,
    ShieldAlert,
    Fingerprint,
    Lock,
    Terminal,
    Activity,
    Radar,
    Database,
    Network,
    Key,
    EyeOff,
    Binary,
    Shield,
    Unlink
} from "lucide-react";

const Security = () => {
    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-emerald-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                            <ShieldCheck className="w-3 h-3 text-emerald-500" />
                            Defensive_Architecture_v2.4
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 uppercase leading-[0.9]">
                            Resolution <br />
                            <span className="text-gray-500">Security</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl border-l border-emerald-500/30 pl-8">
                            Multi-layered consensus verification and asymmetric slashing. Combining static resolution heuristics with reputation-weighted neural consensus to eliminate market manipulation.
                        </p>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl flex flex-col gap-8 min-w-[320px] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent pointer-events-none" />
                        <div>
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Security Bond</div>
                            <div className="text-3xl font-bold text-white font-mono uppercase tracking-tighter">$142.8M USDC</div>
                            <div className="text-[9px] font-mono text-emerald-500 mt-1 flex items-center gap-1 uppercase tracking-widest">
                                <Shield className="w-3 h-3" />
                                Protocol_Covered
                            </div>
                        </div>
                        <div className="h-px bg-white/5 w-full" />
                        <div>
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Audit Status</div>
                            <div className="text-3xl font-bold text-white font-mono uppercase tracking-tighter">PASS_STABLE</div>
                            <div className="text-[9px] font-mono text-gray-500 mt-1 uppercase tracking-widest">VERIFIED_0xSHERLOCK</div>
                        </div>
                    </div>
                </div>

                {/* Defense Matrix */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-[11px] font-mono text-emerald-500 tracking-[0.5em] uppercase whitespace-nowrap">DEFENSE_MATRIX</h2>
                        <div className="h-px bg-[#222] flex-1" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Consensus_Verification",
                                    desc: "Every resolution requires 2-of-3 validation across tiered oracle feeds and optimistic windows.",
                                    icon: <Network className="w-5 h-5" />
                                },
                                {
                                    title: "Neural_Heuristics",
                                    desc: "Real-time analysis of trading patterns identifies 'Sybil' clusters and automated market-wash attempts.",
                                    icon: <Radar className="w-5 h-5" />
                                },
                                {
                                    title: "Reputation_Slash",
                                    desc: "Malicious nodes lose 100% of staked collateral and reputation authority within the governance layer.",
                                    icon: <ShieldAlert className="w-5 h-5" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 p-10 bg-[#0a0a0a] border border-[#222] rounded-2xl hover:border-emerald-500/20 transition-all group">
                                    <div className="w-12 h-12 bg-[#111] border border-[#222] flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all text-gray-400 group-hover:text-emerald-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-2 font-mono uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed tracking-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Visual Security Blueprint */}
                        <div className="relative bg-[#0a0a0a] border border-[#222] p-12 rounded-3xl overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none" />
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all">
                                <ShieldCheck className="w-48 h-48 text-white" />
                            </div>

                            <div className="space-y-12 relative z-10">
                                <div className="flex justify-center">
                                    <div className="bg-[#111] border border-[#222] text-white px-8 py-4 font-mono text-[10px] flex items-center gap-3 w-full justify-center group-hover:border-emerald-500/30 transition-all uppercase tracking-widest">
                                        <Terminal className="w-4 h-4 text-emerald-500" />
                                        Input_Signal_Packet
                                    </div>
                                </div>

                                <div className="flex justify-center h-12">
                                    <div className="w-px bg-white/5" />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-8 bg-[#050505] border border-[#222] text-center rounded-2xl">
                                        <div className="text-[11px] font-bold text-white mb-2 font-mono uppercase tracking-widest">Oracle_Consensus</div>
                                        <div className="text-[8px] text-gray-600 font-mono uppercase tracking-widest">LAYER_01</div>
                                    </div>
                                    <div className="p-8 bg-[#050505] border border-[#222] text-center rounded-2xl">
                                        <div className="text-[11px] font-bold text-white mb-2 font-mono uppercase tracking-widest">Neural_Scan</div>
                                        <div className="text-[8px] text-gray-600 font-mono uppercase tracking-widest">LAYER_02</div>
                                    </div>
                                </div>

                                <div className="flex justify-center h-12">
                                    <div className="w-px bg-white/5" />
                                </div>

                                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 p-6 font-bold flex flex-col items-center gap-2 w-full justify-center rounded-2xl group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                    <Lock className="w-5 h-5" />
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em]">SECURE_RESOLUTION_FINALIZED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Protocol Privacy */}
                <section className="mb-32">
                    <div className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                        <h2 className="text-4xl font-bold text-white mb-16 uppercase tracking-tighter flex items-center gap-6">
                            <Key className="w-8 h-8 text-emerald-500" />
                            Privacy_By_Design
                        </h2>

                        <div className="grid md:grid-cols-3 gap-px bg-[#222] border border-[#222]">
                            {[
                                {
                                    title: "Zero_Signal_Retention",
                                    icon: <EyeOff className="w-6 h-6" />,
                                    desc: "Computed signals are ephemeral. Data processed in Secure Enclaves (TEE) is discarded immediately post-consensus."
                                },
                                {
                                    title: "Zk_Identity",
                                    icon: <Fingerprint className="w-6 h-6" />,
                                    desc: "Validator identities are verified via Zero-Knowledge proofs, ensuring authority without compromising privacy."
                                },
                                {
                                    title: "Shard_Storage",
                                    icon: <Unlink className="w-6 h-6" />,
                                    desc: "Metadata is sharded across the resolution network, eliminating any single point of data exposure."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-10 group hover:bg-white/[0.02] transition-all">
                                    <div className="w-12 h-12 border border-[#222] flex items-center justify-center mb-8 text-gray-600 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-4 font-mono uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed tracking-tight">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer Insight */}
                <div className="p-12 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-16">
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Security Protocol</div>
                            <div className="text-[12px] font-mono font-bold text-white uppercase tracking-widest">OMNI_SEC_V3.1</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Bond Hash</div>
                            <div className="text-[12px] font-mono font-bold text-emerald-500 uppercase tracking-widest">0x9B...F5A</div>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-600 font-mono uppercase max-w-sm text-center md:text-right leading-relaxed tracking-tight">
                        Resolution security is maintained through a combination of economic stake and verified computation. Protocol audits are finalized every epoch.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Security;

