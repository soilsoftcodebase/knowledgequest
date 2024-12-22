import React, { useState } from 'react';
import KQlogo from '/assets/KQlogo2.png';
import SSlogo from '/assets/SSlogo2.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="flex justify-center items-center mb-3">
      <div className="w-full md:w-[1280px] h-[80px] mb-3 relative">
        <div className="flex justify-between items-center w-full h-full px-4 md:px-0">
          {/* Logo */}
          <img src={KQlogo} className="h-20 sm:h-24" alt="KQ Logo" />

          {/* Navigation for Desktop */}
          <div className="md:flex items-center">
            <img src={SSlogo} className="h-16 sm:h-44" alt="SS Logo" />
          </div>

          {/* Hamburger menu icon (for mobile) */}
          <div className="md:hidden" onClick={handleClick}>
            <button className="text-2xl">
              {toggle ? 'X' : '☰'}{' '}
              {/* Change this with an icon, e.g., hamburger icon */}
            </button>
          </div>
        </div>

        {/* Mobile menu (Visible when toggle is true) */}
        <div
          className={`absolute z-10 w-full bg-white p-4 md:hidden border-b ${
            toggle ? 'block' : 'hidden'
          }`}
        >
          <ul className="space-y-4 text-center">
            <li>
              <a href="#hero" className="hover:text-[#20B486]">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#20B486]">
                Services
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#20B486]">
                Products
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-[#20B486]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="flex justify-start">
          <div className="w-[800px] h-px bg-gray-200 my-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
