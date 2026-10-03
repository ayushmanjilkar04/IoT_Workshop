import React from "react";
import logo from "../../assets/hero.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="menusection">
          <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Content</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
