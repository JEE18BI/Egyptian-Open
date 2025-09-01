import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">Egyptian Open Croquet</div>

                {/* Hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Links */}
                <ul className={`nav-links ${open ? "show" : ""}`}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/announcements">Announcements</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/help">Need Help?</Link></li> {/* Add this route later */}
                </ul>
            </div>
        </nav>
    );
}
