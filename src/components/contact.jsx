export default function Contact({secRef}) {
    return(
        <div className="contact-me card educate" ref={secRef}>
            <div className="text-icon">
                <div className="my-icon telegram">
                    <i className="bi bi-telegram me-icon"></i>
                </div>
                <span className="text">Contact Me</span>
            </div>
            <p className="my-opp">I'm always open to discuss new oppurtunities, <br />collabarations or just having a
                chat.</p>

            <div className="form">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" className="your ip" />
                    <input type="email" placeholder="Your Email" className="your ip" /><br /><br />
                    <textarea rows="3" cols="51" className="your" placeholder="Your Message"></textarea><br />
                    <button className="msg-btn download">Send Message
                        <div className="tele"><i className="bi bi-telegram share"></i></div>
                    </button>
                </form>
            </div>
        </div>
    )
}