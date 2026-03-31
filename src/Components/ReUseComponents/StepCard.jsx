import React from "react";
import { UserPlus } from "lucide-react";

const StepCard = ({number, img , title, description}) => {
  return (
    <div className="relative max-w-sm bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="absolute top-6 right-6 w-8 h-8 bg-[#7c24f6] text-white text-xs font-bold rounded-full flex items-center justify-center">
        {number}
      </div>
    <div className="py-20 flex flex-col items-center">

      <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
        <img src={img} alt="" />
      </div>

      <h3 className="text-xl font-bold text-[#0f172a] mb-3">{title}</h3>

      <p className="text-slate-400 text-sm leading-relaxed max-w-60">
        {description}
      </p>
    </div>
    </div>
  );
};

export default StepCard;
