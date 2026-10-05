import React from "react";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <>
      <nav className="h-24 w-auto bg-black flex items-center justify-between text-white ">
        <div>
          <img src={logo} alt="" className="h-20 w-24 ml-24" />
        </div>
        <div>
          <ul className="flex gap-10 mr-24 ">
            <li className="text-3xl text-white">Home</li>
            <li className="text-3xl text-white">About</li>
            <li className="text-3xl text-white">Services</li>
            <li className="text-3xl text-white">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
