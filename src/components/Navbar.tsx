"use client";
import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
   
      <nav>
         <div className="flex items-center justify-between bg-slate-950 px-16 pt-10 pb-8">
      <div><a href="/">
        <Image src={logo} alt="" />
      </a>
      </div>
      <div >
<ul className="DESKTOP-MENU hidden md:flex  gap-16 mr-0" >
       <li>   <a href="#" className="text-stone-300 text-base font-medium ">
            Connections
          </a>
          </li>
        <li>  <a href="#" className="text-stone-300 text-base font-medium ">
            Features
          </a>
          </li>
        <li> <a href="#" className="text-stone-300 text-base font-medium ">
            Pricing
          </a>
          </li> 
         <li> <a href="#" className="text-stone-300 text-base font-medium ">
            Resources
          </a>
          </li>
        </ul>
</div>
<div className="DESKTOP-MENU hidden md:flex gap-16">
<button className="hover:bg-slate-800 border-solid border-2 border-white-500 text-stone-300 text-base font-medium font-inter p-2.5 px-8">
            Sign In
          </button>
          <button className=" bg-indigo-700 hover:bg-indigo-600 text-stone-300 text-base font-medium font-Inter p-2.5 ">
            Sign Up Now
          </button>
</div>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Connections</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Features</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Pricing</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Resources</a>
              </li>

              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Sign In</a>
              </li>

              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Sign Up Now</a>
              </li>
            </ul>
          </div>
        </section>

        
      
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </nav>
  );
}
