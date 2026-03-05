
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaTwitter,} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "60px 20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontWeight: "bold", color: "#0e0766ff", fontSize: "2.5rem" }}>Get In Touch</h2>
        <p style={{ color: "#555", fontSize: "1.1rem", maxWidth: "600px", margin: "10px auto 0 auto", lineHeight: "1.6" }}>
          I’d love to connect with you — whether it’s for business, design, or collaboration. 
          Reach out and let’s create something amazing together!
        </p>
      </div>

      {/* Contact Card */}
      <div style={{
        background: "#0e0766ff",
        color: "white",
        padding: "50px 30px",
        borderRadius: "15px",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
        boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
      }}>
        {/* Contact Information */}
        <h4 style={{ marginBottom: "25px", fontWeight: "600", fontSize: "1.5rem" }}>Contact Information</h4>
        <p style={{ fontSize: "1.05rem", marginBottom: "10px" }}><FaEnvelope style={{ marginRight: "10px" }} /> akellomary665@gmail.com</p>
        <p style={{ fontSize: "1.05rem", marginBottom: "10px" }}><FaPhone style={{ marginRight: "10px" }} /> 0772676815 / 0768782296</p>
        <p style={{ fontSize: "1.05rem", marginBottom: "10px" }}><FaMapMarkerAlt style={{ marginRight: "10px" }} /> Bukoto, Kampala - Uganda</p>
        <p style={{ fontSize: "1.05rem", marginBottom: "20px" }}><FaClock style={{ marginRight: "10px" }} /> Mon - Fri, 9:00 AM - 5:00 PM</p>

        <hr style={{ borderColor: "rgba(238,242,247,0.6)", margin: "30px 0", borderWidth: "2px" }} />

        {/* Tagline */}
        <h3 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "1.75rem" }}>Let’s Connect</h3>
        <p style={{ fontSize: "1.05rem", color: "#f1f1f1", lineHeight: "1.6" }}>
          Whether you’re looking to build a modern website, need help with graphics design, or want to collaborate on an exciting project, I’d love to hear from you. 
          <br />
          <strong>Committed to being at your service, always.</strong>
        </p>

        {/* Social Media Links */}
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "25px", fontSize: "1.8rem" }}>
          <a href="https://www.linkedin.com/in/akello-mary-230063335/" target="_blank" rel="noreferrer" style={{ color: "#e86a16ff" }}><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" style={{ color: "#e86a16ff" }}><FaGithub /></a>
          <a href="https://x.com/Marie_paul_bles" target="_blank" rel="noreferrer" style={{ color: "#e86a16ff" }}><FaTwitter /></a>
          
        </div>
      </div>


    </div>
  );
}
