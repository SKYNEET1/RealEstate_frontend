import React from 'react'
import { assets } from '../assets/assets'
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="" />
          <p className='text-gray-400 mt-4'>Swagat has showcased his skills in frontend development, API handling, and state management, proving his ability to build dynamic and functional web applications. </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href='#header' className='hover:text-white'>Home</a>
            <a href='#About' className='hover:text-white'>About Us</a>
            <a href='#Contactus' className='hover:text-white'>Contact Us</a>
            <a href='#' className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Social Medias</h3>
            <div className='flex gap-4'>
            <a className='text-white text-2xl' href="https://www.instagram.com/skyneet1/"><LuInstagram/></a>
            <a className='text-white text-2xl' href="https://www.youtube.com/@swagatrout3426"><FaYoutube /></a>
            <a className='text-white text-2xl' href="https://www.instagram.com/skyneet1/"><CiTwitter /></a>
            <a className='text-white text-2xl' href="https://web.whatsapp.com/"><FaWhatsapp /></a>
            </div>
            <p className='text-gray-400 mt-3 mb-4 max-w-80'>The latest news,articles,and resources,sent to your inbox weekly.</p>

            <div className='flex gap-4'>
              <input type="email" placeholder='Enter Your email' className='p-2 rounded-md bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto'/>
              <button className='py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600'>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2024 © Swagat Rout. All rights reserved.
      </div>
    </div>
  )
}

export default Footer