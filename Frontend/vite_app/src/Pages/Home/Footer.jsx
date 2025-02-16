import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";;
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Quote Section */}
      <div className="footer-quote">
        <p>
          <strong>Happy to connect with you for anything! 😊</strong>  
          <a href="/contact" className="contact-link"> Contact us</a>
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="footer-contact">
        <div className="contact-item">
        <FaPhoneAlt  className="callicon"/>
          <p>Call Us<br/><span>985478695</span></p>
        </div>
        <div className="contact-item">
        <FaLocationDot  className="callicon"/>
          <p>Find Us<br/><span>832 Ground Floor, HBR Layout, Bangalore</span></p>
        </div>
        <div className="contact-item">
        <IoMail   className="callicon"/>
          <p>Mail Us<br/><span>info@homy.com</span></p>
        </div>
      </div>
<div className="main-footer">
      {/* Footer Links */}
      <div className="footer-links">
        <div className="link-section">
          <a href="/overview">Overview</a>
          <a href="/about">About Us</a>
          <a href="/team">Team</a>
        </div>
        <div className="link-section">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/team">Team</a>
        </div>
        <div className="link-section">
        <a href="/blogs">Blogs</a>
          <a href="/contact">Connect With Us</a>
          <a href="/advertise">Advertise With Us</a>
         
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
<h1>Follow Us on </h1>
        <div className="social-icons">
          <a href="https://facebook.com">
          <div>
          <FaFacebookSquare className="fa-icons" />
          </div>
            
             <p>Facebook</p>
         
            
          </a>
          <a href="https://instagram.com">
          <div>
          <FaInstagram className="fa-icons" />
          </div>
            
             <p>Instagram</p>
         
            
          </a>
          <a href="https://x.com">
          <div>
          <FaSquareXTwitter className="fa-icons" />
          </div>
            
             <p>Twitter</p>
         
            
          </a>
          <a href="https://Youtube.com">
          <div>
          <IoLogoYoutube className="fa-icons" />
          </div>
            
             <p>Youtube</p>
         
            
          </a>

        </div>
      </div>
</div>

    </footer>
  );
};

export default Footer;
