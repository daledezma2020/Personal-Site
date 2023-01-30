import React from 'react';
import '../../App.css';
import './Resume.css';
import { useState } from 'react';
import { Document, Page} from 'react-pdf'

function Resume() {
  const [pageNumber] = useState(1);

  return (
      <div className = 'container'>

      <Document file="./2023Resume.pdf">
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default Resume; 
