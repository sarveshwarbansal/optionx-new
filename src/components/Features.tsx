import React from 'react'
import Image from 'next/image';
import feature1 from '../assets/feature1.svg'
import feature2 from '../assets/feature2.svg'
import feature3 from '../assets/feature3.svg'
import feature4 from '../assets/feature4.svg'

const Features = () => {
  return (
    <div className="w-full h-auto bg-slate-950 p-8">
      <h2 className="text-[36px] text-white font-[700] text-center py-10 ">Best in class Features to Trade Options  ⚡️</h2>
     
      <div className="flex flex-col sm:flex sm:flex-row items-center justify-evenly  py-4 ">
        <div className="order-last sm:order-first text-center w-full sm:w-[30%]" >
          <h2 className="text-[28px] font-bold text-white">Simplified Order Entry Panel</h2>
          <p className="text-white text-opacity-60">Quickest order type selection, intuitive search, one click exit & order cancellation, slicing and fastest quantity picker at your fingertips.</p>
             
        </div>
        <div >
        <Image src={feature1} alt="" />
      </div>
      </div>

      <div className="flex flex-col sm:flex sm:flex-row items-center justify-evenly py-4">
      <div >
        <Image src={feature2} alt="" />
      </div>
        <div className="text-center w-full sm:w-[30%]">
          <h2 className="text-[28px] font-bold text-white">One-Click Trades</h2>
          <p className="text-white text-opacity-60 ">Trade instantly with a single click on the ladder, placing limit and SL orders effortlessly at your desired price point.  
Just drag and drop to modify order. </p>
             <span>Just drag and drop to modify order</span>
        </div>
       
      </div>

      <div className="flex flex-col sm:flex sm:flex-row items-center justify-evenly  py-4">
        <div className="order-last sm:order-first text-center w-full sm:w-[30%]">
          <h2 className="text-[28px] font-bold text-white">Place OCO Orders with Ease</h2>
          <p className="text-white text-opacity-60">Unlock precision and control in your trades.
Place three orders; Entry leg, Target & SL in just one-click.</p>
             
        </div>
        <div >
        <Image src={feature3} alt="" />
      </div>
      </div>

      <div className="flex flex-col sm:flex sm:flex-row items-center justify-evenly  py-4">
      <div >
        <Image src={feature4} alt="" />
      </div >
        <div className="text-center w-full sm:w-[30%]">
          <h2 className="text-[28px] font-bold text-white">Multiple Ladders Side-by-Side</h2>
          <p className="text-white text-opacity-60">Seamlessly navigate multi-Index trading with parallel ladder, order book and chart placement.</p>
             
        </div>
        
      </div>
     <div className="mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="full" height="2" viewBox="0 0 1248 2" fill="none">
  <path d="M0.25 1H1247.75" stroke="url(#paint0_linear_335_35304)" stroke-opacity="0.5" stroke-width="2"/>
  <defs>
    <linearGradient id="paint0_linear_335_35304" x1="1206.25" y1="18.008" x2="33.2501" y2="18.008" gradientUnits="userSpaceOnUse">
      <stop offset="0.104167" stop-color="#4563FF" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#3E5DFF"/>
      <stop offset="0.90625" stop-color="#4563FF" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
</div>

    </div>
  )
}

export default Features

