import React from "react";
import logo from "../assets/hero2.png";

const Navbar = () => {
  return (
    <>
      <nav className="h-20 w-auto bg-gray-800 flex items-center justify-between text-white ">
        <div>
          <img src={logo} alt="" className="h-18 w-24 ml-24 rounded-xl hover:rotate-360 delay-300 duration-300" />
        </div>
        <div>
          <ul className="flex gap-10 mr-24 ">
            <li className="text-2xl text-white">Home</li>
            <li className="text-2xl text-white">About</li>
            <li className="text-2xl text-white">Services</li>
            <li className="text-2xl text-white">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
