import { useState } from 'react';
import './Blocks.css';

export default function Blocks() {
    return(
        <p className="blocks-coming-soon">
            📌 Blocks will be displayed here soon. Stay tuned!
        </p>
    );

    // const [activeBlock, setActiveBlock] = useState(null);
    // const [searchQuery, setSearchQuery] = useState("");
    // const [suggestions, setSuggestions] = useState([]);
    // const [highlightedPlayers, setHighlightedPlayers] = useState([]);
    //
    // const blocks = [
    //     { id: 1, name: "Block A", players: ["Tom Balding", "Maram Nabil", "Yasser Aboelnour", "Darin Guffey","May Aly Maher","David Openshaw", "Jose Perez", "Evan Newell","Khaled Hazem","Gabrielle Maloof", "Georgina Carnegie","Len Canavan"] },
    //     { id: 2, name: "Block B", players: ["Reg Bamford", "Ayman Nagah", "Dominic Nunns", "Dina Saad", "Ahmed El-Tawiel","Aly El-Zainy","Saif Hatem", "Mary McMahon","Hesham Zoghby","Pauline Markwell","Sarah Persons"] },
    //     { id: 3, name: "Block C", players: ["Hamy Erian", "Yousif Yasser", "Mohamed Walid", "Ahmed Abdelshafy","Juan Ojeda","Mohammed Kamal","Amr Hamdy","Nazmi Nazmi","Ashley Deakin","Jill Sullivan","Seham Hassan"] },
    //     { id: 4, name: "Block D", players: ["Ahmed Nasr", "Kyle Maloof", "Omar Fahmy", "Manwell Marcos Fal","Hossam El-Atfy","Rania Khourshed","Mohamed Abo-ElNour","Samy Ahmed","Ana Sanchez","Jacobo Garay","Nour Abdel-All"] },
    //     { id: 5, name: "Block E", players: ["Mohamed Nasr", "Karim Ghamry", "Hazem El-Sayed", "Ahmed El-Amary","Nicolas Denizot","Alison Sharpe","Hazem Zaghlol","Ghassan Saba","Khaled Kholief","Sandra Knuth","Rana El-Alami"] },
    //     { id: 6, name: "Block F", players: ["Yasser Sayed", "Mostafa Nezar", "Stephen Morgan", "Ahab Abdel-wahab","Sandy Hassan","Ahmed Kamal","Yousif El-Swaify","Miroslav Havlik","Maria Calerio Garrido","Bill Simmons","Manual Antonio"] },
    //     { id: 7, name: "Block G", players: ["Soha Mostafa", "Fawzy Helmy", "Sherif Abdel-wahab", "Tamer Hatat","Hossam El-Bibany","Mostafa Samir","Ahmed Aly","Sherif Aboosbaa","Aly Radwan","Adam Peck","Sandy Tawa"] },
    //     { id: 8, name: "Block H", players: ["Khaled Kamel", "Mohamed Taha", "Nour Aly", "Mostafa Eissa","Hanan Rashad","Sara Hany","Asrar El-Saaid","Ignacio Gross","Claire Keating","Leticia Gonzalez","Renee F. Seblatning"] },
    // ];
    //
    // const handleClick = (id) => {
    //     setActiveBlock(id);
    //     setHighlightedPlayers([]);
    // };
    //
    // const closeModal = () => {
    //     setActiveBlock(null);
    //     setHighlightedPlayers([]);
    //     setSearchQuery("");
    // };
    //
    // // Autocomplete suggestions
    // const handleInputChange = (e) => {
    //     const value = e.target.value;
    //     setSearchQuery(value);
    //
    //     if (!value.trim()) {
    //         setSuggestions([]);
    //         return;
    //     }
    //
    //     const query = value.toLowerCase();
    //     let allPlayers = blocks.flatMap(b => b.players.map(p => ({ player: p, block: b.id })));
    //     let filtered = allPlayers.filter(obj => obj.player.toLowerCase().includes(query));
    //     setSuggestions(filtered.slice(0, 6)); // limit to 6
    // };
    //
    // // Select from suggestions → open block + highlight
    // const selectPlayer = (player, blockId) => {
    //     setSearchQuery(player);
    //     setSuggestions([]);
    //     setActiveBlock(blockId);
    //     setHighlightedPlayers([player]);
    // };
    //
    // // Manual search fallback
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     const query = searchQuery.trim().toLowerCase();
    //     if (!query) return;
    //
    //     for (let block of blocks) {
    //         const match = block.players.find(p => p.toLowerCase().includes(query));
    //         if (match) {
    //             setActiveBlock(block.id);
    //             setHighlightedPlayers([match]);
    //             return;
    //         }
    //     }
    //     alert("❌ Player not found");
    // };
    //
    // return (
    //     <div className="blocks-page">
    //         <div className="blocks-header">
    //             <h1>Championship Blocks 🏆</h1>
    //             <p>Type your name to find your block</p>
    //         </div>
    //
    //         {/* --- Search Section --- */}
    //         <form onSubmit={handleSearch} className="search-box">
    //             <input
    //                 type="text"
    //                 placeholder="Enter your name..."
    //                 value={searchQuery}
    //                 onChange={handleInputChange}
    //             />
    //             <button type="submit">Find</button>
    //         </form>
    //
    //         {/* Autocomplete dropdown */}
    //         {suggestions.length > 0 && (
    //             <ul className="suggestions-list">
    //                 {suggestions.map((s, i) => (
    //                     <li key={i} onClick={() => selectPlayer(s.player, s.block)}>
    //                         {s.player} <span className="block-label">({blocks.find(b => b.id === s.block).name})</span>
    //                     </li>
    //                 ))}
    //             </ul>
    //         )}
    //
    //         {/* Show all blocks only if no player selected */}
    //         {!activeBlock && (
    //             <div className="blocks-grid">
    //                 {blocks.map(block => (
    //                     <div
    //                         key={block.id}
    //                         className="block-card"
    //                         onClick={() => handleClick(block.id)}
    //                     >
    //                         <h3>{block.name}</h3>
    //                         <ul className="block-list">
    //                             {block.players.map((player, i) => (
    //                                 <li key={i}>{player}</li>
    //                             ))}
    //                         </ul>
    //                     </div>
    //                 ))}
    //             </div>
    //         )}
    //
    //         {/* Modal shows ONLY the selected block */}
    //         {activeBlock && (
    //             <div className="modal-overlay" onClick={closeModal}>
    //                 <div
    //                     className="modal-card"
    //                     onClick={(e) => e.stopPropagation()}
    //                 >
    //                     <h3>{blocks.find(b => b.id === activeBlock).name}</h3>
    //                     <ul className="block-list">
    //                         {blocks.find(b => b.id === activeBlock).players.map((player, i) => (
    //                             <li
    //                                 key={i}
    //                                 className={highlightedPlayers.includes(player) ? "highlight" : ""}
    //                             >
    //                                 {player}
    //                             </li>
    //                         ))}
    //                     </ul>
    //                     <button className="close-btn" onClick={closeModal}>✕</button>
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // );
}
