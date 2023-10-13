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
          width: 125,
          height: 125 }}
        />
  )
}

const nameStyle = {
  fontWeight: "bold",

}

function Homepage() {

  return (

    <div className="Homepage">

       <h1 style = {nameStyle}>Declan Kramper  <Avatar /></h1> 

       <p>I've built a website from scratch to highlight my personal journey through my past and present work</p>

    </div>
    
  );
}
export default Homepage;
