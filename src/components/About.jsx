import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-yellow-800 to-black text-white"
    >
      <div className="max-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        
        </p>
        <br />
        <p className="text-xl">
        Dedicated and driven Information Technology student seeking an internship opportunity to gainpractical experience and contribute to a professional environment.
        Possesses a strong academicbackground in IT, along with proficiency in communication and teamwork. Demonstrates excellenttime management and organizational skills developed through balancing coursework andextracurricular activities.
        Eager to apply classroom knowledge to real-world scenarios and make apositive impact as an internAbout.

        
        </p>

        {/* Button to Download Portfolio */}
      
      </div>
    </div>
  );
};

export default About;
