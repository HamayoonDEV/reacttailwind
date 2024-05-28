import React, { useState } from "react";
import logo from "../../assests/hilink-logo.svg";
import { NavLink } from "react-router-dom";
import Usericon from "../../utils/Usericon";
import MenuIcon from "../../utils/MenuIcon";
import MenuCrossIcon from "../../utils/MenuCrossIcon";

const Navbar = () => {
  const [hambermenu, setHamberMenu] = useState(true);
  const handlemenu = () => {
    setHamberMenu(!hambermenu);
  };
  return (
    <div className=" container mx-auto flex justify-between itmes-center gap-20 md:gap-6 lg:justify-center sm:gap-2  ">
      <div className="flex justify-center items-center p-3">
        {" "}
        <img src={logo} alt="logo" />
      </div>
      {/* Hambergar menu for mob */}
      <div className="sm:hidden p-3" onClick={handlemenu}>
        {hambermenu ? <MenuIcon /> : <MenuCrossIcon />}
      </div>
      <ul
        className={`${
          hambermenu ? "hidden" : ""
        } flex flex-col  absolute z-40 left-0 right-0 top-16 bg-white shadow-xl items-center text-center text-lg p-6 md:gap-6  sm:flex sm:flex-row sm:static sm:shadow-none sm:justify-center lg:gap-20 sm:w-full sm:gap-3`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "inactive"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "inactive"
          }
        >
          <li>How Hilink Works?</li>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "inactive"
          }
        >
          <li>Services</li>
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "inactive"
          }
        >
          <li>Pricing</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "inactive"
          }
        >
          <li>Contact Us</li>
        </NavLink>
        <NavLink to="/login" className="flex justify-center items-center">
          <button className="px-6 py-3 text-white bg-black rounded-full flex justify-center items-center hover:opacity-80 sm:py-1 sm:px-3">
            <Usericon />
            Login
          </button>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
