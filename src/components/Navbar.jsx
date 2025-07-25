import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {

const [showMobileMenu, setShowMobileMenu] = React.useState(false);
useEffect(() => {
  if(showMobileMenu) {
    document.body.style.overflow = "hidden";
  }else {
    document.body.style.overflow = "auto";
  }
  return () => {
    document.body.style.overflow = "auto";
  }
}, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className=" container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32  bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex !gap-7 lg:flex  text-white justify-between items-center">
          <a href="#Header" className="cursor-pointer hover:text-gray-400 ">
            Home
          </a>

          <a href="#Header" className="cursor-pointer hover:text-gray-400 ">
            About
          </a>

          <a href="#Header" className="cursor-pointer hover:text-gray-400 ">
            Projects
          </a>

          <a href="#Header" className="cursor-pointer hover:text-gray-400 ">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
          alt=""
        />
      </div>
      {/* Mobil menu */}
      <div
        className={`md:hidden  border border-black shadow-2xl  ${
          showMobileMenu
            ? "fixed w-40px h-fit justify-items-start items-start"
            : "h-0 w-0 "
        }  right-0 overflow-hidden top-0 bottom-0 bg-white transition-all`}
      >
        <div
          className="flex justify-end p-6 cursor-pointer border-b border-black w-full
"
        >
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer mx-auto"
            alt=""
          />
        </div>
        <hr className="w-full background-black" />

        <ul className="flex flex-col items-center  text-lg  font-medium w-full ">
          <div className="hover:bg-blue-500  w-full border-b border-black">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Header"
              className="font-semibold   "
            >
              Home
            </a>
          </div>
          <div className="hover:bg-blue-500  w-full border-b border-black">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="font-semibold   "
            >
              About
            </a>
          </div>
          <div className="hover:bg-blue-500  w-full border-b border-black">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Projects"
              className="font-semibold   "
            >
              Projects
            </a>
          </div>
          <div className="hover:bg-blue-500  w-full border-b border-black">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="font-semibold   "
            >
              Testimonials
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
