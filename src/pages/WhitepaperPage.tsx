import OmniNavbar from "@/components/OmniNavbar";
import {
    Binary,
    Workflow,
    Waves,
    Dna,
    Radio,
    Gavel,
    ChevronRight,
    Command,
    Layers,
    History,
    ScanFace,
    Terminal,
    Wallet,
    Shield,
    Zap,
    Cpu,
    Target,
    Satellite,
    Signal
} from "lucide-react";
import { Link } from 'react-router-dom';

const WhitepaperPage = () => {
    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-[1fr_320px] gap-20">
                    {/* Main Content Area */}
                    <div className="min-w-0">
                        {/* Protocol Header */}
                        <div className="mb-24 px-4 md:px-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full bg-white/5 border border-white/10 text-orange-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                                <Satellite className="w-3 h-3" /> OMNI_CORE_SPEC_V1.3.4
                            </div>
                            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-10 leading-[0.9] uppercase">
                                The Architecture of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">Decentralized Truth</span>
                            </h1>
                            <p className="text-lg text-gray-500 font-mono uppercase leading-relaxed tracking-tight max-w-2xl border-l border-orange-500/30 pl-8">
                                OmniSight is the definitive probability layer for the internet. We convert capital conviction into machine-readable signal through a rigorous, incentive-aligned resolution protocol.
                            </p>
                        </div>

                        <div className="space-y-40">
                            {/* SECTION 1: MARKET CREATION PIPELINE */}
                            <section id="creation" className="scroll-mt-32">
                                <div className="flex items-center gap-6 mb-12">
                                    <h2 className="text-[11px] font-mono text-orange-500 tracking-[0.5em] uppercase whitespace-nowrap">01 // Creation_Flow</h2>
                                    <div className="h-px bg-[#222] flex-1" />
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-12 uppercase tracking-tight">The Filtration Pipeline</h3>

                                <div className="space-y-4">
                                    {[
                                        { title: "Proposal & Bond", desc: "Creator commits JSON spec to IPFS and stakes dynamic security bond. Filter contract validates parameters.", icon: Command },
                                        { title: "Template Instantiation", desc: "Approved proposals inherit from strict Factory Templates (Binary/Scalar) to eliminate resolution ambiguity.", icon: Cpu },
                                        { title: "Network Initialization", desc: "Market state is initialized on the AMM layer. Liquidity incentives are activated. Log stream begins.", icon: Signal }
                                    ].map((step, i) => (
                                        <div key={i} className={`bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden transition-all hover:border-orange-500/20 group ${i === 1 ? 'md:ml-10' : i === 2 ? 'md:ml-20' : ''}`}>
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-orange-500 transition-colors" />
                                            <div className="w-14 h-14 rounded-xl bg-white/[0.02] flex items-center justify-center shrink-0 border border-white/5">
                                                <step.icon className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-mono font-bold text-white uppercase mb-1">{step.title}</h4>
                                                <p className="text-[11px] font-mono text-gray-500 uppercase leading-snug tracking-tight">{step.desc}</p>
                                            </div>
                                            <ChevronRight className="hidden md:block w-5 h-5 text-gray-800 group-hover:text-orange-500 transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SECTION 2: MQI */}
                            <section id="mqi" className="scroll-mt-32">
                                <div className="flex items-center gap-6 mb-12">
                                    <h2 className="text-[11px] font-mono text-emerald-500 tracking-[0.5em] uppercase whitespace-nowrap">02 // Quality_Control</h2>
                                    <div className="h-px bg-[#222] flex-1" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-20 items-center text-center md:text-left">
                                    <div>
                                        <h3 className="text-4xl font-bold text-white mb-8 uppercase tracking-tight">Market Quality Index</h3>
                                        <p className="text-[13px] font-mono text-gray-500 uppercase leading-relaxed mb-8 tracking-tight">
                                            The MQI is a real-time fidelity score defining protocol visibility. We rate market performance through verified heuristics.
                                        </p>
                                        <ul className="space-y-4">
                                            {[
                                                "Prevents 'Whale Noise' via diversity checks",
                                                "Rewards deep liquidity provisioning",
                                                "Penalizes oracle resolution disagreement"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-4 text-[11px] font-mono text-gray-400 uppercase tracking-widest">
                                                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent pointer-events-none" />
                                        <div className="flex justify-between items-end mb-10">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                                    <Dna className="w-5 h-5 text-emerald-500" />
                                                </div>
                                                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">GENOME_STABILITY</div>
                                            </div>
                                            <div className="text-5xl font-mono font-bold text-emerald-500 animate-pulse tracking-tighter">94.2</div>
                                        </div>

                                        <div className="space-y-8">
                                            {[
                                                { label: "LIQUIDITY_DEPTH", val: "$2.4M", percent: 90 },
                                                { label: "TRADER_DIVERSITY", val: "1,240_NODES", percent: 75 },
                                                { label: "ORACLE_SYNCHRONY", val: "100.0%", percent: 100 }
                                            ].map((stat, i) => (
                                                <div key={i}>
                                                    <div className="flex justify-between text-[9px] font-mono font-bold text-gray-500 mb-3 tracking-widest uppercase">
                                                        <span>{stat.label}</span>
                                                        <span className="text-white">{stat.val}</span>
                                                    </div>
                                                    <div className="h-1 bg-white/[0.03] rounded-full overflow-hidden">
                                                        <div className="h-full bg-white/20 rounded-full transition-all duration-1000" style={{ width: `${stat.percent}%` }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 3: RESOLUTION & SECURITY */}
                            <section id="security" className="scroll-mt-32">
                                <div className="flex items-center gap-6 mb-12">
                                    <h2 className="text-[11px] font-mono text-orange-500 tracking-[0.5em] uppercase whitespace-nowrap">03 // Finality_Layer</h2>
                                    <div className="h-px bg-[#222] flex-1" />
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-12 uppercase tracking-tight">Consensus & Slashing</h3>

                                <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                                    <div className="p-10 bg-[#0a0a0a] border border-[#222] rounded-2xl hover:border-orange-500/20 transition-all group">
                                        <Radio className="w-10 h-10 text-orange-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity mx-auto md:mx-0" />
                                        <h4 className="text-xl font-mono font-bold text-white mb-4 uppercase">Multi-Oracle Pathing</h4>
                                        <p className="text-[11px] font-mono text-gray-500 uppercase leading-relaxed tracking-tight">
                                            Consensus requires 2-of-3 validation across Federated Feeds (Chainlink/Pyth), an Optimistic Window, and Juror resolution.
                                        </p>
                                    </div>
                                    <div className="p-10 bg-[#0a0a0a] border border-[#222] rounded-2xl hover:border-red-500/20 transition-all group">
                                        <Shield className="w-10 h-10 text-red-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity mx-auto md:mx-0" />
                                        <h4 className="text-xl font-mono font-bold text-white mb-4 uppercase">Asymmetric Slashing</h4>
                                        <p className="text-[11px] font-mono text-gray-500 uppercase leading-relaxed tracking-tight">
                                            Dishonest participants forfeit 100% of collateral. Malicious activity carries deep negative expected value (nEV).
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 4: DEFI & VAULTS */}
                            <section id="ecosystem" className="scroll-mt-32 pb-40">
                                <div className="flex items-center gap-6 mb-12">
                                    <h2 className="text-[11px] font-mono text-blue-500 tracking-[0.5em] uppercase whitespace-nowrap">04 // Yield_Layer</h2>
                                    <div className="h-px bg-[#222] flex-1" />
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-8 uppercase tracking-tight">Financial Infrastructure</h3>
                                <p className="text-[13px] font-mono text-gray-500 uppercase leading-relaxed mb-12 tracking-tight max-w-2xl text-center md:text-left">
                                    OmniSight is the foundational 'Probability API' for the global DeFi ecosystem. Composable, trustless, and efficient.
                                </p>

                                <div className="grid gap-8">
                                    {[
                                        { title: "Liquidity Provisioning Vaults", desc: "Automated LP Vaults allow passive capital to provide liquidity across diversified market indices. Optimized by MQI analysis.", icon: Zap },
                                        { title: "Conditional Strategy Markets", desc: "Enable 'Conditional Strategies' where users trade complex dependencies linked to protocol states and external indices.", icon: Target }
                                    ].map((feature, i) => (
                                        <div key={i} className="p-10 bg-[#0a0a0a] border border-[#222] rounded-3xl flex flex-col md:flex-row gap-10 hover:border-blue-500/20 transition-all group">
                                            <div className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center shrink-0 mx-auto md:mx-0">
                                                <feature.icon className="w-7 h-7 text-blue-500 opacity-80" />
                                            </div>
                                            <div className="text-center md:text-left">
                                                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-blue-500 transition-colors">{feature.title}</h4>
                                                <p className="text-[11px] font-mono text-gray-500 uppercase leading-relaxed max-w-3xl tracking-tight">
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Final Statement */}
                        <div className="py-40 border-t border-[#222] text-center">
                            <h4 className="text-4xl font-bold text-white mb-8 tracking-tighter uppercase italic">"Truth is computed, not found."</h4>
                            <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
                                OmniSight Protocol operates as sovereign public infrastructure for the next generation of rational decision making.
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="pt-12 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-gray-700 font-mono uppercase tracking-[0.3em]">
                            <span>SYST_MANIFESTO_ENCRYPTED</span>
                            <span>VER: 1.3.4 // BUILD_6B02_C82F</span>
                            <span>OMNISIGHT_DAO_STABLE</span>
                        </div>
                    </div>

                    {/* Navigation Sidebar (Desktop) */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-32 border-l border-white/5 pl-10">
                            <h5 className="text-white font-mono text-[10px] font-bold mb-8 tracking-[0.4em] uppercase">SYSTEM_INDEX</h5>
                            <nav className="space-y-6">
                                {[
                                    { id: "creation", label: "01. Creation_Pipeline" },
                                    { id: "mqi", label: "02. Market_Quality" },
                                    { id: "security", label: "03. Slashing_Logic" },
                                    { id: "ecosystem", label: "04. Yield_Integration" }
                                ].map((link) => (
                                    <a key={link.id} href={`#${link.id}`} className="block text-[10px] text-gray-600 font-mono uppercase tracking-widest hover:text-orange-500 transition-colors">
                                        {link.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-16 pt-16 border-t border-white/5 space-y-8">
                                <h5 className="text-white font-mono text-[10px] font-bold mb-8 tracking-[0.4em] uppercase">RESOURCES</h5>
                                <div className="space-y-6">
                                    <Link to="/docs" className="flex items-center gap-3 text-[10px] text-gray-500 font-mono uppercase tracking-widest hover:text-white transition-colors">
                                        <Command className="w-3.5 h-3.5 text-orange-500" /> API_REFERENCE
                                    </Link>
                                    <Link to="/propose" className="flex items-center gap-3 text-[10px] text-gray-500 font-mono uppercase tracking-widest hover:text-white transition-colors">
                                        <Signal className="w-3.5 h-3.5 text-orange-500" /> INITIAL_PROPOSAL
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WhitepaperPage;

