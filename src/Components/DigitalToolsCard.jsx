import React, { Suspense, useState } from "react";
import Header from "./ReUseComponents/Header";
import ToolsCard from "./ReUseComponents/ToolsCard";

const LoadDataPromise = fetch("./ToolsCardData.json").then((res) => res.json());

const DigitalToolsCard = () => {
  const [isActive, setIsActive] = useState("Products");

  return (
    <>
      <Header
        title="Premium Digital Tools"
        description="Choose from our curated collection of premium digital products designed "
        description2="to boost your productivity and creativity."
      />

      <div className="text-center">
        <button
          onClick={() => setIsActive("Products")}
          className={`text-xl btn rounded-full rounded-r-none ${
            isActive === "Products"
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

      <div className="container mx-auto px-4 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <ToolsCard 
          LoadDataPromise = {LoadDataPromise}
          />
        </Suspense>
      </div>
    </>
  );
};

export default DigitalToolsCard;
