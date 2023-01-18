import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-teal-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fff]">JUN PARK</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I'm a Front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Welcome, I am Jun from South Korea and currently living in the UK. I
          am motivated, hardworking. I work well as part of a team while also
          being independent. I am eager to learn more and would be grateful for
          new opportunities. I am looking forward to working with you.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-400 hover:border-teal-800 cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>

            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
