import { Search, TrendingUp, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface AdvancedSearchProps {
    onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
    query: string;
    category: string;
    minVolume: number;
    maxVolume: number;
    sortBy: "volume" | "newest" | "ending" | "popular";
    status: "all" | "active" | "resolved";
}

export const AdvancedSearch = ({ onSearch }: AdvancedSearchProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [filters, setFilters] = useState<SearchFilters>({
        query: "",
        category: "all",
        minVolume: 0,
        maxVolume: 1000000,
        sortBy: "volume",
        status: "active"
    });

    const handleSearch = () => {
        onSearch(filters);
    };

    const resetFilters = () => {
        const defaultFilters: SearchFilters = {
            query: "",
            category: "all",
            minVolume: 0,
            maxVolume: 1000000,
            sortBy: "volume",
            status: "active"
        };
        setFilters(defaultFilters);
        onSearch(defaultFilters);
    };

    return (
        <div className="w-full">
            {/* Main Search Bar */}
            <div className="flex gap-2">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        value={filters.query}
                        onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        placeholder="Search markets, assets, or events..."
                        className="w-full bg-[#121212] border border-[#27272a] rounded-sm py-2.5 pl-10 pr-4 text-sm text-gray-200 focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] placeholder:text-gray-600 transition-all"
                    />
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`px-4 py-2.5 rounded-sm border transition-all ${isExpanded
                            ? "bg-[#FF5500] border-[#FF5500] text-white"
                            : "bg-[#121212] border-[#27272a] text-gray-400 hover:border-[#FF5500]/50"
                        }`}
                >
                    <SlidersHorizontal className="w-4 h-4" />
                </button>

                <button
                    onClick={handleSearch}
                    className="px-6 py-2.5 gradient-orange text-white rounded-sm font-bold hover-lift transition-smooth"
                >
                    Search
                </button>
            </div>

            {/* Advanced Filters Panel */}
            {isExpanded && (
                <div className="mt-4 glass-strong border border-[#27272a] rounded-sm p-6 animate-slide-in-up">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wide">Advanced Filters</h3>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="p-1 hover:bg-[#1a1a1a] rounded transition-colors"
                        >
                            <X className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Category Filter */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 block">
                                Category
                            </label>
                            <select
                                value={filters.category}
                                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-sm py-2 px-3 text-sm text-white focus:border-[#FF5500] focus:outline-none"
                            >
                                <option value="all">All Categories</option>
                                <option value="Crypto">Crypto</option>
                                <option value="Politics">Politics</option>
                                <option value="Sports">Sports</option>
                                <option value="Business">Business</option>
                                <option value="Pop Culture">Pop Culture</option>
                            </select>
                        </div>

                        {/* Sort By */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 block">
                                Sort By
                            </label>
                            <select
                                value={filters.sortBy}
                                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-sm py-2 px-3 text-sm text-white focus:border-[#FF5500] focus:outline-none"
                            >
                                <option value="volume">Highest Volume</option>
                                <option value="newest">Newest First</option>
                                <option value="ending">Ending Soon</option>
                                <option value="popular">Most Popular</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 block">
                                Status
                            </label>
                            <select
                                value={filters.status}
                                onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
                                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-sm py-2 px-3 text-sm text-white focus:border-[#FF5500] focus:outline-none"
                            >
                                <option value="all">All Markets</option>
                                <option value="active">Active Only</option>
                                <option value="resolved">Resolved</option>
                            </select>
                        </div>

                        {/* Volume Range */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 block">
                                Min Volume
                            </label>
                            <input
                                type="number"
                                value={filters.minVolume}
                                onChange={(e) => setFilters({ ...filters, minVolume: parseInt(e.target.value) || 0 })}
                                placeholder="Min volume"
                                className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-sm py-2 px-3 text-sm text-white focus:border-[#FF5500] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <button
                            onClick={handleSearch}
                            className="flex-1 px-6 py-2.5 gradient-orange text-white rounded-sm font-bold hover-lift transition-smooth"
                        >
                            Apply Filters
                        </button>
                        <button
                            onClick={resetFilters}
                            className="px-6 py-2.5 glass border border-[#27272a] text-gray-400 rounded-sm font-bold hover:text-white hover:border-[#FF5500]/50 transition-all"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
