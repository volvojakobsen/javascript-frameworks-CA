import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = {fullName, subject, email, message};
        console.log(formValues);

    }


    return <div className="main">
        <h1>Contact</h1>
        <form className="contactForm" id="form" onSubmit={handleSubmit}  >
            <input className="fullName"
             value={fullName}
             onChange={(e) => setFullName(e.target.value)}
             type="text"
             placeholder="Full Name"
             minLength="3"
             required  />

            <input type="text"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
             placeholder="Subject"
             minLength="3"
             required  />

            <input type="email"
             placeholder="email" 
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             required  />

            <textarea placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
             minLength="3"
              required>

              </textarea>
            <button type="submit">
                  Submit
                </button>
            
          </form>
    </div>
}