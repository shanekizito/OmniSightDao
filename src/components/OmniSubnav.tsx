import { Flame, Globe, Trophy, Coins, Briefcase, Zap, Cpu, TrendingUp, Film, Microscope, Gamepad2, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
    { name: "Trending", icon: Flame },
    { name: "Politics", icon: Globe },
    { name: "Sports", icon: Trophy },
    { name: "Crypto", icon: Coins },
    { name: "Business", icon: Briefcase },
    { name: "Technology", icon: Cpu },
    { name: "Finance", icon: TrendingUp },
    { name: "Entertainment", icon: Film },
    { name: "Science", icon: Microscope },
    { name: "Gaming", icon: Gamepad2 },
    { name: "News", icon: Newspaper },
    { name: "Pop Culture", icon: Zap },
];

interface OmniSubnavProps {
    activeCategory?: string;
    onSelect?: (category: string) => void;
}

const OmniSubnav = ({ activeCategory = "Trending", onSelect }: OmniSubnavProps) => {
    return (
        <div className="flex flex-col border-b border-cyan-500/20 bg-[#0a0a0a]/95 sticky top-0 z-50 backdrop-blur-md">
            <div className="px-6">
                <div className="flex items-center gap-10 py-3.5 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = cat.name === activeCategory;
                        return (
                            <button
                                key={cat.name}
                                onClick={() => onSelect?.(cat.name)}
                                className={cn(
                                    "flex items-center gap-2.5 text-sm font-medium whitespace-nowrap transition-all group",
                                    isActive ? "text-[#FF5500]" : "text-gray-400 hover:text-gray-200"
                                )}
                            >
                                <div className={cn(
                                    "p-1.5 rounded-sm transition-all",
                                    isActive ? "bg-[#FF5500]/15" : "bg-transparent group-hover:bg-[#1a1a1a]"
                                )}>
                                    <Icon className={cn("w-4 h-4", isActive ? "fill-[#FF5500]" : "")} />
                                </div>
                                <span className={cn(
                                    "tracking-wide uppercase text-xs font-bold",
                                    isActive ? "text-[#FF5500]" : ""
                                )}>{cat.name}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default OmniSubnav;
