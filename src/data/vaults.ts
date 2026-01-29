import {
    Globe,
    Coins,
    Banknote,
    Trophy,
    LucideIcon
} from "lucide-react";

export interface Vault {
    id: number;
    name: string;
    apy: string;
    apyValue: number;
    tvl: string;
    tvlDetail: string;
    utilization: string;
    risk: string;
    desc: string;
    detailDesc: string;
    icon: LucideIcon;
    color: string;
    colorCode: string;
    logic: string[];
}

export const VAULTS: Vault[] = [
    {
        id: 1,
        name: "US Politics 2026",
        apy: "18.42%",
        apyValue: 0.1842,
        tvl: "$4,500,000",
        tvlDetail: "$4.52M",
        utilization: "82.4%",
        risk: "Low",
        desc: "Provides liquidity to top political election markets via multi-source consensus.",
        detailDesc: "Automated Market Maker (AMM) deployment strategy providing deep liquidity to US-based political outcomes. Optimized for volatility convergence.",
        icon: Globe,
        color: "text-blue-500",
        colorCode: "blue-500",
        logic: [
            "Automated routing to high-volume electoral nodes.",
            "Bi-hourly rebalancing to neutralize impermanent loss delta.",
            "Direct fee compounding via resolution layer recycling."
        ]
    },
    {
        id: 2,
        name: "Crypto Alpha",
        apy: "45.12%",
        apyValue: 0.4512,
        tvl: "$1,200,000",
        tvlDetail: "$1.21M",
        utilization: "94.1%",
        risk: "High",
        desc: "Farm fees from volatile memecoin prediction markets with high-impact triggers.",
        detailDesc: "Aggressive yield strategy focusing on high-volume crypto asset prediction markets. Leverages volatility spikes to capture maximal protocol fees.",
        icon: Coins,
        color: "text-orange-500",
        colorCode: "orange-500",
        logic: [
            "High-frequency exposure to memecoin volatility spikes.",
            "Delta-neutral hedging on major assets during spikes.",
            "Priority fee extraction from high-conviction order flow."
        ]
    },
    {
        id: 3,
        name: "Stablecoin Yield",
        apy: "5.25%",
        apyValue: 0.0525,
        tvl: "$15,000,000",
        tvlDetail: "$15.08M",
        utilization: "65.8%",
        risk: "Min",
        desc: "Looping logic on Aave + Curve liquidity provision with automated delta hedging.",
        detailDesc: "Conservative capital preservation strategy using institutional-grade stablecoin pools. Optimized for low-risk, consistent accumulation.",
        icon: Banknote,
        color: "text-emerald-500",
        colorCode: "emerald-500",
        logic: [
            "Capital-efficient looping via recursive lending protocols.",
            "Dynamic interest rate monitoring and automated switching.",
            "Multi-layer insurance backing for de-peg protection."
        ]
    },
    {
        id: 4,
        name: "Sports Max",
        apy: "22.80%",
        apyValue: 0.228,
        tvl: "$3,100,000",
        tvlDetail: "$3.12M",
        utilization: "78.2%",
        risk: "Med",
        desc: "Liquidity for NFL, NBA, and Premier League matches using institutional oracle feeds.",
        detailDesc: "Specialized liquidity provision for major global sporting events. Utilizes high-integrity oracle feeds for rapid precision resolution.",
        icon: Trophy,
        color: "text-cyan-500",
        colorCode: "cyan-500",
        logic: [
            "Liquidity concentration around high-liquidity sports events.",
            "Real-time odds synchronization with global bookmakers.",
            "Automated resolution via multiple premium oracle providers."
        ]
    },
];

export const getVaultById = (id: string | number): Vault | undefined => {
    const numId = typeof id === 'string' ? parseInt(id) : id;
    return VAULTS.find(v => v.id === numId);
};
