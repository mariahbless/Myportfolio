

import React from "react";
import { FaHandshake, FaUsers, FaRunning } from "react-icons/fa";
import profileImage from "../Picture/logo2.jpg";

const AboutMe = () => {
  return (
    <div
      style={{
        background: "#fdfdfd",
        fontFamily: "Arial, sans-serif",
        padding: "50px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* About Me Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        {/* Image */}
        <div style={{ flex: "1 1 300px", textAlign: "center", marginBottom: "20px" }}>
          <img
            src={profileImage}
            alt="Profile"
            style={{
              maxWidth: "260px",
              width: "100%",
              borderRadius: "50%",
              border: "5px solid #053362",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Text Content */}
        <div style={{ flex: "2 1 500px", paddingLeft: "30px" }}>
          <h1 style={{ color: "#053362", fontWeight: "700", fontSize: "2.5rem", marginBottom: "20px" }}>
            About Me
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#333", marginBottom: "15px" }}>
            Hello! I&apos;m <strong>Mary Akello</strong>, a passionate web developer creating dynamic and responsive websites. I specialize in smooth user experiences and elegant front-end designs.
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            I graduated from the Women&apos;s Institute of Technology and Innovation. My main coding tools are <strong>HTML, CSS, JavaScript, React, and Python</strong>. I love learning new technologies and applying them in real projects. Outside coding, I enjoy hiking and exploring tech trends.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <h2
        style={{
          color: "#053362",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        My Core Values
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Professionalism */}
        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "250px",
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
        >
          <FaHandshake size={50} color="#ff7f50" style={{ marginBottom: "15px" }} />
          <h5 style={{ color: "#222", fontWeight: "600", marginBottom: "10px" }}>Professionalism</h5>
          <p style={{ color: "#555" }}>I always handle tasks with skill and care.</p>
        </div>

        {/* Integrity */}
        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "250px",
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
        >
          <FaUsers size={50} color="#6a0dad" style={{ marginBottom: "15px" }} />
          <h5 style={{ color: "#222", fontWeight: "600", marginBottom: "10px" }}>Integrity</h5>
          <p style={{ color: "#555" }}>I act honestly and fairly in all situations.</p>
        </div>

        {/* Hard Work */}
        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "250px",
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
        >
          <FaRunning size={50} color="#053362" style={{ marginBottom: "15px" }} />
          <h5 style={{ color: "#222", fontWeight: "600", marginBottom: "10px" }}>Hard Work</h5>
          <p style={{ color: "#555" }}>I am committed, persistent, and hardworking.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;









// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { FaHandshake, FaUsers, FaRunning } from "react-icons/fa";
// import profileImage from "../Picture/logo2.jpg";

// const AboutMe = () => {
//   return (

//     <Container
//       fluid
//       className="py-5"
//       style={{
//         background: "#fdfdfd",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Header Section */}
//       <Row className="align-items-center mb-5">
//         <Col xs={12} md={5} className="d-flex justify-content-center mb-4 mb-md-0">
//           <img
//             src={profileImage}
//             alt="Profile"
//             className="img-fluid shadow"
//             style={{
//               maxWidth: "260px",
//               borderRadius: "50%",
//               border: "5px solid #053362",
//             }}
//           />
//         </Col>

//         <Col xs={12} md={7}>
//           <h1 style={{ color: "#053362", fontWeight: "700", fontSize: "2.5rem" }}>
//             About Me
//           </h1>
//           <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#333" }}>
//             Hello! I&apos;m <strong>Mary Akello</strong>, a passionate web
//             developer creating dynamic and responsive websites. I specialize in
//             smooth user experiences and elegant front-end designs.
//           </p>
//           <p style={{ fontSize: "1rem", fontStyle: "italic", color: "#555" }}>
//             I graduated from the Women&apos;s Institute of Technology and
//             Innovation. My main coding tools are{" "}
//             <strong>HTML, CSS, JavaScript, React, and Python</strong>. I love
//             learning new technologies and applying them in real projects.
//             Outside coding, I enjoy hiking and exploring tech trends.
//           </p>
//         </Col>
//       </Row>

//       {/* Core Values */}
//       <h2
//         className="mb-4 text-center"
//         style={{ color: "#053362", fontWeight: "700" }}
//       >
//         My Core Values
//       </h2>

//       <Row className="column">
//         <Col xs={12} md={4} className="mb-4">
//           <Card
//             className="h-100 shadow-lg border-0 text-center p-4"
//             style={{ borderRadius: "15px", transition: "transform 0.3s", cursor: "pointer" }}
//           >
//             <FaHandshake size={50} color="#ff7f50" className="mb-3" />
//             <h5 style={{ color: "#222", fontWeight: "600" }}>Professionalism</h5>
//             <p style={{ color: "#555" }}>I always handle tasks with skill and care.</p>
//           </Card>
//         </Col>

//         <Col xs={12} md={4} className="mb-4">
//           <Card
//             className="h-100 shadow-lg border-0 text-center p-4"
//             style={{ borderRadius: "15px", transition: "transform 0.3s", cursor: "pointer" }}
//           >
//             <FaUsers size={50} color="#6a0dad" className="mb-3" />
//             <h5 style={{ color: "#222", fontWeight: "600" }}>Integrity</h5>
//             <p style={{ color: "#555" }}>I act honestly and fairly in all situations.</p>
//           </Card>
//         </Col>

//         <Col xs={12} md={4} className="mb-4">
//           <Card
//             className="h-100 shadow-lg border-0 text-center p-4"
//             style={{ borderRadius: "15px", transition: "transform 0.3s", cursor: "pointer" }}
//           >
//             <FaRunning size={50} color="#053362" className="mb-3" />
//             <h5 style={{ color: "#222", fontWeight: "600" }}>Hard Work</h5>
//             <p style={{ color: "#555" }}>I am committed, persistent, and hardworking.</p>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AboutMe;
