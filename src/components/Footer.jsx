import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footers-lists">
        <div className="single-footer-list">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>Blogs</li>
            <li>Meal Plans</li>
            <li>Fitness Plans</li>
          </ul>
        </div>
        <div className="single-footer-list">
          <h4>DEATOX +</h4>
          <ul>
            <li>Partner with us</li>
            <li>Enterprise package</li>
            <li>Build gym</li>
            <li>For enterprise</li>
            <li>T&C for business</li>
          </ul>
        </div>
        <div className="single-footer-list">
          <h4>CONTACT US</h4>
          <ul>
            <li>Help and Support</li>
            <li>Enquire</li>
          </ul>
        </div>
      </div>
      <img src="src/assets/logo-white.png" / >
    </div>
  );
};

export default Footer;
