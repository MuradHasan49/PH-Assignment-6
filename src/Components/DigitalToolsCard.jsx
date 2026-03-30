import React, { useState } from "react";
import Header from "./ReUseComponents/Header";

const DigitalToolsCard = () => {
  const [isActive, setIsActive] = useState("selected");

  return (
    <>
      <Header
        title="Premium Digital Tools"
        description="Choose from our curated collection of premium digital products designed "
        description2="to boost your productivity and creativity."
      />

      <div className="text-center">
        <button
          onClick={() => setIsActive("selected")}
          className={ `text-xl btn rounded-full rounded-r-none ${
            isActive === "selected"
              ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full rounded-r-none"
              : "rounded-full"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setIsActive("cart")}
          className={`text-xl btn rounded-full rounded-l-none ${
            isActive === "cart"
              ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full rounded-l-none"
              : "rounded-full"
          }`}
        >
          Cart (2)
        </button>
      </div>
    </>
  );
};

export default DigitalToolsCard;
