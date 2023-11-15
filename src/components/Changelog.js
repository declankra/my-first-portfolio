import React from 'react';
import './Changelog.css';
import { pageH3Style } from '../styles/sharedStyles';
 

function Changelog() {
  return (
    <div className="Changelog">
      
       <h3 style={pageH3Style}>Changelog</h3>
      <p style = {{textAlign: 'center'}}> will display changelog from notion database integration</p>

      
    </div>
  );
}

export default Changelog;
