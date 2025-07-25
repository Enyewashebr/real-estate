import {assets} from '../assets/assets'
import React from 'react'

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14  md:px-20 lg:px-32 overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb:2">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our brand{" "}
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your vission{" "}
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 mx-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28 ">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
            
          </div>
          <p className='my-10  mx-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in, sint dicta voluptatum nesciunt error impedit eius rerum, maiores sequi, mollitia atque nam cum fugit eum enim quibusdam placeat quaerat.</p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer'>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About
