# OmniDAO: The Master Blueprint (Product & Architecture)

## 1. System Philosophy
OmniDAO is a **Financial Operating System for Truth**. It combines the user experience of a top-tier fintech app (Robinhood/Binance) with the permissionless, trustless superpowers of DeFi (Aave/Uniswap). 

**The Core Loop**:
1.  **Discover** (Social Feeds, AI Recommendations)
2.  **Trade** (Hybrid AMM/CLOB, Leverage)
3.  **Earn** (Yield-Bearing Collateral, Thesis Farming)
4.  **Govern** (Court of Omni, Futarchy)

---

## 2. Feature Inventory (The "Kitchen Sink")
This platform will support the following modules:
1.  **Core Betting**: Binary (Yes/No), Scalar (Range), Multi-Choice.
2.  **Advanced Trading**: Limit Orders, Stop-Loss, Cross-Margin Leverage (up to 10x).
3.  **Earn Products**:
    *   *Yield Vaults*: Idle USDC earns Aave interest.
    *   *Thesis Farming*: LPing into categories (e.g., "Eco-Tech").
    *   *Maker Rewards*: Rebates for providing CLOB liquidity.
4.  **Social Layer**:
    *   *Whale Watching*: Copy-trade top performers.
    *   *Trollbox*: On-chain encrypted chat per market.
    *   *User Profiles*: SBT-based reputation stats.
5.  **Governance**:
    *   *Court of Omni*: Dispute resolution.
    *   *Futarchy*: Market-based decision making for protocol upgrades.

---

## 3. Detailed UX Journeys & Page Flows

### 3.1 Experience A: The Speculator (Trading & Leverage)
**Goal**: Make a high-conviction, leveraged bet on "Bitcoin > $100k".

#### Step 1: The Landing Page (`/`)
*   **Visuals**: Dark mode, "Live Activity" ticker on right, "Trending" carousel on top.
*   **Action**: User sees the "Bitcoin > $100k" card.
    *   *Hover Effect*: Card lifts, shows a sparkline chart of the last 24h.
    *   *Data displayed*: Current Prob (62%), 24h Vol ($1.2B), "Yield APY" (4.2% - active collateral yield).
*   **Click**: User clicks the card. Transition -> `/market/btc-100k-q1-2025`.

#### Step 2: Market Detail View (`/market/:id`)
*   **Left Panel (Analysis)**:
    *   **Main Chart**: Candle/Line toggle. Overlays for "News Events" (pins on the chart where major news dropped).
    *   **Order Book**: Visual depth chart showing Buy/Sell walls in Green/Red.
    *   **"Trollbox" Tab**: Live chat stream. User types: "LFG BTC!".
*   **Right Panel (Execution)**:
    *   **Trade Form**: Tabs for `Market` | `Limit` | `Stop`.
    *   **Input**: User enters `1,000 USDC`.
    *   **Unique Feature - Leverage Slider**: User slides from `1x` to `5x`.
        *   *Dynamic UI Update*: "Buying Power: $5,000". "Liquidation Price: $0.48". "Hourly Interest: 0.01%".
    *   **"Yield Boost" Toggle**: Checkbox "Auto-compound winnings into Vault?".
*   **Action**: Click "Buy YES Position".
*   **System Action**:
    1.  Smart Wallet checks `USDC` allowance.
    2.  If not approved, batch approve + execute (EIP-2612).
    3.  Protocol borrows 4,000 USDC from Aave Pool -> Swaps 5,000 USDC for YES tokens -> Locks YES tokens as collateral.
*   **Feedback**: "Order Filled! You own 8,300 YES Shares." Confetti animation (Orange/Black).

#### Step 3: Portfolio Management (`/portfolio`)
*   **Dashboard**:
    *   **PnL Graph**: Historical performance line.
    *   **Active Positions**: Table row for "Bitcoin > 100k".
        *   *Columns*: Entry Price, Mark Price, PnL, **Health Factor** (Green/Yellow/Red for liquidation risk).
    *   **Action**: User sees Health Factor dropping (Yellow). Clicks "Top Up Collateral".
    *   **Modal**: "Deposit 200 USDC to increase Health to 1.5".

---

### 3.2 Experience B: The Farmer (Passive Income)
**Goal**: Earn passive yield without taking directional betting risk.

#### Step 1: The "Harvest" Dashboard (`/earn`)
*   **Visuals**: Grid of "Thesis Vaults".
    *   *Card 1*: "US Politics 2026" (APY: 18%).
    *   *Card 2*: "Crypto Alpha" (APY: 45%).
    *   *Card 3*: "Stablecoin Yield" (APY: 5%).
*   **Action**: User clicks "US Politics 2026".

