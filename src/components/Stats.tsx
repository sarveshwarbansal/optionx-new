import React from "react";
import Image from "next/image";
import customer from "../assets/customer.svg";
import faster from "../assets/faster.svg";
import time from "../assets/time.svg";

const Stats = () => {
  return (
    <div className="bg-slate-950 w-full p-8  md:py-16 sm:h-auto flex flex-col md:flex-row justify-evenly items-center md:items-start gap-5 md:gap-0">
      <div className="flex flex-col md:flex-row justify-start items-center gap-5 md:gap-0">
        <div>
          <Image src={customer} alt="" />
        </div>
        <div className="w-full md:w-[230px] text-center pl-.5">
          <span className="text-white text-base md:text-lg font-bold font-inter tracking-tight">
            10,000+ Happy Customers &nbsp;
          </span>
          <span className="text-white text-base md:text-lg font-normal font-inter tracking-tight">
            are now trading on OptionX
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center gap-5 md:gap-0 mt-5 md:mt-0">
        <div>
          <Image src={faster} alt="" />
        </div>
        <div className="w-full md:w-[230px]  text-center pl-1">
          <span className="text-white text-base md:text-lg font-bold font-inter tracking-tight">
            6x time faster trades &nbsp;
          </span>
          <span className="text-white text-base md:text-lg font-normal font-inter tracking-tight">
            with 1 click order placements
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center gap-5 md:gap-0 mt-5 md:mt-0">
        <div>
          <Image src={time} alt="" />
        </div>
        <div className="w-full md:w-[250px] text-center pl-.5">
          <span className="text-white text-base md:text-lg font-bold font-inter tracking-tight">
            75% time saving &nbsp;
          </span>
          <span className="text-white text-base md:text-lg font-normal font-inter tracking-tight">
            with easy and customizable environment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
