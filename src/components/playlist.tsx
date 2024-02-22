//create pdf opener in flipbook style

import React, { useState } from "react";
//bawana
// import img1 from "../assets/images/yamaka-vachana-margaya-seyado-himi-ariyadhamma-himi (1).gif"; //abidarma
// import img2 from "../assets/images/vipassana-bhavana-kramaya-seyado-himi-ariyadhamma-himi.gif";
// import img6 from "../assets/images/shanthi-piritha.gif";
// import img15 from "../assets/images/maithree-asubha-maranasati-bhavana.gif";
// import img21new from "../assets/images/buddhanussati-bhavana-piritha.gif";

//wandana
import img3 from "../assets/images/thanhaven-jaya-geniema.gif";
import img4 from "../assets/images/suseta-aakara-vashithava-sahitha-aasravakshayakara-gnanaya.gif";
import img5 from "../assets/images/sitha-misa-kaya-nethi-babalova-kaya-misa-sitha-nethi-babalova.gif";
import img7 from "../assets/images/sathipatthana-bhavanava.gif";
import img8 from "../assets/images/sama-sathalis-karmasthana-bhavana.gif";
import img9 from "../assets/images/ruvanweli-maha-seeya.gif";
import img10 from "../assets/images/paharada-sutta-deshanaya.gif";
import img11 from "../assets/images/niwan-dekieme-keti-maga.gif";
import img12 from "../assets/images/manokaaya-saha-maranaya.gif";
import img13 from "../assets/images/maithree-ganga.gif";
import img14 from "../assets/images/maithree-deshanaya.gif";

import img16 from "../assets/images/mahathphala-lebiemata-dan-pinkam-kalayuthu-aakaraya.gif";
import img17 from "../assets/images/kalaguna-dath-seriyuth-maharahathan-vahanse.gif";
import img18 from "../assets/images/devaduta-sutta.gif";
import img19 from "../assets/images/chakravarthi-sihanada-suthra-dharma-deshanaya.gif";
import img20 from "../assets/images/buddha-vandana-kramaya.gif";
import img21 from "../assets/images/bodhi-vandanaava.gif";
import img22 from "../assets/images/bhavana.gif";
import img23 from "../assets/images/atavisi-buddha-vandana-theruvan-vandana-saha-seth-pirith-dehsana.gif";
import img24 from "../assets/images/asirimath-budumaga-piyasatahan.gif";
import img25 from "../assets/images/anapana-sathi-deshanawa.gif";
import img26 from "../assets/images/abhi-dharma-bhavana.gif";

import PdfFlipBook from "../components/Pdfflipbook";

interface PlaylistProps {
  openPdf: (pdfUrl: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ openPdf }) => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  const handlePlaylistClick = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
    const viewmainBox = document.querySelector(".viewmain-box");
    if (viewmainBox) {
      viewmainBox.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

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
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/jwbm0r.pdf")
              }
            >
              <img src={img26} alt="asds" className="" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/0b0fg8.pdf")
              }
            >
              <img src={img3} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/ksndo4.pdf")
              }
            >
              <img src={img4} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/uykecf.pdf")
              }
            >
              <img src={img5} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/3visym.pdf")
              }
            >
              <img src={img7} alt="asds" className="" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/fu6nx7.pdf")
              }
            >
              <img src={img8} alt="asds" />
            </div>
          </div>
        </div>
        <div className="viewmain-box">
          {selectedPdf && (
            <PdfFlipBook
              pdfUrl={selectedPdf}
              onClose={() => {
                console.log("closes");
              }}
            />
          )}
        </div>
      </div>
    </div>,
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
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/saqb1d.pdf")
              }
            >
              <img src={img9} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/rqu9bd.pdf")
              }
            >
              <img src={img10} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/lmy07b.pdf")
              }
            >
              <img src={img11} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/ucict8.pdf")
              }
            >
              <img src={img12} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/p3uhvk.pdf")
              }
            >
              <img src={img13} alt="asds" className="" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/1a92gd.pdf")
              }
            >
              <img src={img14} alt="asds" />
            </div>
          </div>
        </div>
        <div className="viewmain-box">
          {selectedPdf && (
            <PdfFlipBook pdfUrl={selectedPdf} onClose={() => {}} />
          )}
        </div>
      </div>
    </div>,
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
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/o3qwas.pdf")
              }
            >
              <img src={img16} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/4jjx4t.pdf")
              }
            >
              <img src={img17} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/neia65.pdf")
              }
            >
              <img src={img18} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/bwrb02.pdf")
              }
            >
              <img src={img19} alt="asds" className="" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/h67euw.pdf")
              }
            >
              <img src={img20} alt="asds" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/o7uq4f.pdf")
              }
            >
              <img src={img21} alt="asds" />
            </div>
          </div>
        </div>
        <div className="viewmain-box">
          {selectedPdf && (
            <PdfFlipBook pdfUrl={selectedPdf} onClose={() => {}} />
          )}
        </div>
      </div>
    </div>,
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
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/jwmdpl.pdf")
              }
            >
              <img src={img22} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/dayv1b.pdf")
              }
            >
              <img src={img23} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/tbk3k2.pdf")
              }
            >
              <img src={img24} alt="asds" className="" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/smjyhf.pdf")
              }
            >
              <img src={img25} alt="asds" />
            </div>
          </div>
        </div>
        <div className="viewmain-box">
          {selectedPdf && (
            <PdfFlipBook pdfUrl={selectedPdf} onClose={() => {}} />
          )}
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="playlist flex flex-col items-center">
      <div>{components[count]}</div>

      <div className="mt-4 flex justify-center">
        {" "}
        {count > 0 && (
          <button
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Prev
          </button>
        )}
        {count < components.length - 1 && (
          <button
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Playlist;

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
