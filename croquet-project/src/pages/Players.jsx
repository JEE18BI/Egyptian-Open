import './Players.css';
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

export default function Players() {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const playersData = [
        {
            country: "Egypt",
            code: "EG",
            players: [
                { id: 1, name: "Ahmed Nasr", photo: "/players/ahmednasr.jpg" },
                { id: 2, name: "Mohamed Nasr", photo: "/players/2.jpg" },
                { id: 3, name: "Soha Mostafa", photo: "/players/soha.jpg" },
                { id: 4, name: "Mohamed Walid", photo: "/players/waleed.jpg" },
                { id: 5, name: "Mohamed Taha", photo: "/players/5.jpg" },
                { id: 6, name: "Fawzy Helmy", photo: "/players/fawzy.jpg" },
                { id: 7, name: "Khaled Kamel", photo: "/players/khaledkamel.jpg" },
                { id: 29, name: "Youssef Yasser", photo: "/players/youssefyasser.jpg"},
                { id: 8, name: "Ayman Nagah", photo: "/players/ayman.jpg" },
                { id: 23, name: "Mostafa Eissa", photo: "/players/mostafaeissa.jpg" },
                { id: 9, name: "Mohamed Abo-Elnour", photo: "/players/mohamedaboelnour.jpg" },
                { id: 10, name: "Dina Saad", photo: "/players/dinasaad.jpg" },
                { id: 14, name: "Mostafa Nezar", photo: "/players/mostafa.png" },
                { id: 16, name: "Hamy Erian", photo: "/players/hamy.jpg" },
                { id: 17, name: "Maram Nabil", photo: "/players/maram.jpg" },
                { id: 12, name: "Kareem Ghamry", photo: "/players/kareem.png" },
                { id: 18, name: "Yasser Sayed", photo: "/players/yassersayed.jpg" },
                { id: 19, name: "Omar Fahmy", photo: "/players/fahmy.jpg" },
                { id: 13, name: "Yasser Abo-Elnour", photo: "/players/yasser.jpg" },
                { id: 20, name: "Nour Aly", photo: "/players/nouraly.jpg" },
                { id: 230, name: "Ahmed Abdel-Shafi", photo: "/players/shafi.jpg" },
                { id: 24, name: "Sherif Abousbaa", photo: "/players/sherifabo.jpg" },
                { id: 200, name: "Sarah Hany", photo: "/players/sarahhany.jpg" },
                { id: 25, name: "Samy Ahmed", photo: "/players/samy.jpg" },
                { id: 26, name: "Hazem Zaghloul", photo: "/players/hazem.jpg" },
                { id: 27, name: "Ahmed El-Taweel", photo: "/players/eltaweel.jpg" },
                { id: 28, name: "Ahmed Aly", photo: "/players/ahmedaly.jpg"},
                { id: 21, name: "Rania Khorshed", photo: "/players/rania.jpg" },
                { id: 22, name: "Asrar Rabieh", photo: "/players/asrar.jpg" },
                { id: 15, name: "Youssef El-Seweify", photo: "/players/seweify.jpg" },
                { id: 11, name: "Khaled Hazem", photo: "/players/khaledhazem.jpg" },
                { id: 12, name: "Hazem El-Sayed", photo: "/players/hazemelsayed.jpg" },
                { id: 100, name: "May Aly Maher", photo: "/players/maymaher.png" },
                { id: 101, name: "Aly El-Zeiny", photo: "/players/alyelzeiny.jpg" },
                { id: 103, name: "Saif Hatem", photo: "/players/saifhatem.jpg" },
                { id: 104, name: "Hossam El-Atfy", photo: "/players/hossamatfy.jpg" },
                { id: 105, name: "Sandy Hassan", photo: "/players/sandyhassan.jpg" },
                { id: 106, name: "Ahmed El-Ammary", photo: "/players/ammary.jpg" },
                { id: 107, name: "Ahmed Kamal", photo: "/players/ahmedkamal.jpg" },
                { id: 108, name: "Mostafa Samir", photo: "/players/mostafasamir.jpg" },








            ]
        },
        {
            country: "Australia",
            code: "AU",
            players: [
                { id: 16, name: "Alison Sharpe", photo: "/players/alison.jpg" },
                { id: 17, name: "Jill Sullivan", photo: "/players/jill.png" },
                { id: 18, name: "Mary McMahon", photo: "/players/mary.png" },
                { id: 19, name: "Georgina Carnegie", photo: "/players/georgina.jpg" },
                { id: 20, name: "Claire Keating", photo: "/players/claire.jpg" },
                { id: 21, name: "Pauline Markwell", photo: "/players/pauline.png" },
                {id:22, name: "Sandy Tawa", photo:"/players/sandy.jpg"},
            ]
        },
        {
            country: "South Africa",
            code: "ZA",
            players: [
                { id: 22, name: "Reg Bamford", photo: "/players/reg.jpg" },
            ]
        },
        {
            country: "USA",
            code: "US",
            players: [
                { id: 24, name: "Len Canavan", photo: "/players/len.jpg" },
                { id: 23, name: "Tom Balding", photo: "/players/tom.jpg" },
                { id: 35, name: "Adam Peck", photo: "/players/adam.jpg" },
                { id: 36, name: "Darin Guffey", photo: "/players/darin.jpg" },

                { id: 25, name: "Bill Simmons", photo: "/players/bill.jpeg" },
                { id: 26, name: "Kyle Maloof", photo: "/players/kyle.png" },
                { id: 27, name: "Gabriella Maloof", photo: "/players/gabriella.png" },
                { id: 28, name: "Sherif Abdelwahab", photo: "/players/sherif.jpg" },
                { id: 29, name: "Ahab Abdel Wahab", photo: "/players/ahab.jpg" },
                { id: 30, name: "Tamer Hatata", photo: "/players/tamer.jpg" },
                { id: 31, name: "Sandra Knuth", photo: "/players/sandra.jpg" },
                { id: 32, name: "Sarah Persons", photo: "/players/sarah.png" },
                { id: 33, name: "Hossam El Bibani", photo: "/players/hossam.jpg" },
                { id: 34, name: "Mohamed Kamal", photo: "/players/mohamed.jpg" },

                { id: 38, name: "Nour Abdel All", photo: "/players/nour.jpg" },
                { id: 39, name: "Seham Hassan", photo: "/players/seham.jpg" },
                { id: 40, name: "Khaled Kholeif", photo: "/players/kholief.jpg" },
                { id: 41, name: "Renee F. Seblatning", photo: "/players/renee.jpg" },
            ]
        },
        {
            country: "Spain",
            code: "ES",
            players: [
                { id: 42, name: "Leticia Gonzalez", photo: "/players/leticia.jpg" },
                { id: 43, name: "Nicolas Denizot", photo: "/players/nicolas.jpg" },
                { id: 44, name: "Jacobo Garay", photo: "/players/jacobo.jpg" },
                { id: 45, name: "Manual Antonio Fontan", photo: "/players/manuel.png" },
                { id: 46, name: "Manual Marcos", photo: "/players/manual.jpg" },
                { id: 47, name: "María Calero Garrido", photo: "/players/maria.png" },
                { id: 48, name: "Juan Ojeda", photo: "/players/juan.jpg" },
                { id: 49, name: "Ana Sánchez de Granda", photo: "/players/ana.png" },
                { id: 50, name: "José Perez Fernandez", photo: "/players/jose.png" },
                { id: 51, name: "Ignacio Gross Alesanco", photo: "/players/ignacio.jpg" },
            ]
        },
        {
            country: "Palestine",
            code: "PS",
            players: [
                { id: 52, name: "Rana El Alami", photo: "/players/rana.jpg" }
            ]
        },
        {
            country: "Canada",
            code: "CA",
            players: [
                { id: 53, name: "Ali Radwan", photo: "/players/ali.jpg" },
                { id: 54, name: "Ghassan Saba", photo: "/players/ghassan.jpg" },
                { id: 55, name: "Hanan Rashad", photo: "/players/hanan.jpg" },
                { id: 56, name: "Hisham Zoghby", photo: "/players/hisham.jpg" },
                { id: 57, name: "Amr Hamdy", photo: "/players/amr.jpg" },
                { id: 58, name: "Nazmi Mohamed", photo: "/players/nazmi.jpg" },

            ]
        },
        {
            country: "Ireland",
            code: "IE",
            players: [
                { id: 60, name: "Evan Newell", photo: "/players/evan.png" }
            ]
        },
        {
            country: "Czech Republic",
            code: "CZ",
            players: [
                { id: 61, name: "Miroslav Havlik", photo: "/players/miroslav.jpg" }
            ]
        },
        {
            country: "England",
            code: "GB",
            players: [
                { id: 62, name: "Dominic Nunns", photo: "/players/dominic.png" },
                { id: 63, name: "Ashley Deakin", photo: "/players/ashley.jpg" },
                { id: 64, name: "David Openshaw", photo: "/players/david.jpg" },
            ]
        }
    ];


    return (
        <div className="players-page">
            {/* Header Section */}
            <div className="players-header">
                <h1>Players 🌍</h1>
                <p className="players-intro">Meet all competitors of the Egypt Open 2025</p>
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
                                        onClick={() => setSelectedPlayer(player.photo)}
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
                <p>88 talented players competing in the 20th Egyptian Open</p>
            </div>
            {selectedPlayer && (
                <div className="player-modal" onClick={() => setSelectedPlayer(null)}>
                    <span className="close-btn" onClick={() => setSelectedPlayer(null)}>&times;</span>
                    <img src={selectedPlayer} alt="Player" />
                </div>
            )}
        </div>
    );
}
