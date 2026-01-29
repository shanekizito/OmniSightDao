import OmniNavbar from "@/components/OmniNavbar";
import { useParams } from "react-router-dom";
import {
    ArrowLeft,
    Wallet,
    Waves,
    Zap,
    Shield,
    Command,
    Signal,
    Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import { toast } from "sonner";
import { getVaultById } from "@/data/vaults";

const VaultDetail = () => {
    const { id } = useParams();
    const { stake, balance } = useUser();
    const [amount, setAmount] = useState("");

    const vault = getVaultById(id || "1");

    if (!vault) {
        return (
            <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col">
                <OmniNavbar />
                <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Entity Not Detected</h1>
                        <Link to="/earn" className="text-orange-500 hover:underline font-mono text-xs tracking-widest uppercase">← RESTORE_STREAM</Link>
                    </div>
                </main>
            </div>
        );
    }

    const handleStake = () => {
        if (!amount) return;
        if (stake(parseFloat(amount), vault.name)) {
            setAmount("");
            toast.success(`Allocated $${amount} to ${vault.name.toUpperCase().replace(/\s+/g, '_')}_STRATEGY`);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="mb-12">
                    <Link to="/earn" className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all text-[10px] font-mono font-bold uppercase tracking-widest group">
                        <div className="p-2 border border-[#222] group-hover:border-orange-500/50 rounded-lg transition-colors">
                            <ArrowLeft className="w-3.5 h-3.5" />
                        </div>
                        Return to Logistics_Hub
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Col: Strategy Telemetry */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-10 relative overflow-hidden group">
                            <div className={`absolute inset-0 bg-gradient-to-br from-${vault.colorCode}/[0.03] to-transparent pointer-events-none`} />

                            <div className="flex items-start justify-between mb-10 relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-orange-500 text-[9px] font-mono tracking-widest uppercase">
                                        <Waves className="w-3 h-3" /> Yield_Stream_Active
                                    </div>
                                    <h1 className="text-4xl font-bold text-white tracking-tight uppercase mb-4">{vault.name}</h1>
                                    <p className="text-gray-500 max-w-xl text-xs font-mono uppercase leading-relaxed tracking-tight">
                                        {vault.detailDesc}
                                    </p>
                                </div>
                                <div className="bg-[#111] p-4 rounded-xl border border-[#222] group-hover:border-orange-500/30 transition-all">
                                    <vault.icon className={`w-10 h-10 ${vault.color} opacity-80`} />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mb-12">
                                <div className="bg-white/[0.02] p-6 rounded-xl border border-white/5">
                                    <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-2">TARGET_APY</div>
                                    <div className="text-3xl font-mono font-bold text-emerald-500 tracking-tighter">{vault.apy}</div>
                                </div>
                                <div className="bg-white/[0.02] p-6 rounded-xl border border-white/5">
                                    <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-2">COMMITTED_TVL</div>
                                    <div className="text-2xl font-mono font-bold text-white uppercase">{vault.tvlDetail}</div>
                                </div>
                                <div className="bg-white/[0.02] p-6 rounded-xl border border-white/5">
                                    <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-2">UTILIZATION</div>
                                    <div className="text-2xl font-mono font-bold text-white uppercase">{vault.utilization}</div>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] flex items-center gap-2">
                                    <Command className="w-3.5 h-3.5 text-orange-500" />
                                    Execution_Logic
                                </h3>
                                <ul className="space-y-4">
                                    {vault.logic.map((step, i) => (
                                        <li key={i} className="flex gap-4 items-start bg-white/[0.01] p-4 rounded-lg border border-white/[0.02]">
                                            <Signal className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-tight">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Logistics Terminal */}
                    <div className="lg:col-span-4 h-fit sticky top-24">
                        <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 shadow-2xl ring-1 ring-orange-500/10">
                            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-orange-500" />
                                Deposit_Assets
                            </h3>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <div className="flex justify-between text-[9px] font-mono text-gray-500 mb-3 uppercase tracking-widest">
                                        <span>Allocation (USDC)</span>
                                        <span className="flex items-center gap-2 text-white/50"><Wallet className="w-3 h-3 text-orange-500" /> AVAIL: ${balance.toFixed(2)}</span>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="w-full bg-[#111] border border-[#222] rounded-xl py-5 px-6 pl-10 text-white font-mono text-lg focus:border-orange-500/50 focus:outline-none transition-all placeholder:text-gray-800"
                                            placeholder="0.00"
                                        />
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-mono">$</span>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                            <button className="text-[10px] font-mono text-orange-500 hover:text-white transition-colors">MAX</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 py-6 border-y border-white/5">
                                <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    <span>Weekly_Efficiency</span>
                                    <span className="text-emerald-500 font-bold">+${(parseFloat(amount || "0") * vault.apyValue / 52).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    <span>Protocol_Fee</span>
                                    <span className="text-white">0.00%</span>
                                </div>
                            </div>

                            <Button
                                onClick={handleStake}
                                disabled={!amount}
                                className="w-full py-8 bg-white hover:bg-orange-500 hover:text-white text-black font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-2xl shadow-white/5 disabled:opacity-20 disabled:grayscale"
                            >
                                INITIATE_STAKE
                            </Button>

                            <div className="mt-8 flex flex-col items-center gap-4 text-[9px] font-mono text-gray-600 uppercase tracking-[0.1em]">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-3 h-3 text-emerald-500" /> Verification: AUDITED_BY_SHERLOCK
                                </div>
                                <p className="text-center leading-relaxed">
                                    Assets are locked in a non-custodial yield contract. Withdrawal capability is restricted to resolution epochs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VaultDetail;


