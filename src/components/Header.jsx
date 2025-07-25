import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png" }}
      id="Header"
    >
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32'>
        <h2>Explore homes that match your lifestyle</h2>
        <div>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header
