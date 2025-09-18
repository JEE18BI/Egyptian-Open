import { useState } from "react";
import "./Clubs.css";

// Import images directly
import club1 from "../components/1.jpg";
import club2 from "../components/2.jpg";
import club3 from "../components/3.jpg";
import club4 from "../components/4.jpg";
import club5 from "../components/5.jpg";
import club6 from "../components/66.jpg";
export default function Clubs() {
    const [selectedClub, setSelectedClub] = useState(null);

    const clubsData = [

        {
            id: 1,
            name: "El-Gezira Club",
            logo: "🏛️",
            photo: club5,
            description: "One of Egypt's most prestigious sporting clubs with excellent croquet facilities. Just a 5-minute walk from the Federation Courts, together forming the heart of croquet in Zamalek.",
            address: "Zamalek, Cairo",
            facilities: [
                "3 Croquet Courts",
                "Club Restaurant & Cafeteria",
                "Air-conditioned Players’ Lounge",
                "Close Bathrooms & Locker Rooms"
            ],
            tips: "The main restaurant is highly recommended and located right next to the courts. Also very close to Federation Courts for even more food options.",
            food: [
                "🍽️ Club Restaurant – inside Gezirah Club, right by the courts",
                "🥤 Cafeteria – snacks & drinks at the courts",
                "🍔 McDonald’s & other burger places – on the short walk between Federation and Gezirah"
            ],
            location : "https://maps.app.goo.gl/32bXoRF1nbmQE5jo7?g_st=ipc"


},
        {
            id: 2,
            name: "Federation Courts",
            logo: "🎯",
            photo: club2,
            description: "Located just a 5-minute walk from El-Gezira Club, the Federation Courts are part of the same sporting hub. They feature international-standard facilities and host many top-level competitive matches.",
            address: "Zamalek, Cairo",
            facilities: [
                "3 Croquet Courts",
                "Cafeteria",
                "Air-conditioned Players’ Lounge",
                "Close Bathrooms & Locker Rooms"
            ],
            tips: "You'll find plenty of People to Help you Everyday!",
            food: [
                "🍽️ Club Restaurant – inside Gezirah Club, a 5 min walk",
                "☕ Orangette – café right in front of Federation gates",
                "🥤 Federation Cafeteria – snacks & drinks at the courts",
                "🍔 McDonald’s & other burger places – on the short walk between Federation and Gezirah"
            ],
            location: "https://maps.app.goo.gl/32bXoRF1nbmQE5jo7?g_st=ipc"
        },

        {
            id: 3,
            name: "Heliopolis Club",
            logo: "🌳",
            photo: club1,
            description: "Historic club with beautiful surroundings and well-maintained courts.",
            address: "El-Shorouk, Cairo",
            facilities: [
                "2 Croquet Courts",
                "Club Restaurant & Cafeteria",
                "Air-conditioned Players’ Lounge",
                "Close Bathrooms & Locker Rooms"
            ],
            tips: "The main Restaurant is highly recommended.",
            food: [
                "🥗 Club Restaurant – classic meals",
                "Cafeteria - Just Order!",
                "🥪 Costa Coffee – drinks & sandwiches",

            ],
            location: "https://maps.app.goo.gl/CG3b8aPF2iFNWUcF9?g_st=ipc"
        },
        {
            id: 4,
            name: "Shooting Club",
            logo: "🎯",
            photo: club3,
            description: "One of Cairo’s most vibrant sporting hubs. Renowned for its excellent organization and welcoming atmosphere, the Shooting Club offers some of the best-maintained croquet courts in Egypt. With a strong tradition of hosting major tournaments, it remains a favorite destination for both players and fans of the sport.",
            address: "Dokki, Cairo",

            facilities: [
                "2 Croquet Courts",
                "Cafeteria & Nearby Fast Food Restaurants",
                "Air-conditioned Players’ Lounge",
                "Bathrooms & Locker Rooms"
            ],
            // tips: "Ghada and Mervat are super helpful! If anything, just look for them.",
            food: [
                "🥪 Bon Appetit – sandwiches",
                "🍗 El Lido – shawerma & chicken sandwiches",
                "🍔 Mince – burgers",
                "🥤 La Poire – drinks & food (in front of courts)",
                "🌯 Shawerma place – right next to courts",
                "🥗 Gourmet Salad – healthy option"
            ],
            location: "https://maps.app.goo.gl/KdoJUsi4ZkruQfEn9?g_st=ipc"
        },

        {
            id: 5,
            name: "El-Zohour Club",
            logo: "🌅",
            photo: club4,
            description: "Exclusive club with top-notch amenities and professional staff. Known for its comfortable setup and variety of services, making it an excellent venue for the championship.",
            address: "Nasr City, Cairo",
            contact: "",
            facilities: [
                "2 Croquet Courts",
                "Cafeteria",
                "Air-conditioned Players’ Lounge",
                "Bathrooms & Locker Rooms"
            ],
            // tips: "If you need anything, You can call Salah Hassan. You'll find his contact in Help section",
            food: [
                "🏨 Four Seasons – fine dining nearby",
                "🍴 Half Time – quick outlet for snacks & light meals",
                "🥪 Bon Appetit – sandwiches & baked items",
                "☕ Club Cafeteria – serves all beverages, pies & crepes , and full meals",
                "🥤 Nearby coffeeshops – casual options around the club"
            ],
            location:"https://maps.app.goo.gl/sCMjZJUe5TthFePU8?g_st=ipc"
        },
        {
            id: 6,
            name: "El-Zamalek Club",
            logo: "🌅",
            photo: club6,
            description: "Exclusive club with top-notch amenities and professional staff. Known for its comfortable setup and variety of services, making it an excellent venue for the championship.",
            address: "Agouza, Cairo",
            contact: "",
            facilities: [
                "1 Croquet Court",
                "Cafeteria",
                "Bathroom"
            ],
            tips: "If you need anything, You can call Ahmed Mayhoub. You'll find his contact in Help section",
            food: [

                "☕ Club Cafeteria – serves all beverages, pies & crepes , and full meals",

            ],
            location:"https://maps.app.goo.gl/8vhmxeB1oFiZzSxA7?g_st=ipc"
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

            {/* Modal overlay */}
            <div className={`club-details-overlay ${selectedClub ? 'active' : ''}`}
                 onClick={() => setSelectedClub(null)}>
                <div className="club-details" onClick={(e) => e.stopPropagation()}>
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

                                {selectedClub.food && (
                                    <div className="details-section">
                                        <h4>🍴 Food Options Nearby</h4>
                                        <ul>
                                            {selectedClub.food.map((place, i) => (
                                                <li key={i}>{place}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

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
