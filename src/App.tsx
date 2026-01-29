import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import Index from "./pages/Index";
import WhitepaperPage from "./pages/WhitepaperPage";
import Docs from "./pages/Docs";
import Engine from "./pages/Engine";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Market from "./pages/Market";
import Portfolio from "./pages/Portfolio";
import Earn from "./pages/Earn";
import Leaderboard from "./pages/Leaderboard";
import WhaleProfile from "./pages/WhaleProfile";
import Court from "./pages/Court";
import VaultDetail from "./pages/VaultDetail";
import MyProfile from "./pages/MyProfile";
import ProposeMarket from "./pages/ProposeMarket";
import Governance from "./pages/Governance";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/engine" element={<Engine />} />
            <Route path="/whitepaper" element={<WhitepaperPage />} />
            <Route path="/market/:id" element={<Market />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/me" element={<MyProfile />} />
            <Route path="/propose" element={<ProposeMarket />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile/:id" element={<WhaleProfile />} />
            <Route path="/court" element={<Court />} />
            <Route path="/earn/:id" element={<VaultDetail />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
