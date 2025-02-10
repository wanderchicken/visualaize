import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home";
import SearchTxnId from "./pages/SearchTxnId";
import About from "./pages/About";
import Guide from "./pages/Guide";
import LandingPage from "./pages/LandingPage";
import Deploy from "./pages/Deploy";

import Header from "./components/Header";
import "./index.css";
import Footer from "./components/Footer";
import NFTAgentsMarket from "./components/InterimPage";
import CoCreators from "./pages/CoCreators";
import NFTConfiguration from "./pages/NFTConfiguration";
import PrimaryButton from "./components/PrimaryButton";

const App: React.FC = () => {
  const [account, setAccount] = useState<string | null>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const shouldShowHeader = !["/nft-cofiguration", "/collection/1"].includes(
    location.pathname
  );
  const shouldShowStickyBanner = location.pathname.includes("/deploy");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      // Set threshold for when the button should appear (100px in this case)
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowHeader && <Header account={account} setAccount={setAccount} />}
      {shouldShowStickyBanner && (
        <div className="w-full text-center text-[10px] sm:text-xs py-1 md:py-2 bg-[#ffffff] hover:bg-[#ffffff] text-primary-100">
          Visual(AI)ze is in Beta. The Agent builder page to launch NFT agents
          is not live yet{" "}
        </div>
      )}

      {showBackToTop && (
        <PrimaryButton
          text="Back to top"
          classname="fixed bottom-4 right-4 md:bottom-10 md:right-10 !px-3 text-sm !py-2 z-[100000]"
          onClick={() => scrollToTop()}
        />
      )}

      <Routes>
        <Route path="/" element={<LandingPage account={account} />} />
        <Route
          path="/collection/1"
          element={<Home setAccount={setAccount} account={account} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/co-creators" element={<CoCreators />} />
        <Route
          path="/search-txn-id"
          element={<SearchTxnId account={account} />}
        />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/collection" element={<NFTAgentsMarket />} />
        <Route path="/nft-cofiguration" element={<NFTConfiguration />} />
      </Routes>
      <Footer />
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
      <Toaster />
    </Router>
  </StrictMode>
);
