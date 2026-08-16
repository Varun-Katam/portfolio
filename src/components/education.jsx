export default function Education({secRef}) {
    return (

        <div className="edu card" ref={secRef}>
            <div className="text-icon">
                <div className="my-icon">
                    <i className="bi bi-mortarboard-fill"></i>
                </div>
                <span className="text">Education</span>
            </div>

            <div className="my-education">
                <span className="dot"></span>
                <span className="edu-course">B.Tech in Computer Science Engineering</span>
                <p className="edu-details">CMR Engineering College, Hyderabad
                    <span className="year">2025-2029</span>
                </p>

                <span className="dot"></span>
                <span className="edu-course">Intermediate (MPC)</span>
                <p className="edu-details">Sri Chaitanya Junior College, Hyderabad
                    <span className="year">2023-2025</span>
                </p>

                <span className="dot"></span>
                <span className="edu-course">SSC</span>
                <p className="edu-details">Sadhana High School
                    <span className="year">2015-2023</span>
                </p>
            </div>

        </div>
    )
}