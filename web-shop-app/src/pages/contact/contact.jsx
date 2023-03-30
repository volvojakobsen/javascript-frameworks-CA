import React from "react";
import "./contact.css";

export const Contact = () => {


    return <div className="main">
        <h1>Contact</h1>
        <form className="contactForm" action="#" method="#">
            <input type="text" placeholder="Full Name" minLength="3" required  />
            <input type="text" placeholder="Subject" minLength="3" required  />
            <input type="email" placeholder="email"  required  />
            <textarea placeholder="Message" minLength="3" required></textarea>
            <button type="submit">
                  Submit
                </button>
            
          </form>
    </div>
}