import React, { useState, useEffect } from "react";
import logo from "../Picture/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      style={{
        background: "#ddddeaff",
        padding: "10px 20px",
        borderBottom: "3px solid #1d0202ff",
        position: "sticky",
        top: "0",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              marginRight: "20px",
              height: "4rem",
              width: "4rem",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />MARIAHBLESS
        </Link>

        {/* Hamburger menu toggle */}
        <div
          onClick={toggleMenu}
          style={{ cursor: "pointer", display: isMobile ? "block" : "none" }}
        >
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Links container */}
        <div
          style={{
            display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "20px" : "40px",
            position: isMobile ? "absolute" : "static",
            top: isMobile && menuOpen ? "70px" : "auto",
            left: 0,
            right: 0,
            background: isMobile ? "#fff" : "transparent",
            padding: isMobile ? "20px" : "0",
            boxShadow: isMobile ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
            zIndex: 100,
          }}
        >
          <NavLink to="/" onClick={closeMenu} style={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} style={linkStyle}>
            About Me
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} style={linkStyle}>
            Contact
          </NavLink>

          {/* <NavLink to="/graphics" onClick={closeMenu} style={linkStyle}>
            Graphics Page
          </NavLink> */}

          <NavLink to="/skills" onClick={closeMenu} style={linkStyle}>
            Skills
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu} style={linkStyle}>
            Projects
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu} style={galleryStyle}>
            Gallery
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

// Styles
const linkStyle = {
  textDecoration: "none",
  color: "#000", // pure black
  fontWeight: "bold",
  fontSize: "18px",
};

const galleryStyle = {
  ...linkStyle,
  backgroundColor: "#ff5722",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "5px",
};
