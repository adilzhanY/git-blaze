import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-black px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-4">
            Proof Your{" "}
            <span className="text-[#333] bg-white px-2 rounded">GitHub</span>{" "}
            Skills
          </h1>
          <h2 className="text-3xl lg:text-3xl font-medium text-white max-w-2xl mx-auto mt-3">
            Upgrade your skills
          </h2>
          <button className="mt-10 px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg text-lg transition-all duration-300">
            Get Started
          </button>
          <ArrowDown className="mt-10 w-16 h-16 text-white animate-bounce mx-auto" />
        </div>
      </section>
      <div className="h-1 w-2/3 mx-auto  bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800"></div>
    </>
  );
};

export default HeroSection;
