export default function SkillsSection({secRef}){
    return(
            <div className="skills-card card" ref={secRef}>
                <div className="text-icon">
                    <div className="my-icon">
                        <i className="bi bi-code-slash me-icon"></i>
                    </div>
                    <span className="text">Skills</span>
                </div>
                <div className="front lang">Frontend</div>
                <div className="pro-lang">
                    <div className="pro">HTML</div>
                    <div className="pro">CSS</div>
                    <div className="pro">JavaScript</div>
                    <div className="pro">React</div>
                    <div className="pro">Tailwind CSS</div>
                </div>

                <div className="back lang">Backend</div>
                <div className="pro-lang">
                    <div className="pro">Python</div>
                    <div className="pro">Node.js</div>
                    <div className="pro">Express.js</div>
                    <div className="pro">SQLAlchemy</div>
                    <div className="pro">PostgreSQL</div>
                </div>

                <div className="tools lang">Tools & Others</div>
                <div className="pro-lang">
                    <div className="pro">Git</div>
                    <div className="pro">GitHub</div>
                    <div className="pro">VS Code</div>
                    <div className="pro">Docker</div>
                    <div className="pro">Postman</div>
                </div>
            </div>
    
    )
}

