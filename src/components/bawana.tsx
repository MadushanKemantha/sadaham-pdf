//create pdf opener in flipbook style

import React, { useState } from "react";
//bawana
import img1 from "../assets/images/yamaka-vachana-margaya-seyado-himi-ariyadhamma-himi (1).gif"; //abidarma
import img2 from "../assets/images/vipassana-bhavana-kramaya-seyado-himi-ariyadhamma-himi.gif";
import img6 from "../assets/images/shanthi-piritha.gif";
import img15 from "../assets/images/maithree-asubha-maranasati-bhavana.gif";
import img21new from "../assets/images/buddhanussati-bhavana-piritha.gif";
import PdfFlipBook from "../components/Pdfflipbook";

interface PlaylistProps {
  openPdf: (pdfUrl: string) => void;
}

const bawana: React.FC<PlaylistProps> = ({ openPdf }) => {
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
                selectedPdf && "pdf-open"
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/s358pn.pdf")
              }
            >
              <img src={img2} alt="asds" />
            </div>

            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/xx5rwy.pdf")
              }
            >
              <img src={img6} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/c7qsgc.pdf")
              }
            >
              <img src={img15} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/14uzaq.pdf")
              }
            >
              <img src={img1} alt="asds" />
            </div>
            <div
              className={`playlistbox shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 rounded ${
                selectedPdf ? "pdf-open" : ""
              }`}
              onClick={() =>
                handlePlaylistClick("https://files.catbox.moe/ivpltj.pdf")
              }
            >
              <img src={img21new} alt="asds" />
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
  ];

  return (
    <div className="playlist flex flex-col items-center">
      <div>{components[count]}</div>

      <div className="mt-4 flex justify-center">
        {" "}
        {count > 0 && (
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Prev
          </button>
        )}
        {count < components.length - 1 && (
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default bawana;
