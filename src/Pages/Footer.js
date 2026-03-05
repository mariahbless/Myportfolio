import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa"; // Add your Telegram icon
import './Home.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";

export function Footer() {
  const socialStyle = {
  backgroundColor: "orange",
  borderRadius: "30%",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "darkblue",
  fontSize: "1.1rem",
  transition: "transform 0.3s",
};

const socialLinkContainer = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "12px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none", // removes underline
  fontSize: "1rem",
};

return (
  <div
    className="footer"
    style={{ backgroundColor: "#0e0766ff", padding: "40px 20px" }}
  >
    {/* Social Media Section */}
    <div className="footer_left">
      <h4 style={{ color: "white" }}>Connect with us</h4>

      <div style={socialLinkContainer}>
        <span style={socialStyle}><FaLinkedin /></span>
        <a
          href="https://www.linkedin.com/in/akello-mary-230063335/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          LinkedIn
        </a>
      </div>

      <div style={socialLinkContainer}>
        <span style={socialStyle}><FaXTwitter /></span>
        <a
          href="https://x.com/Marie_paul_bles"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          X
        </a>
      </div>

      <div style={socialLinkContainer}>
  <span style={socialStyle}><FaInstagram /></span>
  <a
    href="https://www.instagram.com/yourusername/" // replace with your Instagram URL
    target="_blank"
    rel="noopener noreferrer"
    style={linkStyle}
  >
    Instagram
  </a>
</div>

      <div style={socialLinkContainer}>
        <span style={socialStyle}><FaTelegramPlane /></span>
        <a
          href="https://t.me/YourTelegramUsername"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Telegram
        </a>
      </div>
    </div>



      {/* Spacer */}
      <div className="footer-section about"></div>

      {/* Quick Links */}
      <div className="footer-section links">
        <h4>Quick Links</h4>
        <a href="#/">Home</a>
        <a href="#/about">About Me</a>
        {/* <a href="#/graphics">My Graphics work</a> */}
        <a href="#/skills">Skills</a>
        <a href="#/contact">Contact Me</a>
        <a href="#/gallery">My Gallery</a>
      </div>

      {/* Contact Section */}
      <div className="footer-section contact">
        <h4>Contact Me</h4>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <FaEnvelope />
          </span>
          akellomary665@gmail.com
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <FaPhone />
          </span>
          MTN: 0772676815
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <GiSmartphone />
          </span>
          Airtel: 0768782296
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: "orange",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
            color: "darkblue"
          }}>
            <FaMapMarkerAlt />
          </span>
          Kampala, Uganda
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom" style={{ borderTop: "3px solid white", marginTop: "20px", paddingTop: "10px", textAlign: "center", color: "white" }}>
        <p>&copy; 2025 Akello Mary. All Rights Reserved.</p>
      </div>
    </div>
  );
}
