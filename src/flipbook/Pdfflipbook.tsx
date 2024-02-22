// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { pdfjs, Document, Page } from "react-pdf";
// import samplePDF from "../assets/pdf-open-parameters.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PdfFlipBook = () => {
//   const [pageNumber, setPageNumber] = useState(1);
//   const [numPages, setNumPages] = useState(null);
//   const flipBookRef = useRef(null);
//   const width = 600;
//   const height = 1000;

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

import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";
import samplePDF from "../assets/file-sample_150kB.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfFlipBook = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const flipBookRef = useRef(null);
  const width = 600;
  const height = 1000;

  useEffect(() => {
    const fetchNumPages = async () => {
      try {
        const response = await fetch(samplePDF);
        const arrayBuffer = await response.arrayBuffer();
        const pdfDoc = await pdfjs.getDocument(arrayBuffer).promise;
        setNumPages(pdfDoc.numPages);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchNumPages();
  }, []);

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <Document file={samplePDF}>
        <HTMLFlipBook
          width={width}
          height={height}
          ref={flipBookRef}
          onPageFlip={(e) => setPageNumber(e.data + 1)}
        >
          {[...Array(numPages).keys()].map((index) => (
            <div key={index} className="page-container">
              <Page pageNumber={index + 1} width={width} />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>
      <div>
        <button onClick={handlePrevPage} disabled={pageNumber === 1}>
          Prev
        </button>
        <span>
          {pageNumber}/{numPages}
        </span>
        <button onClick={handleNextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfFlipBook;
