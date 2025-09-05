import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Players from "./pages/Players.jsx";
import Help from "./pages/Help.jsx";
import Announcements from "./pages/Announcements.jsx";
import Clubs from "./pages/Clubs.jsx";
import Navbar from "./components/Navbar.jsx";
import LiveMatches from "./pages/LiveMatches.jsx"
import TournamentDetails from "./pages/TournamentDetails";
import { useEffect } from "react";

import './App.css';

function App() {
    useEffect(() => {
        document.title = "Egyptian Open 2025" // <- your title here
    }, []);
    return (
        <>


            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/clubs" element={<Clubs/>} />
                <Route path="/matches" element={<LiveMatches />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/players" element={<Players />} />
                <Route path="/help" element={<Help />} />
                <Route path="/tournament-details" element={<TournamentDetails />} />
            </Routes>
        </>
    );
}

export default App;