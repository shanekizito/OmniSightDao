import { BarChart2, Zap, ArrowUpRight, Activity, Globe, Coins, Trophy, Landmark, FlaskConical, Music, Tv2, Gamepad2, Newspaper, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface MarketProps {
    id: string | number;
    title: string;
    icon?: string;
    volume: string;
    chance: number;
    category?: string;
    options?: { name: string, percent: number }[];
    isBinary?: boolean;
}

const OmniMarketCard = ({ id, title, icon, volume, chance, category, isBinary = true }: MarketProps) => {
    const [imgError, setImgError] = useState(false);
    const isBinaryMarket = isBinary ?? true;
    const binaryColor = chance >= 50 ? "text-emerald-500" : "text-red-500";
    const yesPrice = (chance / 100).toFixed(2);
    const noPrice = ((100 - chance) / 100).toFixed(2);

    const getFallbackIcon = () => {
        switch (category) {
            case 'Sports': return <Trophy className="w-6 h-6 text-cyan-500 opacity-60" />;
            case 'Politics': return <Globe className="w-6 h-6 text-blue-500 opacity-60" />;
            case 'Crypto': return <Coins className="w-6 h-6 text-orange-500 opacity-60" />;
            case 'Business':
            case 'Finance': return <Landmark className="w-6 h-6 text-emerald-500 opacity-60" />;
            case 'Science':
            case 'Technology': return <FlaskConical className="w-6 h-6 text-purple-500 opacity-60" />;
            case 'Entertainment':
            case 'Pop Culture': return <Music className="w-6 h-6 text-pink-500 opacity-60" />;
            case 'Gaming': return <Gamepad2 className="w-6 h-6 text-red-500 opacity-60" />;
            case 'News': return <Newspaper className="w-6 h-6 text-gray-500 opacity-60" />;
            default: return <HelpCircle className="w-6 h-6 text-gray-500 opacity-60" />;
        }
    };

    return (
        <div className="block h-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between selection:bg-orange-500/20 selection:text-white shadow-lg">

            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500/10 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500/10 rounded-br-xl" />

            <div className="absolute top-0 right-0 p-4 opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)] animate-pulse" />
            </div>

            <Link to={`/market/${id}`} className="block">
                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="flex gap-4 w-full">
                        <div className="w-12 h-12 bg-[#0d0d0d] rounded-lg p-2 shrink-0 border border-white/5 flex items-center justify-center overflow-hidden">
                            {icon && !imgError ? (
                                <img
                                    src={icon}
                                    alt=""
                                    className="w-full h-full object-contain"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                getFallbackIcon()
                            )}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-white text-[13px] font-bold leading-tight line-clamp-2 uppercase tracking-tight mb-2">
                                {title}
                            </h3>

                            <div className="flex items-center gap-3">
                                {category && (
                                    <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-gray-500/80">
                                        {category}
                                    </span>
                                )}
                                <div className="h-2 w-[1px] bg-white/5" />
                                <span className="flex items-center gap-1 text-[9px] font-mono text-gray-600 uppercase">
                                    <BarChart2 className="w-3 h-3 opacity-40" />
                                    ${volume}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Probability Display */}
                <div className="flex items-end justify-between mb-8 px-1">
                    <div className="space-y-1">
                        <span className="text-[9px] font-mono font-bold text-gray-700 uppercase tracking-widest block mb-1">Reality convergence</span>
                        <div className="flex items-baseline gap-2">
                            <span className={`text-5xl font-bold tracking-tighter ${binaryColor} font-mono`}>
                                {chance}%
                            </span>
                            <div className={`flex items-center gap-1 text-[9px] font-mono ${chance >= 50 ? 'text-emerald-500' : 'text-red-500'} opacity-60 uppercase`}>
                                <Activity className="w-3 h-3" />
                                Pulse
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end gap-[3px] h-12 opacity-20">
                        {[0.3, 0.6, 0.45, 0.8, 0.55, 0.95].map((h, i) => (
                            <div
                                key={i}
                                className={`w-1 rounded-full ${i === 5 ? binaryColor.replace('text-', 'bg-') : 'bg-white'}`}
                                style={{ height: `${h * 100}%` }}
                            />
                        ))}
                    </div>
                </div>
            </Link>

            {/* Trading Options */}
            <div className="grid grid-cols-2 gap-3 relative z-10 pt-5 border-t border-white/5">
                <Link to={`/market/${id}?side=YES`} className="flex flex-col items-center gap-1 py-3 px-2 bg-emerald-500/5 border border-emerald-500/10 rounded-lg transition-all duration-300">
                    <span className="text-[9px] font-mono font-black uppercase text-emerald-500/60">Stake_Yes</span>
                    <span className="text-sm font-mono font-black text-white">${yesPrice}</span>
                </Link>
                <Link to={`/market/${id}?side=NO`} className="flex flex-col items-center gap-1 py-3 px-2 bg-red-500/5 border border-red-500/10 rounded-lg transition-all duration-300">
                    <span className="text-[9px] font-mono font-black uppercase text-red-500/60">Stake_No</span>
                    <span className="text-sm font-mono font-black text-white">${noPrice}</span>
                </Link>
            </div>
        </div>
    );
};

export default OmniMarketCard;

