

export default function ProjectsSection({proSecRef, secRef}) {
    return (
        <div ref={secRef}>
            <div className="text-icon pros">
                <div className="my-icon">
                    <i className="bi bi-file-earmark-text"></i>
                </div>
                <span className="text">Projects</span>
            </div>


            <section className="my-projects" ref={proSecRef}>
                <div className="blood-app card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTn4dgHzrNJ47kspvdofKKR8IeKzgtFb9V1Ri_TcpKYA&s=10"
                        className="blood" />
                        <span className="blood-app lang">Blood Donation App</span>
                        <p className="project-content my-content">A web application that connects blood donors and receivers. Built
                            with Firebase, HTML, CSS, JavaScript.</p>
                        <a href="https://smartblooddonation.netlify.app/" className="learnify donation">View Project <i
                            className="bi bi-arrow-right me-icon"></i></a>

                </div>

                <div className="blood-app card my-learnify">
                    <img src="/portfolio/learnify.png" className="blood logo" />
                        <span className="blood-app lang learnify-app">Learnify App</span>
                        <p className="project-content my-content">A platform for BTech students to access study resources and
                            materials.</p>
                        <a href="https://mylearnifybyneonnova.netlify.app/" className="learnify">View Project <i
                            className="bi bi-arrow-right me-icon"></i></a>
                </div>

                <div className="blood-app card my-portfolio">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQOPQiKtIB1YtACEzeUCWMKnfW7aj9nzcLYYpvwZeQg&s=10"
                        className="blood" />
                        <span className="blood-app lang">Portfolio Website</span>
                        <p className="project-content my-content">My personal portfolio website built with HTML, CSS and JavaScript.
                        </p>
                        <a href="https://mylearnifybyneonnova.netlify.app/" className="learnify portfolio">View Project <i
                            className="bi bi-arrow-right me-icon"></i></a>
                </div>
            </section >
        </div>
    )
}