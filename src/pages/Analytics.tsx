import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import {
    Binary,
    Activity,
    Dna,
    Terminal,
    Network,
    Workflow,
    TrendingUp,
    BarChart3,
    Users,
    Zap,
    Scale,
    AlertCircle,
    Globe,
    Cpu,
    Waves,
    Box,
    Command,
    Target,
    Signal,
    Settings2,
    Layers,
    Radio
} from "lucide-react";
import { MARKETS } from "@/data/markets";

interface MarketQualityMetrics {
    marketId: number;
    liquidityScore: number;
    diversityScore: number;
    oracleAgreement: number;
    disputeFrequency: number;
    overallMQI: number;
}

const calculateMQI = (marketId: number): MarketQualityMetrics => {
    const base = marketId * 7;
    return {
        marketId,
        liquidityScore: (65 + (base % 30)),
        diversityScore: (70 + (base % 25)),
        oracleAgreement: (80 + (base % 15)),
        disputeFrequency: (85 + (base % 10)),
        overallMQI: (75 + (base % 20))
    };
};

const Analytics = () => {
    const marketsWithMQI = MARKETS.map(m => ({
        ...m,
        mqi: calculateMQI(m.id)
    })).sort((a, b) => b.mqi.overallMQI - a.mqi.overallMQI);

    const platformStats = {
        totalVolume: "$2.8B",
        activeMarkets: MARKETS.length,
        totalUsers: "42,847",
        avgAccuracy: "73.2%",
        highMQIMarkets: marketsWithMQI.filter(m => m.mqi.overallMQI >= 80).length
    };

    const categoryVolumes = [
        { category: "Crypto", volume: 1200, change: "+18%", icon: Binary },
        { category: "Politics", volume: 450, change: "+7%", icon: Globe },
        { category: "Sports", volume: 320, change: "-3%", icon: Activity },
        { category: "Business", volume: 280, change: "+12%", icon: TrendingUp },
        { category: "Pop Culture", volume: 150, change: "+25%", icon: Zap }
    ];

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-cyan-500/20 selection:text-white">
            <OmniNavbar />
            <OmniSubnav />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                        <Cpu className="w-3 h-3 text-cyan-500" />
                        Infrastructure Telemetry
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Platform <span className="text-gray-500">Analytics</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
                        Real-time market quality metrics and protocol throughput. Monitor the specialized signal genome of the OmniSight network.
                    </p>
                </div>

                {/* Top Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-xl group hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Protocol Volume</span>
                            <Waves className="w-4 h-4 text-cyan-500" />
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">{platformStats.totalVolume}</div>
                        <div className="text-xs font-mono text-emerald-500">+142% YOY SIGNAL GROWTH</div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-xl group hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Live Nodes</span>
                            <Box className="w-4 h-4 text-cyan-500" />
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">{platformStats.activeMarkets}</div>
                        <div className="text-xs font-mono text-cyan-500/50">{platformStats.highMQIMarkets} HIGH-MQI QUORUMS</div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-xl group hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Operator Count</span>
                            <Command className="w-4 h-4 text-cyan-500" />
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">{platformStats.totalUsers}</div>
                        <div className="text-xs font-mono text-emerald-500">+2.4K NEW IDENTITY HASHES</div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-xl group hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Consensus Drift</span>
                            <Target className="w-4 h-4 text-cyan-500" />
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">{platformStats.avgAccuracy}</div>
                        <div className="text-xs font-mono text-gray-600">AGGREGATE DELTA SCORE</div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Domain Volume */}
                    <div className="space-y-8">
                        <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase flex items-center gap-2">
                            <Radio className="w-4 h-4 text-cyan-500" />
                            Domain Throughput
                        </h2>

                        <div className="bg-[#0a0a0a] border border-[#222] rounded-xl p-8 space-y-6">
                            {categoryVolumes.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                    <div key={cat.category} className="group">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                                                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-500" />
                                                </div>
                                                <span className="text-xs font-bold text-white uppercase tracking-wider">{cat.category}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-mono text-white">${cat.volume}M</div>
                                                <div className={`text-[10px] font-mono ${cat.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                                                    {cat.change}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-[#111] rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-cyan-500/50 transition-all duration-500"
                                                style={{ width: `${(cat.volume / 1200) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quality Leaders */}
                    <div className="space-y-8">
                        <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase flex items-center gap-2">
                            <Dna className="w-4 h-4 text-cyan-500" />
                            Signal Integrity
                        </h2>
                        <div className="bg-[#0a0a0a] border border-[#222] rounded-xl p-8 space-y-4">
                            {marketsWithMQI.slice(0, 5).map((market) => (
                                <div key={market.id} className="flex items-center justify-between p-4 bg-[#050505] border border-white/5 rounded-lg group hover:border-cyan-500/20 transition-all">
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-white mb-1 group-hover:text-cyan-500 transition-colors">{market.title}</div>
                                        <div className="text-[10px] font-mono text-gray-600 uppercase">{market.category} Domain</div>
                                    </div>
                                    <div className="text-right pl-6">
                                        <div className="text-xl font-bold text-cyan-500 font-mono">{market.mqi.overallMQI}</div>
                                        <div className="text-[8px] font-mono text-gray-600 tracking-tighter">MQI SCORE</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical MQI Breakdown */}
                <div className="space-y-8">
                    <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-500" />
                        Market Quality Index (MQI) Detail
                    </h2>

                    <div className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-[#222] bg-[#111]/30">
                                    <th className="py-5 px-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Reference Path</th>
                                    <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Liquidity</th>
                                    <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Diversity</th>
                                    <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Oracle</th>
                                    <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Dispute</th>
                                    <th className="py-5 px-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right">MQI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {marketsWithMQI.slice(0, 8).map((market) => (
                                    <tr key={market.id} className="border-b border-[#222]/50 hover:bg-white/5 transition-colors group">
                                        <td className="py-6 px-8">
                                            <div className="text-xs font-bold text-white group-hover:text-cyan-500 transition-colors">{market.title}</div>
                                            <div className="text-[10px] font-mono text-gray-600">{market.category.toLowerCase()}.mqi_v1</div>
                                        </td>
                                        <td className="py-6 px-4 text-center">
                                            <div className="text-[10px] font-mono text-gray-400">{market.mqi.liquidityScore}</div>
                                        </td>
                                        <td className="py-6 px-4 text-center">
                                            <div className="text-[10px] font-mono text-gray-400">{market.mqi.diversityScore}</div>
                                        </td>
                                        <td className="py-6 px-4 text-center">
                                            <div className="text-[10px] font-mono text-emerald-500">{market.mqi.oracleAgreement}</div>
                                        </td>
                                        <td className="py-6 px-4 text-center">
                                            <div className="text-[10px] font-mono text-emerald-500">{market.mqi.disputeFrequency}</div>
                                        </td>
                                        <td className="py-6 px-8 text-right">
                                            <div className="text-lg font-bold text-cyan-500 font-mono">{market.mqi.overallMQI}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-20 p-8 bg-cyan-500/5 border border-cyan-500/10 rounded-xl flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="flex gap-6 items-center">
                        <Settings2 className="w-8 h-8 text-cyan-500/50" />
                        <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Algorithmic Oversight</h4>
                            <p className="text-[10px] text-gray-500 font-mono uppercase">Telemetry updated every 600 blocks</p>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-400 max-w-xl text-center md:text-right leading-relaxed uppercase font-mono">
                        MQI is a composite signal measuring liquidity depth, trader entropy, and oracle consensus stability. markets with scores below 40 are flagged for council review.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Analytics;

