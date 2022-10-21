import React from "react";
import "../sandbox-styles.css";
import image from "../assets/navbar.png";
export default function NavBar() {
  return (
    <nav className="navbar-container">
      <img className="image" src={image} />
    </nav>
  );
}
