import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Players from "./pages/Players.jsx";
import Help from "./pages/Help.jsx";
import Announcements from "./pages/Announcements.jsx";
import Clubs from "./pages/Clubs.jsx";
import Navbar from "./components/Navbar.jsx";
import LiveMatches from "./pages/LiveMatches.jsx"
import './App.css';

function App() {
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
            </Routes>
        </>
    );
}

export default App;