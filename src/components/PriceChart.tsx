import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

// Generate high-density mock data (simulating minute-by-minute updates)
const generateData = () => {
    const data = [];
    let price = 45; // Start price
    const now = new Date();

    // Generate 200 points
    for (let i = 0; i < 200; i++) {
        // Random Walk
        const change = (Math.random() - 0.48) * 2; // Slight upward bias
        price = Math.max(1, Math.min(99, price + change));

        // Time simulation (going back 24 hours)
        const time = new Date(now.getTime() - (200 - i) * 1000 * 60 * 5); // 5 min interval

        data.push({
            time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            originalTime: time,
            yes: parseFloat(price.toFixed(2)),
            no: parseFloat((100 - price).toFixed(2))
        });
    }
    return data;
};

const data = generateData();

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#1a1a1a] border border-[#27272a] p-3 rounded shadow-xl">
                <p className="text-gray-400 text-xs mb-1 font-mono">{label}</p>
                <div className="flex items-center gap-4">
                    <div>
                        <span className="text-[10px] uppercase text-gray-500 font-bold block">Yes</span>
                        <span className="text-[#059669] font-bold font-mono text-lg">{payload[0].value}%</span>
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-gray-500 font-bold block">No</span>
                        <span className="text-[#dc2626] font-bold font-mono text-lg">{payload[0].payload.no}%</span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

const PriceChart = () => {
    return (
        <div className="w-full h-full select-none">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorYes" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#059669" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a1a1a" />
                    <XAxis
                        dataKey="time"
                        stroke="#525252"
                        tick={{ fill: '#525252', fontSize: 10, fontFamily: 'monospace' }}
                        tickLine={false}
                        axisLine={false}
                        minTickGap={50} // Prevent overlapping ticks
                    />
                    <YAxis
                        stroke="#525252"
                        tick={{ fill: '#525252', fontSize: 10, fontFamily: 'monospace' }}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                        orientation="right"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#525252', strokeWidth: 1, strokeDasharray: '4 4' }} />
                    <Area
                        type="monotone" // Use linear for "jagged" look or monotone for smooth. High density makes linear look good too.
                        dataKey="yes"
                        stroke="#059669"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorYes)"
                        isAnimationActive={false} // Disable animation for instant dense load
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PriceChart;
