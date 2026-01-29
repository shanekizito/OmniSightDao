import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopHolders = () => {
    const yesHolders = [
        { name: "MCGenius", shares: "1,509,816", color: "from-purple-500 to-indigo-500" },
        { name: "768543265", shares: "250,000", color: "from-green-500 to-emerald-500" },
        { name: "SammySledge", shares: "167,434", color: "from-blue-400 to-indigo-400" },
        { name: "DrPufferfish", shares: "165,871", color: "from-pink-500 to-rose-500" },
    ];

    const noHolders = [
        { name: "gmanas", shares: "78,903", color: "from-teal-400 to-cyan-400" },
        { name: "lissartter", shares: "9,899", color: "from-lime-400 to-green-400" },
        { name: "bioo", shares: "9,641", color: "from-fuchsia-500 to-purple-500" },
        { name: "jiandro", shares: "4,400", color: "from-green-600 to-emerald-600" },
    ];

    return (
        <div className="bg-[#121212] border border-[#27272a] rounded-sm p-6">
            <h3 className="text-sm font-bold text-white mb-6">Top Holders</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* YES Holders */}
                <div>
                    <div className="flex justify-between text-xs text-gray-500 font-bold uppercase mb-4 pb-2 border-b border-[#27272a]">
                        <span>Yes Holders</span>
                        <span>Shares</span>
                    </div>
                    <div className="space-y-4">
                        {yesHolders.map((user, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${user.color} border border-white/10`} />
                                    <span className="text-sm font-bold text-gray-200 group-hover:text-white group-hover:underline">{user.name}</span>
                                </div>
                                <span className="text-sm font-mono text-[#059669] font-bold">{user.shares}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NO Holders */}
                <div>
                    <div className="flex justify-between text-xs text-gray-500 font-bold uppercase mb-4 pb-2 border-b border-[#27272a]">
                        <span>No Holders</span>
                        <span>Shares</span>
                    </div>
                    <div className="space-y-4">
                        {noHolders.map((user, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${user.color} border border-white/10`} />
                                    <span className="text-sm font-bold text-gray-200 group-hover:text-white group-hover:underline">{user.name}</span>
                                </div>
                                <span className="text-sm font-mono text-[#dc2626] font-bold">{user.shares}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHolders;
