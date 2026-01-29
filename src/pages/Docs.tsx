import OmniNavbar from "@/components/OmniNavbar";
import { Book, FileText, Code2, Terminal, Activity, Zap, Search, Shield } from "lucide-react";

const Docs = () => {
    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Sidebar */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h3 className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-[0.3em] mb-6">01_CORE_CONCEPTS</h3>
                                <ul className="space-y-4">
                                    <li className="text-orange-500 font-mono text-[11px] font-bold uppercase tracking-widest cursor-pointer border-l-2 border-orange-500 pl-4 transition-all">Protocol_Intro</li>
                                    <li className="text-gray-500 hover:text-white font-mono text-[11px] uppercase tracking-widest cursor-pointer pl-4 transition-all hover:translate-x-1">Market_Mechanics</li>
                                    <li className="text-gray-500 hover:text-white font-mono text-[11px] uppercase tracking-widest cursor-pointer pl-4 transition-all hover:translate-x-1">Fee_Architecture</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-[0.3em] mb-6">02_DEV_RESOURCES</h3>
                                <ul className="space-y-4">
                                    <li className="text-gray-500 hover:text-white font-mono text-[11px] uppercase tracking-widest cursor-pointer pl-4 transition-all hover:translate-x-1">API_INTEGRATION</li>
                                    <li className="text-gray-500 hover:text-white font-mono text-[11px] uppercase tracking-widest cursor-pointer pl-4 transition-all hover:translate-x-1">SMART_CONTRACTS</li>
                                    <li className="text-gray-500 hover:text-white font-mono text-[11px] uppercase tracking-widest cursor-pointer pl-4 transition-all hover:translate-x-1">SUBGRAPH_QUERIES</li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="flex-1 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full bg-white/5 border border-white/10 text-orange-500 text-[9px] font-mono tracking-[0.3em] uppercase">
                            <Activity className="w-3 h-3" /> DOCS_STABLE_VERSION: 1.4.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                            Protocol <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Documentation</span>
                        </h1>
                        <p className="text-lg text-gray-500 font-mono uppercase leading-relaxed tracking-tight mb-16 max-w-3xl">
                            Integrate with the OmniSight prediction engine. Access smart contracts, build custom resolution oracles, and deploy automated trading strategies.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            {[
                                { title: "Whitepaper", desc: "Mathematical foundations of OmniSight CPMM and bonding curves.", icon: Book },
                                { title: "CLI Tool", desc: "Manage positions and resolution agents directly from the terminal.", icon: Terminal }
                            ].map((card, i) => (
                                <div key={i} className="bg-[#0a0a0a] border border-[#222] p-10 rounded-2xl hover:border-orange-500/20 transition-all cursor-pointer group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all">
                                        <card.icon className="w-20 h-20 text-white" />
                                    </div>
                                    <card.icon className="w-10 h-10 text-orange-500 mb-8 opacity-80" />
                                    <h3 className="text-xl font-mono font-bold text-white mb-4 uppercase group-hover:text-orange-500 transition-colors">{card.title}</h3>
                                    <p className="text-[11px] font-mono text-gray-500 uppercase leading-relaxed tracking-tight">{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none border-t border-white/5 pt-16">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-8">Base Concepts: CPMM</h3>
                            <p className="text-[13px] font-mono text-gray-500 uppercase leading-relaxed tracking-tight mb-10">
                                OmniSight utilizes a specialized Constant Product Market Maker (CPMM) optimized for binary outcome resolution. This provides deep liquidity depth regardless of execution size, scaling slippage algorithmically.
                            </p>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <pre className="relative bg-[#0a0a0a] p-8 rounded-xl border border-[#222] text-[12px] font-mono text-gray-400 overflow-x-auto leading-relaxed">
                                    {`/* SYST_BONDING_CURVE_LOGIC */
k = x * y
price_x = y / x
price_y = x / y

/* SLIPPAGE_ATTENUATION_V4 */
delta_y = y * (1 - (x / (x + delta_x)))`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Docs;

