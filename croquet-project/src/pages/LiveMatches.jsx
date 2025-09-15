import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./LiveMatches.css";

export default function LiveMatches() {
    return(
        <p className="blocks-coming-soon">
            📌 Matches will be displayed here soon. Stay tuned!
        </p>
    );
    // const [matches, setMatches] = useState([]);
    // const [groupedMatches, setGroupedMatches] = useState({});
    // const [activeBlock, setActiveBlock] = useState(null);
    // const [activeDay, setActiveDay] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [playerMap, setPlayerMap] = useState({});
    // const [showPlayerPopup, setShowPlayerPopup] = useState(true);
    //
    // useEffect(() => { setShowPlayerPopup(true); }, [searchTerm]);
    //
    // useEffect(() => {
    //     setIsLoading(true);
    //     const matchesUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhDPQMbmlkkE4JFNckSXuRsgzK7xUdC3lo-vCBjaPnJtV8-_yubNqvw7oXaSEVkPFRlw46yY5gpgcf/pub?output=csv";
    //
    //     Papa.parse(matchesUrl, {
    //         download: true,
    //         header: true,
    //         skipEmptyLines: true,
    //         transformHeader: (h) => h.trim(),
    //         complete: (results) => {
    //             const filtered = results.data.filter((row) => row.MATCH && row.MATCH.trim());
    //             setMatches(filtered);
    //             setIsLoading(false);
    //
    //             const tempPlayerMap = {};
    //             filtered.forEach((row) => {
    //                 const players = (row.MATCH || "").split(",").map((p) => p.trim()).filter(Boolean);
    //                 players.forEach((player) => {
    //                     if (!tempPlayerMap[player]) tempPlayerMap[player] = [];
    //                     tempPlayerMap[player].push({
    //                         match: row.MATCH.trim(),
    //                         court: (row.COURT || "No Court").trim(),
    //                         time: (row.TIME || "").trim(),
    //                         day: (row.DAY || "Unknown Day").trim(),
    //                         block: (row.BLOCK || "No Block").trim(),
    //                     });
    //                 });
    //             });
    //             setPlayerMap(tempPlayerMap);
    //         },
    //         error: (err) => { console.error("CSV parse error:", err); setIsLoading(false); },
    //     });
    // }, []);
    //
    // useEffect(() => {
    //     const grouped = matches.reduce((acc, item) => {
    //         const block = (item.BLOCK || "No Block").toString().trim();
    //         const day = (item.DAY || "Unknown Day").toString().trim();
    //         const court = (item.COURT || "No Court").toString().trim();
    //         const match = (item.MATCH || "").toString().trim();
    //         const score = (item.SCORE || "").toString().trim();
    //         if (!match) return acc;
    //
    //         acc[block] = acc[block] || {};
    //         acc[block][day] = acc[block][day] || [];
    //         const isFirstOnCourt = acc[block][day].every((m) => m.court !== court);
    //
    //         acc[block][day].push({ match, time: isFirstOnCourt ? (item.TIME?.trim() || "Start") : "To Follow", court, block, day, score: score || "" });
    //         return acc;
    //     }, {});
    //
    //     const sortedGrouped = Object.keys(grouped).sort().reduce((acc, block) => {
    //         acc[block] = Object.keys(grouped[block]).sort().reduce((dAcc, day) => {
    //             dAcc[day] = grouped[block][day];
    //             return dAcc;
    //         }, {});
    //         return acc;
    //     }, {});
    //
    //     setGroupedMatches(sortedGrouped);
    // }, [matches]);
    //
    // const handleSearch = (e) => setSearchTerm(e.target.value);
    //
    // const playerSummary = searchTerm.trim()
    //     ? Object.entries(playerMap)
    //         .filter(([player]) => player.toLowerCase().includes(searchTerm.toLowerCase()))
    //         .flatMap(([, matches]) => matches)
    //     : [];
    //
    // if (isLoading) return <div className="live-matches-page"><div className="loader-overlay"><div className="loader-spinner"></div></div></div>;
    //
    // return (
    //     <div className="live-matches-page">
    //         <div className="matches-header">
    //             <h1>Matches</h1>
    //             <p>Check the schedule and search for your match</p>
    //             <input type="text" placeholder="Search by player..." value={searchTerm} onChange={handleSearch} className="match-search-input" />
    //         </div>
    //
    //         {playerSummary.length > 0 && showPlayerPopup && (
    //             <div className="player-popup">
    //                 <div className="player-popup-header">
    //                     <h3>Your Schedule</h3>
    //                     <button className="close-popup-btn" onClick={() => setShowPlayerPopup(false)}>Close</button>
    //                 </div>
    //                 <div className="player-popup-days">
    //                     <table className="player-summary-table">
    //                         <thead>
    //                         <tr>
    //                             <th>Day</th>
    //                             <th>Court</th>
    //                             <th>Time</th>
    //                             <th>Match</th>
    //                         </tr>
    //                         </thead>
    //                         <tbody>
    //                         {playerSummary.map((m, i) => (
    //                             <tr key={`${m.block}-${m.day}-${i}`}>
    //                                 <td>{m.day}</td>
    //                                 <td>{m.court}</td>
    //                                 <td>{m.time}</td>
    //                                 <td>{m.match}</td>
    //                             </tr>
    //                         ))}
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         )}
    //
    //         {Object.entries(groupedMatches).length === 0 && <div className="no-matches">No matches found.</div>}
    //
    //         {Object.entries(groupedMatches).map(([block, days]) => (
    //             <div key={block} className="block-wrapper">
    //                 <div className={`block-header ${activeBlock === block ? "active" : ""}`} onClick={() => { setActiveBlock(activeBlock === block ? null : block); setActiveDay(null); }}>
    //                     <span>{`Block ${block}`}</span>
    //                     <span className="toggle-icon">{activeBlock === block ? "−" : "+"}</span>
    //                 </div>
    //
    //                 <div className={`block-content ${activeBlock === block ? "open" : ""}`}>
    //                     {Object.entries(days).map(([day, matchesArr]) => (
    //                         <div key={day} className="day-wrapper">
    //                             <div className={`day-header ${activeDay === `${block}-${day}` ? "active" : ""}`} onClick={() => setActiveDay(activeDay === `${block}-${day}` ? null : `${block}-${day}`)}>
    //                                 <span>{day}</span>
    //                                 <span className="toggle-icon">{activeDay === `${block}-${day}` ? "−" : "+"}</span>
    //                             </div>
    //                             <div className={`day-content ${activeDay === `${block}-${day}` ? "open" : ""}`}>
    //                                 {activeDay === `${block}-${day}` && (
    //                                     <table className="matches-table">
    //                                         <thead>
    //                                         <tr>
    //                                             <th>Time</th>
    //                                             <th>Match</th>
    //                                             <th>Court</th>
    //                                             <th>Score</th>
    //                                         </tr>
    //                                         </thead>
    //                                         <tbody>
    //                                         {matchesArr.map((m, i) => (
    //                                             <tr key={`${block}-${day}-${i}`}>
    //                                                 <td>{m.time}</td>
    //                                                 <td>{m.match}</td>
    //                                                 <td>{m.court}</td>
    //                                                 <td>{m.score}</td>
    //                                             </tr>
    //                                         ))}
    //                                         </tbody>
    //                                     </table>
    //                                 )}
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
}
