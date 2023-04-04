import React from "react"
import "./Social.css"

export default function Social(params) {
    return (
        <div className="social">
        <div>
            <h1>Let's be Friends!</h1>
            <p>You are welcomed to join our social networks</p>
        </div>
        <div className="icon-div">
            <a href="https://www.instagram.com/" target="new"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="icon1" /></a>
            <a href="https://www.facebook.com/" target="new"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/3670/3670124.png" alt="icon2" /></a>
            <a href="https://www.youtube.com/" target="new"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="icon3" /></a>
            <a href="https://twitter.com/login?lang=en" target="new"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="icon4" /></a>
        </div>
        </div>
    )
};
