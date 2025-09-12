import { useState } from 'react';
import './Blocks.css';

export default function Blocks() {
    const [activeBlock, setActiveBlock] = useState(null);

    const blocks = [
        { id: 1, name: "Block A", players: ["Tom Balding", "Maram Nabil", "Yasser Aboelnour", "Darin Guffey","May Aly Maher","David Openshaw", "Jose Perez", "Evan Newell","Khaled Hazem","Gabrielle Maloof", "Georgina Carnegie","Len Canavan"] },
        { id: 2, name: "Block B", players: ["Reg Bamford", "Ayman Nagah", "Dominic Nunns", "Dina Saad", "Ahmed El-Tawiel","Aly El-Zainy","Saif Hatem", "Mary McMahon","Hesham Zoghby","Pauline Markwell","Sarah Persons"] },
        { id: 3, name: "Block C", players: ["Hamy Erian", "Yousif Yasser", "Mohamed Walid", "Ahmed Abdelshafy","Juan Ojeda","Mohammed Kamal","Amr Hamdy","Nazmi Nazmi","Ashley Deakin","Jill Sullivan","Seham Hassan"] },
        { id: 4, name: "Block D", players: ["Ahmed Nasr", "Kyle Maloof", "Omar Fahmy", "Manwell Marcos Fal","Hossam El-Atfy","Rania Khourshed","Mohamed Abo-ElNour","Samy Ahmed","Ana Sanchez","Jacobo Garay","Nour Abdel-All"] },
        { id: 5, name: "Block E", players: ["Mohamed Nasr", "Karim Ghamry", "Hazem El-Sayed", "Ahmed El-Amary","Nicolas Denizot","Alison Sharpe","Hazem Zaghlol","Ghassan Saba","Khaled Kholief","Sandra Knuth","Rana El-Alami"] },
        { id: 6, name: "Block F", players: ["Yasser Sayed", "Mostafa Nezar", "Stephen Morgan", "Ahab Abdel-wahab","Sandy Hassan","Ahmed Kamal","Yousif El-Swaify","Miroslav Havlik","Maria Calerio Garrido","Bill Simmons","Manual Antonio"] },
        { id: 7, name: "Block G", players: ["Soha Mostafa", "Fawzy Helmy", "Sherif Abdel-wahab", "Tamer Hatat","Hossam El-Bibany","Mostafa Samir","Ahmed Aly","Sherif Aboosbaa","Aly Radwan","Adam Peck","Sandy Tawa"] },
        { id: 8, name: "Block H", players: ["Khaled Kamel", "Mohamed Taha", "Nour Aly", "Mostafa Eissa","Hanan Rashad","Sara Hany","Asrar El-Saaid","Ignacio Gross","Claire Keating","Leticia Gonzalez","Renee F. Seblatning"] },
    ];

    const handleClick = (id) => {
        setActiveBlock(id);
    };

    const closeModal = () => {
        setActiveBlock(null);
    };

    return (
        <div className="blocks-page">
            <div className="blocks-header">
                <h1>Championship Blocks 🏆</h1>
                <p>Explore the 8 tournament blocks below</p>
                <p className="Scroll">Scroll in your block, to see all the players</p>
            </div>

            <div className="blocks-grid">
                {blocks.map(block => (
                    <div
                        key={block.id}
                        className="block-card"
                        onClick={() => handleClick(block.id)}
                    >
                        <h3>{block.name}</h3>
                        <ul className="block-list">
                            {block.players.map((player, i) => (
                                <li key={i}>{player}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {activeBlock && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-card"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        <h3>{blocks.find(b => b.id === activeBlock).name}</h3>
                        <ul className="block-list">
                            {blocks.find(b => b.id === activeBlock).players.map((player, i) => (
                                <li key={i}>{player}</li>
                            ))}
                        </ul>
                        <button className="close-btn" onClick={closeModal}>✕</button>
                    </div>
                </div>
            )}
        </div>
    );
}
