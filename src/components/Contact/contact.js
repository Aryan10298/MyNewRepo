 /* 
   File Name: contact.js
   Student's Name: [Aryan Bashel]
   Student ID: [301386546]
   
*/
 

import React from "react";
import "./contact.css";
import programming from "../../assets/programming.png";
import webdevelopment from "../../assets/webdevelopment.png";
import mobileapps from "../../assets/mobileapp.png";
import consulting from "../../assets/consulting.png";

const Contact =()=>{
    return(
        <section id="contactPage">
            <div id="services">
                <h1 className="contactPageTitle">My Services</h1>
                <p className="serviceDesc">
                I develop, test, deploy, and maintain software applications while also offering consulting, project management, and support services to ensure efficient operation and user satisfaction.
                </p>
                <div className="serviceImgs">
                    <img src={programming} alt="Service" className="serviceImg" />
                    <img src={webdevelopment} alt="Service" className="serviceImg" />
                    <img src={mobileapps} alt="Service" className="serviceImg" />
                    <img src={consulting} alt="Service" className="serviceImg" />
                </div>


            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="firstname" placeholder="Your First Name"/>
                    <input type="text" className="lastname" placeholder="Your Last Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" name="message" rows="S" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    

                </form>

            </div>
        </section>
    );
}

export default Contact;