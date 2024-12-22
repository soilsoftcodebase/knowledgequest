import React from 'react';
import HeroImg from '/assets/heroimg3.jpg';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Hero = () => {
  return (
    <div className="flex justify-center items-center mb-3 relative top-0 w-full">
      <div className="w-full max-w-[1280px] h-[80vh] flex flex-col justify-start items-center md:items-start mt-2 px-4 md:px-8">
        <h6 className="text-xl leading-[25px] sm:text-2xl sm:leading-[30px] md:text-3xl md:leading-[40px] lg:leading-[55px] lg:text-[42px] font-semibold text-[#f19f1e] text-center md:text-left">
          <span className="text-[#f19f1e] animate-spin">An</span>{' '}
          <span className="text-[#094166]">
            Entrepreneurship Ecosystem Program{' '}
            <br className="hidden md:block" />
          </span>
          by{' '}
          <span className="text-[#116d38] animate-bounce">
            SoilSoft Technologies
          </span>
        </h6>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#09416693] mt-4 text-center md:text-left">
          Empowering innovators, developers, and entrepreneurs with real-time
          training and hands-on project development.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <a href="https://forms.office.com/pages/responsepage.aspx?id=XWw-lpHoekGlgSs5V-dA_cSeeLdkO8lNglt51RYSY4pUNkRIVFM0R1kwVVJWS0w1MkpLUFVFWldHUi4u&route=shorturl">
            <button className="font-semibold relative h-12 w-full sm:w-56 md:w-64 border rounded-3xl border-[#1b5880] bg-[#094166] text-white shadow-2xl transition-all hover:shadow-[#094166bb] px-4 sm:px-0">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <SchoolOutlinedIcon />
                <span className="text-[#ffb847]">College</span> - Connect with
                us
              </span>
            </button>
          </a>
          <a href="https://forms.office.com/pages/responsepage.aspx?id=XWw-lpHoekGlgSs5V-dA_cSeeLdkO8lNglt51RYSY4pUN0NaS1pTRTBVNjg1UEtUOE9YQzZBQ0k0NC4u&route=shorturl">
            <button className="font-semibold relative h-12 w-full sm:w-56 md:w-64 border rounded-3xl border-[#1b5880] bg-transparent text-[#094166] shadow-2xl transition-all hover:shadow-[#ffb847a8] px-4 sm:px-0">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <PersonOutlineIcon />
                <span className="text-[#f19f1e]">Student</span> - Connect with
                us
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
