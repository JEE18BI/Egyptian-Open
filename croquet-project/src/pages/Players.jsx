import './Players.css';
import ReactCountryFlag from "react-country-flag";

export default function Players() {
    const playersData = [
        {
            country: "Egypt",
            code: "EG",
            players: [
                { id: 45, name: "Amr El-Ebiary", photo: "/players/1.jpg" },
                { id: 46, name: "Mohamed Nasr", photo: "/players/2.jpg" },
                { id: 47, name: "Soha Mostafa", photo: "/players/3.jpg" },
                { id: 48, name: "Mohamed Walid", photo: "/players/4.jpg" },
                { id: 49, name: "Mohamed Taha", photo: "/players/5.jpg" },
                { id: 50, name: "Fawzy Helmy", photo: "/players/fawzy.png" },
                { id: 51, name: "Khaled Kamel", photo: "/players/khaledkamel.jpg" },
                {id:52, name: "Ayman Nagah", photo: "/players/ayman.jpg"},
                {id:53, name: "Mohamed Abo-Elnour", photo: "/players/mohamedaboelnour.jpg"},
                {id:54, name: "Dina Saad", photo: "/players/dinasaad.jpg"},
                {id:54, name: "Khaled Hazem", photo: "/players/khaledhazem.jpg"},
                {id:55, name: "", photo: "/players/.jpg"},






                // ... continue adding up to player 80
            ]
        },
        {
            country: "Australia",
            code: "AU",
            players: [
                { id: 1, name: "Alison Sharpe", photo: "/players/alison.jpg" },
                { id: 2, name: "Jill Sullivan", photo: "/players/jill.jpg" },
                { id: 3, name: "Mary McMahon", photo: "/players/mary.jpg" },
                { id: 4, name: "Georgina Carnegie", photo: "/players/georgina.jpg" },
                { id: 5, name: "Claire Keating", photo: "/players/claire.jpg" },
                { id: 6, name: "Pauline Markwell", photo: "/players/pauline.jpg" },
            ]
        },
        {
            country: "South Africa",
            code: "ZA",
            players: [
                { id: 7, name: "Reg Bamford", photo: "/players/reg.jpg" },
            ]
        },
        {
            country: "USA",
            code: "US",
            players: [
                { id: 8, name: "Tom Balding", photo: "/players/tom.jpg" },
                { id: 9, name: "Len Canavan", photo: "/players/len.jpg" },
                { id: 10, name: "Bill Simmons", photo: "/players/bill.jpg" },
                { id: 11, name: "Kyle Maloof", photo: "/players/kyle.png" },
                { id: 12, name: "Gabriella Maloof", photo: "/players/gabriella.png" },
                { id: 24, name: "Sherif Abdelwahab", photo: "/players/sherif.jpg" },
                { id: 25, name: "Ahab Abdel Wahab", photo: "/players/ahab.jpg" },
                { id: 26, name: "Tamer Hatata", photo: "/players/tamer.jpg" },
                { id: 27, name: "Sandra Knuth", photo: "/players/sandra.jpg" },
                { id: 28, name: "Sarah Persons", photo: "/players/sarah.jpg" },
                { id: 29, name: "Hossam El Bibani", photo: "/players/hossam.jpg" },
                { id: 30, name: "Mohamed Kamal", photo: "/players/mohamed.jpg" },
                { id: 31, name: "Adam Peck", photo: "/players/adam.jpg" },
                { id: 32, name: "Darin Guffey", photo: "/players/darin.jpg" },
                { id: 44, name: "Stephen Morgan", photo: "/players/stephen.jpg" },
            ]
        },
        {
            country: "Spain",
            code: "ES",
            players: [
                { id: 13, name: "Leticia Gonzalez", photo: "/players/leticia.jpg" },
                { id: 14, name: "Nicolas Denizot", photo: "/players/nicolas.jpg" },
                { id: 15, name: "Jacobo Garay", photo: "/players/jacobo.jpg" },
                { id: 16, name: "Manuel Antonio Fontan", photo: "/players/manuel.jpg" },
                { id: 17, name: "Begoña Elzaburu", photo: "/players/begona.jpg" },
                { id: 18, name: "Manual Marcos", photo: "/players/manual.jpg" },
                { id: 19, name: "María Calero Garrido", photo: "/players/maria.jpg" },
                { id: 20, name: "Juan Ojeda", photo: "/players/juan.jpg" },
                { id: 21, name: "Ana Sánchez de Granda", photo: "/players/ana.jpg" },
                { id: 22, name: "José Perez Fernandez", photo: "/players/jose.jpg" },
            ]
        },
        {
            country: "Palestine",
            code: "PS",
            players: [
                { id: 23, name: "Rana El Alami", photo: "/players/rana.jpg" }
            ]
        },
        {
            country: "Canada",
            code: "CA",
            players: [
                { id: 33, name: "Ali Radwan", photo: "/players/ali.jpg" },
                { id: 34, name: "Ghassan Saba", photo: "/players/ghassan.jpg" },
                { id: 35, name: "Hanan Rashad", photo: "/players/hanan.jpg" },
                { id: 36, name: "Hisham Zoghby", photo: "/players/hisham.jpg" },
                { id: 37, name: "Amr Hamdy", photo: "/players/amr.jpg" },
                { id: 38, name: "Nazmi Mohamed", photo: "/players/nazmi.jpg" },
            ]
        },
        {
            country: "Ireland",
            code: "IE",
            players: [
                { id: 39, name: "Evan Newell", photo: "/players/evan.jpg" }
            ]
        },
        {
            country: "Czech Republic",
            code: "CZ",
            players: [
                { id: 40, name: "Miroslav Havlik", photo: "/players/miroslav.jpg" }
            ]
        },
        {
            country: "England",
            code: "GB", // you can use "GB-ENG" too if needed
            players: [
                { id: 41, name: "Dominic Nunns", photo: "/players/dominic.jpg" },
                { id: 42, name: "Ashley Deakin", photo: "/players/ashley.jpg" },
                { id: 43, name: "David Openshaw", photo: "/players/david.jpg" },
            ]
        }
    ];

    return (
        <div className="players-page">
            {/* Header Section */}
            <div className="players-header">
                <h1>Players 🌍</h1>
                <p className="players-intro">Meet all 80 competitors of the Egyptian Open 2025</p>
            </div>

            {/* Players by Country */}
            {playersData.map((group, i) => (
                <div key={i} className="country-section">
                    <div className="country-header">
                        <ReactCountryFlag
                            countryCode={group.code}
                            svg
                            style={{
                                width: "2em",
                                height: "2em",
                                marginRight: "0.5rem"
                            }}
                        />
                        <h2>{group.country}</h2>
                    </div>
                    <div className="players-container">
                        {group.players.map(player => (
                            <div key={player.id} className="player-card">
                                <div className="player-image-container">
                                    <img
                                        src={player.photo || "/placeholder.jpg"}
                                        alt={player.name}
                                        className="player-image"
                                    />
                                    <div className="player-overlay">
                                        <span className="player-name">{player.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Footer */}
            <div className="players-footer">
                <p>80 talented players competing in the 20th Egyptian Open</p>
            </div>
        </div>
    );
}
