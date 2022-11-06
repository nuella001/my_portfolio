import React from "react";
import { FaFigma } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { girl } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 mt-28 gap-4 lg:px-24 ">
      <div className="hero-txt  justify-start">
        <p className=" text-left text-xs">
          SPEED UP <br /> COMMUNICATIONS
        </p>
        <h1 className=" text-left mt-5 lg:tracking-wide leading-6 font-bold text-4xl md:text-6xl md:max-w-md">
          BEST UI/UX DESIGNER
        </h1>
        <p className="my-6  md:max-w-md text-left">
          AU Studio is the best place for everything related to a project,
          to-do-list or communication
        </p>
        <div className="icons">
          <div className="flex  items-center  justify-between bg-gray-0 p-2 pl-4 mt-4 w-48 rounded-full ">
            <div className="py-2 flex space-x-3 items-center">
              <div className="flex items-center">
              <FaFigma className="" />
              </div>
              <div className="flex items-center">
              <SlDiamond className="text-yellow-300" />
              </div>
            </div>
            <div>
              <Button text={"Get it now"} className="bg-blue-600"/>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src={girl} alt="" className="w-full " />
      </div>
    </div>
  );
};

export default Hero;
