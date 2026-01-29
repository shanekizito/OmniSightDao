import { useState } from "react";
import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import { Button } from "@/components/ui/button";
import {
    Binary,
    Gavel,
    Workflow,
    Activity,
    Dna,
    Network,
    ChevronRight,
    Code2,
    Wallet,
    Info,
    AlertCircle,
    Globe,
    Briefcase
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface MarketTemplate {
    id: number;
    name: string;
    outcomeType: "binary" | "scalar" | "multi";
    oracleClass: string;
    category: string;
    stakeRequired: number;
    description: string;
    example: string;
    icon: any;
    color: string;
}

const TEMPLATES: MarketTemplate[] = [
    {
        id: 1,
        name: "Crypto Settlement",
        outcomeType: "binary",
        oracleClass: "Chainlink Price Feed",
        category: "Crypto",
        stakeRequired: 100,
        description: "Price-action benchmarks for digital assets.",
        example: "Will Bitcoin reach $150,000 by June 30, 2025?",
        icon: Binary,
        color: "text-cyan-500"
    },
    {
        id: 2,
        name: "DAO Governance",
        outcomeType: "binary",
        oracleClass: "On-Chain Governor",
        category: "Governance",
        stakeRequired: 50,
        description: "Tracking results of decentralized voting.",
        example: "Will Uniswap proposal #42 pass?",
        icon: Gavel,
        color: "text-purple-500"
    },
    {
        id: 3,
        name: "Geopolitical Event",
        outcomeType: "binary",
        oracleClass: "Multi-Source Consensus",
        category: "Politics",
        stakeRequired: 200,
        description: "Macro-scale societal and policy outcomes.",
        example: "Will the US pass crypto regulation by December 2025?",
        icon: Globe,
        color: "text-emerald-500"
    },
    {
        id: 4,
        name: "Performance Metric",
        outcomeType: "binary",
        oracleClass: "Real-Time Stats API",
        category: "Sports",
        stakeRequired: 75,
        description: "Quantifiable results from verified data feeds.",
        example: "Will the Lakers win against the Warriors on March 15?",
        icon: Activity,
        color: "text-orange-500"
    },
    {
        id: 5,
        name: "Emergent Trends",
        outcomeType: "binary",
        oracleClass: "Media Consensus",
        category: "Pop Culture",
        stakeRequired: 100,
        description: "Verifiable milestones in cultural progress.",
        example: "Will Tesla release Roadster 2.0 by Q4 2025?",
        icon: Dna,
        color: "text-pink-500"
    },
    {
        id: 6,
        name: "Economic Indicator",
        outcomeType: "scalar",
        oracleClass: "Institutional Reporting",
        category: "Business",
        stakeRequired: 150,
        description: "Fiscal metrics and institutional data points.",
        example: "What will US CPI be in June 2025? (Range: 2-5%)",
        icon: Briefcase,
        color: "text-blue-500"
    }
];

const ProposeMarket = () => {
    const { balance, isWalletConnected } = useUser();
    const navigate = useNavigate();

    const [selectedTemplate, setSelectedTemplate] = useState<MarketTemplate | null>(null);
    const [question, setQuestion] = useState("");
    const [category, setCategory] = useState("");
    const [resolutionDate, setResolutionDate] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const validateProposal = () => {
        const errors: string[] = [];

        if (!question || question.length < 10) errors.push("Question must be at least 10 characters");
        if (!category) errors.push("Category is required");
        if (!resolutionDate) errors.push("Resolution date is required");

        const resDate = new Date(resolutionDate);
        const now = new Date();
        if (resDate <= now) errors.push("Resolution date must be in the future");

        if (selectedTemplate && balance < selectedTemplate.stakeRequired) {
            errors.push(`Insufficient balance for stake (Need $${selectedTemplate.stakeRequired})`);
        }

        setValidationErrors(errors);
        return errors.length === 0;
    };

    const handleSubmit = () => {
        if (!isWalletConnected) {
            toast.error("Please connect your wallet");
            return;
        }

        if (!validateProposal()) {
            toast.error("Please fix validation errors");
            return;
        }

        toast.success("Market Proposal Submitted!", {
            description: `Staked $${selectedTemplate?.stakeRequired}. Awaiting DAO approval.`
        });

        setTimeout(() => navigate("/governance"), 2000);
    };

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-cyan-500/20 selection:text-white">
            <OmniNavbar />
            <OmniSubnav />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#111] border border-[#222] text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
                        <Workflow className="w-3 h-3 text-cyan-500" />
                        Proposal Workflow
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Propose <span className="text-gray-500">Market</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
                        Deploy a new prediction market blueprint. Proposals require a stake bond and must adhere to strict templates to ensure high-MQI settlement.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_350px] gap-12">

                    {/* Left Column: Flow */}
                    <div className="space-y-12">

                        {/* Step 1: Template Selection */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded">01</span>
                                <h2 className="text-xl font-bold text-white uppercase tracking-wider">Select Blueprint</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TEMPLATES.map((template) => {
                                    const Icon = template.icon;
                                    const isSelected = selectedTemplate?.id === template.id;

                                    return (
                                        <button
                                            key={template.id}
                                            onClick={() => {
                                                setSelectedTemplate(template);
                                                setCategory(template.category);
                                            }}
                                            className={`p-6 bg-[#0a0a0a] border text-left flex gap-5 rounded-lg transition-all duration-200 ${isSelected
                                                    ? "border-white/20 bg-[#111]"
                                                    : "border-[#222] hover:border-[#333]"
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center shrink-0 ${isSelected ? "border-cyan-500/50" : ""}`}>
                                                <Icon className={`w-5 h-5 ${template.color}`} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white mb-1">{template.name}</div>
                                                <p className="text-xs text-gray-500 leading-relaxed">{template.description}</p>
                                                <div className="mt-4 flex items-center gap-3">
                                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter bg-[#1a1a1a] px-2 py-0.5 rounded">
                                                        {template.outcomeType}
                                                    </span>
                                                    <span className="text-[10px] font-mono text-cyan-500/80 uppercase">
                                                        ${template.stakeRequired} BOND
                                                    </span>
                                                </div>
                                            </div>
                                            {isSelected && <div className="ml-auto w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Step 2: Details */}
                        {selectedTemplate && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-mono text-purple-500 bg-purple-500/10 px-2 py-1 rounded">02</span>
                                    <h2 className="text-xl font-bold text-white uppercase tracking-wider">Market Specification</h2>
                                </div>

                                <div className="bg-[#0a0a0a] border border-[#222] rounded-xl p-8 space-y-8">
                                    <div className="grid gap-8">
                                        <div>
                                            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-3 block">
                                                Market Oracle Question
                                            </label>
                                            <input
                                                type="text"
                                                value={question}
                                                onChange={(e) => setQuestion(e.target.value)}
                                                placeholder={selectedTemplate.example}
                                                className="w-full bg-[#050505] border border-[#222] rounded-lg py-4 px-5 text-lg text-white placeholder:text-gray-700 focus:border-cyan-500/50 focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-3 block">
                                                    Category Tag
                                                </label>
                                                <select
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    className="w-full bg-[#050505] border border-[#222] rounded-lg py-4 px-5 text-white focus:border-cyan-500/50 focus:outline-none appearance-none"
                                                >
                                                    <option value="">Select Domain</option>
                                                    <option value="Crypto">Crypto Assets</option>
                                                    <option value="Politics">Geopolitics</option>
                                                    <option value="Sports">Performance Stats</option>
                                                    <option value="Business">Economic Indicators</option>
                                                    <option value="Pop Culture">Emergent Trends</option>
                                                    <option value="Governance">On-Chain Gov</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-3 block">
                                                    Resolution Timestamp
                                                </label>
                                                <input
                                                    type="date"
                                                    value={resolutionDate}
                                                    onChange={(e) => setResolutionDate(e.target.value)}
                                                    className="w-full bg-[#050505] border border-[#222] rounded-lg py-4 px-5 text-white focus:border-cyan-500/50 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-3 block">
                                                Technical Context / Resolution Criteria
                                            </label>
                                            <textarea
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder="Detail exactly how this market should be settled. Ambiguity will result in DAO rejection and lost bonds."
                                                rows={5}
                                                className="w-full bg-[#050505] border border-[#222] rounded-lg py-4 px-5 text-white placeholder:text-gray-700 focus:border-cyan-500/50 focus:outline-none resize-none leading-relaxed"
                                            />
                                        </div>
                                    </div>

                                    {validationErrors.length > 0 && (
                                        <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-5">
                                            <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest mb-3">
                                                <AlertCircle className="w-4 h-4" />
                                                Validation Alert
                                            </div>
                                            <ul className="text-sm text-gray-400 space-y-2">
                                                {validationErrors.map((error, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <span className="text-red-500/50">•</span> {error}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <Button
                                        onClick={handleSubmit}
                                        onMouseEnter={() => { if (selectedTemplate) validateProposal(); }}
                                        className="w-full py-8 bg-white hover:bg-gray-100 text-black font-bold uppercase tracking-[0.2em] text-xs transition-all active:scale-[0.98]"
                                    >
                                        Execute Proposal
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Status Panel */}
                    <div className="space-y-6">
                        <div className="sticky top-32">
                            <div className="bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden">
                                <div className="p-6 border-b border-[#222] bg-[#111]/50">
                                    <h3 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Network className="w-4 h-4 text-cyan-500" />
                                        Protocol Status
                                    </h3>
                                </div>

                                <div className="p-8 space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-gray-500 font-mono">WALLET CONNECTED</div>
                                        <div className={`w-2 h-2 rounded-full ${isWalletConnected ? "bg-emerald-500" : "bg-red-500"}`} />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Stake Balance</div>
                                        <div className="flex items-end gap-2">
                                            <div className="text-3xl font-bold text-white">${balance.toLocaleString()}</div>
                                            <div className="text-xs text-gray-500 mb-1 font-mono">USDC</div>
                                        </div>
                                    </div>

                                    {selectedTemplate && (
                                        <div className="pt-8 border-t border-[#222] space-y-6">
                                            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Deployment Specs</div>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center text-xs">
                                                    <span className="text-gray-500">Primary Oracle:</span>
                                                    <span className="text-white font-mono">{selectedTemplate.oracleClass.split(' ')[0]}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-xs">
                                                    <span className="text-gray-500">Security Bond:</span>
                                                    <span className="text-cyan-500 font-mono">${selectedTemplate.stakeRequired}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-xs">
                                                    <span className="text-gray-500">Review Period:</span>
                                                    <span className="text-white">48H WINDOW</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {!selectedTemplate && (
                                        <div className="p-6 border border-[#222] border-dashed rounded-lg text-center">
                                            <Info className="w-5 h-5 text-gray-600 mx-auto mb-3" />
                                            <p className="text-[10px] text-gray-600 uppercase tracking-tight leading-relaxed">
                                                Select a blueprint to view <br /> deployment requirements
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
                                <h4 className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-3">Submission Tip</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Include specific URLs for resolution benchmarks in the context field to ensure 100% MQI rating.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ProposeMarket;

