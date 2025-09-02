import './Gallery.css';

export default function Gallery() {
    return (
        <div className="gallery-page">
            <div className="gallery-header">
                <h1>Photo Gallery 📸</h1>
                <p>Here we’ll showcase beautiful moments from the tournament.</p>

                <a
                    href="https://wa.me/201060676156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    <span className="whatsapp-icon">💬</span> Send us your Photos
                </a>
            </div>

            {/* Later you’ll insert the photo grid here */}
            <div className="gallery-grid">
                {/* Example placeholder */}
                <p style={{ textAlign: "center", color: "#7f8c8d" }}>
                    Photos will appear here soon...
                </p>
            </div>
        </div>
    );
}
