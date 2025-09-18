// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// // import design8 from '../Picture/contact.jpg';

// export default function ContactPage() {
//   return (
//     <div style={{ backgroundColor: '#f9f9f9', padding: '50px 20px' }}>
//       <Container>
//         {/* Header */}
//         <Row className="mb-5 text-center">
//           <Col>
//             <h2 style={{ fontWeight: 'bold', color: '#02274d' }}>Get In Touch</h2>
//             <p style={{ color: '#555' }}>
//               {/* I’d love to connect with you — whether it’s for business, design, or just networking. */}
//             </p>
//           </Col>
//         </Row>

//         {/* Single Card with All Content */}
//         <Row className="justify-content-center">
//           <Col md={10}>
//             <div
//               style={{
//                 background: '#02284fff',
//                 color: 'white',
//                 padding: '40px',
//                 borderRadius: '15px',
//                 boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
//               }}
//             >
//               {/* Contact Information */}
//               <h4 style={{ marginBottom: '20px' }}>Contact Information</h4>
//               <p><FaEnvelope /> akellomary665@gmail.com</p>
//               <p><FaPhone /> 0772676815 / 0768782296</p>
//               <p><FaMapMarkerAlt /> Bukoto, Kampala - Uganda</p>
//               <p><FaClock /> Mon - Fri, 9:00 AM - 5:00 PM</p>

//               <hr 
//   style={{ 
//     borderColor: 'rgba(238, 242, 247, 0.95)', 
//     borderWidth: 2,        // or '2px'
//     margin: '20px 0' 
//   }} 
// />

//               {/* Tagline */}
//               <h3 style={{ fontWeight: 'bold', marginTop: '20px' }}>Let’s Connect</h3>
//               <p style={{ fontSize: '1.1rem', color: '#f1f1f1' }}>
//                 Whether you’re looking to build a modern website, need help with graphics design, 
//                 or want to collaborate on an exciting project, I’d love to hear from you. 
//                 <br />
//                 <strong>Committed to being at your service, always.</strong>
//               </p>

//               {/* Social Media Links */}
//               <div style={{ margin: '30px 0', display: 'flex', gap: '20px', fontSize: '1.75rem' }}>
//                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#e86a16ff' }}><FaLinkedin /></a>
//                 <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#e86a16ff' }}><FaGithub /></a>
//                 <a href="https://x.com" target="_blank" rel="noreferrer" style={{ color: '#e86a16ff' }}><FaTwitter /></a>
//                 <a href="https://wa.me/256XXXXXXXXX" target="_blank" rel="noreferrer" style={{ color: '#e86a16ff' }}><FaWhatsapp /></a>
//               </div>

//               {/* Image */}
//               {/* <div className="d-flex justify-content-center">
//                 <img
//                   src={design8}
//                   alt="Contact Illustration"
//                   style={{
//                     width: '80%',
//                     borderRadius: '12px',
//                     boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
//                   }}
//                 />
//               </div> */}
//             </div>
//           </Col>
//         </Row>
//         <br/>

//         {/* Map Section */}
//         <Row className="mt-5">
//           <Col>
//             <iframe
//               title="map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.743833180098!2d32.5969000749049!3d0.3521199995737476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbcfc6a7071b3%3A0xf76de2855dc1227b!2sRadio%20Simba%20Bukoto!5e0!3m2!1sen!2sug!4v1700000000001!5m2!1sen!2sug"
//               width="100%"
//               height="400"
//               style={{ border: 0, borderRadius: '12px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }



import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "60px 20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontWeight: "bold", color: "#02274d", fontSize: "2.5rem" }}>Get In Touch</h2>
        <p style={{ color: "#555", fontSize: "1.1rem", maxWidth: "600px", margin: "10px auto 0 auto", lineHeight: "1.6" }}>
          I’d love to connect with you — whether it’s for business, design, or collaboration. 
          Reach out and let’s create something amazing together!
        </p>
      </div>

      {/* Contact Card */}
      <div style={{
        background: "#02284fff",
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
          <a href="https://wa.me/256XXXXXXXXX" target="_blank" rel="noreferrer" style={{ color: "#e86a16ff" }}><FaWhatsapp /></a>
        </div>
      </div>


    </div>
  );
}
