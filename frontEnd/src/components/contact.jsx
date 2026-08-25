import { useState } from "react"

export default function Contact({ secRef }) {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: userName,
            email: userEmail,
            message: userMessage
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                console.log(result);
                alert(result.detail);
                return;
            }

            // This runs ONLY when the request succeeds
            console.log(result);
            alert("Message sent successfully");

            setUserName("");
            setUserEmail("");
            setUserMessage("");

        } catch (error) {
            console.error(error);
            alert("Unable to connect to server");
        }
    };
    return (
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
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" className="your ip" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" placeholder="Your Email" className="your ip" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /><br /><br />
                    <textarea rows="3" cols="51" className="your" placeholder="Your Message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)}></textarea><br />
                    <button className="msg-btn download">Send Message
                        <div className="tele"><i className="bi bi-telegram share"></i></div>
                    </button>
                </form>
            </div>
        </div>
    )
}