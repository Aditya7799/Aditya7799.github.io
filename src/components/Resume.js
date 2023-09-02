import React, { useState, useEffect} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// import samplePDF from '../Assets/resume.pdf';
import samplePDF from '../resume.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Test() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => { pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;});
  const pageNumber = 1;
  return (
    <div className='resume ResumeContainer'>
        <Document className="PDFDocument" file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
      {/* {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ),
      )} */}
      <Page className={"PDFPage PDFPageOne"} pageNumber={pageNumber} renderTextLayer={false} renderInteractiveForms={false} />
      <Page className={"PDFPage"} pageNumber={pageNumber + 1} renderTextLayer={false} renderInteractiveForms={false} />
    </Document>
    </div>
    
  );
}