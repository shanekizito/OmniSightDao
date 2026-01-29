// Shared market data across the application
export interface Market {
    id: number;
    title: string;
    icon: string;
    volume: string;
    chance: number;
    category: string;
    description?: string;
    endDate?: string;
}

export const MARKETS: Market[] = [
    {
        id: 1,
        title: "Super Bowl 2026 Champion",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png",
        volume: "688.4M",
        chance: 38,
        category: "Sports",
        description: "Will the Kansas City Chiefs win Super Bowl LX in February 2026?",
        endDate: "February 9, 2026"
    },
    {
        id: 2,
        title: "Next Fed Chair Nomination",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Seal_of_the_Federal_Reserve_System_of_the_United_States.svg/512px-Seal_of_the_Federal_Reserve_System_of_the_United_States.svg.png",
        volume: "251.2M",
        chance: 58,
        category: "Politics",
        description: "Will Jerome Powell be nominated for another term as Federal Reserve Chair?",
        endDate: "May 2026"
    },
    {
        id: 3,
        title: "US Strike on Iran Timeline",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        volume: "90.1M",
        chance: 25,
        category: "Politics",
        description: "Will the United States conduct military strikes on Iranian territory before Q2 2026?",
        endDate: "June 30, 2026"
    },
    {
        id: 4,
        title: "Bitcoin > $100k Q1 2025",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
        volume: "1.2B",
        chance: 62,
        category: "Crypto",
        description: "Will Bitcoin (BTC) trade above $100,000 before March 31, 2025?",
        endDate: "March 31, 2025"
    },
    {
        id: 5,
        title: "PL: Bournemouth vs Liverpool",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",
        volume: "6.5M",
        chance: 41,
        category: "Sports",
        description: "Will Liverpool win this Premier League match?",
        endDate: "Match Day"
    },
    {
        id: 6,
        title: "Fed Interest Rate Cut March",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Seal_of_the_Federal_Reserve_System_of_the_United_States.svg/512px-Seal_of_the_Federal_Reserve_System_of_the_United_States.svg.png",
        volume: "42M",
        chance: 85,
        category: "Business",
        description: "Will the Federal Reserve cut interest rates in March 2026?",
        endDate: "March 31, 2026"
    },
    {
        id: 7,
        title: "US Acquisition of Greenland",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/2560px-Flag_of_Greenland.svg.png",
        volume: "12.4M",
        chance: 5,
        category: "Politics",
        description: "Will the United States acquire Greenland through purchase or treaty before 2030?",
        endDate: "December 31, 2029"
    },
    {
        id: 8,
        title: "SpaceX Starship Launch Success",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/512px-SpaceX_logo_black.svg.png",
        volume: "45M",
        chance: 88,
        category: "Pop Culture",
        description: "Will the next SpaceX Starship orbital flight launch successfully?",
        endDate: "Next Launch Window"
    },
    {
        id: 9,
        title: "Ethereum ETF Approval in May?",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png",
        volume: "310M",
        chance: 72,
        category: "Crypto",
        description: "Will the SEC approve spot Ethereum ETFs by May 2026?",
        endDate: "May 31, 2026"
    },
    {
        id: 10,
        title: "Oscars: Best Picture 2026",
        icon: "https://upload.wikimedia.org/wikipedia/en/7/7f/Academy_Award_trophy.png",
        volume: "8.2M",
        chance: 15,
        category: "Pop Culture",
        description: "Will 'Oppenheimer 2' win Best Picture at the 2026 Academy Awards?",
        endDate: "March 2026"
    },
    {
        id: 11,
        title: "Tesla Stock > $400 EOY",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png",
        volume: "155M",
        chance: 45,
        category: "Business",
        description: "Will Tesla stock trade above $400 at end of year 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 12,
        title: "GTA VI Release Date",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/1200px-Rockstar_Games_Logo.svg.png",
        volume: "220M",
        chance: 90,
        category: "Pop Culture",
        description: "Will Grand Theft Auto VI be released before December 2025?",
        endDate: "December 31, 2025"
    },
    {
        id: 13,
        title: "Solana > $500",
        icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
        volume: "88M",
        chance: 12,
        category: "Crypto",
        description: "Will Solana (SOL) trade above $500 before Q3 2026?",
        endDate: "September 30, 2026"
    },
    {
        id: 14,
        title: "UEFA Champions League Winner",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/512px-UEFA_Champions_League_logo_2.svg.png",
        volume: "40M",
        chance: 30,
        category: "Sports",
        description: "Will Real Madrid win the UEFA Champions League 2025-26?",
        endDate: "May 2026"
    },
    {
        id: 15,
        title: "US CPI Inflation < 2%",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Unofficial_flag_of_the_United_States_of_America.svg/2000px-Unofficial_flag_of_the_United_States_of_America.svg.png",
        volume: "12M",
        chance: 40,
        category: "Business",
        description: "Will US CPI inflation fall below 2% in Q2 2026?",
        endDate: "June 30, 2026"
    },
    {
        id: 16,
        title: "Who will aid Taiwan confirmed?",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/2560px-Flag_of_the_Republic_of_China.svg.png",
        volume: "15M",
        chance: 65,
        category: "Politics",
        description: "Will the US publicly commit to defending Taiwan militarily by end of 2026?",
        endDate: "December 31, 2026"
    },
    // Technology Markets
    {
        id: 17,
        title: "Apple Vision Pro 2 Launch",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
        volume: "95M",
        chance: 78,
        category: "Technology",
        description: "Will Apple announce Vision Pro 2 at WWDC 2026?",
        endDate: "June 30, 2026"
    },
    {
        id: 18,
        title: "GPT-5 Release in 2026",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
        volume: "180M",
        chance: 55,
        category: "Technology",
        description: "Will OpenAI release GPT-5 before December 31, 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 19,
        title: "Meta's AR Glasses Launch",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
        volume: "65M",
        chance: 42,
        category: "Technology",
        description: "Will Meta release consumer AR glasses in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 20,
        title: "Quantum Computing Breakthrough",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        volume: "38M",
        chance: 25,
        category: "Technology",
        description: "Will a quantum computer solve a problem classical computers can't by Q4 2026?",
        endDate: "December 31, 2026"
    },
    // Finance Markets
    {
        id: 21,
        title: "S&P 500 > 6000",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/S%26P_Global_logo.png",
        volume: "420M",
        chance: 68,
        category: "Finance",
        description: "Will the S&P 500 close above 6000 before end of 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 22,
        title: "Gold > $3000/oz",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gold_nugget_%28Australia%29_4_%2816848647509%29.jpg/512px-Gold_nugget_%28Australia%29_4_%2816848647509%29.jpg",
        volume: "85M",
        chance: 35,
        category: "Finance",
        description: "Will gold prices exceed $3000 per ounce in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 23,
        title: "US Recession in 2026",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Seal_of_the_Federal_Reserve_System_of_the_United_States.svg/512px-Seal_of_the_Federal_Reserve_System_of_the_United_States.svg.png",
        volume: "210M",
        chance: 28,
        category: "Finance",
        description: "Will the US enter a recession (2 consecutive quarters negative GDP) in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 24,
        title: "Oil Price > $120/barrel",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Oil_platform_in_the_North_Sea.jpg/1200px-Oil_platform_in_the_North_Sea.jpg",
        volume: "72M",
        chance: 18,
        category: "Finance",
        description: "Will crude oil prices exceed $120 per barrel in 2026?",
        endDate: "December 31, 2026"
    },
    // Entertainment Markets
    {
        id: 25,
        title: "Taylor Swift Album Drop",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Taylor_Swift_at_the_2024_Golden_Globes_%282%29.png/512px-Taylor_Swift_at_the_2024_Golden_Globes_%282%29.png",
        volume: "45M",
        chance: 82,
        category: "Entertainment",
        description: "Will Taylor Swift release a new studio album in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 26,
        title: "Marvel's Next Avengers Film",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png",
        volume: "120M",
        chance: 95,
        category: "Entertainment",
        description: "Will the next Avengers movie be released in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 27,
        title: "Netflix Subscriber Growth",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
        volume: "55M",
        chance: 60,
        category: "Entertainment",
        description: "Will Netflix gain 20M+ subscribers in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 28,
        title: "Beyoncé World Tour 2026",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png/512px-Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png",
        volume: "32M",
        chance: 70,
        category: "Entertainment",
        description: "Will Beyoncé announce a world tour in 2026?",
        endDate: "December 31, 2026"
    },
    // Science Markets
    {
        id: 29,
        title: "Cancer Vaccine Approval",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/FDA_logo.svg/512px-FDA_logo.svg.png",
        volume: "150M",
        chance: 15,
        category: "Science",
        description: "Will the FDA approve a cancer vaccine in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 30,
        title: "Mars Sample Return Mission",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
        volume: "68M",
        chance: 35,
        category: "Science",
        description: "Will NASA launch the Mars Sample Return mission in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 31,
        title: "Fusion Energy Breakthrough",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
        volume: "92M",
        chance: 22,
        category: "Science",
        description: "Will a fusion reactor achieve net energy gain in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 32,
        title: "CRISPR Human Trial Success",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/FDA_logo.svg/1200px-FDA_logo.svg.png",
        volume: "78M",
        chance: 48,
        category: "Science",
        description: "Will a CRISPR gene therapy trial show significant success in 2026?",
        endDate: "December 31, 2026"
    },
    // Gaming Markets
    {
        id: 33,
        title: "Elder Scrolls VI Release",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bethesda_Game_Studios_logo.svg/512px-Bethesda_Game_Studios_logo.svg.png",
        volume: "180M",
        chance: 8,
        category: "Gaming",
        description: "Will Elder Scrolls VI be released before 2027?",
        endDate: "December 31, 2026"
    },
    {
        id: 34,
        title: "Nintendo Switch 2 Launch",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1200px-Nintendo.svg.png",
        volume: "250M",
        chance: 92,
        category: "Gaming",
        description: "Will Nintendo release the Switch successor in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 35,
        title: "Fortnite Player Count Peak",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Epic_Games_logo.svg/512px-Epic_Games_logo.svg.png",
        volume: "65M",
        chance: 55,
        category: "Gaming",
        description: "Will Fortnite reach 500M+ monthly players in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 36,
        title: "Call of Duty Sales Record",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Call_of_Duty_logo.svg/512px-Call_of_Duty_logo.svg.png",
        volume: "95M",
        chance: 38,
        category: "Gaming",
        description: "Will the next Call of Duty break franchise sales records?",
        endDate: "December 31, 2026"
    },
    // News Markets
    {
        id: 37,
        title: "Major Earthquake in California",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1200px-Flag_of_California.svg.png",
        volume: "42M",
        chance: 12,
        category: "News",
        description: "Will a magnitude 7.0+ earthquake hit California in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 38,
        title: "UK Rejoins EU Talks",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png",
        volume: "88M",
        chance: 5,
        category: "News",
        description: "Will the UK begin formal talks to rejoin the EU in 2026?",
        endDate: "December 31, 2026"
    },
    {
        id: 39,
        title: "Global Temperature Record",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Temperature_icon_%28warm%29.svg/512px-Temperature_icon_%28warm%29.svg.png",
        volume: "110M",
        chance: 75,
        category: "News",
        description: "Will 2026 be the hottest year on record globally?",
        endDate: "December 31, 2026"
    },
    {
        id: 40,
        title: "Major Cyber Attack on US",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/512px-Flag_of_the_United_States.svg.png",
        volume: "125M",
        chance: 32,
        category: "News",
        description: "Will the US experience a major state-sponsored cyber attack in 2026?",
        endDate: "December 31, 2026"
    }
];

export const getMarketById = (id: string | number): Market | undefined => {
    const numId = typeof id === 'string' ? parseInt(id) : id;
    return MARKETS.find(m => m.id === numId);
};
