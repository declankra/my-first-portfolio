import React from 'react';
import { pageH2Style } from '../styles/sharedStyles';


function NotFound() {
  return (
    <div className="NotFound">

      <h2 style={pageH2Style}>Page Not Found</h2>    
      <p >not sure how you got here.... but my google analytics data will tell me</p>


    </div>
  );
}

export default NotFound;