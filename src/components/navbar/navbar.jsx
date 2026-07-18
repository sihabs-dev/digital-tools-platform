import React from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Navbar = ({ cartArr }) => {
  return (
    <div className="border-r-2 border-gray-700">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:navbar container mx-auto">
        <div className="navbar-start text-center sm:text-left">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="text-xl sm:text-[38px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTolls
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <div className="text-xl sm:text-2xl relative">
            <div className="flex justify-center items-center text-[12px] w-5 h-5 bg-red-400 text-center rounded-full text-white absolute -top-2 -right-2">{cartArr.length}</div>
            <PiShoppingCartSimpleLight />
          </div>
          <a href="#" className="btn rounded-4xl">
            Login
          </a>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
