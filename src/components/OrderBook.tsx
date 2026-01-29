import { ArrowDown, ArrowUp } from "lucide-react";

const OrderBook = () => {
    // Mock Data
    const asks = [
        { price: 0.65, size: 12000, total: 12000 },
        { price: 0.64, size: 8500, total: 20500 },
        { price: 0.63, size: 45000, total: 65500 },
    ].reverse(); // Show lowest ask at bottom

    const bids = [
        { price: 0.61, size: 55000, total: 55000 },
        { price: 0.60, size: 12000, total: 67000 },
        { price: 0.59, size: 8000, total: 75000 },
    ];

    return (
        <div className="w-full h-full flex flex-col bg-[#0a0a0c]">
            {/* Header */}
            <div className="grid grid-cols-3 text-[10px] font-bold text-gray-500 uppercase px-4 py-2 border-b border-[#1a1a1a]">
                <span className="text-left">Price (USDC)</span>
                <span className="text-right">Size</span>
                <span className="text-right">Total</span>
            </div>

            <div className="flex-1 overflow-y-auto font-mono text-xs">
                {/* Asks (Sellers) */}
                <div className="flex flex-col-reverse">
                    {asks.map((ask, i) => (
                        <div key={i} className="grid grid-cols-3 px-4 py-1 hover:bg-[#1a1a1a] relative group">
                            <span className="text-[#dc2626] relative z-10">{ask.price.toFixed(2)}</span>
                            <span className="text-gray-300 text-right relative z-10">{ask.size.toLocaleString()}</span>
                            <span className="text-gray-500 text-right relative z-10">{ask.total.toLocaleString()}</span>
                            {/* Depth Viz */}
                            <div className="absolute top-0 right-0 bottom-0 bg-[#dc2626]/10 z-0" style={{ width: `${(ask.total / 80000) * 100}%` }} />
                        </div>
                    ))}
                </div>

                {/* Spread Info */}
                <div className="py-2 border-y border-[#1a1a1a] bg-[#121212] flex justify-between items-center px-4 font-bold">
                    <span className="text-gray-400 text-xs">Spread</span>
                    <span className="text-white text-sm">1¢ <span className="text-gray-600 text-[10px] font-normal">(1.6%)</span></span>
                </div>

                {/* Bids (Buyers) */}
                <div>
                    {bids.map((bid, i) => (
                        <div key={i} className="grid grid-cols-3 px-4 py-1 hover:bg-[#1a1a1a] relative group">
                            <span className="text-[#059669] relative z-10">{bid.price.toFixed(2)}</span>
                            <span className="text-gray-300 text-right relative z-10">{bid.size.toLocaleString()}</span>
                            <span className="text-gray-500 text-right relative z-10">{bid.total.toLocaleString()}</span>
                            {/* Depth Viz */}
                            <div className="absolute top-0 right-0 bottom-0 bg-[#059669]/10 z-0" style={{ width: `${(bid.total / 80000) * 100}%` }} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-3 border-t border-[#1a1a1a] flex justify-center gap-4 text-[10px] text-gray-500">
                <div className="flex items-center gap-1"><ArrowUp className="w-3 h-3 text-[#059669]" /> More Bids</div>
                <div className="flex items-center gap-1"><ArrowDown className="w-3 h-3 text-[#dc2626]" /> More Asks</div>
            </div>
        </div>
    );
};

export default OrderBook;
