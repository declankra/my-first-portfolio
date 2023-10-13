import React from 'react';
import './Resume.css';
import { pageTitleStyle } from '../styles/sharedStyles';


function Resume() {

  const pdfResume1Path = process.env.PUBLIC_URL + 'DeclanKramper_Resume_11182022.pdf';
  const pdfResume2Path = process.env.PUBLIC_URL + 'DeclanKramper_Resume_05082023.pdf';

  return (
    
  <div className="Resume">
      
    <main>

      <h2 style={pageTitleStyle}>Resume</h2>
      <p >Below are the boring conventional resumes</p><br />

    </main>


    <body>

      <h4>Product Analyst/Development/Engineering Resume </h4>
        <p>Last updated: 05/08/2023</p>
      <iframe
        src={pdfResume2Path}
        alt="Declan Kramper Resume"
        title="Resume"
        width= "80%"
        height="800px"
        style={{ border: 'none' }}
      ></iframe>

        <br />  <br />

      <h4>Product Management Resume </h4>
        <p>Last updated: November 18, 2022</p>
      <iframe
        src={pdfResume1Path}
        alt="Declan Kramper Resume"
        title="Resume"
        width= "80%"
        height="800px"
        style={{ border: 'none' }}
      ></iframe>
      <br />
      <br />

    </body>

  </div>
  );
}

export default Resume;