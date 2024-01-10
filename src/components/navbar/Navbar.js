import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
        <li><NavLink to="/" class activeStyle>Home</NavLink></li>
        <li><NavLink to="/Projects" class activeStyle>Projects</NavLink></li>
        <li><NavLink to="/About" class activeStyle>About</NavLink></li>
    </div>
    
  );
};

export default Navbar;

/*

import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

*/