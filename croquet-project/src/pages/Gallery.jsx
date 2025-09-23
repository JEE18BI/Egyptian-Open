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

                {/* Centered Google Drive button */}
                <div className="drive-button-container">
                    <a
                        href="https://drive.google.com/drive/folders/1R-MM6lhg4wjbu6QbzC7cecKPFZxXHZ9_?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drive-button"
                    >
                        📂 Open in Google Drive
                    </a>
                </div>
            </div>


        </div>
    );
}
