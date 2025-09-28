import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./LiveMatches.css";
import { playersData } from "./Players";
import QualifyingStage from "./QualifyingBracket.jsx";
import ChampionshipTree from "/MainChampionship.png"; // ⬅️ your tree photo

export default function LiveMatches() {
    const [view, setView] = useState("main"); // "main" | "qualifying" | "tree"

    const [matches, setMatches] = useState([]);
    const [groupedMatches, setGroupedMatches] = useState({});
    const [activeBlock, setActiveBlock] = useState(null);
    const [activeDay, setActiveDay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    const [playerMap, setPlayerMap] = useState({});
    const [showPlayerPopup, setShowPlayerPopup] = useState(false);
    const [searchTriggered, setSearchTriggered] = useState(false);

    const allPlayers = playersData.flatMap((group) => group.players);

    // 🔹 fetch matches
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

    // 🔹 group matches
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

                {/* 🔹 VIEW TOGGLE BUTTONS */}
                <div className="view-toggle">
                    <button
                        className={view === "main" ? "active" : ""}
                        onClick={() => setView("main")}
                    >
                        Main Matches
                    </button>
                    <button
                        className={view === "qualifying" ? "active" : ""}
                        onClick={() => setView("qualifying")}
                    >
                        Qualifying Stage
                    </button>
                    <button
                        className={view === "tree" ? "active" : ""}
                        onClick={() => setView("tree")}
                    >
                        Championship Tree
                    </button>
                </div>
            </div>

            {/* 🔹 CONDITIONAL RENDER */}
            {view === "qualifying" ? (
                <QualifyingStage />
            ) : view === "tree" ? (
                <div className="championship-tree-container">
                    <img
                        src={ChampionshipTree}
                        alt="Championship Bracket Tree"
                        className="championship-tree"
                    />
                </div>
            ) : (
                <>
                    {Object.entries(groupedMatches).length === 0 && (
                        <div className="no-matches">No matches found.</div>
                    )}

                    {Object.entries(groupedMatches).map(([block, days]) => (
                        <div key={block} className="block-wrapper">
                            <div
                                className={`block-header ${
                                    activeBlock === block ? "active" : ""
                                }`}
                                onClick={() => {
                                    setActiveBlock(activeBlock === block ? null : block);
                                    setActiveDay(null);
                                }}
                            >
                                <span>{` ${block}`}</span>
                                <span className="toggle-icon">
                                    {activeBlock === block ? "−" : "+"}
                                </span>
                            </div>

                            <div
                                className={`block-content ${
                                    activeBlock === block ? "open" : ""
                                }`}
                            >
                                {Object.entries(days).map(([day, matchesArr]) => (
                                    <div key={day} className="day-wrapper">
                                        <div
                                            className={`day-header ${
                                                activeDay === `${block}-${day}`
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setActiveDay(
                                                    activeDay === `${block}-${day}`
                                                        ? null
                                                        : `${block}-${day}`
                                                )
                                            }
                                        >
                                            <span>{`Day ${day}`}</span>
                                            <span className="toggle-icon">
                                                {activeDay === `${block}-${day}`
                                                    ? "−"
                                                    : "+"}
                                            </span>
                                        </div>
                                        <div
                                            className={`day-content ${
                                                activeDay === `${block}-${day}`
                                                    ? "open"
                                                    : ""
                                            }`}
                                        >
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
                                                                <td>{m.time}</td>
                                                                <td>{m.match}</td>
                                                                <td>{m.court}</td>
                                                                <td>{m.score}</td>
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
                </>
            )}
        </div>
    );
}
