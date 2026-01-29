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

## 🧠 Core Functionalities

### 1. Multi-Layer Market Creation Pipeline
Anyone can propose a market, but quality is enforced through:
- **Economic Filter**: Stake-weighted proposals to prevent spam.
- **Template Constraints**: Markets must align with DAO-approved templates (Price, Binary, Scalar).
- **Reputation Filter**: Proposers with better accuracy records have lower entry barriers.

### 2. Oracle Router & Consensus System
Resolution requires consensus, not authority. OmniSight routes each market through:
- **Automated Feeds**: (Chainlink/TWAP) for objective data.
- **Optimistic Resolution**: A 24-hour window for challenges.
- **Human Juror Quorum**: Domain-specialized jurors for subjective/complex outcomes.

### 3. Reputation Engine (Proof of Accuracy)
Reputation is the protocol's true asset.
- **Domain Specialization**: Accuracy is tracked per category (e.g., "Expert in DeFi Exploit Risk").
- **Privilege Decay**: Reputation must be maintained; silence leads to influence decay.
- **Asymmetric Slashing**: Bad behavior (dishonest disputes) costs significantly more than honest mistakes.

---

## ⚙️ Working Mechanism

### The Lifecycle of a Truth
1. **Proposal**: A user stakes GOV tokens to propose a market spec via the `ProposalEngine`.
2. **Deployment**: Once approved, the `MarketFactory` deploys conditional token positions (YES/NO).
3. **Trading**: The `LiquidityEngine` manages specialized AMM curves for accuracy-aware spread dampening.
4. **Resolution**: The `OracleRouter` triggers resolution. If contested, domain jurors ruling via the `ResolutionEngine` determine the final truth.
5. **Settlement**: Capital is distributed, and accuracy scores are updated in the `ReputationEngine`.

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
For the full smart contract architecture and protocol phase breakdown, see [omnidaospec.md](file:///c:/Users/admin/Downloads/Compressed/OmniSightDao/omnidaospec.md).

---

> **OmniSight is not just a product. It’s a public good with private incentives.**
