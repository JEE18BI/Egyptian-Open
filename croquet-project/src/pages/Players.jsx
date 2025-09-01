import './Players.css';
export default function Players() {
    const playerImages = Array.from({ length: 5 }, (_, i) => `/players/${i + 1}.jpg`);

        return (
            <>
        <div className="page">
            <h1> Players 🌟</h1>
            <p className="p1">Meet the champions of the Egyptian Open.</p>

        </div>
            <div className="Container">
                {playerImages.map((src, index) => (
                    <img key={index} src={src} alt={`Player ${index + 1}`} />
                ))}
            </div>
        </>
    );

                }