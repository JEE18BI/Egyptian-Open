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

        // Open the first day by default
        if (Object.keys(groupedMap).length > 0 && !activeDay) {
            setActiveDay(Object.keys(groupedMap)[0]);
        }
    }, [data]);

    const toggleDay = (day) => {
        setActiveDay(activeDay === day ? null : day);
    };

    // Format the Day label nicely
    const formatDayLabel = (day) => {
        const match = day.match(/^(\d+)/); // extract leading number if exists
        if (match) {
            const num = match[1];
            return `Day ${num} – ${day}`;
        }
        return day;
    };

    if (isLoading) {
        return (
            <div className="announcements-page">
                <div className="loading-container">
                    <div className="loading-spinner"></div>

                </div>
            </div>
        );
    }

    return (
        <div className="announcements-page">
            <div className="announcements-header">
                <h1>📢 Egypt Open Tournament</h1>
                <p>Stay updated with tournament details and announcements</p>
            </div>

            <div className="announcements-wrapper">
                {/* Left Column */}
                <div className="tournament-details-column">
                    {/* Hotel Announcement */}
                    <div className="hotel-announcement">
                        <h3>🏨 Official Hotel Offer</h3>
                        <p className="pleased">
                            We are pleased to offer you exclusive special rates for the upcoming{" "}
                            <strong>Champion 2025 event</strong> at{" "}
                            <strong>President Hotel</strong>.
                        </p>
                        <ul>
                            <li>
                                Deluxe Single Room: <strong>$80</strong> per night
                            </li>
                            <li>
                                Deluxe Double Room: <strong>$90</strong> per night
                            </li>
                            <li>Includes breakfast, service charge & taxes</li>
                        </ul>
                        <p style={{ color: "black" }}>
                            Reservation Code: <strong>EC-25</strong>
                        </p>
                        <p style={{color:"black"}}>
                            📧 Booking Mail:{" "}
                            <a style={{    color: "#1e3a8a"
                            }} href="mailto:bookings@thepresidentcairo.com">
                                bookings@thepresidentcairo.com
                            </a>
                        </p>
                        <p style={{ color: "black" }}>

                        ❗ Cancellations: Free until 14 days before arrival. Within 48h or
                            “no-show”, full charge applies.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="announcements-column">
                    <h2>📌 Announcements</h2>
                    {Object.keys(grouped).length === 0 ? (
                        <p>No announcements at the moment.</p>
                    ) : (
                        Object.entries(grouped).map(([day, items]) => (
                            <div
                                key={day}
                                className={`day-section ${activeDay === day ? "active" : ""}`}
                            >
                                <div
                                    className={`day-header ${activeDay === day ? "active" : ""}`}
                                    onClick={() => toggleDay(day)}
                                >
                                    <h3 className="Day">{formatDayLabel(day)}</h3>
                                    <span className="toggle-icon">
                                        {activeDay === day ? "−" : "+"}
                                    </span>
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
