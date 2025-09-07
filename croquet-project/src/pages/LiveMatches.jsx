import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./LiveMatches.css";

export default function LiveMatches() {
    const [matches, setMatches] = useState([]);
    const [groupedMatchesByClub, setGroupedMatchesByClub] = useState({});
    const [activeClub, setActiveClub] = useState(null);
    const [activeDay, setActiveDay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [playerMap, setPlayerMap] = useState({});
    const [showPlayerPopup, setShowPlayerPopup] = useState(true);

    // Reset popup when search changes
    useEffect(() => {
        setShowPlayerPopup(true);
    }, [searchTerm]);

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
                const filtered = results.data.filter((row) => row.MATCH?.trim());
                setMatches(filtered);
                setIsLoading(false);

                // Build player map with time
                const tempPlayerMap = {};
                filtered.forEach((row) => {
                    const players = row.MATCH.split(",").map((p) => p.trim());
                    players.forEach((player) => {
                        if (!tempPlayerMap[player]) tempPlayerMap[player] = [];
                        tempPlayerMap[player].push({
                            club: row.CLUB?.trim(),
                            day: row.DAY?.trim(),
                            time: row.TIME?.trim(),
                        });
                    });
                });
                setPlayerMap(tempPlayerMap);
            },
        });
    }, []);

    useEffect(() => {
        const grouped = matches.reduce((acc, item) => {
            const club = item.CLUB?.trim() || "Other Clubs";
            const day = item.DAY?.trim() || "1";
            const block = item.BLOCK?.trim();
            const match = item.MATCH?.trim();
            const score = item.SCORE?.trim();
            if (!match) return acc;

            acc[club] = acc[club] || {};
            acc[club][day] = acc[club][day] || { blocks: new Set(), matches: [] };
            if (block) acc[club][day].blocks.add(block);

            acc[club][day].matches.push({
                match,
                time: item.TIME?.trim() || "",
                club,
                court: item.COURT?.trim() || "",
                block: block || "",
                score: score || "",
            });
            return acc;
        }, {});

        Object.values(grouped).forEach((clubDays) => {
            Object.values(clubDays).forEach((dayObj) => {
                dayObj.blocks = Array.from(dayObj.blocks).sort();
            });
        });

        setGroupedMatchesByClub(grouped);
    }, [matches]);

    const handleSearch = (e) => setSearchTerm(e.target.value);

    // Compute player summary dynamically
    const playerSummary = searchTerm.trim()
        ? Object.entries(playerMap)
            .filter(([player]) =>
                player.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .flatMap(([, matches]) => matches)
        : [];

    if (isLoading) {
        return (
            <div className="live-matches-page">
                <div className="loader-overlay">
                    <div className="loader-spinner"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="live-matches-page">
            <div className="matches-header">
                <h1>Matches</h1>
                <p>Check today’s schedule and search for your match</p>
                <input
                    type="text"
                    placeholder="Search by player or club name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="match-search-input"
                />
                <div className="search-steps">
                    <h4>How to Search for Your Matches:</h4>
                    <ul>
                        <li>Enter the <strong>full player name</strong> in the search box above.</li>
                        <li>A <strong>summary</strong> will appear showing each day and which club the player will be on.</li>
                        <li>Click on the <strong>club name and Day</strong> below to expand and view all match details.</li>
                    </ul>
                </div>

            </div>

            {/* Player summary popup */}
            {/* Player summary popup */}
            {playerSummary.length > 0 && showPlayerPopup && (
                <div className="player-popup">
                    <div className="player-popup-header">
                        <h3>Your Schedule</h3>
                        <button
                            className="close-popup-btn"
                            onClick={() => setShowPlayerPopup(false)}
                        >
                            Close
                        </button>
                    </div>

                    <div className="player-popup-days">
                        {Object.entries(
                            playerSummary.reduce((acc, m) => {
                                if (!acc[m.day]) acc[m.day] = [];
                                acc[m.day].push(m);
                                return acc;
                            }, {})
                        ).map(([day, matches]) => (
                            <div key={day} className="player-day-card">
                                <div className="player-day-title">Day {day}</div>
                                <div className="player-day-matches">
                                    {matches.map((m, i) => (
                                        <div key={i} className="player-match-item">
                                            <span className="match-club">{m.club}</span>
                                            <span className="match-time">{m.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}



            {/* Clubs and matches */}
            {Object.entries(groupedMatchesByClub).map(([club, days]) => (
                <div key={club} className="club-section">
                    <div
                        className={`club-header ${activeClub === club ? "active" : ""}`}
                        onClick={() =>
                            setActiveClub(activeClub === club ? null : club)
                        }
                    >
                        <span>{club}</span>
                        <span className="toggle-icon">
                            {activeClub === club ? "−" : "+"}
                        </span>
                    </div>

                    {activeClub === club &&
                        Object.entries(days).map(([day, dayObj]) => {
                            const filteredMatches = dayObj.matches.filter(
                                (m) =>
                                    m.match.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    m.club.toLowerCase().includes(searchTerm.toLowerCase())
                            );

                            if (filteredMatches.length === 0) return null;

                            const blockText =
                                dayObj.blocks.length > 0
                                    ? ` - Blocks: ${dayObj.blocks.join(", ")}`
                                    : "";

                            return (
                                <div key={day} className="day-section">
                                    <div
                                        className={`day-header ${
                                            activeDay === `${club}-${day}` ? "active" : ""
                                        }`}
                                        onClick={() =>
                                            setActiveDay(
                                                activeDay === `${club}-${day}`
                                                    ? null
                                                    : `${club}-${day}`
                                            )
                                        }
                                    >
                                        <span>{`Day ${day}${blockText}`}</span>
                                        <span className="toggle-icon">
                                            {activeDay === `${club}-${day}` ? "−" : "+"}
                                        </span>
                                    </div>

                                    {activeDay === `${club}-${day}` && (
                                        <div className="matches-table-container">
                                            <table className="matches-table">
                                                <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Match</th>
                                                    <th>Club</th>
                                                    <th>Court</th>
                                                    <th>Block</th>
                                                    <th>Score</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {filteredMatches.map((m, i) => (
                                                    <tr key={i}>
                                                        <td>{m.time}</td>
                                                        <td>{m.match}</td>
                                                        <td>{m.club}</td>
                                                        <td>{m.court}</td>
                                                        <td>{m.block}</td>
                                                        <td>{m.score}</td>
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
            ))}
        </div>
    );
}
