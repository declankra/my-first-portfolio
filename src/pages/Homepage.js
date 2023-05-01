import React from 'react';
import './Homepage.css';

function Avatar() {
  const avatarPath = process.env.PUBLIC_URL + 'Avatar_Me_PS_Blue.png';

  return(
<img className= "avatar" 
        src={avatarPath}
        alt={'Me'}
        title="Avatar"
        style={{ 
          resizeMode: 'center',
          width: 100,
          height: 100 }}
        />
  )
}

function Homepage() {

  return (
    
    <div className="Homepage">
      
      <h1>Declan Kramper<Avatar /></h1> 

        <p>I've built a website from scratch to highlight my past and current work. </p>

    
      
        
      
    </div>
  );
}
export default Homepage;
