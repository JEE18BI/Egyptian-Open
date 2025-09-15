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
                        <li>Block play: 5 days, each match is a long game (1 Game of 19 points)</li>
                        <li>Plate championship will be played </li>
                        <li>Plate -> Block stage is 1 game of 13 points and knockouts are best of 3 games</li>
                    </ul>
                </div>

                <div className="tournament-card">
                    <h3>⏰ Schedule</h3>
                    <ul>
                        <li>Start at 9:00 AM</li>
                        <li>There are two clubs with evening rounds, starting at 4:00 PM</li>
                        <li>Round of 32 & 16: Day 6 -Best of 3 Games</li>
                        <li>Quarterfinals & Semifinals: Day 7 -Best of 3 Games</li>
                        <li>Finals: Day 8 (best of 5)</li>
                    </ul>
                </div>

                <div className="tournament-card">
                    <h3>🚌 Transportation</h3>
                    <ul>
                        <li>Buses: From Federation Courts → Heliopolis & El-Zohour clubs</li>
                        <li>Shooting Club: 5 minutes from Federation Courts</li>
                        <li>Gezira Club's courts and Federation are in the same place</li>
                    </ul>
                </div>

                <div className="tournament-card">
                    <h3>🍽️ Food</h3>
                    <ul>
                        <li>You can order now from our sponsor, Talabat! you'll find the link below</li>
                        <li>Daily meal orders arranged for the following day.</li>
                        <li>Location & menu decided collectively.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
