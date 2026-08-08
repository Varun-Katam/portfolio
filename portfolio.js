const menuItems = document.querySelectorAll(".menu-item")

menuItems.forEach((currentItem) => {
    currentItem.addEventListener("click", () => {
        menuItems.forEach(anyItem => {
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


//Social Media Buttons
const gitHub = document.querySelector(".bi-github");
const linkedIn = document.querySelector(".bi-linkedin");
const twitter = document.querySelector(".bi-twitter");
const insta = document.querySelector(".bi-instagram");
//Social Media Account Links
const gitAcc = "https://github.com/Varun-Katam";
const linkedInAcc = "https://www.linkedin.com/in/varun-katam-3a6951425/";
const twitterAcc = "https://x.com/abhi_varun3327";
const instaAcc = "https://www.instagram.com/varun_katam/";

const socialMedia = [gitHub, linkedIn, twitter, insta];
const socialMediaLinks = [gitAcc, linkedInAcc, twitterAcc, instaAcc];

socialMedia.forEach((currentMedia, i)=>{
    currentMedia.addEventListener("click", ()=>{
        window.open(socialMediaLinks[i]);
    });
})

//Scroll to project section
const proj = document.querySelector(".proj");
const pros = document.querySelector(".view-projects");
const projects = [pros, proj];
proj.addEventListener("click", () => {
    document.querySelector(".pro-lang").scrollIntoView({
        behavior: "smooth"
    });
    const bloodApp = document.querySelector(".blood-app");
    const learnifyApp = document.querySelector(".my-learnify");
    const portfolioApp = document.querySelector(".my-portfolio");

    const cards = [bloodApp, learnifyApp, portfolioApp];
    cards.forEach((currentCard) => {
        currentCard.style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
        setTimeout(() => {
            currentCard.style.boxShadow = "none";
        }, 1000);
    })
})

// Scroll To View Function
// const home = document.querySelector(".home");

const about = document.querySelector(".about");
const skills = document.querySelector(".skills");
const education = document.querySelector(".education");
const contact = document.querySelector(".my-contact");

const aboutMe = document.querySelector(".about-me");
const skillsCard = document.querySelector(".skills-card");
const eduCard = document.querySelector(".edu");
const contactCard = document.querySelector(".contact-me");

const menus = [about, skills, education, contact];
const cards = [aboutMe, skillsCard, eduCard, contactCard];

menus.forEach((currentMenu, i) => {
    currentMenu.addEventListener("click", () => {
        if (i == 0 || i == 1) {
            const view = document.querySelector(".view-projects");
            view.scrollIntoView({
                behavior: "smooth"
            })
        } else {
            cards[i].scrollIntoView({
                behavior: "smooth"
            });
        }
        cards[i].style.boxShadow = "0 0 2px #1a55ece9, 0 0 6px #008cff, 0 0 10px #00d5ff";
        setTimeout(() => {
            cards[i].style.boxShadow = "none";
        }, 1000);
    });

})


const nav = document.querySelector(".top");
const home = document.querySelector(".home");
const homePage = [nav, home];
homePage.forEach((currentMenu)=>{
    currentMenu.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
})

const myProjects = document.querySelector(".view-projects");
myProjects.addEventListener("click", () => {
    document.querySelector(".pro-lang").scrollIntoView({
        behavior: "smooth"
    });
})

const contactMe = document.querySelector(".contact");
contactMe.addEventListener("click", () => {
    document.querySelector(".contact-me").scrollIntoView({
        behavior: "smooth"
    });
})

const download = document.querySelector(".download");
download.addEventListener("click", () => {
    window.print();
})