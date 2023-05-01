import React from 'react';
import './Resume.css';


function Resume() {
  const pdfResumePath = process.env.PUBLIC_URL + 'DeclanKramper_Resume_11182022.pdf';
/*
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };
  */
    const mystyle = {
      color: "blue",
      //backgroundColor: "DodgerBlue",
    // padding: "10px",
      fontFamily: "Arial"
    };

  return (
    
    <div className="Resume">
      
      <main>

      <h2 style={mystyle}>Resume</h2>
      <p >Below are the variations of my resume in PDF form</p><br />

      </main>


      <body>

      <h4>Product Management Resume </h4>
        <p>Last updated: November 18, 2022</p>
      
      <iframe
        src={pdfResumePath}
        alt="Declan Kramper Resume"
        title="Resume"
        width= "80%"
        height="800px"
        style={{ border: 'none' }}
      ></iframe>
      <br />
      <br />

     <h4>Business Analyst Resume </h4>
        <p>Last updated: xxx</p>

      </body>

    </div>
  );
}

export default Resume;