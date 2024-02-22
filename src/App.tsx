// App.tsx

import "./App.css";
import "tailwindcss/tailwind.css";

// import Bio from "../src/pages/bio/Bio";
// import Footer from "./components/footer";
// import PdfFlipBook from "./components/Pdfflipbook";
import Playlist from "./components/playlist";
import Bawana from "./components/bawana"; // Changed import statement

function App() {
  const handleOpenPdf = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <Playlist openPdf={handleOpenPdf} />
      <Bawana openPdf={handleOpenPdf} />
    </>
  );
}

export default App;

// import React, { useState } from "react";

// const Playlist = ({
//   selectedPdf,
//   handlePlaylistClick,
//   img1,
//   img2,
//   img3,
//   pdf1,
// }) => {
//   return (
//     <div className={`main-box playlist ${selectedPdf ? "pdf-open" : ""}`}>
//       <div className="flex items-center">
//         <div className="flex flex-wrap playlist items-center p-10">
//           <div
//             className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
//               selectedPdf ? "pdf-open" : ""
//             }`}
//             onClick={() => handlePlaylistClick(pdf1)}
//           >
//             <img src={img1} alt="asds" className="" />
//           </div>
//           {/* Add similar blocks for other images in the playlist */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handlePlaylistClick = (pdf) => {
//     // Handle playlist item click
//     console.log(`Clicked on ${pdf}`);
//   };

//   const components = [
//     <div>1</div>,
//     <Playlist
//       selectedPdf={true} // You can set this dynamically based on your logic
//       handlePlaylistClick={handlePlaylistClick}
//       img1="path/to/image1.jpg"
//       img2="path/to/image2.jpg"
//       img3="path/to/image3.jpg"
//       pdf1="path/to/pdf1.pdf"
//     />,
//     <div>3</div>,
//     <div>4</div>,
//   ];

//   return (
//     <div>
//       {
//         // render component from our components array
//         components[count]
//       }

//       {/* show previous button if we are not on the first element */}
//       {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}

//       {/* hide next button if we are at the last element */}
//       {count < components.length - 1 && (
//         <button onClick={() => setCount(count + 1)}>next</button>
//       )}
//     </div>
//   );
// };

// export default App;
