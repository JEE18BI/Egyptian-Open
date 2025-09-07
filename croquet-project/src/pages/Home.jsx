import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

import bg1 from '../components/1.jpg';
import bg2 from '../components/2.jpg';
import bg3 from '../components/3.jpg';
import bg4 from '../components/4.jpg';
import bg5 from '../components/5.jpg';

const backgroundImages = [bg1, bg2, bg3, bg4, bg5];

const Home = () => {
    const [currentBg, setCurrentBg] = useState(0);
    const [loadedImages, setLoadedImages] = useState([bg1]);
    const navigate = useNavigate();

    // Lazy load and cycle backgrounds
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentBg + 1) % backgroundImages.length;

            if (!loadedImages.includes(backgroundImages[nextIndex])) {
                const img = new Image();
                img.src = backgroundImages[nextIndex];
                img.onload = () => {
                    setLoadedImages(prev => [...prev, backgroundImages[nextIndex]]);
                    setCurrentBg(nextIndex); // switch only when loaded
                };
            } else {
                setCurrentBg(nextIndex);
            }
        }, 3000); // change every 3s

        return () => clearInterval(interval);
    }, [currentBg, loadedImages]);

    return (
        <div className="app">
            {/* HERO SECTION */}
            <div className="hero-section">
                {backgroundImages.map((img, index) => (
                    <div
                        key={index}
                        className={`bg-slide ${index === currentBg ? "active" : ""}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`
                        }}
                    />
                ))}

                <div className="hero-content">
                    <h2>WELCOME TO THE 20TH EGYPTIAN OPEN!</h2>
                    <p>where fun and skills meet</p>
                    <button
                        className="view-details-btn"
                        onClick={() => navigate("/tournament-details")}
                    >
                        View Tournament details
                    </button>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="content-section">
                <h3>About Egyptian Open Tournament</h3>
                <p>
                    The Egyptian Open Croquet Championship is the most prestigious croquet event in North Africa,
                    attracting players and enthusiasts from around the world. Established in 2006, our tournament
                    combines tradition with competitive excellence.
                </p>
            </div>

            {/* EXPERIENCES SECTION */}
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
