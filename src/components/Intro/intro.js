/* 
   File Name: intro.js
   Student's Name: [Aryan Bashel]
   Student ID: [301386546]
   
*/

import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from "react-scroll";

const Intro=() =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Aryan</span><br></br>Software Engineer </span>
                <p className="introPara">I am a passionate software engineer with a knack for developing innovative solutions <br></br>and a strong commitment to continuous learning and excellence in coding.</p>
                
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    );
}
 export default Intro;