import React from 'react';
import './DoingNow.css';
import RunStrava from 'RunStrava';



import { pageH3Style } from '../styles/sharedStyles';

function DoingNow() {

  return (
    // import apple watch data here
    // import strava runs here

    <div className="DoingNow">

      <h3 style={pageH3Style}>What am I doing now?</h3>
    <p>Running...</p>
      <RunStrava />

      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}

export default DoingNow;
