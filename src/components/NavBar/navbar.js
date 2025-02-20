/* 
   File Name: navbar.js
   Student's Name: [Aryan Bashel]
   Student ID: [301386546]
   
*/

import React from "react";
import './navbar.css';
import logo from  '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar=() =>{
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
               <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
               <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-105} duration={500} className="desktopMenuListItem">About Me</Link>
               <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
               <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Services</Link>
            </div>
            <button className="desktopMenuBtn" onClick={ ()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
              <img src={contactImg} alt="" className="desktopMenuImg"/> Contact Me </button>

        </nav>
    )
}
export default Navbar;