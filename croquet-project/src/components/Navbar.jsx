import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}

                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <img
                        src="/logo.png"
                        alt="Tournament Logo"
                        style={{
                            width: "35px",
                            height: "40px",
                            marginRight: "8px",
                            verticalAlign: "middle",
                            marginBottom: "8px",
                        }}
                    />
                    Egyptian Open
                    <ReactCountryFlag
                        countryCode="EG"
                        svg
                        style={{
                            width: "20px",
                            height: "14px",
                            marginLeft: "6px",
                            verticalAlign: "middle",
                        }}
                    />
                </Link>


                {/* Links */}
                <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/egyptianopen" className="nav-item" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/clubs" className="nav-item" onClick={closeMenu}>
                        Clubs
                    </Link>
                    <Link to="/players" className="nav-item" onClick={closeMenu}>
                        Players
                    </Link>
                    <Link to="/blocks" className="nav-item" onClick={closeMenu}>
                        Blocks
                    </Link>
                    <Link to="/matches" className="nav-item" onClick={closeMenu}>
                        Matches
                    </Link>
                    <Link to="/announcements" className="nav-item" onClick={closeMenu}>
                        Announcements
                    </Link>
                    <Link to="/gallery" className="nav-item" onClick={closeMenu}>
                        Gallery
                    </Link>
                    <Link to="/help" className="nav-item" onClick={closeMenu}>
                        Need Help?
                    </Link>
                </div>

                {/* Hamburger */}
                <div
                    className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
