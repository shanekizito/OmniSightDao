import { Bell, X, TrendingUp, TrendingDown, Award, Shield, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface Notification {
    id: string;
    type: "trade" | "governance" | "market" | "reward";
    title: string;
    message: string;
    timestamp: Date;
    read: boolean;
    actionUrl?: string;
}

const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: "1",
        type: "trade",
        title: "Position Profitable",
        message: "Your Bitcoin $100k position is up 24%",
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
        read: false,
        actionUrl: "/portfolio"
    },
    {
        id: "2",
        type: "governance",
        title: "Proposal Approved",
        message: "Ethereum $10k market has been approved",
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        read: false,
        actionUrl: "/governance"
    },
    {
        id: "3",
        type: "reward",
        title: "Reputation Earned",
        message: "+5 reputation for accurate prediction",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
        read: true
    }
];

export const NotificationCenter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id: string) => {
        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, read: true } : n)
        );
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const getIcon = (type: string) => {
        switch (type) {
            case "trade": return <TrendingUp className="w-4 h-4 text-[#059669]" />;
            case "governance": return <Shield className="w-4 h-4 text-[#FF5500]" />;
            case "reward": return <Award className="w-4 h-4 text-yellow-500" />;
            default: return <AlertCircle className="w-4 h-4 text-gray-400" />;
        }
    };

    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);

        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${Math.floor(hours / 24)}d ago`;
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
                <Bell className="w-5 h-5 text-gray-400" />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#FF5500] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center pulse-glow">
                        {unreadCount}
                    </span>
                )}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 top-12 w-96 glass-strong border border-[#27272a] rounded-lg shadow-premium-lg z-50 animate-slide-in-up">
                        <div className="p-4 border-b border-[#27272a] flex items-center justify-between">
                            <h3 className="font-bold text-white">Notifications</h3>
                            <div className="flex items-center gap-2">
                                {unreadCount > 0 && (
                                    <button
                                        onClick={markAllAsRead}
                                        className="text-xs text-[#FF5500] hover:underline"
                                    >
                                        Mark all read
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-[#1a1a1a] rounded transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        <div className="max-h-96 overflow-y-auto custom-scrollbar">
                            {notifications.length === 0 ? (
                                <div className="p-8 text-center text-gray-500">
                                    <Bell className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                    <p className="text-sm">No notifications yet</p>
                                </div>
                            ) : (
                                <div className="p-2">
                                    {notifications.map((notif) => (
                                        <button
                                            key={notif.id}
                                            onClick={() => {
                                                markAsRead(notif.id);
                                                if (notif.actionUrl) {
                                                    window.location.href = notif.actionUrl;
                                                }
                                            }}
                                            className={`w-full text-left p-3 rounded-lg mb-2 transition-all hover-lift ${notif.read
                                                    ? "bg-transparent hover:bg-[#1a1a1a]/50"
                                                    : "bg-[#FF5500]/5 border border-[#FF5500]/20 hover:bg-[#FF5500]/10"
                                                }`}
                                        >
                                            <div className="flex gap-3">
                                                <div className="mt-0.5">{getIcon(notif.type)}</div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between gap-2 mb-1">
                                                        <h4 className="text-sm font-bold text-white truncate">
                                                            {notif.title}
                                                        </h4>
                                                        <span className="text-[10px] text-gray-500 whitespace-nowrap">
                                                            {formatTime(notif.timestamp)}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-400 line-clamp-2">
                                                        {notif.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
