import React from "react";
import Header from "./ReUseComponents/Header";
import StepCard from "./ReUseComponents/StepCard";
import img1 from "../assets/user.png";
import img2 from "../assets/package.png";
import img3 from "../assets/rocket.png";

const GetStarts = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="mt-30">
          <Header
            title="Get Started in 3 Steps"
            description="Start using premium digital tools in minutes, not hours."
          />
        </div>
        <div className=" container mx-auto px-4 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StepCard
            number={1}
            img={img1}
            title="Create Account"
            description="Sign up for free in seconds. No credit card required to get started."
          />
          <StepCard
            number={2}
            img={img2}
            title="Choose Products"
            description="Browse our catalog and select the tools that fit your needs."
          />
          <StepCard
            number={3}
            img={img3}
            title="Start Creating"
            description="Download and start using your premium tools immediately."
          />
        </div>
      </div>
    </>
  );
};

export default GetStarts;
