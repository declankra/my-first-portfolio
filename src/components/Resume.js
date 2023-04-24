import React from 'react';
import './Resume.css';


function Resume() {
  const pdfPath = process.env.PUBLIC_URL + 'DeclanKramper_Resume_11182022.pdf';

  return (
    <div className="Resume">
      <h2>See my resume is below</h2>
      <p>Resume last updated: November 18, 2022</p>
      <iframe
        src={pdfPath}
        title="Resume"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default Resume;