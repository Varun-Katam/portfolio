const menuItems = document.querySelectorAll(".menu-item")

menuItems.forEach((currentItem)=>{
    currentItem.addEventListener("click", ()=>{
        menuItems.forEach(anyItem =>{
            anyItem.classList.remove("active");
        });
        currentItem.classList.add("active");
    });
})

const socialIcons = document.querySelectorAll(".social")

socialIcons.forEach((currentIcon) => {
    currentIcon.addEventListener("click", () => {
        socialIcons.forEach((anyIcon) => {
            anyIcon.classList.remove("active");
        });
        currentIcon.classList.add("active");
    });
})

const gitHub = document.querySelector(".bi-github");
gitHub.addEventListener("click", () => {
    window.open("https://github.com/Varun-Katam", "_blank")
})

const linkedIn = document.querySelector(".bi-linkedin");
linkedIn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/varun-katam-3a6951425/", "_blank");
})

const twitter = document.querySelector(".bi-twitter");
twitter.addEventListener("click", () => {
    window.open("https://x.com/abhi_varun3327", "_blank");
})

const insta = document.querySelector(".bi-instagram");
insta.addEventListener("click", () => {
    window.open("https://www.instagram.com/varun_katam/", "_blank");
})

const about = document.querySelector(".about");
about.addEventListener("click", ()=>{
    document.querySelector(".view-projects").scrollIntoView({
        behaviour: "smooth"
    });
    const aboutMe = document.querySelector(".about-me");
    aboutMe.style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
    setTimeout(()=>{
        aboutMe.style.boxShadow = "none";
    }, 1000);
})


const home = document.querySelector(".home");
home.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    });
})

const skills = document.querySelector(".skills");
skills.addEventListener("click", ()=>{
    document.querySelector(".view-projects").scrollIntoView({
        behaviour: "smooth"
    });
    const skillsCard =  document.querySelector(".skills-card");
    skillsCard.style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
    setTimeout(()=>{
        skillsCard.style.boxShadow = "none";
    }, 1000);
})

const proj = document.querySelector(".proj");
const pros = document.querySelector(".view-projects");
const projects = [pros, proj];
proj.addEventListener("click", ()=>{
    document.querySelector(".pro-lang").scrollIntoView({
        behaviour: "smooth"
    });
    const bloodApp = document.querySelector(".blood-app");
    const learnifyApp = document.querySelector(".my-learnify");
    const portfolioApp = document.querySelector(".my-portfolio");
    
    const cards = [bloodApp, learnifyApp, portfolioApp];
    cards.forEach((currentCard)=>{
        currentCard.style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
        setTimeout(()=>{
            currentCard.style.boxShadow = "none";
        }, 1000);
    })
})

const education = document.querySelector(".education");
education.addEventListener("click", ()=>{
    document.querySelector(".edu").scrollIntoView({
        behaviour: "smooth"
    });
    document.querySelector(".edu").style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
    setTimeout(()=>{
        document.querySelector(".edu").style.boxShadow = "none";
    }, 1000);
})

const contact = document.querySelector(".my-contact");
contact.addEventListener("click", ()=>{
    document.querySelector(".contact-me").scrollIntoView({
        behaviour: "smooth"
    });
    document.querySelector(".contact-me").style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
    setTimeout(()=>{
        document.querySelector(".contact-me").style.boxShadow = "none";
    }, 1000);
})

const nav = document.querySelector(".top");
nav.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    });
})

const myProjects = document.querySelector(".view-projects");
myProjects.addEventListener("click", ()=>{
    document.querySelector(".pro-lang").scrollIntoView({
        behavior: "smooth"
    });
})

const contactMe = document.querySelector(".contact");
contactMe.addEventListener("click", ()=>{
    document.querySelector(".contact-me").scrollIntoView({
        behavior: "smooth"
    });
})

const download = document.querySelector(".download");
download.addEventListener("click", ()=>{
    window.print();
})