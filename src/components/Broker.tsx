import React from "react";
import Image from "next/image";
import zerodha from "../assets/zerodha.png";
import rupeezy from "../assets/rupeezy.png";
const Broker = () => {
  return (
    <div className="w-full p-8 bg-slate-950">
      <div className="w-full h-[100px] text-center text-white text-[36px] font-bold mb-0">
        Live Brokers
      </div>
      <div className="w-full flex justify-center items-center mb-16">
      <svg xmlns="http://www.w3.org/2000/svg"   align-item= "center" height="3" viewBox="0 0 256 3" fill="none">
  <path d="M1 1L255 2" stroke="url(#paint0_linear_335_31346)" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_335_31346" x1="-31.9257" y1="1.00016" x2="290.278" y2="1.89674" gradientUnits="userSpaceOnUse">
      <stop offset="0.0987354" stop-color="#010924"/>
      <stop offset="0.307292" stop-color="#EF9C9C" stop-opacity="0.761018"/>
      <stop offset="0.442708" stop-color="#E7B75A"/>
      <stop offset="0.713542" stop-color="#EA7D7D"/>
      <stop offset="0.888448" stop-color="white" stop-opacity="0"/>
      <stop offset="1" stop-color="#010924"/>
    </linearGradient>
  </defs>
</svg>
</div>
     

      <div className="w-full h-24  bg-slate-900 justify-center items-center flex gap-12">
        <Image src={zerodha} alt="" />
        <Image src={rupeezy} alt="" />
      </div>
    </div>
  );
};

export default Broker;
