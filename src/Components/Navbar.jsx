import React, { use } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = ({ selected  }) => {

  return (
    <>
      <div className="navbar container mx-auto border-b border-gray-300 sticky top-0 z-10 bg-white">
        <div className="navbar-start">
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
                <a href="#" className="mr-6">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="mr-6">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="mr-6">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="mr-6">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="mr-6">
                  FAQ
                </a>
              </li>
              <div className=" flex flex-col gap-2 items-center">

                <p className="text-sm font-semibold mr-2">Login</p>
                <a className="text-sm bg-linear-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full font-semibold text-white">
                  Get Started
                </a>
              </div>
            </ul>
          </div>
          <a
            href="#"
            className="text-3xl py-4 font-bold bg-linear-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
          >
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex font-semibold text-[#101727]">
            <li>
              <a href="#" className="mr-6 hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="mr-6 hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="mr-6 hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="mr-6 hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="mr-6 hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="text-2xl mr-2 relative">
            <div className={`font-bold bg-red-400 w-5 h-5 rounded-full text-sm absolute -top-3 left-4 flex justify-center items-center ${selected.length === 0 ? 'hidden' : ''}`}>
              <p className="text-white">{selected.length}</p>
            </div>
            <MdOutlineShoppingCart />
          </div>
          <div className="ml-3 hidden lg:flex items-center">
            <p className="text-sm font-semibold mr-2">Login</p>
            <a className="text-sm bg-linear-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full font-semibold text-white">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
