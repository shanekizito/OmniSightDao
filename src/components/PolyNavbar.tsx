import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PolyNavbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-[#1e2332] border-b border-[#2c3240] text-white">
            <div className="flex items-center gap-6 flex-1">
                <Link to="/" className="flex items-center gap-2 font-semibold text-xl tracking-tight">
                    {/* Placeholder for Logo if needed, using text for now or existing Logo component logic implicitly */}
                    <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center font-bold text-white">P</div>
                    <span>Polymarket</span>
                </Link>

                <div className="hidden md:flex flex-1 max-w-xl relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search markets..."
                        className="w-full bg-[#2c3240] border-none rounded-md py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-500 placeholder:text-slate-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs">/</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/how-it-works" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    How it works
                </Link>
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-[#2c3240]">
                    Log In
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    Sign Up
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden text-slate-300">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    );
};

export default PolyNavbar;
