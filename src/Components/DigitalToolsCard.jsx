import React, { Suspense, useState } from "react";
import Header from "./ReUseComponents/Header";
import ToolsCard from "./ReUseComponents/ToolsCard";
import CartSection from "./CartSection";
import EmptyCart from "./ReUseComponents/EmptyCart";

const LoadDataPromise = fetch("./ToolsCardData.json").then((res) => res.json());

const DigitalToolsCard = ({ selected, setSelected }) => {
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
          Cart ({selected.length})
        </button>
      </div>

      {isActive === "Products" ? (
        <div className="container mx-auto px-4 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense
            fallback={
              <span className="loading loading-spinner text-error "></span>
            }
          >
            <ToolsCard
              LoadDataPromise={LoadDataPromise}
              setSelected={setSelected}
              selected={selected}
            />
          </Suspense>
        </div>
      ) : (
        <div className="container mx-auto">
          {selected.length <= 0 ? (
            <EmptyCart/>
          ) : (
            <CartSection selected={selected} setSelected={setSelected} />
          )}
        </div>
      )}
    </>
  );
};

export default DigitalToolsCard;
