import React from 'react';
import QuibsImage from '../assets/burt.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-yellow-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am Emil Blasco
          </h2>
          <p className="text-white py-4 max-w-md">
          To work in a career oriented and challenging environment tha promotes personal growth and uplift professional development.   
          Download my Resume to know more.      </p>
          <div>
          <a
            href="/CV-Blasco.pdf"
            download
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black-500 to-yellow-100 cursor-pointer"
          >
            Download Resume
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={QuibsImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
