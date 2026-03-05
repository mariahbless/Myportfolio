import React from "react";
import Image from "../Picture/new1.jpeg"; // adjust path to your image
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 20px",
        gap: "50px",
        flexWrap: "wrap-reverse",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e1e6f0 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Right Side - Image */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          minWidth: "280px",
        }}
      >
        <img
          src={Image}
          alt="Mary Akello"
          style={{
            width: "90%",
            maxWidth: "350px",
            borderRadius: "25px",
            objectFit: "cover",
            boxShadow: "0px 12px 35px rgba(0,0,0,0.25)",
            transition: "transform 0.4s, box-shadow 0.4s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0px 16px 50px rgba(0,0,0,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 12px 35px rgba(0,0,0,0.25)";
          }}
        />
      </div>

      {/* Left Side - Text */}
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          textAlign: "left",
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "#0b0667ff",
            fontSize: "1.3rem",
            fontWeight: "500",
            marginBottom: "8px",
          }}
        >
          Hello, I’m
        </h2>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            color: "#111827",
            lineHeight: "1.15",
          }}
        >
          Mary Akello
        </h1>
        <h3
          style={{
            fontSize: "1.7rem",
            fontWeight: "600",
            color: "#0b0667ff",
            marginTop: "10px",
          }}
        >
          Computer Scientist | Web Developer | Graphics Designer
        </h3>

        <p
          style={{
            color: "#374151",
            maxWidth: "600px",
            marginTop: "25px",
            lineHeight: "1.75",
            fontSize: "1.05rem",
          }}
        >
          I specialize in building smart, efficient, and user-friendly digital
          solutions. With a passion for coding, design, and innovation, I create
          projects that solve real-world problems and inspire creativity.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "35px",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "16px 28px",
              background: "linear-gradient(to right, #F97316, #EA580C)",
              color: "white",
              fontWeight: "700",
              textAlign: "center",
              borderRadius: "50px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.07)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            View My Work
          </a>

          <a
            href="#contact"
            style={{
              padding: "16px 28px",
              background: "linear-gradient(to right, #0b0667ff, #0b0667ff)",
              color: "white",
              fontWeight: "700",
              textAlign: "center",
              borderRadius: "50px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.07)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Contact Me
          </a>
        </div>

        {/* Social Media */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            marginTop: "40px",
            fontSize: "2rem",
            color: "#374151",
          }}
        >
          <a
            href="https://www.linkedin.com/in/akello-mary-230063335/"
            target="_blank"
            rel="noreferrer"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f25f04ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f25f04ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Marie_paul_bles"
            target="_blank"
            rel="noreferrer"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f25f04ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
          >
            <FaXTwitter />
          </a>
          {/* <a
            href="https://wa.me/256XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f25f04ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
          >
            <FaWhatsapp />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

