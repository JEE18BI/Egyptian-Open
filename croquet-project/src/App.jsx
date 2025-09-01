import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Players from "./pages/Players.jsx";
import Help from "./pages/Help.jsx";
import Announcements from "./pages/Announcements.jsx";
import './App.css';
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/players" element={<Players />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </>
    );
}

export default App;
