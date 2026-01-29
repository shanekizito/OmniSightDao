import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-line-muted bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-0 mb-4 hover:opacity-80 transition-opacity group">
              <div className="w-[60px] h-[60px] relative flex items-center justify-center flex-shrink-0">
                <img src="/logo.png" alt="OmniSight Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-semibold text-2xl tracking-tight text-foreground leading-none -ml-3">
                mni<span className="text-[#FF6B35]">sight</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">Security for AI-Written Software</p>
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Documentation", "Security Model", "Automation Guides", "Roadmap", "Contact"].map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line-muted flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 OmniSight. All rights reserved.</p>
          <p>Designed for Trust.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;