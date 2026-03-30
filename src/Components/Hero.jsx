import React from "react";
import { Play } from "lucide-react";
import bannerImg from "../assets/banner.png";
import dotImg from "../assets/Group_5.png";

const Hero = () => {
  return (
    <>
      <div className="relative w-full mx-auto  py-12 md:py-20 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-medium">
              <img src={dotImg} alt="#" />
              <span>New: AI-Powered Tools Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Supercharge Your <br /> Digital Workflow
            </h1>

            <p className="text-slate-500 text-base md:text-lg max-w-xl leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
              <br />
              <span className="cursor-pointer">Explore Products</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className=" bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-indigo-200">
                Explore Products
              </button>

              <button className="flex items-center gap-2 border border-indigo-600 text-indigo-600 font-medium px-6 py-3 rounded-full hover:scale-105 transition-all duration-200">
                <Play size={16} fill="currentColor" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-xl shadow-xl border border-slate-100">
                <img
                  src={bannerImg}
                  alt="Person interacting with a digital interface with futuristic icons"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 blur-2xl rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
