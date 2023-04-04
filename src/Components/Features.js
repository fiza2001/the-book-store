import React from "react";
import "./Features.css";

export default function Features(image, heading, description) {
  return (
    <div className="features">
      <div className="feature1">
        <div className="left-div">
          <img
            className="left-img"
            src="https://therightbookstoreindia.com/wp-content/uploads/2021/09/3887429-150x150.png"
            alt="img1"
          />
        </div>
        <div className="right-div">
          <h2>HOME DELIVERY</h2>
          <p>We Provide Express Shipping for 27000+ Indian PIN codes</p>
        </div>
      </div>
     
      <div className="feature2">
        <div className="right-div1">
          <h2>UNPARALLELED QUALITY</h2>
          <p>Get Handpicked Quality Books at Unbelievable rates</p>
        </div>
        <div className="left-div">
          <img
            className="left-img"
            src="https://cdn-icons-png.flaticon.com/512/5733/5733207.png"
            alt="img2"
          />
        </div>
      </div>
      
      <div className="feature3">
        <div className="left-div">
          <img
            className="left-img"
            src="https://cdn-icons-png.flaticon.com/512/1019/1019709.png"
            alt="img3"
          />
        </div>
        <div className="right-div">
          <h2>COD AVAILABLE</h2>
          <p>Along with GooglePay, PhonePay, Paytm, Card Payments</p>
        </div>
      </div>
      
      <div className="feature4">
        <div className="right-div1">
          <h2>RETURN & REPLACEMENT</h2>
          <p>Instant Refund/Return/Replacement facility</p>
        </div>
        <div className="left-div">
          <img
            className="left-img"
            src="https://cdn-icons-png.flaticon.com/512/4989/4989753.png"
            alt="img4"
          />
        </div>
      </div>
      
    </div>
  );
}
