import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

// Import your images (adjust paths as needed)
import bg1 from '../components/1.jpg';
import bg2 from '../components/2.jpg';
import bg3 from '../components/3.jpg';
import bg4 from '../components/4.jpg';

const Home = () => {
    const [currentBg, setCurrentBg] = useState(0);

    // Background images array using imported images
    const backgroundImages = [bg1, bg2, bg3, bg4];

    // Change background every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prevBg) => (prevBg + 1) % backgroundImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">


            {/* Hero Section with changing background */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[currentBg]})`
                }}
            >
                <div className="hero-content">
                    <h2>WELCOME TO THE 20TH EGYPTIAN OPEN!</h2>
                    <p>where fun and skills meet.</p>

                </div>
            </div>

            {/* Content Sections */}
            <div className="content-section">
                <h3>About Egyptian Open Tournament </h3>
                <p>The Egyptian Open Croquet Championship is the most prestigious croquet event in North Africa, attracting players and enthusiasts from around the world. Established in 2006, our tournament combines tradition with competitive excellence.</p>
            </div>

            <div className="content-section dark">
                <div className="section-header">
                    <h3>What You Will Experience</h3>
                    <p>Discover the unique aspects of the Egyptian Open Championship</p>
                </div>
                <div className="experiences-grid">
                    <div className="experience-card">
                        <div className="card-icon">🏆</div>
                        <div className="card-content">
                            <h4>Top Competition</h4>
                            <p>Here in Cairo!</p>
                            <div className="card-hover">
                                <p>World-class players competing at the highest level in Egypt's premier croquet tournament.</p>
                            </div>
                        </div>
                    </div>

                    <div className="experience-card">
                        <div className="card-icon">🌍</div>
                        <div className="card-content">
                            <h4>Meeting International Friends</h4>
                            <p>We Missed You!</p>
                            <div className="card-hover">
                                <p>Reconnect with croquet enthusiasts from around the world in a celebration of sportsmanship.</p>
                            </div>
                        </div>
                    </div>

                    <div className="experience-card">
                        <div className="card-icon">⚜️</div>
                        <div className="card-content">
                            <h4>Unique Croquet Style</h4>
                            <p>In The Land Of The Pharaohs</p>
                            <div className="card-hover">
                                <p>Experience Egyptian-style croquet with its distinctive rules and traditional playing techniques.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;