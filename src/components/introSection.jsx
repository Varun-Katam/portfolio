import { useState } from "react";

export default function IntroSection() {
    const gitAcc = "https://github.com/Varun-Katam";
    const linkedInAcc = "https://www.linkedin.com/in/varun-katam-3a6951425/";
    const twitterAcc = "https://x.com/abhi_varun3327";
    const instaAcc = "https://www.instagram.com/varun_katam/";
    const mediaLinks = [gitAcc, linkedInAcc, twitterAcc, instaAcc];
    return (
        <section className="intro">
            <div className="name cname">
                <p className="blue hi">Hi, I'm</p>
                <span className="fname">Varun_</span>
                <span className="lname">Katam</span>
                <div className="sub-content">
                    <p className="role">Full Stack Developer</p><br />
                    <p>I bulid responsive and user-friendly websites and</p><br />
                    <p>web applications that solve real-world problems.</p>
                </div>
                <a href="#projects" className="view-projects">
                    <button className="download projects">
                        View Projects <i className="bi bi-arrow-right"></i></button>
                </a>

                <button className="contact projects">
                    Contact Me <i className="bi bi-envelope"></i></button>

                <div className="details">
                    <i className="bi social active bi-github" onClick={()=>window.open(mediaLinks[0])}></i>
                    <i className="bi social bi-linkedin" onClick={()=>window.open(mediaLinks[1])}></i>
                    <i className="bi social bi-twitter" onClick={()=>window.open(mediaLinks[2])}></i>
                    <i className="bi social bi-instagram" onClick={()=>window.open(mediaLinks[3])}></i>
                </div>
            </div>
            <div className="profile"></div>
        </section>
    );
}



