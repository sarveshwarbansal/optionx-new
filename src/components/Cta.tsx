import React from "react";
import noisy from "../../public/images/noisy-gradients.png";
import Image from "next/image";
import c from "../assets/cta.svg"
import ctabg from '../assets/ctabg.svg'

const Cta = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-[#181544] via-[#181544] to-[#1e1554]">
      <div className="container mx-auto flex md:px-4 md:py-10 md:flex-row flex-col items-center justify-between">
        {/* <Image
          className="object-cover object-center rounded"
          alt="hero"
          src={noisy}
        /> */}
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-4">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10 md:text-3xl md:leading-normal ">
          Boost your trades at <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-300">6x speed with</span> OptionX trading platform!
          </h1>
          <p className=" md:pl-0 pl-2 pr-2 invisible dark:text-gray-300">
            Short description here, Short description here Short description
            here Short description here  
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex text-white bg-[#3D43D8] font-bold border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-none "
            >
              Sign Up Now
            </a>
            
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-5/6">
            <Image src={c} alt="" />
          
        </div> */}
        <div className="relative">
  
  <Image src={ctabg} alt="Background Image" className=" hidden md:block w-full h-[300px] xl:h-[350px]" />

 
  <Image src={c} alt="Overlay Image" className="  md:absolute md:top-[-4%] md:left-[25%] xl:w-[75%] w-full h-auto z-10" />
</div>

     
      </div>
    </section>
  );
};
export default Cta;
