import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./Announcements.css";

export default function Announcements() {
    const [data, setData] = useState([]);
    const [grouped, setGrouped] = useState({});

    useEffect(() => {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSa9F-UCxGp7r0ZERFu5JYivnEpkVkypEGKKqNPv75FGLFQWdKdW8J2B6yA4EPIDgIWO8oIx7KyAtX/pub?output=csv";
        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setData(results.data);
            },
            error: (err) => {
                console.error("Error parsing CSV:", err);
            }
        });
    }, []);

    useEffect(() => {
        const groupedMap = data.reduce((acc, item) => {
            const day = item.Day?.trim() || "No Day";
            const text = item.Announcement?.trim() || "";
            if (text) {
                acc[day] = acc[day] || [];
                acc[day].push(text);
            }
            return acc;
        }, {});
        setGrouped(groupedMap);
    }, [data]);

    return (
        <div className="announcements-page">
            <h1>📢 Announcements By Day</h1>

            {Object.entries(grouped).map(([day, items]) => (
                <div key={day} className="day-section">
                    <h2>{day}</h2>
                    <ul>
                        {items.map((ann, index) => (
                            <li key={index}>{ann}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
