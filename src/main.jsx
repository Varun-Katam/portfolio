import React, { useRef } from "react";
import ReactDom from "react-dom/client";
import "./portfolio.css";
import Header from "./components/header";
import IntroSection from "./components/introSection";
import AboutMe from "./components/aboutMe"
import SkillsSection from "./components/skillsSection";
import ProjectsSection from "./components/projectsSection";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";




function App(){

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const eduRef = useRef(null);
    const contactRef = useRef(null);
    const topRef = useRef(null);

    const cardsRef = [homeRef, aboutRef, skillsRef, null, eduRef, contactRef];

    const scrollToSection = (i)=>{
        
        if(i===0){
            window.scrollTo({top: 0, behavior: "smooth"});
            return;
        }
        const target = cardsRef[i].current;
        if(!target) return;
        else{
            target.scrollIntoView({behavior: "smooth"});
            target.style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
            setTimeout(()=>{
                target.style.boxShadow = "none";
            },1000);
        };
    }

    const projectSectionRef = useRef();
    function scrollToProjects(){
        projectSectionRef.current.scrollIntoView({
            behavior: "smooth"
        });
        const cards = projectSectionRef.current.querySelectorAll(".card");
        cards.forEach((card)=>{
            card.style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
            setTimeout(()=>{
                card.style.boxShadow = "none";
            },1000);
        });
    }

    function topSectionScroll(){
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    return(
        <>
        <Header onProjectClick={scrollToProjects} onMenuClick={scrollToSection}/>
        <main className="content1">
            <IntroSection />
            <section className="me-skills">
                <AboutMe secRef={aboutRef}/>
                <SkillsSection secRef={skillsRef}/>
            </section>
            <ProjectsSection secRef={projectSectionRef}/>
            <section className="edu-cont">
                <Education secRef={eduRef}/>
                <Contact secRef={contactRef}/>
            </section>
        </main>
        <Footer onScrollClick={topSectionScroll}/>
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />)