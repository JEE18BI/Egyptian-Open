import React from "react";
import "./QualifyingBracket.css";

const MatchPhotos = () => {
    const matches = [
        { id: 1, name: "QF1" },
        { id: 2, name: "QF2" },
        { id: 3, name: "QF3" },
        { id: 4, name: "QF4" },
        { id: 5, name: "QF5" },
        { id: 6, name: "QF6" },
        { id: 7, name: "QF7" },
        { id: 8, name: "QF8" }
    ];

    return (
        <div className="photos-container">
            <h2>Qualifying Stage Matches</h2>
            <div className="matches-grid">
                {matches.map(match => (
                    <div key={match.id} className="match-card">
                        <img
                            src={`./QF/QF${match.id}.png`}
                            alt={`Match ${match.id}`}
                            className="match-photo"
                        />
                        <div className="match-label">{match.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatchPhotos;