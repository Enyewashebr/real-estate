import React from 'react'
import {assets} from '../assets/assets';

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden "
      id="footer"
    >
      {/* <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300"> */}
        <div className="flex flex-col md:flex-row justify-between items-start container mx-auto">
          <div className=" w-full md:w-1/3 mb-8 md:mb-0">
            <img src={assets.logo_dark} alt="" />
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              perferendis sunt temporibus doloremque nesciunt voluptas commodi,
              veritatis nostrum quidem architecto consequuntur dolorum,
              repudiandae eaque deserunt voluptate iste tempora sit corporis?
            </p>
          </div>
          <div className=" w-full md:w-1/5  mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4 ">Company</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <a href="#Header" className="hover:text-white">
                Home
              </a>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
              <a href="#Contact" className="hover:text-white">
                Contact
              </a>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </ul>
          </div>
          <div className=" w-full md:w-1/3">
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex gap-2'>
            <input type='email' placeholder='Enter your email' className='w-full border border-gray-700 p-2 rounded bg-gray-800 text-gray-400 focus:outline-none md:w-auto' />
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
          </div>
          </div>
        </div>
      <div className='border-t border-gray-700 mt-10  text-center text-gray-500'>
        Copyright 2024 © Enyew Ashebir. All rights reserved.
      </div>
    </div>
  );
}

export default Footer
