// import { useState } from 'react';
// import './Blocks.css';
//
export default function Blocks() {
      return (
          <p className="Waiting">Blocks will appear here</p>
      );
//
//     const [activeBlock, setActiveBlock] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [suggestions, setSuggestions] = useState([]);
//     const [highlightedPlayers, setHighlightedPlayers] = useState([]);
//
//     const blocks = [
//         {
//             id: 1,
//             name: "Block A",
//             players: [
//                 "Tom Balding",
//                 "Maram Nabil",
//                 "Yasser Aboelnour",
//                 "Hossam Elatfy",
//                 "Nicolas Denizot",
//                 "Yousif Elswaify",
//                 "Ahmed Aly",
//                 "Claire Keating",
//                 "Adam Peck",
//                 "Rana ElAlami",
//                 "Renee F. Seblatning",
//                 "Len Canavan"
//             ]
//         },
//         {
//             id: 2,
//             name: "Block B",
//             players: [
//                 "Reg Bamford",
//                 "Ayman Nagah",
//                 "Dominic Nunns",
//                 "Juan Ojeda",
//                 "Sandy Hassan",
//                 "Hazem Zaghlol",
//                 "Asrar Elsaaid",
//                 "Aly Radowan",
//                 "Bill Simmons",
//                 "Aly Elzainy",
//                 "Leticia Gonzalez"
//             ]
//         },
//         {
//             id: 3,
//             name: "Block C",
//             players: [
//                 "Hamy Erian",
//                 "Yousif Yasser",
//                 "Mohamed Walid",
//                 "Ahmed Eltawiel",
//                 "Hossam El-Bibany",
//                 "Mohamed Aboelnour",
//                 "Ignacio Gross",
//                 "Ashley Deakin",
//                 "Jill Sullivan",
//                 "Ahmed Elamary",
//                 "Khaled Kholief"
//             ]
//         },
//         {
//             id: 4,
//             name: "Block D",
//             players: [
//                 "Ahmed Nasr",
//                 "Kyle Maloof",
//                 "Omar Fahmy",
//                 "Darin Guffey",
//                 "Alison Sharpe",
//                 "Amr Hamdy",
//                 "Sherif Aboosbaa",
//                 "Ana Sanchez",
//                 "Seham Hassan",
//                 "David Openshaw",
//                 "Manuel Antonio"
//             ]
//         },
//         {
//             id: 5,
//             name: "Block E",
//             players: [
//                 "Mohamed Nasr",
//                 "Karim Ghamry",
//                 "Sherif Abdel Wahab",
//                 "Dina Saad",
//                 "Hanan Rashad",
//                 "May Aly Maher",
//                 "Miroslav Havlik",
//                 "Hesham Zoghby",
//                 "Manuel Marcos Fal",
//                 "Elsaaid Mahmoud",
//                 "Sandy Tawa"
//             ]
//         },
//         {
//             id: 6,
//             name: "Block F",
//             players: [
//                 "Yasser Sayed",
//                 "Mostafa Nezar",
//                 "Hazem Elsayed",
//                 "Ahmed Abdelshay",
//                 "Sara Hany",
//                 "Saif Hatem",
//                 "Ghasan Saba",
//                 "Khaled Hazem",
//                 "Pauline Markwell",
//                 "Gabriella Maloof",
//                 "Jacobo Garay"
//             ]
//         },
//         {
//             id: 7,
//             name: "Block G",
//             players: [
//                 "Soha Mostafa",
//                 "Fawzy Helmy",
//                 "Nour Aly",
//                 "Ahab Abdel Wahab",
//                 "Mostafa Samir",
//                 "Mohammad Kamal",
//                 "Samy Ahmed",
//                 "Mary McMahon",
//                 "Sara persons",
//                 "Jose Perez",
//                 "Ghada Azmy"
//             ]
//         },
//         {
//             id: 8,
//             name: "Block H",
//             players: [
//                 "Khaled Kamel",
//                 "Mohamed Taha",
//                 "Mostafa Eissa",
//                 "Tamer Hatata",
//                 "Ahmed Kamal",
//                 "Rania Khourshed",
//                 "Nazmi Nazmi",
//                 "Evan Newell",
//                 "Georgina Carnegie",
//                 "Maria Calero Garrido",
//                 "Nour Abdelall"
//             ]
//         }
//     ];
//
//
//     const handleClick = (id) => {
//         setActiveBlock(id);
//         setHighlightedPlayers([]);
//     };
//
//     const closeModal = () => {
//         setActiveBlock(null);
//         setHighlightedPlayers([]);
//         setSearchQuery("");
//     };
//
//     // Autocomplete suggestions
//     const handleInputChange = (e) => {
//         const value = e.target.value;
//         setSearchQuery(value);
//
//         if (!value.trim()) {
//             setSuggestions([]);
//             return;
//         }
//
//         const query = value.toLowerCase();
//         let allPlayers = blocks.flatMap(b => b.players.map(p => ({ player: p, block: b.id })));
//         let filtered = allPlayers.filter(obj => obj.player.toLowerCase().includes(query));
//         setSuggestions(filtered.slice(0, 6)); // limit to 6
//     };
//
//     // Select from suggestions → open block + highlight
//     const selectPlayer = (player, blockId) => {
//         setSearchQuery(player);
//         setSuggestions([]);
//         setActiveBlock(blockId);
//         setHighlightedPlayers([player]);
//     };
//
//     // Manual search fallback
//     const handleSearch = (e) => {
//         e.preventDefault();
//         const query = searchQuery.trim().toLowerCase();
//         if (!query) return;
//
//         for (let block of blocks) {
//             const match = block.players.find(p => p.toLowerCase().includes(query));
//             if (match) {
//                 setActiveBlock(block.id);
//                 setHighlightedPlayers([match]);
//                 return;
//             }
//         }
//         alert("❌ Player not found");
//     };
//
//     return (
//         <div className="blocks-page">
//             <div className="blocks-header">
//                 <h1>Championship Blocks 🏆</h1>
//                 <p>Type your name to find your block</p>
//                 <p>Scroll down through the block to see the whole block</p>
//             </div>
//
//             {/* --- Search Section --- */}
//             <form onSubmit={handleSearch} className="search-box">
//                 <input
//                     type="text"
//                     placeholder="Enter your name..."
//                     value={searchQuery}
//                     onChange={handleInputChange}
//                 />
//                 <button type="submit">Find</button>
//             </form>
//
//             {/* Autocomplete dropdown */}
//             {suggestions.length > 0 && (
//                 <ul className="suggestions-list">
//                     {suggestions.map((s, i) => (
//                         <li key={i} onClick={() => selectPlayer(s.player, s.block)}>
//                             {s.player} <span className="block-label">({blocks.find(b => b.id === s.block).name})</span>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//
//             {/* Show all blocks only if no player selected */}
//             {!activeBlock && (
//                 <div className="blocks-grid">
//                     {blocks.map(block => (
//                         <div
//                             key={block.id}
//                             className="block-card"
//                             onClick={() => handleClick(block.id)}
//                         >
//                             <h3>{block.name}</h3>
//                             <ul className="block-list">
//                                 {block.players.map((player, i) => (
//                                     <li key={i}>{player}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             )}
//
//             {/* Modal shows ONLY the selected block */}
//             {activeBlock && (
//                 <div className="modal-overlay" onClick={closeModal}>
//                     <div
//                         className="modal-card"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <h3>{blocks.find(b => b.id === activeBlock).name}</h3>
//                         <ul className="block-list">
//                             {blocks.find(b => b.id === activeBlock).players.map((player, i) => (
//                                 <li
//                                     key={i}
//                                     className={highlightedPlayers.includes(player) ? "highlight" : ""}
//                                 >
//                                     {player}
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="close-btn" onClick={closeModal}>✕</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
}
