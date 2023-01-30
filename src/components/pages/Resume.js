import React from 'react';
import '../../App.css';
import './Resume.css';
import { useState } from 'react';
import { Document, Page} from 'react-pdf'
// import { Helmet } from "react-helmet";




function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
      <div className = 'container'>
      <Document file="./2023Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default Resume; 
