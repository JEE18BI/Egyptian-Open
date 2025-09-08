// import "./Blocks.css";
//
// // Import your 8 block images
// import block1 from "";
// import block2 from "";
// import block3 from "";
// import block4 from "";
// import block5 from "";
// import block6 from "";
// import block7 from "";
// import block8 from "";
//
// export default function Blocks() {
//     const blocks = [
//         { id: 1, img: block1, name: "Block A" },
//         { id: 2, img: block2, name: "Block B" },
//         { id: 3, img: block3, name: "Block C" },
//         { id: 4, img: block4, name: "Block D" },
//         { id: 5, img: block5, name: "Block E" },
//         { id: 6, img: block6, name: "Block F" },
//         { id: 7, img: block7, name: "Block G" },
//         { id: 8, img: block8, name: "Block H" },
//     ];
//
//     return (
//         <div className="blocks-page">
//             <div className="blocks-header">
//                 <h1>Championship Blocks 🏆</h1>
//                 <p>Explore the 8 tournament blocks below</p>
//             </div>
//
//             <div className="blocks-grid">
//                 {blocks.map(block => (
//                     <div key={block.id} className="block-card">
//                         <img src={block.img} alt={block.name} className="block-image" />
//                         <h3>{block.name}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
