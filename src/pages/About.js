import React from 'react';
import './About.css';
import { pageH2Style } from '../styles/sharedStyles';
import Resume from '../components/Resume';
import Contact from './Contact';

function About() {
  return (
    <div className="About">

      <main>
        <h2 style={pageH2Style}>About</h2>
       

      </main>

      <body>
        <p>re-thinking what the purpose of each page is...</p>
        <br/>
        <br/>

        <Resume/>
        <Contact />

      </body>
    </div>
  );
}

export default About;
