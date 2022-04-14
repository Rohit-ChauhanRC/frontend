import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  return (
    <nav className={`container ${styles.navbar}`}>
      <Link to="/" style={brandStyle}>
        <img src="/images/hand.png" alt="logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
