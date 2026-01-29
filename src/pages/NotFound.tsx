import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Terminal, Activity } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] font-sans selection:bg-orange-500/20 selection:text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

      <div className="text-center relative z-10 p-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-mono tracking-[0.3em] uppercase animate-pulse">
          <AlertTriangle className="w-3 h-3" /> CRITICAL_ERROR: 0x404
        </div>

        <h1 className="text-9xl font-bold text-white mb-6 tracking-tighter opacity-10 blur-[2px] absolute inset-0 flex items-center justify-center -z-10 select-none">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase">
          Null <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sector</span>
        </h2>

        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12 max-w-md mx-auto leading-relaxed">
          The requested path <span className="text-orange-500">[{location.pathname}]</span> does not exist in the OmniSight protocol directory.
        </p>

        <Link to="/" className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[11px] font-mono font-bold text-white uppercase tracking-[0.2em] hover:bg-white/10 hover:border-orange-500/50 transition-all group">
          <Terminal className="w-4 h-4 text-orange-500" />
          Return_to_Core
        </Link>

        <div className="mt-20 flex justify-center gap-12 opacity-20">
          <div className="flex flex-col items-center gap-2">
            <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Latency</div>
            <div className="text-[10px] font-mono text-white uppercase">--ms</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Protocol</div>
            <div className="text-[10px] font-mono text-white uppercase">TCP/IP_V6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

