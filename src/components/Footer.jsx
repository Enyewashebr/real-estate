import React from 'react'
import {assets} from '../assets/assets';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div>
          <div>
            <img src={assets.logo_dark} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed perferendis sunt temporibus doloremque nesciunt voluptas commodi, veritatis nostrum quidem architecto consequuntur dolorum, repudiandae eaque deserunt voluptate iste tempora sit corporis?</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer
