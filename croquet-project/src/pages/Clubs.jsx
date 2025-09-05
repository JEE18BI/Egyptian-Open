import { useState } from "react";
import "./Clubs.css";

// Import images directly
import club1 from "../components/1.jpg";
import club2 from "../components/2.jpg";
import club3 from "../components/3.jpg";
import club4 from "../components/4.jpg";
import club5 from "../components/5.jpg";

export default function Clubs() {
    const [selectedClub, setSelectedClub] = useState(null);

    const clubsData = [
        {
            id: 1,
            name: "El-Gezira Club",
            logo: "🏛️",
            photo: club5,
            description: "One of Egypt's most prestigious sporting clubs with excellent croquet facilities.",
            address: "Zamalek, Cairo",
            facilities: ["3 Croquet Courts", "Club Restaurant & Cafeteria", "Air-conditioned Players’ Lounge","Close Bathrooms & Locker Rooms"],
            tips: "The main restaurant is highly recommended and located right next to the courts.",
            location : "https://maps.app.goo.gl/32bXoRF1nbmQE5jo7?g_st=ipc"
        },
        {
            id: 2,
            name: "Federation Courts",
            logo: "🎯",
            photo: club2,
            description: "Official federation courts with international standard facilities.",
            address: "Zamalek, Cairo",
            facilities: ["3 Croquet Courts", "Cafeteria", "Air-conditioned Players’ Lounge","Close Bathrooms & Locker Rooms"],
            tips: "Perfect location for competitive matches with professional setup.",
            location: "https://maps.app.goo.gl/32bXoRF1nbmQE5jo7?g_st=ipc"
        },
        {
            id: 3,
            name: "Heliopolis Club",
            logo: "🌳",
            photo: club1,
            description: "Historic club with beautiful surroundings and well-maintained courts.",
            address: "El-Shorouk, Cairo",
            contact: "",
            facilities: ["2 Croquet Courts", "Club Restaurant & Cafeteria", "Air-conditioned Players’ Lounge","Close Bathrooms & Locker Rooms"],
            tips: "Busses are going to leave from the Federation Courts.",
            location: "https://maps.app.goo.gl/CG3b8aPF2iFNWUcF9?g_st=ipc"
        },
        {
            id: 4,
            name: "Shooting Club",
            logo: "🎯",
            photo: club3,
            description: "Multi-sport club known for its excellent facilities and organization.",
            address: "Dokki, Cairo",
            contact: "+20 2 3336 3456",
            facilities: ["2 Croquet Courts", "Cafeteria & Nearby Fast Food Restaurants", "Air-conditioned Players’ Lounge", "Bathrooms & Locker Rooms"],
            tips: "La Poire (just in front of the courts) and Bon Appetit are popular choices for dining.",
            location: "https://maps.app.goo.gl/KdoJUsi4ZkruQfEn9?g_st=ipc"
        },
        {
            id: 5,
            name: "El-Zohor Club",
            logo: "🌅",
            photo: club4,
            description: "Exclusive club with top-notch amenities and professional staff.",
            address: "Nasr City, Cairo",
            contact: "",
            facilities: ["2 Croquet Courts", "Cafeteria", "Air-conditioned Players’ Lounge", "Bathrooms & Locker Rooms"],
            tips: "Check the schedule for special events during the tournament.",
            location:"https://maps.app.goo.gl/sCMjZJUe5TthFePU8?g_st=ipc"
        }
    ];

    return (
        <div className="clubs-page">
            <div className="clubs-header">
                <h1>Clubs Participating! 🏛️</h1>
                <p>Discover the prestigious venues hosting the Egyptian Open Championship</p>
            </div>

            <div className="clubs-container">
                {clubsData.map(club => (
                    <div
                        key={club.id}
                        className="club-card"
                        onClick={() => setSelectedClub(club)}
                    >
                        <div className="club-image-container">
                            <img src={club.photo} alt={club.name} className="club-image" />
                            <div className="club-overlay">
                                <span className="view-details">Click for details →</span>
                            </div>
                        </div>
                        <h3 className="club-name">{club.name}</h3>
                    </div>
                ))}
            </div>

            {/* Modal overlay with conditional active class */}
            <div className={`club-details-overlay ${selectedClub ? 'active' : ''}`}
                 onClick={() => setSelectedClub(null)}>
                <div className="club-details" onClick={(e) => e.stopPropagation()}>
                    {/* Close button */}
                    <button className="close-button" onClick={() => setSelectedClub(null)}>×</button>

                    {selectedClub && (
                        <>
                            <div className="details-image-container">
                                <img src={selectedClub.photo} alt={selectedClub.name} className="details-image" />
                            </div>

                            <div className="details-content">
                                <div className="details-header">
                                    <h2>{selectedClub.name}</h2>
                                    <div className="club-logo">{selectedClub.logo}</div>
                                </div>

                                <div className="details-section">
                                    <h4>📍 Address</h4>
                                    <p>{selectedClub.address}</p>
                                </div>

                                {selectedClub.contact && (
                                    <div className="details-section">
                                        <h4>📞 Contact</h4>
                                        <p>{selectedClub.contact}</p>
                                    </div>
                                )}

                                <div className="details-section">
                                    <h4>🏆 Facilities</h4>
                                    <ul>
                                        {selectedClub.facilities.map((facility, i) => (
                                            <li key={i}>{facility}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="details-section">
                                    <h4>💡 Tips & Recommendations</h4>
                                    <p>{selectedClub.tips}</p>
                                </div>

                                <div className="details-section">
                                    <h4>📝 Description</h4>
                                    <p>{selectedClub.description}</p>
                                </div>
                            </div>

                            <div className="details-footer">
                                <button
                                    className="directions-button"
                                    onClick={() => window.open(selectedClub.location, "_blank")}
                                >
                                    📍 Get Directions
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}