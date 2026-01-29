import { Share2, Bookmark } from "lucide-react";

export interface MarketProps {
    title: string;
    icon?: string; // URL or emoji
    volume: string;
    chance: number; // 0-100
    color?: "blue" | "red" | "green" | "orange";
    options?: { name: string, percent: number, color?: string }[];
    isBinary?: boolean;
}

const PolyMarketCard = ({ title, icon, volume, options, isBinary = true }: MarketProps) => {
    return (
        <div className="bg-[#1e2332] border border-[#2c3240] hover:border-[#3d4559] rounded-lg p-4 cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-lg group">
            <div className="flex items-start gap-4 mb-4">
                {icon && (
                    <div className="w-10 h-10 shrink-0">
                        <img src={icon} alt="" className="w-full h-full object-contain rounded" />
                    </div>
                )}
                <h3 className="text-white text-base font-medium leading-tight group-hover:underline decoration-slate-500 underline-offset-2">
                    {title}
                </h3>
            </div>

            <div className="space-y-2 mb-4">
                {options?.map((opt, idx) => (
                    <div key={idx} className="flex items-center justify-between group/opt">
                        <div className="flex items-center gap-2">
                            {/* Bar visual could go here if more complex */}
                            <span className="text-slate-300 text-sm font-medium">{opt.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">{opt.percent}%</span>
                            {isBinary && (
                                <div className="flex gap-1 text-[10px] font-bold uppercase">
                                    <span className="bg-[#0e2a2a] text-[#059669] px-1.5 py-0.5 rounded border border-[#059669]/30">Buy Yes</span>
                                    <span className="bg-[#2a1215] text-[#dc2626] px-1.5 py-0.5 rounded border border-[#dc2626]/30">Buy No</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#2c3240]">
                <span className="text-slate-500 text-xs font-medium">${volume} Vol.</span>
                <div className="flex gap-3 text-slate-500">
                    <Share2 className="w-4 h-4 hover:text-white transition-colors" />
                    <Bookmark className="w-4 h-4 hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    );
};

export default PolyMarketCard;
