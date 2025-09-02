import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./Announcements.css";

export default function Announcements() {
    const [data, setData] = useState([]);
    const [grouped, setGrouped] = useState({});
    const [activeDay, setActiveDay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch CSV data
    useEffect(() => {
        setIsLoading(true);
        const url =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSa9F-UCxGp7r0ZERFu5JYivnEpkVkypEGKKqNPv75FGLFQWdKdW8J2B6yA4EPIDgIWO8oIx7KyAtX/pub?output=csv";

        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setData(results.data);
                setIsLoading(false);
            },
            error: (err) => {
                console.error("Error parsing CSV:", err);
                setIsLoading(false);
            },
        });
    }, []);

    // Group announcements by day
    useEffect(() => {
        const groupedMap = data.reduce((acc, item) => {
            const day = item.Day?.trim() || "Other Announcements";
            const text = item.Announcement?.trim() || "";
            if (text) {
                acc[day] = acc[day] || [];
                acc[day].push(text);
            }
            return acc;
        }, {});
        setGrouped(groupedMap);

        if (Object.keys(groupedMap).length > 0 && !activeDay) {
            setActiveDay(Object.keys(groupedMap)[0]);
        }
    }, [data]);

    const toggleDay = (day) => {
        setActiveDay(activeDay === day ? null : day);
    };

    if (isLoading) {
        return (
            <div className="announcements-page">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading announcements...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="announcements-page">
            <div className="announcements-header">
                <h1>📢 Egyptian Open Tournament</h1>
                <p>Stay updated with tournament details and announcements</p>
            </div>

            <div className="announcements-wrapper">
                {/* Left Column - Tournament Details */}
                <div className="tournament-details-column">
                    <h2>🏆 Tournament Details</h2>

                    <div className="tournament-section">
                        <h3>🎾 Matches</h3>
                        <ul>
                            <li>Matches at 5 clubs, 12 courts.</li>
                            <li>Block play: 5 days, each match best of 3.</li>
                        </ul>
                    </div>

                    <div className="tournament-section">
                        <h3>⏰ Schedule</h3>
                        <ul>
                            <li>Start at 8:00 AM; two clubs with evening rounds.</li>
                            <li>Round of 32 & 16: Day 6</li>
                            <li>Quarterfinals & Semifinals: Day 7</li>
                            <li>Finals: Day 8 (best of 5)</li>
                        </ul>
                    </div>

                    <div className="tournament-section">
                        <h3>🚌 Transportation</h3>
                        <ul>
                            <li>Buses: Federation → Heliopolis & El-Zohor clubs</li>
                            <li>Shooting Club: 5 minutes from Federation Courts</li>
                        </ul>
                    </div>

                    <div className="tournament-section">
                        <h3>🍽️ Food</h3>
                        <ul>
                            <li>Daily meal orders arranged for the following day.</li>
                            <li>Location & menu decided collectively.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column - Announcements */}
                <div className="announcements-column">
                    <h2>📌 Announcements</h2>
                    {Object.keys(grouped).length === 0 ? (
                        <p>No announcements at the moment.</p>
                    ) : (
                        Object.entries(grouped).map(([day, items]) => (
                            <div key={day} className={`day-section ${activeDay === day ? "active" : ""}`}>
                                <div className="day-header" onClick={() => toggleDay(day)}>
                                    <h3>{day}</h3>
                                    <span className="toggle-icon">{activeDay === day ? "−" : "+"}</span>
                                </div>
                                <div className="announcements-list">
                                    {items.map((ann, i) => (
                                        <p key={i} className="announcement-item">
                                            • {ann}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
