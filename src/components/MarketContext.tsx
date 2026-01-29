import { Info, ExternalLink, ShieldCheck, FileText } from "lucide-react";

import { type Market } from "@/data/markets";

interface MarketContextProps {
    market: Market;
}

const MarketContext = ({ market }: MarketContextProps) => {
    return (
        <div className="bg-[#121212] border border-[#27272a] rounded-sm p-8">
            <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#FF5500]/10 rounded-sm flex items-center justify-center shrink-0">
                    <img src={market.icon} className="w-8 h-8 object-contain opacity-90" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-4">Market Resolution Rules</h3>
                    <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                        <p className="mb-4">
                            This market will resolve to <strong className="text-white">"YES"</strong> if {market.description || market.title}
                        </p>
                        <p className="mb-0">
                            Resolution data will be sourced from <a href="#" className="text-[#059669] hover:underline">CoinGecko</a> and <a href="#" className="text-[#059669] hover:underline">Binance</a> closer prices. If sources differ by &gt;1%, the median of 5 major exchanges will be used.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Oracle Config</h4>
                        <div className="flex items-center gap-3 bg-[#1a1a1a] p-3 rounded border border-[#27272a]">
                            <ShieldCheck className="w-5 h-5 text-gray-400" />
                            <div>
                                <div className="text-white text-xs font-bold">UMA Optimistic Oracle</div>
                                <div className="text-gray-500 text-[10px]">Bond: 500 OMNI</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Relevant Links</h4>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="flex items-center gap-2 text-xs text-[#059669] hover:text-white transition-colors">
                                <ExternalLink className="w-3 h-3" /> CoinGecko BTC/USD
                            </a>
                            <a href="#" className="flex items-center gap-2 text-xs text-[#059669] hover:text-white transition-colors">
                                <FileText className="w-3 h-3" /> UMA TIP-42 Standard
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Background Info</h4>
                    <p className="text-xs text-gray-500 leading-normal">
                        Bitcoin has been rallying since the ETF approval. Analysts predict a supply shock post-halving could drive prices to six figures. However, macro headwinds from the Fed remain a risk factor.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MarketContext;
