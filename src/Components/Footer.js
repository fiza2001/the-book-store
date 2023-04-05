import React from "react";
import "./Footer.css"

export default function Footer(params) {
    return (
        <div className="footer">
           <div className="info-div">
            
            <ul>
            <h2>Info</h2>
                <li>About Us</li>
                <li>Delivery and Return</li>
                <li>Terms and Conditions</li>
                <li>Contact Us</li>
            </ul>
           </div>

           <div className="contact-form">
            <form action="@">
                <h2>HAVE A QUESTION? <br />CONTACT US</h2>
            </form>
           </div>
           
        </div>
    )
    
};
