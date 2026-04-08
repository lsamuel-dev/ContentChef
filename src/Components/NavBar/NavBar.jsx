import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  const styles = {
    nav: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "#ffffff",
      borderBottom: "3px solid #000",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 15px",
    },
    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#000",
    },
    hamburger: {
      fontSize: "24px",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    menu: {
      display: isOpen ? "flex" : "none",
      flexDirection: "column",
      backgroundColor: "#fff",
      width: "100%",
    },
    link: {
      padding: "15px 20px",
      textDecoration: "none",
      color: "#000",
      fontWeight: "bold",
      borderTop: "1px solid #eee",
      fontSize: "16px",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.topBar}>
        <div style={styles.logo}>CONTENTCHEF 👨‍🍳</div>
        <button style={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Each link uses an ID selector to scroll to the correct section */}
      <div style={styles.menu}>
        <a href="#kitchen" style={styles.link} onClick={toggleMenu}>
          THE KITCHEN
        </a>
        <a href="#pantry" style={styles.link} onClick={toggleMenu}>
          THE PANTRY
        </a>
        <a href="#contact" style={styles.link} onClick={toggleMenu}>
          CONTACT US
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
