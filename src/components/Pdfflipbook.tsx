// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { pdfjs, Document, Page } from "react-pdf";
// import samplePDF from "../assets/pdf-open-parameters.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PdfFlipBook = () => {
//   const [pageNumber, setPageNumber] = useState(1);
//   const [numPages, setNumPages] = useState(null);
//   const flipBookRef = useRef(null);
//   const width = 400;
//   const height = 900;

//   useEffect(() => {
//     const fetchNumPages = async () => {
//       try {
//         const response = await fetch(samplePDF);
//         const arrayBuffer = await response.arrayBuffer();
//         const pdfDoc = await pdfjs.getDocument(arrayBuffer).promise;
//         setNumPages(pdfDoc.numPages);
//       } catch (error) {
//         console.error("Error fetching PDF:", error);
//       }
//     };

//     fetchNumPages();
//   }, []);

//   const handlePrevPage = () => {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (pageNumber < numPages) {
//       setPageNumber(pageNumber + 1);
//     }
//   };

//   return (
//     <div>
//       <Document file={samplePDF}>
//         <HTMLFlipBook
//           width={width}
//           height={height}
//           ref={flipBookRef}
//           onPageFlip={(e) => setPageNumber(e.data + 1)}
//         >
//           {[...Array(numPages).keys()].map((index) => (
//             <div key={index} className="page-container">
//               <Page pageNumber={index + 1} width={width} />
//             </div>
//           ))}
//         </HTMLFlipBook>
//       </Document>
//       <div>
//         <button onClick={handlePrevPage} disabled={pageNumber === 1}>
//           Prev
//         </button>
//         <span>
//           {pageNumber}/{numPages}
//         </span>
//         <button onClick={handleNextPage} disabled={pageNumber === numPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PdfFlipBook;

// PdfFlipBook.tsx

// import React, { useEffect, useRef, useState } from "react";
// import { pdfjs, Document, Page } from "react-pdf";
// import HTMLFlipBook from "react-pageflip";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// interface PdfFlipBookProps {
//   pdfUrl: string;
//   onClose: () => void;
// }

// const PdfFlipBook: React.FC<PdfFlipBookProps> = ({ pdfUrl, onClose }) => {
//   const [pageNumber, setPageNumber] = useState(1);
//   const [numPages, setNumPages] = useState(0);
//   const flipBookRef = useRef<HTMLFlipBook>(null);
//   const width = 500;
//   const height = 700;
//   const [isOpen, setIsOpen] = useState(true);

//   useEffect(() => {
//     const fetchNumPages = async () => {
//       try {
//         const response = await fetch(pdfUrl);
//         const arrayBuffer = await response.arrayBuffer();
//         const pdfDoc = await pdfjs.getDocument(arrayBuffer).promise;
//         setNumPages(pdfDoc.numPages);
//       } catch (error) {
//         console.error("Error fetching PDF:", error);
//       }
//     };

//     fetchNumPages();
//   }, [pdfUrl]);

//   const handlePrevPage = () => {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//       if (flipBookRef.current) {
//         flipBookRef.current.flipPrev();
//       }
//     }
//   };

//   const handleNextPage = () => {
//     if (pageNumber < numPages) {
//       setPageNumber(pageNumber + 1);
//       if (flipBookRef.current) {
//         flipBookRef.current.flipNext();
//       }
//     }
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setPageNumber(1);
//     setNumPages(0);
//     onClose();
//   };

//   const handlePageFlip = (e: any) => {
//     setPageNumber(e.data + 1);
//   };

//   return (
//     <div className="pdf-container">
//       {isOpen && numPages > 0 && (
//         <>
//           <Document file={pdfUrl}>
//             <HTMLFlipBook
//               width={width}
//               height={height}
//               ref={flipBookRef}
//               onPageFlip={handlePageFlip}
//               startFlipped={false}
//             >
//               {[...Array(numPages).keys()].map((index) => (
//                 <div key={index} className="page-container">
//                   <Page pageNumber={index + 1} width={width} />
//                 </div>
//               ))}
//             </HTMLFlipBook>
//           </Document>
//           <div className="pdf-controls flex justify-between mt-4">
//             <div className="navigation-buttons">
//               <button
//                 onClick={handlePrevPage}
//                 disabled={pageNumber === 1}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//               >
//                 Prev
//               </button>
//               <span>
//                 {pageNumber}/{numPages}
//               </span>
//               <button
//                 onClick={handleNextPage}
//                 disabled={pageNumber === numPages}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
//               >
//                 Next
//               </button>
//             </div>
//             <div className="close-button">
//               <button
//                 onClick={handleClose}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default PdfFlipBook;

import React, { useEffect, useRef, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfFlipBookProps {
  pdfUrl: string;
  onClose: () => void;
}

const PdfFlipBook: React.FC<PdfFlipBookProps> = ({ pdfUrl, onClose }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const flipBookRef = useRef<HTMLFlipBook>(null);
  const width = 500;
  const height = 700;
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchNumPages = async () => {
      try {
        const response = await fetch(pdfUrl);
        const arrayBuffer = await response.arrayBuffer();
        const pdfDoc = await pdfjs.getDocument(arrayBuffer).promise;
        setNumPages(pdfDoc.numPages);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchNumPages();
  }, [pdfUrl]);

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      if (flipBookRef.current) {
        flipBookRef.current.flipPrev();
      }
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      if (flipBookRef.current) {
        flipBookRef.current.flipNext();
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setPageNumber(1);
    setNumPages(0);
    onClose();
  };

  const handlePageFlip = (e: any) => {
    setPageNumber(e.data + 1);
  };

  return (
    <div className="pdf-container">
      {isOpen && numPages > 0 && (
        <>
          <Document file={pdfUrl}>
            <HTMLFlipBook
              width={width}
              height={height}
              ref={flipBookRef}
              onPageFlip={handlePageFlip}
              startFlipped={false}
            >
              {[...Array(numPages).keys()].map((index) => (
                <div key={index} className="page-container">
                  <Page pageNumber={index + 1} width={width} />
                </div>
              ))}
            </HTMLFlipBook>
          </Document>
          <div className="pdf-controls flex justify-between mt-4">
            <div className="navigation-buttons">
              <button
                onClick={handlePrevPage}
                disabled={pageNumber === 1}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Prev
              </button>
              <span>
                {pageNumber}/{numPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={pageNumber === numPages}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Next
              </button>
            </div>
            <div className="close-button">
              <button
                onClick={handleClose}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PdfFlipBook;
