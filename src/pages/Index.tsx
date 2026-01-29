import OmniNavbar from "@/components/OmniNavbar";
import OmniSubnav from "@/components/OmniSubnav";
import OmniMarketCard, { MarketProps } from "@/components/OmniMarketCard";
import LiveActivitySidebar from "@/components/LiveActivitySidebar";
import { Filter, ArrowRight, Flame, BarChart3, Clock, Zap, Activity, Shield, Terminal } from "lucide-react";
import { useState } from "react";

import { MARKETS } from "@/data/markets";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Trending");

  // Filtering Logic
  const filteredMarkets = activeCategory === "Trending"
    ? MARKETS
    : MARKETS.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col selection:bg-orange-500/20 selection:text-white">
      <OmniNavbar />
      <OmniSubnav activeCategory={activeCategory} onSelect={setActiveCategory} />

      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

      <div className="flex flex-1 relative z-10">
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="px-6 py-12 max-w-[2000px] mx-auto">

            {/* Featured Section - Technical Minimal */}
            {activeCategory === "Trending" && (
              <div className="mb-20 grid grid-cols-1 xl:grid-cols-12 gap-8">
                <div className="xl:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden relative shadow-2xl">
                  {/* HUD Elements */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/15 rounded-tl-2xl z-20 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 rounded-tr-2xl z-20 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/5 rounded-bl-2xl z-20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/15 rounded-br-2xl z-20 pointer-events-none" />

                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-[#0a0a0a] to-[#050505] pointer-events-none" />
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

                  <div className="p-12 relative z-20">

                    <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter mb-8 leading-[0.9] uppercase">
                      Bitcoin <span className="text-gray-500/50">to Hit</span> <span className="text-orange-500"> $100,000</span> <br className="hidden md:block" />
                      <span className="text-gray-500/50 font-light lowercase">in Quarter</span> One?
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl mb-12 font-light leading-relaxed border-l-2 border-white/5 pl-6">
                      Institutional signal strength has increased by 420% since the last epoch. <span className="text-white/80">Resolution parameters set for March 31 verification.</span>
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                      <button className="px-10 py-5 bg-orange-500 rounded-xl shadow-[0_0_40px_rgba(249,115,22,0.1)] active:scale-95">
                        <span className="relative z-10 text-white font-mono text-xs tracking-[0.2em] font-black uppercase">EXECUTE_YES (0.62)</span>
                      </button>

                      <button className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-sm text-gray-400 font-mono text-xs tracking-widest uppercase rounded-xl">
                        ANALYZE_TELEMETRY
                      </button>
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-4 grid grid-cols-1 gap-4">
                  <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">Network Throughput</div>
                      <div className="text-3xl font-bold text-white font-mono">$1.2B <span className="text-xs text-emerald-500 font-normal ml-2">+24%</span></div>
                    </div>
                    <div className="h-[1px] w-full bg-white/5 my-4" />
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-600 uppercase">Signal Reliability</span>
                      <span className="text-xs font-mono text-emerald-500">92.4%</span>
                    </div>
                  </div>
                  <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 flex flex-col justify-between group hover:border-orange-500/30 transition-colors">
                    <div>
                      <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">Active Oracles</div>
                      <div className="text-3xl font-bold text-white font-mono">1,428 <span className="text-xs text-orange-500 font-normal ml-2">VERIFIED</span></div>
                    </div>
                    <div className="h-[1px] w-full bg-white/5 my-4" />
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-600 uppercase">Reputation Quorum</span>
                      <span className="text-xs font-mono text-white">428k OMNI</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-12">
              <div className="space-y-1">
                <h2 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">
                  Protocol Stream
                </h2>
                <div className="text-2xl font-bold text-white uppercase tracking-tight">
                  {activeCategory === "Trending" ? "Active Markets" : `${activeCategory} Cluster`}
                  <span className="ml-4 text-xs font-mono text-gray-600">[{filteredMarkets.length} UNITS]</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#0a0a0a] p-1.5 rounded-xl border border-[#222]">
                {['LIQUID', 'NEWEST', 'CLOSING'].map((filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 rounded-lg text-[10px] font-mono tracking-widest transition-all ${filter === 'LIQUID'
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Discovery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {filteredMarkets.map((market) => (
                <OmniMarketCard key={market.id} {...market} />
              ))}
            </div>
          </div>
        </main>

        {/* Activity Feed */}
        <div className="hidden lg:block">
          <LiveActivitySidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;