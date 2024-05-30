/* 
   File Name: skill.js
   Student's Name: [Aryan Bashel]
   Student ID: [301386546]
   
*/

import React from "react";
import './skills.css';
import Designing from '../../assets/design.png';
import Maintaining from '../../assets/maintenance.png';
import Collaborating from '../../assets/collab.png';

const Skills=()=>{
    return(
        <section id='skills'>
           <span className="skillTitle">What I do</span>
           <span className="skillDesc">I am a skilled and passionate software developer. I design and develop software applications based on user requirements. I also maintain and improve existing software for optimal performance, and collab with team members and stakeholders to deliver quality software solutions.  </span>
           <div className="skillBars">
            <div className="skillBar">
                <img src={Designing} alt="design" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Design Software Applications</h2>
                    <p> Creating software solutions based on user requirements. This involves understanding user requirements, creating software solutions, coding, and debugging.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Maintaining} alt="maintenance" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Maintain Existing Software</h2>
                    <p>Ensuring the efficiency and performance of existing software. This includes troubleshooting issues, optimizing code, and implementing new features.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Collaborating} alt="collab" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Collaboration</h2>
                    <p>Working with other team members and stakeholders to deliver quality software.  This includes documenting the work for future reference and for other team members to understand.</p>
                </div>
            </div>
           </div>
        </section>
    );
}

export default Skills;