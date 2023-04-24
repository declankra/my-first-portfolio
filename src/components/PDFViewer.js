import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Update the file path if necessary
  const pdfURL = `${process.env.PUBLIC_URL}/DeclanKramper_Resume_11182022.pdf`;

  return (
    <div>
      <Document
        file={pdfURL}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PDFViewer;