import React from "react";

const StatsBanner = () => {
  return (
    <div className="bg-linear-to-r from-indigo-500 to-purple-500">
      <div className="container mx-auto  text-white py-12 my-20 rounded-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="flex flex-col items-center justify-center text-center py-6 md:py-0">
            <h2 className="text-5xl font-bold mb-2">50K+</h2>
            <p className="text-purple-100 text-sm font-medium tracking-wide">
              Active Users
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center py-6 md:py-0 md:border-x md:border-white/30">
            <h2 className="text-5xl font-bold mb-2">200+</h2>
            <p className="text-purple-100 text-sm font-medium tracking-wide">
              Premium Tools
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center py-6 md:py-0">
            <h2 className="text-5xl font-bold mb-2">4.9</h2>
            <p className="text-purple-100 text-sm font-medium tracking-wide">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
