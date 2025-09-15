import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import SponsorBanner from "./pages/SponsorBanner";

import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Players from "./pages/Players.jsx";
import Help from "./pages/Help.jsx";
import Announcements from "./pages/Announcements.jsx";
import Clubs from "./pages/Clubs.jsx";
import LiveMatches from "./pages/LiveMatches.jsx";
import TournamentDetails from "./pages/TournamentDetails.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Blocks from "./pages/Blocks.jsx";
import "./App.css";

function App() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Egyptian Open 2025";
    }, []);

    return (
        <div className="app-layout">
            <Navbar />

            <main className="app-content">
                <AnimatePresence mode="wait">
                    <ScrollToTop />
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
                        <Route path="/clubs" element={<PageWrapper><Clubs /></PageWrapper>} />
                        <Route path="/blocks" element={<PageWrapper><Blocks /></PageWrapper>} />
                        <Route path="/matches" element={<PageWrapper><LiveMatches /></PageWrapper>} />
                        <Route path="/announcements" element={<PageWrapper><Announcements /></PageWrapper>} />
                        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
                        <Route path="/players" element={<PageWrapper><Players /></PageWrapper>} />
                        <Route path="/help" element={<PageWrapper><Help /></PageWrapper>} />
                        <Route path="/tournament-details" element={<PageWrapper><TournamentDetails /></PageWrapper>} />
                    </Routes>
                </AnimatePresence>
            </main>

            <Footer />

            {/* sponsor stays above footer without overlap */}
            <SponsorBanner />
        </div>
    );
}

// ✅ A wrapper component that adds animation
function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}

export default App;
