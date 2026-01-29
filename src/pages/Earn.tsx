import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import {
    TrendingUp,
    Zap,
    Hash,
    RefreshCcw,
    ShieldCheck
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { Link } from "react-router-dom";
import { VAULTS } from "@/data/vaults";

const Earn = () => {
    const { stakedBalance } = useUser();

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-emerald-500/20 selection:text-white">
            <OmniNavbar />
            <OmniSubnav />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                            <Zap className="w-3 h-3 text-emerald-500" />
                            Yield Engine v2.0
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                            Harvest <span className="text-gray-500">Liquidity</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Be the house. Provision liquidity to specialized market domains and capture protocol throughput. Automated farming across OmniSight theses.
                        </p>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-xl flex gap-12 min-w-[320px]">
                        <div>
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Portfolio Value</div>
                            <div className="text-3xl font-bold text-white">${stakedBalance.toLocaleString()}</div>
                            <div className="text-[10px] font-mono text-emerald-500 mt-1 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                +2.4% PERFORMANCE
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Aggregated APY</div>
                            <div className="text-3xl font-bold text-emerald-500 font-mono">27.4%</div>
                            <div className="text-[10px] font-mono text-gray-500 mt-1 uppercase">EST. NET GAIN</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {VAULTS.map((vault) => (
                        <div key={vault.id} className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden group hover:border-emerald-500/30 transition-all">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                                            <vault.icon className={`w-6 h-6 ${vault.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{vault.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <span className={`text-[8px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded ${vault.risk === 'High' ? 'bg-red-500/10 text-red-500' :
                                                    vault.risk === 'Med' ? 'bg-cyan-500/10 text-cyan-500' :
                                                        'bg-emerald-500/10 text-emerald-500'
                                                    }`}>
                                                    {vault.risk} Risk Level
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-mono text-gray-500 uppercase">TVL</div>
                                        <div className="text-sm border-b border-white/10 pb-1 font-bold text-white">{vault.tvl}</div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 font-light leading-relaxed mb-10 h-10 line-clamp-2">
                                    {vault.desc}
                                </p>

                                <div className="flex items-end justify-between mb-10">
                                    <div className="bg-[#050505] border border-white/5 py-3 px-6 rounded-lg">
                                        <div className="text-[10px] font-mono text-gray-600 uppercase mb-1">Projected APY</div>
                                        <div className="text-4xl font-bold text-emerald-500 font-mono tracking-tighter">{vault.apy}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-1 h-8 rounded-full bg-[#111] overflow-hidden">
                                            <div className="w-full h-1/2 bg-emerald-500/50" />
                                        </div>
                                        <div className="w-1 h-8 rounded-full bg-[#111] overflow-hidden">
                                            <div className="w-full h-3/4 bg-emerald-500/50" />
                                        </div>
                                        <div className="w-1 h-8 rounded-full bg-[#111] overflow-hidden">
                                            <div className="w-full h-2/3 bg-emerald-500/50" />
                                        </div>
                                    </div>
                                </div>

                                <Link to={`/earn/${vault.id}`} className="block w-full text-center py-4 bg-[#111] hover:bg-emerald-500 hover:text-white border border-[#222] hover:border-emerald-500 text-gray-500 font-mono text-xs tracking-widest uppercase transition-all rounded-lg">
                                    Initialize Staking Sequence
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Insight */}
                <div className="p-12 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                <Hash className="w-4 h-4 text-emerald-500" />
                                Consensus Yield
                            </h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed uppercase font-mono">
                                Rewards are generated from market swap fees, resolution penalties, and protocol-level emission cycles.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                <RefreshCcw className="w-4 h-4 text-emerald-500" />
                                Automated Rebalancing
                            </h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed uppercase font-mono">
                                Vaults dynamically shift liquidity towards high-MQI markets to mitigate toxic flow and optimize returns.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                Risk Management
                            </h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed uppercase font-mono">
                                Institutional-grade parameters ensure capital protection through diversified source oracle verification.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Earn;

