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
            <form action="mailto:hulkfiza161@gmail.com" method="post" enctype="text/plain">
                <h2>HAVE A QUESTION? <br />CONTACT US</h2>
                <input className="form-inp" type="text" placeholder="Your Name" name="Name"/><br /><br />
                <input className="form-inp" type="email" placeholder="Your E-mail" name="Email" /><br /><br />
                <input className="form-inp" type="number" placeholder="Your mobile number" name="Mobile" /> <br /><br />
                <textarea className="form-text-area" name="message" placeholder="Leave your message here..." cols={40}rows={5} /><br /><br />
                <input className="form-send-btn1" type="submit" value="Send" />
                <input className="form-send-btn2" type="reset" value="Reset" /><br />
            </form>
           </div>
           
        </div>
    )
    
};
