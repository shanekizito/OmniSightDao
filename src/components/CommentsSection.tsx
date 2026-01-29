import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Share2, MoreHorizontal } from "lucide-react";

const comments = [
    { user: "PalestineGambler", time: "1h ago", text: "Can someone donate a dollar so I can gamble? Anything helps!", likes: 0, avatar: "🇵🇸" },
    { user: "CryptoKing", time: "2h ago", text: "This is free money at this price. Whales are loading up.", likes: 12, avatar: "👑" },
    { user: "BearishBob", time: "4h ago", text: "No way this fixes by March. Delusional.", likes: 5, avatar: "🐻" },
];

const CommentsSection = () => {
    return (
        <div className="bg-[#121212] border border-[#27272a] rounded-sm p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    Comments <span className="text-gray-500">(487)</span>
                </h3>
            </div>

            {/* Input */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full bg-[#0a0a0c] border border-[#27272a] rounded-sm py-3 px-4 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors"
                />
                <div className="flex justify-end mt-2">
                    <Button size="sm" className="bg-[#1a1a1a] hover:bg-[#FF5500] text-gray-300 hover:text-white font-bold text-xs uppercase transition-colors">
                        Post
                    </Button>
                </div>
            </div>

            {/* List */}
            <div className="space-y-6">
                {comments.map((comment, i) => (
                    <div key={i} className="flex gap-4 group">
                        <Avatar className="w-8 h-8 rounded-full border border-[#27272a]">
                            <AvatarFallback className="bg-[#1a1a1a]">{comment.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-white">{comment.user}</span>
                                <span className="text-xs text-gray-500">{comment.time}</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-2 leading-relaxed">{comment.text}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <button className="flex items-center gap-1 hover:text-white transition-colors">
                                    <Heart className="w-3.5 h-3.5" /> {comment.likes}
                                </button>
                                <button className="flex items-center gap-1 hover:text-white transition-colors">
                                    Reply
                                </button>
                                <button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 hover:text-white">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentsSection;
