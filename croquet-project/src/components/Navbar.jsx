import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
                    Egyptian Open Croquet
                </Link>

                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/home" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/announcements" className="nav-item" onClick={() => setIsMenuOpen(false)}>Announcements</Link>
                    <Link to="/gallery" className="nav-item" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                    <Link to="/players" className="nav-item" onClick={() => setIsMenuOpen(false)}>Players</Link>
                    <Link to="/help" className="nav-item" onClick={() => setIsMenuOpen(false)}>Need Help?</Link>
                </div>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;