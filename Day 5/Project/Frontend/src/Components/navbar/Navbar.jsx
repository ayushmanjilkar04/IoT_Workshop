import React from "react";
import logo from "../../assets/hero2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="m-0 p-0 text-white bg-black fixed top-0 w-full">  
        <div className="max-w-full w-auto h-24 flex items-center justify-between ml-2 mr-2">
          <div className="max-w-2/3">
            <img className="ml-5 h-20 w-auto shrink-0" src={logo} alt="" />
          </div>
          <div>
            <ul className="flex list-none gap-5 justify-evenly">
              <li>
                <Link className="text-2xl text-white no-underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-2xl text-white no-underline" to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-2xl text-white no-underline" to="/Services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-2xl text-white no-underline" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
