import OmniNavbar from "@/components/OmniNavbar";
import { Link } from "react-router-dom";
import { Wallet, TrendingUp, DollarSign, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Connect Wallet",
    desc: "Link your MetaMask, Phantom, or WalletConnect compatible wallet. No KYC required.",
    icon: Wallet
  },
  {
    num: "02",
    title: "Choose a Market",
    desc: "Browse competitive prediction markets on Politics, Crypto, Sports, and more.",
    icon: TrendingUp
  },
  {
    num: "03",
    title: "Take a Position",
    desc: "Buy 'YES' or 'NO' shares. Prices fluctuate between $0 and $1 based on probability.",
    icon: DollarSign
  },
  {
    num: "04",
    title: "Win & Redeem",
    desc: "If you're right, redeem your shares for $1.00 each. Or sell early to lock in profits.",
    icon: Trophy
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-gray-200 flex flex-col">
      <OmniNavbar />

      <main className="flex-1 container mx-auto px-6 py-20 max-w-[1400px]">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            How It Works
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get started with OmniSight in four simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 rounded-lg relative group hover:border-[#FF5500]/40 transition-all duration-300"
              >
                {/* Step Number - Large Background */}
                <div className="absolute top-6 right-6 text-7xl font-bold text-[#1a1a1a] leading-none select-none">
                  {step.num}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-[#FF5500]/20 border border-[#FF5500]/40 flex items-center justify-center group-hover:bg-[#FF5500]/30 transition-colors">
                    <Icon className="w-7 h-7 text-[#FF5500]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5500] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-[#050505] border border-[#2a2a2a] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Connect your wallet and make your first prediction in under 60 seconds
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF5500] hover:bg-[#e04b00] text-white font-bold rounded-lg transition-all"
            >
              Browse Markets
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#121212] hover:bg-[#1a1a1a] text-white font-semibold rounded-lg transition-all border border-[#2a2a2a] hover:border-[#FF5500]/30"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowItWorksPage;
