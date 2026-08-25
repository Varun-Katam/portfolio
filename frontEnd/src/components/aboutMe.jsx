export default function AboutMe({ secRef }) {
    return (
        <>
            <div className="about-me card" ref={secRef}>
                <div className="text-icon">
                    <div className="my-icon">
                        <i className="bi bi-person me-icon"></i>
                    </div>
                    <span className="text">About Me</span>
                </div>
                <p className="my-content">I'm a Computer Science Engineering who loves coding and building things for the
                    web.I enjoy learning new technologies and turning ideas into real applications.</p>
                <div className="contact-info">
                    <div className="locat">
                        <i className="bi bi-geo-alt me-icon"></i>
                        <span>Hyderabad, India</span>
                    </div>
                    <div className="locat">
                        <i className="bi bi-envelope-at me-icon"></i>
                        <span>varunkatam24@gmail.com</span>
                    </div>
                    <div className="locat">
                        <i className="bi bi-telephone me-icon"></i>
                        <span>+91 8885013736</span>
                    </div>
                </div>
            </div>
        </>
    )
}
