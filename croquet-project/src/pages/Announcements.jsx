import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./Announcements.css";

export default function Announcements() {
    const [data, setData] = useState([]);
    const [grouped, setGrouped] = useState({});
    const [activeDay, setActiveDay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSa9F-UCxGp7r0ZERFu5JYivnEpkVkypEGKKqNPv75FGLFQWdKdW8J2B6yA4EPIDgIWO8oIx7KyAtX/pub?output=csv";

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
            }
        });
    }, []);

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

        // Set the first day as active by default
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
                <h1>📢 Tournament Announcements</h1>
                <p>Stay updated with the latest news and schedule</p>
            </div>

            {Object.keys(grouped).length === 0 ? (
                <div className="no-announcements">
                    <p>No announcements available at the moment.</p>
                </div>
            ) : (
                <div className="announcements-container">
                    {Object.entries(grouped).map(([day, items]) => (
                        <div key={day} className={`day-section ${activeDay === day ? 'active' : ''}`}>
                            <div className="day-header" onClick={() => toggleDay(day)}>
                                <h2>{day}</h2>
                                <span className="toggle-icon">
                                    {activeDay === day ? '−' : '+'}
                                </span>
                            </div>
                            <div className="announcements-list">
                                {items.map((ann, index) => (
                                    <div key={index} className="announcement-item">
                                        <div className="announcement-bullet"></div>
                                        <p>{ann}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}