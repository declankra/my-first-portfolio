import React from 'react';
import './Contact.css';
import { pageH2Style } from '../styles/sharedStyles';

function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:declankramper@gmail.com');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+16304879527';
  };

  return (
    <div className="Contact">
      
      <h2 style={pageH2Style}>Contact</h2>

      <p>
        call me maybe:
        <a href="tel:+16304879527">6304879527</a>
      </p>
      <p>
        email:
        <a href="mailto:declankramper@gmail.com" target="_blank" rel="noopener noreferrer">declankramper@gmail.com</a>
      </p>


      <button onClick={handleEmailClick} className="emailButton">
        Email Me
      </button>
      <button onClick={handleCallClick} className="callButton">
        Call Me
      </button>

    </div>

  );
}

export default Contact;



