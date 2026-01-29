import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import { useState } from "react";
import {
    Trophy,
    TrendingUp,
    Target,
    Award,
    Filter,
    ChevronDown,
    Command,
    ScanFace,
    Activity,
    Workflow,
    Network,
    Binary,
    Globe,
    Signal,
    Satellite
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "@/context/UserContext";

interface Trader {
    rank: number;
    address: string;
    avatar: string;
    overallAccuracy: number;
    totalPredictions: number;
    pnl30d: number;
    winRate: number;
    riskAdjustedScore: number;
    categories: { name: string; accuracy: number }[];
    badges: string[];
}

const MOCK_TRADERS: Trader[] = [
    {
        rank: 1,
        address: "0x1a2b...3c4d",
        avatar: "🐋",
        overallAccuracy: 87.5,
        totalPredictions: 142,
        pnl30d: 4250,
        winRate: 82.4,
        riskAdjustedScore: 2.45,
        categories: [
            { name: "Crypto", accuracy: 92.1 },
            { name: "Politics", accuracy: 78.5 }
        ],
        badges: ["Crystal Ball", "Whale", "Early Adopter"]
    },
    {
        rank: 2,
        address: "0x5e6f...7g8h",
        avatar: "⚡",
        overallAccuracy: 84.2,
        totalPredictions: 98,
        pnl30d: 3180,
        winRate: 79.6,
        riskAdjustedScore: 2.12,
        categories: [
            { name: "Sports", accuracy: 88.9 },
            { name: "Business", accuracy: 76.3 }
        ],
        badges: ["Sports Expert", "High Volume"]
    },
    {
        rank: 3,
        address: "0x9i0j...1k2l",
        avatar: "🎯",
        overallAccuracy: 81.8,
        totalPredictions: 67,
        pnl30d: 2940,
        winRate: 77.2,
        riskAdjustedScore: 1.98,
        categories: [
            { name: "Crypto", accuracy: 85.4 },
            { name: "Governance", accuracy: 79.1 }
        ],
        badges: ["DAO Specialist", "Verified"]
    },
    {
        rank: 4,
        address: "0xYou...rWlt",
        avatar: "👤",
        overallAccuracy: 73.2,
        totalPredictions: 25,
        pnl30d: 580,
        winRate: 68.0,
        riskAdjustedScore: 1.85,
        categories: [
            { name: "Crypto", accuracy: 78.5 },
            { name: "Politics", accuracy: 65.2 },
            { name: "Sports", accuracy: 82.1 }
        ],
        badges: ["Rising Star"]
    }
];

const EnhancedLeaderboard = () => {
    const [sortBy, setSortBy] = useState<"accuracy" | "pnl" | "winRate" | "risk">("accuracy");
    const [filterCategory, setFilterCategory] = useState<string>("all");
    const { reputationProfile } = useUser();

    const categories = ["all", "Crypto", "Politics", "Sports", "Business", "Governance", "Pop Culture"];

    const sortedTraders = [...MOCK_TRADERS].sort((a, b) => {
        switch (sortBy) {
            case "pnl": return b.pnl30d - a.pnl30d;
            case "winRate": return b.winRate - a.winRate;
            case "risk": return b.riskAdjustedScore - a.riskAdjustedScore;
            default: return b.overallAccuracy - a.overallAccuracy;
        }
    });

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />
            <OmniSubnav />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                        <Signal className="w-3 h-3 text-orange-500" />
                        Reputation Protocol
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Signal <span className="text-gray-500">Leaderboard</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
                        The definitive ranking of the OmniSight network's top forecasters. Track global accuracy scores and reputation hashing updates.
                    </p>
                </div>

                {/* Your Stats */}
                <div className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden mb-20 group">
                    <div className="p-8 border-b border-[#222] bg-[#111]/50 flex items-center justify-between">
                        <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase flex items-center gap-2">
                            <ScanFace className="w-4 h-4 text-orange-500" />
                            Your Operator Profile
                        </h2>
                        <Link to="/portfolio" className="text-[10px] font-mono text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest">
                            Full Telemetry →
                        </Link>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="bg-[#050505] border border-white/5 p-6 rounded-lg">
                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-2">Overall Accuracy</div>
                                <div className="text-3xl font-bold text-white font-mono">{reputationProfile.overall.toFixed(1)}%</div>
                            </div>
                            <div className="bg-[#050505] border border-white/5 p-6 rounded-lg">
                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-2">Win Rate</div>
                                <div className="text-3xl font-bold text-emerald-500 font-mono">{reputationProfile.winRate.toFixed(1)}%</div>
                            </div>
                            <div className="bg-[#050505] border border-white/5 p-6 rounded-lg">
                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-2">Risk Factor</div>
                                <div className="text-3xl font-bold text-orange-500 font-mono">{reputationProfile.riskAdjustedScore.toFixed(2)}</div>
                            </div>
                            <div className="bg-[#050505] border border-white/5 p-6 rounded-lg">
                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-2">Predictions</div>
                                <div className="text-3xl font-bold text-white font-mono">{reputationProfile.totalPredictions}</div>
                            </div>
                        </div>

                        {/* Category Breakdown */}
                        <div className="mt-8 pt-8 border-t border-[#222]">
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Satellite className="w-3 h-3 text-orange-500/50" />
                                Domain Expertise Delta
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                {reputationProfile.byCategory.map((cat) => (
                                    <div key={cat.category} className="bg-[#050505] px-4 py-3 rounded border border-white/5 group hover:border-orange-500/30 transition-colors">
                                        <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">{cat.category}</div>
                                        <div className="text-sm font-bold text-white font-mono">{cat.accuracy.toFixed(1)}%</div>
                                        <div className="text-[8px] font-mono text-gray-700 uppercase">{cat.predictions} Signals</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
                    <div className="flex items-center gap-6 bg-[#0a0a0a] border border-[#222] p-2 rounded-lg">
                        <div className="px-4 py-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-2">
                            <Filter className="w-3 h-3 text-orange-500" />
                            Sort Telemetry
                        </div>
                        <div className="flex gap-1">
                            {[
                                { id: 'accuracy', label: 'ACCURACY' },
                                { id: 'pnl', label: 'P&L' },
                                { id: 'winRate', label: 'WIN RATE' },
                                { id: 'risk', label: 'RISK ADJ' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setSortBy(item.id as any)}
                                    className={`px-4 py-2 rounded text-[9px] font-mono tracking-widest transition-all ${sortBy === item.id
                                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                                        : "text-gray-500 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="bg-[#0a0a0a] border border-[#222] rounded-lg px-6 py-3 text-[10px] font-mono text-white focus:border-orange-500 focus:outline-none appearance-none pr-12 group-hover:border-[#333] transition-colors"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat === "all" ? "GLOBAL DOMAINS" : `${cat.toUpperCase()} DOMAIN`}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="w-3 h-3 text-gray-600 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-white transition-colors" />
                    </div>
                </div>

                {/* Leaderboard Table */}
                <div className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-[#222] bg-[#111]/30">
                                <th className="py-5 px-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Rank</th>
                                <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Operator Identity</th>
                                <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Accuracy</th>
                                <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">30D P&L</th>
                                <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Win Rate</th>
                                <th className="py-5 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">Risk Score</th>
                                <th className="py-5 px-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right">Integrity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedTraders.map((trader) => (
                                <tr key={trader.rank} className="border-b border-[#222]/50 hover:bg-white/5 transition-colors group">
                                    <td className="py-6 px-8">
                                        <div className="flex items-center gap-4">
                                            <span className={`text-lg font-bold font-mono ${trader.rank === 1 ? "text-yellow-500" :
                                                trader.rank === 2 ? "text-gray-400" :
                                                    trader.rank === 3 ? "text-orange-600" : "text-gray-600"
                                                }`}>
                                                {trader.rank.toString().padStart(2, '0')}
                                            </span>
                                            {trader.rank <= 3 && (
                                                <div className={`w-1.5 h-1.5 rounded-full ${trader.rank === 1 ? "bg-yellow-500 animate-pulse" :
                                                    trader.rank === 2 ? "bg-gray-400" : "bg-orange-600"
                                                    }`} />
                                            )}
                                        </div>
                                    </td>

                                    <td className="py-6 px-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded bg-[#111] border border-[#222] flex items-center justify-center text-sm group-hover:border-orange-500/50 transition-colors">
                                                {trader.avatar}
                                            </div>
                                            <div>
                                                <div className="text-xs font-mono text-white group-hover:text-orange-500 transition-colors">{trader.address}</div>
                                                <div className="flex gap-1.5 mt-1.5">
                                                    {trader.badges.slice(0, 2).map((badge) => (
                                                        <span key={badge} className="text-[8px] font-mono border border-orange-500/20 text-orange-500/70 px-1.5 py-0.5 rounded tracking-tighter uppercase bg-orange-500/5">
                                                            {badge}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="py-6 px-4 text-center">
                                        <div className="text-xs font-bold text-white font-mono">{trader.overallAccuracy.toFixed(1)}%</div>
                                        <div className="text-[9px] font-mono text-gray-600">{trader.totalPredictions} SIGNALS</div>
                                    </td>

                                    <td className="py-6 px-4 text-center">
                                        <div className={`text-xs font-bold font-mono ${trader.pnl30d >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                                            {trader.pnl30d >= 0 ? "+" : ""}${trader.pnl30d.toLocaleString()}
                                        </div>
                                    </td>

                                    <td className="py-6 px-4 text-center">
                                        <div className="text-xs font-bold text-white font-mono">{trader.winRate.toFixed(1)}%</div>
                                    </td>

                                    <td className="py-6 px-4 text-center">
                                        <div className="text-xs font-bold text-orange-500 font-mono">{trader.riskAdjustedScore.toFixed(2)}</div>
                                    </td>

                                    <td className="py-6 px-8 text-right">
                                        <Link
                                            to={`/profile/${trader.rank}`}
                                            className="inline-flex items-center px-4 py-2 border border-[#222] hover:border-orange-500 text-gray-500 hover:text-white transition-all rounded text-[9px] font-mono tracking-widest uppercase bg-[#050505]"
                                        >
                                            Inspect Path
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-20 p-8 bg-orange-500/5 border border-orange-500/10 rounded-xl flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="flex gap-6 items-center">
                        <Network className="w-8 h-8 text-orange-500/50" />
                        <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Reputation Quorum</h4>
                            <p className="text-[10px] text-gray-500 font-mono uppercase">Decentralized score verification via ZK-Rollup</p>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-400 max-w-xl text-center md:text-right leading-relaxed uppercase font-mono">
                        Rankings are updated every 24 hours based on resolved signal outcomes. Malicious prediction paths result in permanent rank disqualification and reputation slashing.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default EnhancedLeaderboard;

