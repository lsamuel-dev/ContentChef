import React, { useState, useEffect } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update view mode when window is resized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const styles = {
    nav: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#ffffff",
      borderBottom: "3px solid #000",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      padding: "10px 20px",
    },
    logo: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#000",
    },
    hamburger: {
      display: isMobile ? "block" : "none",
      fontSize: "28px",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    menu: {
      display: isMobile && !isOpen ? "none" : "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "0" : "20px",
      width: isMobile ? "100%" : "auto",
      backgroundColor: "#fff",
    },
    link: {
      padding: "10px 15px",
      textDecoration: "none",
      color: "#000",
      fontWeight: "bold",
      fontSize: "14px",
      borderTop: isMobile && isOpen ? "1px solid #eee" : "none",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>CONTENTCHEF 👨‍🍳</div>

      <button style={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </button>

      <div style={styles.menu}>
        <a
          href="#kitchen"
          style={styles.link}
          onClick={() => isMobile && setIsOpen(false)}
        >
          THE KITCHEN
        </a>
        <a
          href="#pantry"
          style={styles.link}
          onClick={() => isMobile && setIsOpen(false)}
        >
          THE PANTRY
        </a>
        <a
          href="#contact"
          style={styles.link}
          onClick={() => isMobile && setIsOpen(false)}
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
