import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
      <p className='text-gray-600 max-w-80 text-center'>Passionate About Properties, Dedicated to Your Vision</p>
      <p className="text-center text-gray-500 mb-8 max-w-100 text-sm mx-auto">
      (ସମ୍ପତ୍ତି ପ୍ରତି ଆଗ୍ରହୀ, ଆପଣଙ୍କ ଦୃଷ୍ଟିକୋଣ ପାଇଁ ସମର୍ପିତ)
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projet Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>Swagat is a passionate and hardworking aspiring full-stack developer specializing in the MERN stack. With a background in Data Science and Management from Ravenshaw University and currently pursuing his MCA at VSSUT, he is dedicated to mastering JavaScript, React, Node.js, Express.js, and MongoDB to secure a full-stack developer role within the next three months.Swagat is actively building projects, revising DSA in Java, SQL, and system design, and sharpening his English communication skills for better job prospects.</p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-500 cursor-pointer'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default About