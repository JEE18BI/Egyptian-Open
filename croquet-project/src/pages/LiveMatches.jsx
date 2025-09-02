// LiveMatches.jsx
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./LiveMatches.css";

export default function LiveMatches() {
    const [matches, setMatches] = useState([]);
    const [groupedMatches, setGroupedMatches] = useState({});
    const [activeDay, setActiveDay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setIsLoading(true);
        const matchesUrl =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhDPQMbmlkkE4JFNckSXuRsgzK7xUdC3lo-vCBjaPnJtV8-_yubNqvw7oXaSEVkPFRlw46yY5gpgcf/pub?output=csv";

        Papa.parse(matchesUrl, {
            download: true,
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => header.trim(),
            complete: (results) => {
                const filtered = results.data.filter(
                    (row) => row.DAY || row.MATCH || row.TIME || row.CLUB || row.COURT
                );
                setMatches(filtered);
                setIsLoading(false);
            },
        });
    }, []);

    useEffect(() => {
        const grouped = matches.reduce((acc, item) => {
            const day = item.DAY?.trim() || "Other Matches";
            const match = item.MATCH?.trim() || "";
            if (match) {
                acc[day] = acc[day] || [];
                acc[day].push({
                    match,
                    time: item.TIME?.trim() || "",
                    club: item.CLUB?.trim() || "",
                    court: item.COURT?.trim() || "",
                });
            }
            return acc;
        }, {});
        setGroupedMatches(grouped);

        if (Object.keys(grouped).length > 0 && !activeDay) {
            setActiveDay(Object.keys(grouped)[0]);
        }
    }, [matches]);

    const toggleDay = (day) => {
        setActiveDay(activeDay === day ? null : day);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    if (isLoading) {
        return (
            <div className="live-matches-page">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading matches...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="live-matches-page">
            <div className="matches-header">
                <h1>🎾 Live Matches</h1>
                <p>Check today’s schedule and search for your match</p>

                {/* Search box */}
                <input
                    type="text"
                    placeholder="Search by player name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="match-search-input"
                />
            </div>

            {Object.entries(groupedMatches).map(([day, matches]) => {
                // Apply search filter
                const filteredMatches = matches.filter((m) =>
                    m.match.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (filteredMatches.length === 0) return null;

                return (
                    <div key={day} className="day-section">
                        <div className="day-header" onClick={() => toggleDay(day)}>
                            <h2>{day}</h2>
                            <span className="toggle-icon">
                                {activeDay === day ? "−" : "+"}
                            </span>
                        </div>

                        {activeDay === day && (
                            <div className="matches-table-container">
                                <table className="matches-table">
                                    <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Match</th>
                                        <th>Club</th>
                                        <th>Court</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {filteredMatches.map((m, i) => (
                                        <tr key={i}>
                                            <td>{m.time}</td>
                                            <td>{m.match}</td>
                                            <td>{m.club}</td>
                                            <td>{m.court}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                    </div>
                );
            })}
        </div>
    );
}
