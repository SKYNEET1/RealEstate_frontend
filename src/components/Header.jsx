import React, { useState } from "react";
import headerImg from "../assets/header_img.png";
import { assets } from "../assets/assets";
import Navbar from './Navbar'

const Header = () => {
    
    

  return (

    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="header"
    >
        <Navbar/>

      <div className="container text-center mx-auto py-6 px-6 md:px-20 lg:px-32 text-white ">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div>
          <div className="space-x-6 mt-16 flex items-center justify-center">
            <a className="border border-white px-8 py-3 rounded-md hover:rounded-xl transition-all ease-in-out delay-100">
              Projects
            </a>
            <a className="bg-blue-600 px-5.5 py-3 rounded-md hover:rounded-xl transition-all ease-in-out delay-100 hover:bg-blue-500">
              Contact Us
            </a>
          </div>
        </div>
        
      </div>
     
    </div>
  );
};

export default Header;
