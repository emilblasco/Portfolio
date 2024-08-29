

import React from "react";

import pokepet from "../assets/portfolio/pokepet.PNG";
import hogme from "../assets/portfolio/Hogmez.PNG";


const Portfolio = () => {
  return (
    <div  name="portfolio"className="w-full h-screen bg-gradient-to-b from-black to-yellow-800 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-xl mt-4">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Portfolio Item 1 */}
          <div className="shadow-md shadow-gray-600 rounded-lg bg-gradient-to-b from-gray-800 to-black">
            <img
              src={pokepet}
              alt="Pokepet: Management System"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                Pokepet: Management System
              </button>
            </div>
          </div>
          {/* Portfolio Item 2 */}
          <div className="shadow-md shadow-gray-600 rounded-lg bg-gradient-to-b from-gray-800 to-black">
            <img
              src={hogme}
              alt="Hogme: Livestock Management System"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                Hogme: Livestock Management System
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
