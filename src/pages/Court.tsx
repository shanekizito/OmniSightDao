import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import {
    Gavel,
    Scale,
    ShieldAlert,
    CheckCircle2,
    AlertOctagon,
    Fingerprint,
    Workflow,
    Activity,
    Terminal,
    Network,
    Clock,
    UserCheck,
    History,
    Timer,
    Check,
    XOctagon,
    Codepen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const disputes = [
    { id: 1, title: "Market: 'Did Taylor Swift announce engagement?'", reason: "Ambiguous Result", status: "Voting", ends: "4h 20m", bond: "500 OMNI", votes: { uphold: 65, overturn: 35 } },
    { id: 2, title: "Market: 'SpaceX Launch Success'", reason: "Oracle Malfunction", status: "Review", ends: "12h", bond: "1000 OMNI", votes: { uphold: 10, overturn: 90 } },
];

const Court = () => {
    const { reputation, isWalletConnected } = useUser();

    const handleVote = (id: number, type: string) => {
        if (!isWalletConnected) {
            toast.error("Please connect your wallet");
            return;
        }
        toast.success(`Vote Registered: ${type}`, {
            description: `Juror position recorded for case #${id}`
        });
    }

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-purple-500/20 selection:text-white">
            <OmniNavbar />
            <OmniSubnav />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                            <Gavel className="w-3 h-3 text-purple-500" />
                            Arbitration Layer v1.4
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                            The Court <span className="text-gray-500">of Omni</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Decentralized justice for ambiguous resolutions. Serve as a juror and utilize your reputation score to resolve high-stakes signal conflicts.
                        </p>
                    </div>

                    <div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-xl min-w-[320px]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-500">
                                <UserCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Juror Standing</div>
                                <div className="text-2xl font-bold text-white uppercase tracking-tighter">Verified Agent</div>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-[#222]">
                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">Reputation Weight</div>
                            <div className="text-4xl font-bold text-white font-mono">{reputation.toFixed(1)}</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-12">
                    <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase flex items-center gap-2">
                        <History className="w-4 h-4 text-purple-500" />
                        Dispute Docket
                    </h2>

                    <div className="grid gap-6">
                        {disputes.map((caseItem) => (
                            <div key={caseItem.id} className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden group hover:border-purple-500/30 transition-all flex flex-col xl:flex-row">
                                <div className="p-8 flex-1">
                                    <div className="flex items-center gap-6 mb-8">
                                        <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase ${caseItem.status === "Voting" ? "bg-purple-500/10 text-purple-500" : "bg-cyan-500/10 text-cyan-500"
                                            }`}>
                                            {caseItem.status} Phase
                                        </span>
                                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600">
                                            <Timer className="w-3 h-3 text-purple-500/50" />
                                            {caseItem.ends} REMAINING
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-500 transition-colors leading-tight">{caseItem.title}</h3>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                            <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">Issue</div>
                                            <div className="text-xs font-bold text-white">{caseItem.reason}</div>
                                        </div>
                                        <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                            <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">Security Bond</div>
                                            <div className="text-xs font-bold text-purple-500">{caseItem.bond}</div>
                                        </div>
                                        <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                            <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">Case ID</div>
                                            <div className="text-xs font-bold text-white">#{caseItem.id}4492</div>
                                        </div>
                                        <div className="bg-[#050505] p-4 rounded-lg border border-white/5">
                                            <div className="text-[9px] font-mono text-gray-600 uppercase mb-1">Verdict ETA</div>
                                            <div className="text-xs font-bold text-white">24h Post-Vote</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full xl:w-[400px] bg-[#111]/30 border-t xl:border-t-0 xl:border-l border-[#222] p-8 flex flex-col justify-center">
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest">
                                                <span className="text-emerald-500">Uphold: {caseItem.votes.uphold}%</span>
                                                <span className="text-red-500">Overturn: {caseItem.votes.overturn}%</span>
                                            </div>
                                            <div className="h-1 bg-[#050505] border border-white/5 rounded-full overflow-hidden flex">
                                                <div className="h-full bg-emerald-500" style={{ width: `${caseItem.votes.uphold}%` }} />
                                                <div className="h-full bg-red-500" style={{ width: `${caseItem.votes.overturn}%` }} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <Button
                                                onClick={() => handleVote(caseItem.id, "UPHOLD")}
                                                className="bg-transparent border border-[#222] hover:border-emerald-500 hover:text-emerald-500 text-gray-500 font-mono text-[10px] tracking-widest py-6"
                                            >
                                                <Check className="w-4 h-4 mr-2" />
                                                UPHOLD
                                            </Button>
                                            <Button
                                                onClick={() => handleVote(caseItem.id, "OVERTURN")}
                                                className="bg-transparent border border-[#222] hover:border-red-500 hover:text-red-500 text-gray-500 font-mono text-[10px] tracking-widest py-6"
                                            >
                                                <XOctagon className="w-4 h-4 mr-2" />
                                                STRIKE
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Information Callout */}
                <div className="mt-20 p-8 bg-purple-500/5 border border-purple-500/10 rounded-xl flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="flex gap-6 items-center">
                        <Codepen className="w-8 h-8 text-purple-500/50" />
                        <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Institutional Consensus</h4>
                            <p className="text-[10px] text-gray-500 font-mono uppercase">Decisions finalized via reputation-weighted hashing</p>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-400 max-w-xl text-center md:text-right leading-relaxed uppercase font-mono">
                        Active jurors must stake a security bond minimum of 100 OMNI. Malicious voting paths trigger automated reputation slashing and bond forfeiture.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Court;

