import React from 'react';

const WorkFlowSection = () => {
  return (
    <div className="w-full bg-[#7c24f6] text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        
       
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Ready To Transform Your Workflow?
        </h1>

        
        <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

      
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          
          
          <button className="bg-white text-[#7c24f6] font-semibold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors duration-300 w-full sm:w-auto cursor-pointer">
            Explore Products
          </button>
          
         
          <button className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto cursor-pointer">
            View Pricing
          </button>
        </div>

        
        <div className="text-xs text-white/70 pt-2 flex flex-col sm:flex-row gap-2 justify-center items-center">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>

      </div>
    </div>
  );
};

export default WorkFlowSection;