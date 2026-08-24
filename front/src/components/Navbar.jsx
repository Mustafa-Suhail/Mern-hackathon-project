import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [btnHover, setBtnHover] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contactus" },
    { name: "About Us", path: "/aboutus" },
    { name: "Assigments", path: "/assignment" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Web Education Department</h2>

      {!isMobile && (
        <div style={styles.navCenter}>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                ...styles.navLink,
                fontWeight:
                  location.pathname === link.path
                    ? "bolder"
                    : hovered === index
                    ? "bolder"
                    : "500",
                backgroundColor:
                  location.pathname === link.path
                    ? "#a8dadc"
                    : hovered === index
                    ? "#a8dadc"
                    : "#e0e0e0",
                color: "#111",
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {!isMobile && (
        <Link
          to="/signup"
          style={{
            ...styles.signUpBtn,
            backgroundColor: btnHover ? "#6ec1e4" : "#3a86b3",
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          Sign Up
        </Link>
      )}

      {isMobile && (
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      )}

  
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                ...styles.mobileLink,
                backgroundColor:
                  location.pathname === link.path ? "#a8dadc" : "transparent",
                color: location.pathname === link.path ? "#001f2e" : "#fff",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/signup"
            style={{
              ...styles.signUpBtn,
              backgroundColor: btnHover ? "#6ec1e4" : "#3a86b3",
              color: "#fff",
              marginTop: "10px",
              textAlign: "center",
            }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#706942",
    padding: "15px 20px",
    position: "relative",
    height: "80px",
  },
  logo: {
    margin: 0,
    color: "#2b2b2b",
    fontWeight: "bolder",
    fontSize: "1.1rem",
    letterSpacing: "0.5px",
  },
  navCenter: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    padding: "8px 15px",
    borderRadius: "20px",
    textDecoration: "none",
    color: "#111",
    backgroundColor: "#e0e0e0",
    transition: "all 0.3s ease",
  },
  signUpBtn: {
    padding: "8px 22px",
    borderRadius: "22px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "4px",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "white",
  },
  mobileMenu: {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    backgroundColor: "#526f9b",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  mobileLink: {
    textDecoration: "none",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
};

export default Navbar;