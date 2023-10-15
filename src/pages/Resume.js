import React from 'react';
import './Resume.css';
import { pageTitleStyle } from '../styles/sharedStyles';


//react component for iFrame resumes
function IframeComponent(props) {
  return (
    <div className="iframe-container">
      <h4 className="iframe-title">{props.title}</h4>
      <p className="iframe-sub-title">{props.subTitle}</p>
      <iframe src={props.src} className="iframe-side-by-side"></iframe>
    </div>
  );
}


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

        <IframeComponent
          src={pdfResume2Path}
          title="Product Analyst/Development/Engineering Resume"
          subTitle="Last updated: 05/08/2023"
        />
        <IframeComponent
          src={pdfResume1Path}
          title="Product Management Resume"
          subTitle="Last updated: November 18, 2022"
        />

      </body>


      <section>
        <h2 style={pageTitleStyle}>Employee Summary</h2>
        <p style={{ fontWeight: "bold" }}>command c + command v from my <a href="https://www.linkedin.com/in/declan-kramper/">linkedin bio</a> </p>

        <p>
          Entrepreneurial engineer with a desire to understand problems beyond superficial, surface level answers. Dedicated to building user-centric products that both the business and its customers love by leveraging design-centric thinking, data-driven strategies, a focus on user experience, and a strong technical foundation. My problem-solving approach is rooted in understanding the big picture and asking the right questions to create innovative, impactful solutions. Adept at navigating ambiguous situations and skilled in cross-functional collaboration, I thrive in fast-paced environments, offering superior communication, organization, and delivery.
          <br />
          <br />
          In my current role as a digital product manager, I demonstrate rapid growth and a keen interest in the field of product development. I bring a growth mindset, positivity, and a relentless drive for excellence to every project I undertake.
          <br />
          <br />
          Professional Skills and Interests:
          Product Management, Product Development, Product Engineering, Design Thinking and Consumer Centric Product Design, User Experience (UX), Sustainability and Circular Design, Internet of Things (IoT), Cross-Functional Collaboration, Digital Business Transformation, Lean-Agile Transformation, Business Development, Systems Thinking, Data Transformation, Data Visualization, Data-Driven Decision Making
          <br />
          <br />
          Experience In: Excel with VBA, SQL, Tableau, R, Python, MATLAB, CATIA, Creo parametric, Google Analytics, JavaScript (React), HTML, CSS, Adobe Experience Cloud (AEM), Jira, Confluence
        </p>
      </section>

    </div>
  );
}
export default Resume;


/* ------- this is iframe using HTML --------

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
*/