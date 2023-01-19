import React from "react";
import Avatart from "../assets/avatar.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img src={Avatart} alt="Avatar" className="w-80 h-80" />
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-teal-400">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-3xl font-bold">
            <p>Hi. I'm Jun, from South Korea and currently living in the UK.</p>
          </div>
          <div>
            <p className="">
              I am motivated and hardworking. I work well as part of a team
              while also being independent. I am eager to learn more and would
              be grateful for new opportunities. I am looking forward to working
              with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
