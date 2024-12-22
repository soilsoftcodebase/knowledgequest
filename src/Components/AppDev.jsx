import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const AppDev = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gradient-to-r from-[#f3faff] to-[#def2ff] py-12 w-full max-w-[1280px] px-4 md:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start ml-0 sm:24 md:ml-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-left text-[#094166] font-semibold mt-6 md:mt-20">
            MOBILE APP DEVELOPMENT
          </h1>
          <p className="text-left text-sm md:text-base lg:text-lg mt-2 text-[#09416699]">
            Master Google Flutter to develop cross-platform apps.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-[#094166] mt-6 leading-6 md:leading-[30px] lg:leading-[40px] text-left font-semibold">
            ✓ Single code base supporting 5 major platforms (Android, iOS, Web,
            Desktop, and more).
            <br />
            ✓ Train from scratch to launch your app on the Google Play Store.
            <br />✓ Learn app branding, including adding logos and other assets.
          </p>
          <div className="flex justify-start mt-6">
            <a href="https://soilsofttechnologies498.sharepoint.com/:b:/s/Multimedia/ESjK97DV3VhCiU7KbhNj30UBbrGDtIPJXZLILJ1BcI8OuA?e=4Nux9j">
              <button
                className="font-semibold relative h-12 w-44 overflow-hidden border rounded-3xl border-[#1b5880] bg-[#094166] text-white shadow-2xl transition-all 
                  before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#094166b8] hover:before:-translate-x-48"
              >
                <span className="relative z-10">
                  Learn More <NorthEastIcon />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center items-center">
          <img
            src="/assets/flutter.png"
            alt="appdev"
            className="w-full md:w-[600px] mt-6 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDev;
