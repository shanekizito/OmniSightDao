# OmniSight: The Probability Layer of the Internet

> **Markets aren't for gambling. They're for discovery.**

OmniSight is a next‑generation decentralized forecasting and truth‑discovery protocol. We turn beliefs into liquid markets, capital into conviction, and accuracy into a permanent reputation graph.

---

## 🚀 The Vision

We are building the infrastructure for machine‑readable truth. In a world of noise, OmniSight provides the signal. Our protocol allows users to weight their conviction with capital, rewarding those who are correct and creating a real-time probability layer for crypto, AI, and global events.

## 🛠 For Builders
**The Truth is Composable.** OmniSight is built from the ground up to be the foundation for your next project.

- **Forecast‑as‑a‑Service API**: Integrate real-time probabilities, confidence bands, and momentum shifts directly into your dApps or AI agents.
- **Market Templates**: Safely scale permissionless market creation with DAO-governed resolution logic and edge-case handling.
- **DeFi-Native**: Multi-oracle consensus (Chainlink, Optimistic, Human Jurors) and LP vaults for category-based exposure.
- **Account Abstraction**: Seamless user onboarding with social logins and gasless transactions.

## 📈 For Users
**Your Edge is Your Asset.** Participation isn't about PnL; it's about being right.

- **Reputation Graphs**: Build a permanent, on-chain record of your forecasting accuracy across domains like Crypto, Politics, and Tech.
- **Truth Discovery**: Access high-fidelity signals on protocol upgrades, exploit risks, and macro trends before they hit the mainstream.
- **Execute & Analyze**: High-performance trading UI with technical HUD aesthetics for a premium, instrument-panel feel.

---

## 🧠 Core Functionalities & Mechanism

### 1. Permissionless but Intelligent Market Creation
Anyone can propose a market via the `ProposalEngine`, but quality is strictly enforced:
- **Template Constraints**: All markets must match a `TemplateRegistry` spec (Binary, Scalar, or Multi-Outcome), ensuring pre-defined resolution logic.
- **Economic Filter**: Proposers stake GOV tokens. Higher reputation proposers benefit from lower collateral requirements.
- **Quality Index (MQI)**: Markets are live-scored based on liquidity depth, trader diversity, and oracle agreement.

### 2. High-Fidelity Execution & Liquidity
The `LiquidityEngine` provides more than just an AMM; it provides an **Accuracy Layer**:
- **Innovation**: Volatility-adjusted curves and side-specific incentives ensure deep liquidity where convictions are highest.
- **Dampening**: Oracle-aware spread dampening prevents manipulation during volatile price discovery events.
- **LP Vaults**: `VaultManager` auto-allocates passive capital across high-MQI market bands to maximize yield and signal.

### 3. Oracle Router & Multi-Layer Resolution
Truth is determined by consensus, not authority, through the `OracleRouter`:
- **Step 1**: Automated data ingestion (Chainlink, TWAP, or API feeds).
- **Step 2 (Optimistic)**: A 24-hour challenge window via `ResolutionEngine` allows anyone to dispute an outcome with a bond.
- **Step 3 (Arbitration)**: In a dispute, domain-specialized jurors ruling by accuracy-weighted voting deliver a final verdict.

### 4. Reputation Engine (Proof of Accuracy)
Reputation is the protocol's true asset, managed by the `ReputationEngine`:
- **Domain Specialization**: Accuracy is tracked per category (e.g., "Expert in DeFi Exploit Risk").
- **Privilege Decay**: Influence decays during periods of inactivity to ensure the signal remains current.
- **Asymmetric Slashing**: Bad actors face exponential bond loss, making attacks economically irrational.

---

## ⚙️ The Lifecycle of a Truth
1. **Proposal**: Market spec is submitted and validated against templates.
2. **Deployment**: `MarketFactory` deploys conditional YES/NO token positions.
3. **Execution**: Convicted capital weights the probability via specialized AMM curves.
4. **Resolution**: Feeds report outcomes; optimistic windows allow for truth-correction.
5. **Settlement**: Capital is distributed and the `ReputationEngine` updates participant accuracy graphs.

---

## 💻 Get Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

---

### 📄 Detailed Specification
For the full smart contract architecture and technical deep-dives into our AMM and Reputation math, see [omnidaospec.md](file:///c:/Users/admin/Downloads/Compressed/OmniSightDao/omnidaospec.md).

---

> **OmniSight is not just a product. It’s a public good with private incentives.**
