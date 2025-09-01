import './Players.css';

export default function Players() {
    const playerImages = Array.from({ length: 80 }, (_, i) => `/players/${i + 1}.jpg`);

    return (
        <div className="players-page">
            {/* Header Section */}
            <div className="players-header">
                <h1>Players 🌟</h1>
                <p className="players-intro">Meet all 80 competitors of the Egyptian Open Championship</p>
            </div>

            {/* Players Grid */}
            <div className="players-container">
                {playerImages.map((src, index) => (
                    <div key={index} className="player-card">
                        <div className="player-image-container">
                            <img
                                src={src}
                                alt={`Player ${index + 1}`}
                                className="player-image"
                                loading="lazy"
                            />
                            <div className="player-overlay">
                                <span className="player-number">#{index + 1}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="players-footer">
                <p>80 talented players competing in the 20th Egyptian Open</p>
            </div>
        </div>
    );
}