#### Step 2: Vault Detail (`/earn/politics`)
*   **Explanation**: "This vault automatically provides liquidity (LP) to the top 20 political markets. You are neutral (Market Neutral) but earn trading fees + OMNI rewards."
*   **Stats**:
    *   TVL: $4.5M.
    *   Impermanent Loss Hedges: Active.
*   **Input**: Deposit `10,000 OMNI`.
*   **Action**: Click "Stake & Farm".
*   **System Action**: Protocol takes OMNI, pairs it with USDC, and routes it to Uniswap v4 Hooks connected to the Prediction Markets.

---

### 3.3 Experience C: The Social Copy-Trader
**Goal**: Copy the trades of a top-performing account.

#### Step 1: Leaderboard (`/leaderboard`)
*   **Table**: Ranked by "30d PnL", "Win Rate", "Sharpe Ratio".
*   **Profile**: User sees "Whale_Alert_0x" (Rank #1, +400% PnL).
*   **Badge**: "Verified Human", "Crystal Ball" (predicted 5 upsets in a row).

#### Step 2: Whale Profile (`/profile/:address`)
*   **Visuals**: Profile banner, recent trade history log (fully transparent).
*   **"Copy" Button**: Big Orange button.
*   **Action**: Click "Copy Trade".
*   **Config Modal**:
    *   "Allocation": "1,000 USDC".
    *   "Max Slippage": "1%".
    *   "Stop Loss": "If Whale loses >20%, stop copying."
*   **System Action**: Smart Contract creates a "Sub-Account" managed by a bot that monitors the Whale's on-chain emitting events and mirrors them to your Sub-Account instantly.

---

### 3.4 Experience D: The Governor (Resolution & Disputes)
**Goal**: Dispute a false market resolution.

#### Step 1: Market Resolution
*   **Status**: Market "Will Taylor Swift marry in 2025?" marked as `Resolving`.
*   **Oracle Signal**: UMA proposes "NO".
*   **User Belief**: "This is wrong! She just announced it!"

#### Step 2: Dispute Flow
*   **Action**: Click "Dispute Result" on the market page.
*   **Requirement**: "Post 500 OMNI Bond".
*   **Input**: Upload Evidence (Screenshot of Instagram post, URL). Text explanation.
*   **Action**: Click "Submit Dispute".

#### Step 3: The Court of Omni (`/court`)
*   **Notification**: Random OMNI stakers get a push notification: "Jury Duty Call".
*   **Interface**:
    *   **Case File**: Shows the disputed market, the evidence provided by the user, and the Oracle's original claim.
    *   **Voting Booth**: "Uphold Oracle" vs "Overturn Result".
    *   **Commit/Reveal**: Jurors vote secretly first to avoid bias.
*   **Outcome**: If the User wins, they get their Bond back + Bounty. The Oracle proposer is slashed.

---

## 4. Technical Architecture: "The OmniStack"

### 4.1 Hybrid Execution Layer
*   **Orderbook (Off-chain)**: Written in **Golang**. Uses Redis for sub-millisecond matching.
*   **Settlement (On-Chain)**: **Arbitrum One**.
    *   All "matched" orders are batched into a "Settlement Proof" every 2 seconds.
    *   On-chain contract verifies the proof and updates balances.
    *   *Why?* This gives us CEX speed (Binance) with DEX custody (Uniswap).

### 4.2 The "Yield Reactor"
*   **Contract**: `OmniYieldController.sol`.
*   **Logic**:
    1.  User deposits USDC.
    2.  Controller immediately routes 90% to **Aave v3 Lending Pool**.
    3.  User gets `aOmniUSDC` (internal accounting token).
    4.  When User trades, we just re-assign ownership of the `aOmniUSDC` internally. The capital *never leaves Aave* unless leveraged.
    5.  Result: The entire platform's TVL is earning 5% risk-free.

### 4.3 Cross-Chain Teleporter (CCIP)
*   **Goal**: Allow users on Base, Optimism, and Mainnet to bet without bridging manually.
*   **Tech**: **Chainlink CCIP**.
*   **Flow**:
    1.  User on Base sends USDC to `OmniPortal` on Base.
    2.  CCIP message sent to Arbitrum.
    3.  Arbitrum mints "Virtual USDC" for the user.
    4.  User trades on Arbitrum.
    5.  User withdraws -> CCIP message burns Virtual USDC -> Unlocks USDC on Base.

## 5. Summary of Unique Selling Points (USPs)
1.  **Zero Idle Capital**: Every dollar on the platform earns DeFi yield.
2.  **Native Leverage**: 10x long/short on information.
3.  **Social Alpha**: Monetizable copy-trading profiles.
4.  **Thesis Farming**: Passive LPing for specific topics.
5.  **Hybrid Speed**: Off-chain matching, on-chain truth.

---
*Architected by Antigravity for OmniDAO.*
