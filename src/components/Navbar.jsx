import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

//   prevent scrolling when the ui is in mobile view

useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = 'auto';
    }
    // here if we open in mobile view and then redirect to large screen then overflow will be auto.
    // oviously this is the call back function of useEffect
    return()=>{
        document.body.style.overflow = 'auto';
    }
},[showMobileMenu])

  return (
    <div className=" absolute top-0 left-0 w-full z-10 flex pr-6">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img className="cursor-pointer " src={assets.logo} alt="" />
        <ul className="md:flex items-center hidden gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonial" className="cursor-pointer hover:text-gray-400">
            Testimonial
          </a>
          <a href="#Contactus" className="cursor-pointer hover:text-black">
          Contact Us
          </a>
        </ul>
        <Link to="/signup"> <button className="hidden md:block bg-white px-8 py-2 rounded-full border border-gray-800 hover:bg-gray-400 hover:text-white transition-all ease-in-out delay-100">
          Sign up
        </button></Link>
      </div>
        <button
          onClick={() => {
            console.log("You clicked at mobile menu");
            setshowMobileMenu((prev) => !prev);

            // setshowMobileMenu(!showMobileMenu);
          }}
        >
          <img
            src={assets.menu_icon}
            className="md:hidden w-7 cursor-pointer"
            alt=""
          />
        </button>

      {/* ------------------------------------------------MOBILE MENU------------------------------------------------ */}

      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "w-0 h-0"
        }  right-0 top-0 bottom-0 overflow-hidden  bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <button className="cursor-pointer" onClick={() => {
            console.log("You clicked at cross menu");
            setshowMobileMenu((prev) => !prev);

            // setshowMobileMenu(!showMobileMenu);
          }}>
          <img  src={assets.cross_icon} alt="" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 font-medium text-lg">
          <a  onClick={() => {
            console.log("You clicked at cross menu");
            setshowMobileMenu(false);

            // setshowMobileMenu(!showMobileMenu);
          }} href="#About" className="cursor-pointer px-4 py-2 rounded-full inline-block hover:text-gray-400">Home</a>
          <a onClick={() => {
            console.log("You clicked at cross menu");
            setshowMobileMenu(false);

            
          }} href="#About" className="cursor-pointer px-4 py-2 rounded-full inline-block hover:text-gray-400">About</a>
          <a onClick={() => {
            console.log("You clicked at cross menu");
            setshowMobileMenu(false);

            
          }} href="#Projects" className="cursor-pointer px-4 py-2 rounded-full inline-block hover:text-gray-400">Projects</a>
          <a onClick={() => {
            console.log("You clicked at cross menu");
            setshowMobileMenu(false);

          }} href="#Testimonails" className="cursor-pointer px-4 py-2 rounded-full inline-block hover:text-gray-400">Testimonial</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
