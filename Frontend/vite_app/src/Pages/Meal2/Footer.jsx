import React from "react";
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="maincontainer">
        <div className="footer-section1">
          <h3>Homy</h3>
          <p>Bringing homemade goodness to your doorstep</p>
          <div className="social">
            <a href="#"><FaFacebook  className="sicon"/></a>
            <a href="#"><FaInstagram  className="sicon"/></a>
            <a href="#"><FaTwitter  className="sicon" /></a>
          </div>
        </div>

        <div className="footer-section2">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Menu</a></li>
            <li><a href="#">Tiffin Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section2">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div className="footer-section3">
          <h3>Contact Us</h3>
          <ul className="contact">
            <li><FaPhone className="icons"/> +1 234 567 890</li>
            <li><FaEnvelope className="icons" /> info@Homy.com</li>
            <li><FaMapMarkerAlt className="icons" /> 12,main street,Ahmedabad</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Homy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
