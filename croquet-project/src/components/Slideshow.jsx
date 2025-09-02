import React from "react";
import "./Slideshow.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";

export default function Slideshow() {
    return (
        <div className="slideshow">
            <img src={img1} alt="slide 1" />
            <img src={img2} alt="slide 2" />
            <img src={img3} alt="slide 3" />
            <img src={img4} alt="slide 4" />
            <div className="hero-text">
                <h1 className="H1">Egyptian Open Croquet!</h1>
                <p>Welcome to the championship</p>
            </div>
        </div>
    );
}
