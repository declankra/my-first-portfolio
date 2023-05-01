import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
/*
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
*/

function Header() {
  return (

<div className="Header">

<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Projects">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Resume">Resume</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/About">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Contact">Contact</a>
  </li>
</ul>

</div>
    
  );
  }
  export default Header;

/*
const Header = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav }
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> }
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
*/

/*
function Header() {
  return (

<div className="Header">


</div>
    
  );
}
*/


/*
<nav className="Header">
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/DataVisualization">DataVisualization</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          
        </ul>
    </nav>
*/

/*
<div className="Header">
    
      {
        
      }
    </div>
*/

/*
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Resume">Resume</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
*/