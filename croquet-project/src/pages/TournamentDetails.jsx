import React from "react";
import './TournamentDetails.css';

export default function TournamentDetails() {
    return (
        <section className="tournament-container">
            <h2 className="tournament-title">🏆 Tournament Details</h2>

            <div className="tournament-grid">
                <div className="tournament-card">
                    <h3>🎾 Matches</h3>
                    <ul>
                        <li>Matches at 5 clubs, 12 courts.</li>
                        <li>Block play: 5 days, each match best of 3.</li>
                    </ul>
                </div>

                <div className="tournament-card">
                    <h3>⏰ Schedule</h3>
                    <ul>
                        <li>Start at 8:00 AM; two clubs with evening rounds.</li>
                        <li>Round of 32 & 16: Day 6</li>
                        <li>Quarterfinals & Semifinals: Day 7</li>
                        <li>Finals: Day 8 (best of 5)</li>
                    </ul>
                </div>

                <div className="tournament-card">
                    <h3>🚌 Transportation</h3>
                    <ul>
                        <li>Buses: Federation → Heliopolis & El-Zohor clubs</li>
                        <li>Shooting Club: 5 minutes from Federation Courts</li>
                    </ul>
                </div>

                <div className="tournament-card">
                    <h3>🍽️ Food</h3>
                    <ul>
                        <li>Daily meal orders arranged for the following day.</li>
                        <li>Location & menu decided collectively.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
