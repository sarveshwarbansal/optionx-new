"use client";

import { useState } from "react";

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full bg-slate-950 ${props.popular ? "dark" : ""}`}>
      <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
            {props.planName}
          </div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
            <div className="w-[165px] h-[41.29px] text-center"><span className="text-zinc-400 text-xl font-medium font-['Montserrat']">$</span><span className="text-white text-xl font-medium font-['Montserrat']"> </span><span className="text-white text-[28px] font-extrabold font-['Montserrat']">2699.00</span><span className="text-zinc-400 text-xl font-semibold font-['Montserrat']">/qt</span></div>
            </span>
            <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="text-slate-500 font-medium">/mo</span>
          </div>
          <div className="text-sm text-slate-500 mb-5">
            {props.planDescription}
          </div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0"
          >
            Subscribe Now
          </a>
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
          Includes:
        </div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div className="bg-slate-950  p-8 md:px-48 md:py-16 text-center">
      <h2 className="text-[36px] text-white  font-[700] text-center py-10 ">
        Pricing Plan
      </h2>

      {/* Pricing table */}
      <div className="max-w-xs mx-auto grid gap-24  lg:grid-cols-3 items-start lg:max-w-none">
        {/* Pricing tab 1 */}
        <div className="h-full">
          <div className="relative flex flex-col h-full p-6 bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="mb-5">
              <div className=" dark:text-slate-200 text-white font-semibold mb-1">
                Monthly
              </div>
              <div className="text-sm text-slate-500 mb-5">
              Make your trading life easier
              </div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-white dark:text-slate-200 font-bold text-3xl">
                  $
                </span>
                <span className="text-white dark:text-slate-200 font-bold text-4xl">
                  {isAnnual ? "29" : "35"}
                </span>
                <span className="text-white font-medium">/mo</span>
              </div>
              
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>

        {/* Pricing tab 2 */}
        <div className="h-full dark">
          <div className="relative flex flex-col h-full p-6 bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="absolute -top-3  left-0 right-0 mx-auto rounded-[30px]">
              <div className="inline-flex items-center text-xs font-semibold rounded-full  py-1.5 px-3 bg-[#401434] text-[#DA6696] shadow-sm shadow-slate-950/5 uppercase">
                Most Popular
              </div>
            </div>
            <div className="mb-5">
              <div className="text-white dark:text-slate-200 font-semibold mb-1">
                Quarterly
              </div>
              <div className="text-sm text-slate-500 mb-5">
              Make your trading life easier
              </div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-white dark:text-slate-200 font-bold text-3xl">
                  $
                </span>
                <span className="text-white dark:text-slate-200 font-bold text-4xl">
                  {isAnnual ? "49" : "55"}
                </span>
                <span className="text-white font-medium">/qt</span>
              </div>
              
              <a
                className="w-full inline-flex justify-center items-center h-[55px] whitespace-nowrap bg-[#C63572]  px-3.5 py-2.5 font-medium text-white text-sm/[14px] shadow-sm shadow-indigo-950/10 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>

        {/* Pricing tab 3 */}
        <div className="h-full">
          <div className="relative flex flex-col h-full p-6  bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="mb-5">
              <div className="text-white dark:text-slate-200 font-semibold mb-1">
                Yearly
              </div>
              <div className="text-sm text-slate-500 mb-5">
              Make your trading life easier
              </div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-white dark:text-slate-200 font-bold text-3xl">
                  $
                </span>
                <span className="text-white dark:text-slate-200 font-bold text-4xl">
                  {isAnnual ? "79" : "85"}
                </span>
                <span className="text-white font-medium">/mo</span>
              </div>
             
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
