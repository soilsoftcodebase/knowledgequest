import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const Portfolio = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 lg:px-16">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="/assets/bloomify2.jpg"
            alt="Bloomify Fashions"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#094166a7] font-semibold">
            PORTFOLIO
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#094166] font-semibold mt-4">
            Bloomify Fashions
          </h2>
          <p className="text-left text-sm sm:text-base lg:text-lg xl:text-xl mt-4 text-[#09416699] leading-relaxed">
            Take a look at one of our success stories: Bloomify Fashions –{' '}
            <br />
            An Ecommerce fashion mobile app developed and deployed on the{' '}
            <span className="font-semibold text-[#094166]">Play Store</span>.
          </p>
          <div className="flex justify-start mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=bloomifyfashions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="relative h-12 w-44 overflow-hidden rounded-3xl border border-[#1b5880] bg-[#094166] text-white shadow-lg font-semibold 
                before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 
                before:duration-700 transition-all hover:shadow-[#094166b8] hover:before:-translate-x-48 justify-center sm:justify-start"
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  View App <NorthEastIcon />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
