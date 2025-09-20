import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./LiveMatches.css";
import { playersData } from "./Players";

 export default function LiveMatches() {



    const [matches, setMatches] = useState([]);
    const [groupedMatches, setGroupedMatches] = useState({});
    const [activeBlock, setActiveBlock] = useState(null);
    const [activeDay, setActiveDay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    const [playerMap, setPlayerMap] = useState({});
    const [showPlayerPopup, setShowPlayerPopup] = useState(false);
    const [searchTriggered, setSearchTriggered] = useState(false);

    // Flatten playersData into objects with name + photo
    const allPlayers = playersData.flatMap((group) => group.players);

    // Fetch matches from Google Sheets
    useEffect(() => {
        setIsLoading(true);
        const matchesUrl =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhDPQMbmlkkE4JFNckSXuRsgzK7xUdC3lo-vCBjaPnJtV8-_yubNqvw7oXaSEVkPFRlw46yY5gpgcf/pub?output=csv";

        Papa.parse(matchesUrl, {
            download: true,
            header: true,
            skipEmptyLines: true,
            transformHeader: (h) => h.trim(),
            complete: (results) => {
                const filtered = results.data.filter((row) => row.MATCH?.trim());
                setMatches(filtered);
                setIsLoading(false);

                const tempPlayerMap = {};
                filtered.forEach((row) => {
                    const players = row.MATCH.split(",").map((p) => p.trim()).filter(Boolean);
                    players.forEach((player) => {
                        if (!tempPlayerMap[player]) tempPlayerMap[player] = [];
                        tempPlayerMap[player].push({
                            match: row.MATCH.trim(),
                            court: row.COURT?.trim() || "No Court",
                            time: row.TIME?.trim() || "",
                            day: row.DAY?.trim() || "Unknown Day",
                            block: row.BLOCK?.trim() || "No Block",
                        });
                    });
                });
                setPlayerMap(tempPlayerMap);
            },
            error: (err) => {
                console.error("CSV parse error:", err);
                setIsLoading(false);
            },
        });
    }, []);

    // Group matches by block → day
    useEffect(() => {
        const grouped = matches.reduce((acc, item) => {
            const block = item.BLOCK?.trim() || "No Block";
            const day = item.DAY?.trim() || "Unknown Day";
            const court = item.COURT?.trim() || "No Court";
            const match = item.MATCH?.trim();
            const score = item.SCORE?.trim() || "";
            if (!match) return acc;

            acc[block] = acc[block] || {};
            acc[block][day] = acc[block][day] || [];
            const isFirstOnCourt = acc[block][day].every((m) => m.court !== court);

            acc[block][day].push({
                match,
                time: isFirstOnCourt ? item.TIME?.trim() || "Start" : "To Follow",
                court,
                block,
                day,
                score,
            });
            return acc;
        }, {});

      // Sort blocks and days
        const sortedGrouped = Object.keys(grouped)
            .sort()
            .reduce((acc, block) => {
                acc[block] = Object.keys(grouped[block])
                    .sort()
                    .reduce((dAcc, day) => {
                        dAcc[day] = grouped[block][day];
                        return dAcc;
                    }, {});
                return acc;
            }, {});

        setGroupedMatches(sortedGrouped);
    }, [matches]);

    const handleSearch = () => {
        setSearchTriggered(true);
        setShowPlayerPopup(true);
    };

    const handleSelectPlayer = (playerName) => {
        setSearchTerm(playerName);
        setSearchTriggered(true);
        setShowPlayerPopup(true);
    };

    // Autocomplete suggestions from playersData
    const suggestions =
        searchTerm.length > 0
            ? allPlayers.filter((p) =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            : [];

    // Normalize & match player name
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchedPlayers = Object.keys(playerMap).filter((p) =>
        p.toLowerCase().includes(normalizedSearch)
    );

    const playerSummary =
        searchTriggered && matchedPlayers.length > 0
            ? matchedPlayers.flatMap((player) => playerMap[player])
            : [];

    if (isLoading)
        return (
            <div className="live-matches-page">
                <div className="loader-overlay">
                    <div className="loader-spinner"></div>
                </div>
            </div>
        );

    return (
        <div className="live-matches-page">
            <div className="matches-header">
                <h1>Matches</h1>
                <p>Check the schedule and search for your match</p>
                <p>After choosing your block, choose your day and scroll down to see all matches</p>

                {/* 🔎 Search + Autocomplete */}
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Enter player name..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSearchTriggered(false);
                        }}
                        className="match-search-input"
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>

                    {suggestions.length > 0 && (
                        <ul className="autocomplete-list">
                            {suggestions.map((p) => (
                                <li key={p.name} onClick={() => handleSelectPlayer(p.name)}>
                                    <img
                                        src={p.photo}
                                        alt={p.name}
                                        style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "8px" }}
                                    />
                                    {p.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>


          {playerSummary.length > 0 && showPlayerPopup && (
                <div className="player-popup">
                    <div className="player-popup-header">
                        <h3>Your Schedule</h3>
                        <button className="close-popup-btn" onClick={() => setShowPlayerPopup(false)}>
                            Close
                        </button>
                    </div>
                    <div className="player-popup-days">
                {Object.entries(
                            playerSummary.reduce((acc, m) => {
                                acc[m.day] = acc[m.day] || [];
                                acc[m.day].push(m);
                                return acc;
                            }, {})
                        ).map(([day, matches]) => (
                            <div key={day} className="day-group">
                                <h4 className="day-title">{`Day ${day}`}</h4>
                                <div className="table-wrapper">
                                    <table className="player-summary-table">
                                       <thead>
                                       <tr>
                                        <th>Court</th>
                                          <th>Time</th>
                                           <th>Match</th>
                                        </tr>
                                       </thead>
                                       <tbody>
                                        {matches.map((m, i) => (
                                           <tr key={`${day}-${i}`}>
                                                 <td>{m.court}</td>
                                                <td>{m.time}</td>
                                                <td>{m.match}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                 </div>
                             </div>
                        ))}
                     </div>
                 </div>
             )}


            {Object.entries(groupedMatches).length === 0 && <div className="no-matches">No matches found.</div>}

             {Object.entries(groupedMatches).map(([block, days]) => (
                <div key={block} className="block-wrapper">
                     <div
                         className={`block-header ${activeBlock === block ? "active" : ""}`}
                         onClick={() => {
                             setActiveBlock(activeBlock === block ? null : block);
                             setActiveDay(null);
                         }}
                     >
                         <span>{`Block ${block}`}</span>
                         <span className="toggle-icon">{activeBlock === block ? "−" : "+"}</span>
                     </div>

                     <div className={`block-content ${activeBlock === block ? "open" : ""}`}>
                         {Object.entries(days).map(([day, matchesArr]) => (
                             <div key={day} className="day-wrapper">
                                 <div
                                     className={`day-header ${activeDay === `${block}-${day}` ? "active" : ""}`}
                                     onClick={() =>
                                         setActiveDay(activeDay === `${block}-${day}` ? null : `${block}-${day}`)
                                     }
                                 >
                                     <span>{`Day ${day}`}</span>
                                     <span className="toggle-icon">{activeDay === `${block}-${day}` ? "−" : "+"}</span>
                                 </div>
                                 <div className={`day-content ${activeDay === `${block}-${day}` ? "open" : ""}`}>
                                     {activeDay === `${block}-${day}` && (
                                         <div className="matches-scroll">
                                             <table className="matches-table">
                                                 <thead>
                                                 <tr>
                                                     <th>Time</th>
                                                     <th>Match</th>
                                                     <th>Court</th>
                                                     <th>Score</th>
                                                 </tr>
                                                 </thead>
                                                 <tbody>
                                                 {matchesArr.map((m, i) => (
                                                     <tr key={`${block}-${day}-${i}`}>
                                                         <td data-label="Time">{m.time}</td>
                                                         <td data-label="Match">{m.match}</td>
                                                         <td data-label="Court">{m.court}</td>
                                                         <td data-label="Score">{m.score}</td>
                                                     </tr>
                                                 ))}
                                                 </tbody>
                                             </table>
                                         </div>
                                     )}
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             ))}
         </div>
     );
 }
