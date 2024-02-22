// import React, { useState } from "react";
// import pdf1 from "../assets/pdf-open-parameters.pdf";
// import img1 from "../assets/images/abhi-dharma-bhavana.gif";
// import img2 from "../assets/images/anapana-sathi-deshanawa.gif";
// import img3 from "../assets/images/asirimath-budumaga-piyasatahan.gif";

// interface PlaylistProps {
//   openPdf: (pdfUrl: string) => void;
// }

// const Playlist: React.FC<PlaylistProps> = ({ openPdf }) => {
//   const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
//   const [count, setCount] = React.useState(0);

//   const handlePlaylistClick = (pdfUrl: string) => {
//     setSelectedPdf(pdfUrl);
//   };

//   const closePdf = () => {
//     setSelectedPdf(null);
//   };

//   const components = [
//     <div>
//       <div className="justify-center items-center bookbox">
//         <div className={`main-box playlist ${selectedPdf ? "pdf-open" : ""}`}>
//           <div className="flex items-center">
//             <div className="flex flex-wrap playlist items-center p-10">
//               <div
//                 className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
//                   selectedPdf ? "pdf-open" : ""
//                 }`}
//                 onClick={() =>
//                   handlePlaylistClick(
//                     "https://dhammagavesi.org/3d-flip-book/yamaka-vachana-margaya-%e0%b6%ba%e0%b6%b8%e0%b6%9a-%e0%b7%80%e0%b7%8f%e0%b6%a0%e0%b6%b1%e0%b7%8f-%e0%b6%b8%e0%b7%8f%e0%b6%bb%e0%b7%8a%e0%b6%9c%e0%b6%ba%e2%80%8b/#yamaka-vachana-margaya-%e0%b6%ba%e0%b6%b8%e0%b6%9a-%e0%b7%80%e0%b7%8f%e0%b6%a0%e0%b6%b1%e0%b7%8f-%e0%b6%b8%e0%b7%8f%e0%b6%bb%e0%b7%8a%e0%b6%9c%e0%b6%ba%e2%80%8b/1/"
//                   )
//                 }
//               >
//                 <img src={img1} alt="asds" className="" />
//               </div>

//               <div
//                 className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
//                   selectedPdf ? "pdf-open" : ""
//                 }`}
//                 onClick={() => handlePlaylistClick(pdf1)}
//               >
//                 <img src={img2} alt="asds" />
//               </div>
//               <div
//                 className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
//                   selectedPdf ? "pdf-open" : ""
//                 }`}
//                 onClick={() => handlePlaylistClick(pdf1)}
//               >
//                 <img src={img3} alt="asds" />
//               </div>
//               <div
//                 className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
//                   selectedPdf ? "pdf-open" : ""
//                 }`}
//                 onClick={() => handlePlaylistClick(pdf1)}
//               >
//                 <img src={img1} alt="asds" />
//               </div>
//               <div
//                 className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
//                   selectedPdf ? "pdf-open" : ""
//                 }`}
//                 onClick={() => handlePlaylistClick(pdf1)}
//               >
//                 <img src={img2} alt="asds" />
//               </div>
//               <div
//                 className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
//                   selectedPdf ? "pdf-open" : ""
//                 }`}
//                 onClick={() => handlePlaylistClick(pdf1)}
//               >
//                 <img src={img1} alt="asds" className="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,
//     <div>2</div>,
//     <div>3</div>,
//     <div>4</div>,
//   ];

//   return (
//     <div className="playlist">
//       <div>
//         {components[count]}

//         {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}

//         {count < components.length - 1 && (
//           <button onClick={() => setCount(count + 1)}>next</button>
//         )}
//       </div>
//       {selectedPdf && (
//         <div className="viewmain-box">
//           <div className="view-box">
//             <embed
//               src={selectedPdf}
//               type="application/pdf"
//               width="900px"
//               height="900px"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Playlist;

//create pdf opener in flipbook style

import React, { useState } from "react";
import pdf1 from "../assets/file-sample_150kB.pdf";
import pdf2 from "../assets/yamaka-vachana-margaya-seyado-himi-ariyadhamma-himi.pdf";
import img1 from "../assets/images/abhi-dharma-bhavana.gif";
import img2 from "../assets/images/anapana-sathi-deshanawa.gif";
import img3 from "../assets/images/asirimath-budumaga-piyasatahan.gif";
import PdfFlipBook from "../components/Pdfflipbook";

interface PlaylistProps {
  openPdf: (pdfUrl: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ openPdf }) => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  const handlePlaylistClick = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  const leftPageContent = <div>Left Page</div>;

  const rightPageContent = <div>Right Page</div>;

  const components = [
    <div className="justify-center items-center bookbox">
      <div className={`main-box playlist ${selectedPdf ? "pdf-open" : ""}`}>
        <div className="flex items-center">
          <div
            className="flex flex-wrap playlist items-center p-10"
            style={{ width: selectedPdf ? "60%" : "100%" }}
          >
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() => handlePlaylistClick(pdf1)}
            >
              <img src={img1} alt="asds" className="" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() => handlePlaylistClick(pdf2)}
            >
              <img src={img2} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() => handlePlaylistClick(pdf1)}
            >
              <img src={img3} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() => handlePlaylistClick(pdf1)}
            >
              <img src={img1} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() => handlePlaylistClick(pdf1)}
            >
              <img src={img2} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() => handlePlaylistClick(pdf1)}
            >
              <img src={img1} alt="asds" className="" />
            </div>
          </div>
        </div>
        <div className="viewmain-box ">
          {selectedPdf && (
            <PdfFlipBook
              leftPageContent={leftPageContent}
              rightPageContent={rightPageContent}
            />
          )}
        </div>
      </div>
    </div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
  ];

  return (
    <div className="playlist">
      <div>
        {components[count]}

        {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}

        {count < components.length - 1 && (
          <button onClick={() => setCount(count + 1)}>next</button>
        )}
      </div>
    </div>
  );
};

export default Playlist;
