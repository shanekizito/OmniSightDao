import OmniNavbar from "@/components/OmniNavbar";
import { Mail, MessageCircle, Twitter, Fingerprint, Activity, Terminal } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
            <OmniNavbar />

            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full bg-white/5 border border-white/10 text-orange-500 text-[10px] font-mono tracking-[0.3em] uppercase">
                    <Activity className="w-3 h-3" /> COMM_NODE_SIGNAL: ONLINE
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                    Get in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Touch</span>
                </h1>
                <p className="text-lg text-gray-500 font-mono uppercase leading-relaxed tracking-tight mb-20 max-w-2xl mx-auto">
                    OmniSight is a decentralized autonomous organization. Direct coordination occurs via verified protocol channels and governance threads.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "X / TWITTER", val: "@OmniSightDAO", icon: Twitter, color: "#1DA1F2" },
                        { label: "DISCORD", val: "Omni_Protocol", icon: MessageCircle, color: "#5865F2" },
                        { label: "EMAIL_STRM", val: "core@omnisight.xyz", icon: Mail, color: "#FF5500" }
                    ].map((item, i) => (
                        <a key={i} href="#" className="bg-[#0a0a0a] border border-[#222] p-10 rounded-2xl hover:border-orange-500/20 transition-all flex flex-col items-center gap-6 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-14 h-14 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                            </div>
                            <div className="space-y-2 relative z-10">
                                <div className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-widest">{item.label}</div>
                                <div className="text-sm font-mono font-bold text-white uppercase group-hover:text-orange-500 transition-colors">{item.val}</div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-32 p-10 border border-white/5 bg-white/[0.01] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex gap-12 text-left">
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Public Key</div>
                            <div className="text-[11px] font-mono font-bold text-gray-400 uppercase">0x8B...F9A2</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Node ID</div>
                            <div className="text-[11px] font-mono font-bold text-orange-500 uppercase">OMNI_PRIME_01</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
                        <Terminal className="w-4 h-4 text-orange-500" />
                        <span className="text-[11px] font-mono font-bold text-white uppercase tracking-widest">Open_Governance_Forum</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;

