import { useState } from "react";
import "./LazyImage.css";

export default function LazyImage({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`lazy-image-wrapper ${className || ""}`}>
            {!loaded && <div className="lazy-image-placeholder"></div>}
            <img
                src={src}
                alt={alt}
                className="lazy-image"
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? "block" : "none" }}
            />
        </div>
    );
}
