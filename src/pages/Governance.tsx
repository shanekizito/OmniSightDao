import { useState } from "react";
import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import { Button } from "@/components/ui/button";
import {
    Clock,
    Gavel,
    Shield,
    AlertTriangle,
    Network,
    Activity,
    Workflow,
    ScanFace,
    Command,
    ThumbsUp,
    ThumbsDown,
    Layers,
    Hourglass,
    Key,
    Table,
    ShieldAlert,
    Signal,
    Satellite
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

interface MarketProposal {
    id: number;
    proposer: string;
    question: string;
    category: string;
    template: string;
    stake: number;
    resolutionDate: string;
    votesFor: number;
    votesAgainst: number;
    status: "pending" | "approved" | "rejected";
    timeLeft: string;
}

const MOCK_PROPOSALS: MarketProposal[] = [
    {
        id: 1,
        proposer: "0x1a2b...3c4d",
        question: "Will Ethereum reach $10.000 by December 31, 2025?",
        category: "Crypto",
        template: "Crypto Settlement",
        stake: 100,
        resolutionDate: "Dec 31, 2025",
        votesFor: 145,
        votesAgainst: 23,
        status: "pending",
        timeLeft: "18h 42m"
    },
    {
        id: 2,
        proposer: "0x5e6f...7g8h",
        question: "Will Uniswap v4 launch before Q3 2025?",
        category: "Governance",
        template: "DAO Governance",
        stake: 150,
        resolutionDate: "Sep 30, 2025",
        votesFor: 89,
        votesAgainst: 67,
        status: "pending",
        timeLeft: "6h 15m"
    },
    {
        id: 3,
        proposer: "0x9i0j...1k2l",
        question: "Will Bitcoin dominance fall below 40% by June 2025?",
        category: "Crypto",
        template: "Crypto Settlement",
        stake: 100,
        resolutionDate: "Jun 30, 2025",
        votesFor: 234,
        votesAgainst: 12,
        status: "approved",
        timeLeft: "Approved"
    }
];

const Governance = () => {
    const { reputation, isWalletConnected } = useUser();
    const [userVotes, setUserVotes] = useState<{ [key: number]: "for" | "against" }>({});

    const handleVote = (proposalId: number, vote: "for" | "against") => {
        if (!isWalletConnected) {
            toast.error("Please connect your wallet");
            return;
        }

        setUserVotes(prev => ({ ...prev, [proposalId]: vote }));

        toast.success(`Vote Registered: ${vote.toUpperCase()}`, {
            description: `Stake weight: ${reputation.toFixed(1)} REP`
        });
    };

    const votingPower = reputation;

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />
            <OmniSubnav />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                        <Command className="w-3 h-3 text-orange-500" />
                        Consensus Layer
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Market <span className="text-gray-500">Governance</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
                        Validate and filter high-integrity market proposals. Your influence is directly proportional to your historical accuracy score (Reputation).
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_350px] gap-12">

                    {/* Active Proposals */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase flex items-center gap-2">
                                <Layers className="w-4 h-4 text-orange-500" />
                                Active Queue
                            </h2>
                            <div className="text-[10px] font-mono text-gray-600 bg-[#0a0a0a] px-3 py-1 border border-[#222] rounded">
                                {MOCK_PROPOSALS.filter(p => p.status === 'pending').length} PENDING
                            </div>
                        </div>

                        {MOCK_PROPOSALS.map((proposal) => {
                            const userVote = userVotes[proposal.id];
                            const totalVotes = proposal.votesFor + proposal.votesAgainst;
                            const approvalRate = totalVotes > 0 ? (proposal.votesFor / totalVotes) * 100 : 0;

                            return (
                                <div key={proposal.id} className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden group">
                                    <div className="p-8">
                                        {/* Meta Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <span className="text-xs font-mono text-gray-600">ID-{proposal.id.toString().padStart(4, '0')}</span>
                                                <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase ${proposal.status === "approved" ? "bg-emerald-500/10 text-emerald-500" :
                                                    proposal.status === "rejected" ? "bg-red-500/10 text-red-500" :
                                                        "bg-orange-500/10 text-orange-500"
                                                    }`}>
                                                    {proposal.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                                                <Hourglass className="w-3 h-3" />
                                                {proposal.timeLeft}
                                            </div>
                                        </div>

                                        {/* Question */}
                                        <h3 className="text-2xl font-bold text-white mb-8 leading-tight group-hover:text-orange-500 transition-colors">
                                            {proposal.question}
                                        </h3>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                            <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">Source</div>
                                                <div className="text-xs font-bold text-white truncate">{proposal.proposer}</div>
                                            </div>
                                            <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">Blueprint</div>
                                                <div className="text-xs font-bold text-white">{proposal.template}</div>
                                            </div>
                                            <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">Bond Stake</div>
                                                <div className="text-xs font-bold text-orange-500">${proposal.stake}</div>
                                            </div>
                                            <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                                <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">ETR</div>
                                                <div className="text-xs font-bold text-white">{proposal.resolutionDate}</div>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="space-y-3 mb-8">
                                            <div className="flex justify-between text-[10px] font-mono">
                                                <span className="text-emerald-500">FOR: {proposal.votesFor}</span>
                                                <span className="text-red-500">AGAINST: {proposal.votesAgainst}</span>
                                            </div>
                                            <div className="h-1 bg-[#111] rounded-full overflow-hidden flex">
                                                <div
                                                    className="h-full bg-emerald-500 transition-all duration-500"
                                                    style={{ width: `${approvalRate}%` }}
                                                />
                                                <div
                                                    className="h-full bg-red-500 transition-all duration-500"
                                                    style={{ width: `${100 - approvalRate}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        {proposal.status === "pending" && (
                                            <div className="flex gap-4">
                                                <Button
                                                    onClick={() => handleVote(proposal.id, "for")}
                                                    disabled={!!userVote}
                                                    className={`flex-1 py-6 font-mono text-xs tracking-widest uppercase border transition-all ${userVote === "for"
                                                        ? "bg-emerald-500 border-emerald-500 text-white"
                                                        : "bg-transparent border-[#222] text-gray-500 hover:border-emerald-500 hover:text-emerald-500"
                                                        }`}
                                                >
                                                    <ThumbsUp className="w-4 h-4 mr-2" />
                                                    {userVote === "for" ? "VOTED APPROVE" : "APPROVE"}
                                                </Button>
                                                <Button
                                                    onClick={() => handleVote(proposal.id, "against")}
                                                    disabled={!!userVote}
                                                    className={`flex-1 py-6 font-mono text-xs tracking-widest uppercase border transition-all ${userVote === "against"
                                                        ? "bg-red-500 border-red-500 text-white"
                                                        : "bg-transparent border-[#222] text-gray-500 hover:border-red-500 hover:text-red-500"
                                                        }`}
                                                >
                                                    <ThumbsDown className="w-4 h-4 mr-2" />
                                                    {userVote === "against" ? "VOTED REJECT" : "REJECT"}
                                                </Button>
                                            </div>
                                        )}

                                        {proposal.status === "approved" && (
                                            <div className="flex items-center justify-center gap-3 py-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-emerald-500 font-mono text-[10px] tracking-widest uppercase">
                                                <Shield className="w-4 h-4" />
                                                Finalized: Consensus Reached
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Status Panel */}
                    <div className="space-y-6">
                        <div className="sticky top-32">
                            <div className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden">
                                <div className="p-6 border-b border-[#222] bg-[#111]/50">
                                    <h3 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Satellite className="w-4 h-4 text-orange-500" />
                                        Voter Identity
                                    </h3>
                                </div>

                                <div className="p-8 space-y-8">
                                    <div className="text-center py-6 bg-[#050505] border border-white/5 rounded-xl mb-6">
                                        <div className="text-5xl font-bold text-white mb-2 tracking-tighter">{votingPower.toFixed(1)}</div>
                                        <div className="text-[9px] font-mono text-gray-600 tracking-widest uppercase">Reputation Weight</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-500">History:</span>
                                            <span className="text-white font-mono">{Object.keys(userVotes).length} VOTES</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-500">Network Weight:</span>
                                            <span className="text-white font-mono">{(votingPower / 100).toFixed(4)}%</span>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-[#222] space-y-6">
                                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-2">
                                            <Signal className="w-3 h-3 text-orange-500/50" />
                                            Voting Rules (V1.2)
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5" />
                                                <p className="text-[10px] text-gray-400 leading-normal uppercase">Power = Reputation Score</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5" />
                                                <p className="text-[10px] text-gray-400 leading-normal uppercase">60% Approval Threshold</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-1 h-1 rounded-full bg-orange-500 mt-1.5" />
                                                <p className="text-[10px] text-gray-400 leading-normal uppercase">Slash applied to bad signals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl flex gap-4 items-start">
                                <ShieldAlert className="w-5 h-5 text-orange-500 shrink-0" />
                                <p className="text-[10px] text-gray-400 leading-relaxed uppercase">
                                    Warning: malicious or inaccurate voting outcomes will result in permanent reputation slashing.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Governance;

