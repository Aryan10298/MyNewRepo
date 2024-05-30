/* 
   File Name: works.js
   Student's Name: [Aryan Bashel]
   Student ID: [301386546]
   
*/
import React from "react";
import './works.css';
import Project1 from '../../assets/project-1.png';
import Project2 from '../../assets/project-2.png';
import Project3 from '../../assets/project-3.png';
import Project4 from '../../assets/project-4.png';
import Project5 from '../../assets/project-5.png';
import Project6 from '../../assets/project-6.png';



const Works =()=>{
    return(
        <section id="works">
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">I have developed a range of projects including a CodeBase Management Tool, AI-Powered Analytics Platform, Cybersecurity Application, Mobile App Development Framework, Cloud Storage Solution, and Blockchain Platform, each designed to enhance productivity, security, and data integrity across various domains.</span>
            <div className="worksImgs">
                <img src={Project1} alt="" className="worksImg"/>
                <img src={Project2} alt="" className="worksImg"/>
                <img src={Project3} alt="" className="worksImg"/>
                <img src={Project4} alt="" className="worksImg"/>
                <img src={Project5} alt="" className="worksImg"/>
                <img src={Project6} alt="" className="worksImg"/>
            </div>
        </section>
    );
}
export default Works;