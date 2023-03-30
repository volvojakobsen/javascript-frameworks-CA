import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    
    return <>
    <div className="footer">
        <div>
            <h4>Info</h4>
            <p>Phone: 999-888-555</p>
            <p>Mail: webshop@webShop.gov</p>
        </div>
        <div>
            <h4>links</h4>
            <button className="contact-btn" onClick={() => navigate("/contact")}>Contact Page</button>
            
        </div>
    </div>
    </>
};