import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    
    return <>
    <div className="footer">
        <div>
            <h4>info</h4>
            <p>phone: 999-888-555</p>
            <p>mail: webshop@webShop.gov</p>
        </div>
        <div>
            <h4>links</h4>
            <button onClick={() => navigate("/contact")}>Contact</button>
            
        </div>
    </div>
    </>
};