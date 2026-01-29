import { TrendingUp, Globe, Trophy, Bitcoin, LineChart, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
    { name: "Trending", icon: TrendingUp },
    { name: "Politics", icon: Globe }, // Using Globe as proxy for Politics
    { name: "Sports", icon: Trophy },
    { name: "Crypto", icon: Bitcoin },
    { name: "Finance", icon: LineChart },
    { name: "Geopolitics", icon: Globe2 },
];

interface PolySubnavProps {
    activeCategory?: string;
    onSelect?: (category: string) => void;
}

const PolySubnav = ({ activeCategory = "Trending", onSelect }: PolySubnavProps) => {
    return (
        <div className="flex flex-col border-b border-[#2c3240] bg-[#1e2332]">
            {/* Main Categories */}
            <div className="flex items-center gap-6 px-4 py-3 overflow-x-auto no-scrollbar">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = cat.name === activeCategory;
                    return (
                        <button
                            key={cat.name}
                            onClick={() => onSelect?.(cat.name)}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors",
                                isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            {cat.name === "Trending" && <Icon className="w-4 h-4" />}
                            {cat.name}
                        </button>
                    )
                })}
            </div>

            {/* Sub/Filter Tags (example based on screenshot) */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#252a3a] overflow-x-auto no-scrollbar">
                <span className="px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-semibold cursor-pointer border border-blue-500/20">All</span>
                {["Trump", "NFL Playoffs", "Greenland", "Oscars", "Tariffs", "Fed", "Equities"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded hover:bg-[#2c3240] text-slate-400 hover:text-slate-200 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PolySubnav;
