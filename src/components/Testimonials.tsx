"use client";
import React from "react";
import Image from "next/image";
import greg from "../assets/greg.png";
import james from "../assets/james_pattinson.png";
import trevor from "../assets/trevor.png";

const Testimonials = () => {
  return (
    <div className="bg-slate-950 p-8">
      {/* // <!-- Container for demo purpose --> */}
      <div className="container mx-auto md:px-6 bg-slate-950">
        {/* <!-- Section: Design Block --> */}
        <section className="text-center">
          <h2 className="mb-12 pb-4 text-white text-center text-[36px] font-bold">
            What our customers say about us
          </h2>

          <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12 ">
            <div className="mb-6 lg:mb-0 p-6">
              <div className="relative border-solid border-2 rounded-lg border-[#1C2A56] bg-[#010924] ">
                <div className="p-6 justify-center items-center text-center">
                  <div className="flex">
                    <div className="flex relative mx-4 justify-center items-center -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <Image
                        src={james}
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-playfair mb-2 font-bold text-2xl text-[#3D43D8]">
                      James Pattinson
                    </h5>
                    <div className="flex justify-center gap-1 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </div>

                    <h6 className="text-white mb-4 font-bold mt-3.5 text-2xl">
                      &quot;Trading Evolution&quot;
                    </h6>
                    <p className="text-[#C7C7C7] font-normal text-base">
                      “This app redefines trading with a sleek interface and
                      advanced features like Unlimited Order Quantity, Combined
                      Premium spread trading, and Custom Order types. Trading on
                      multiple ladders adds versatility, making it a must-have
                      for traders at every level. Unleash the power of precision
                      trading!”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0 p-6">
              <div className="relative block border-solid border-2 border-[#1C2A56] rounded-lg bg-[#010924] ">
                <div className="p-6 justify-center items-center text-center">
                  <div className="flex">
                    <div className="flex relative mx-4 justify-center items-center -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <Image
                        src={greg}
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-playfair mb-2 text-2xl font-bold text-[#3D43D8]">
                      Greg Stuart
                    </h5>
                    <div className="flex justify-center gap-1 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                    </div>

                    <h6 className="text-white mb-4 font-bold mt-3.5 text-2xl">
                      &quot;Seamless UX&quot;
                    </h6>
                    <p className="text-[#C7C7C7] font-normal text-base">
                      “This app redefines trading with a sleek interface and
                      advanced features like Unlimited Order Quantity, Combined
                      Premium spread trading, and Custom Order types. Trading on
                      multiple ladders adds versatility, making it a must-have
                      for traders at every level. Unleash the power of precision
                      trading!”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0 p-6">
              <div className="relative block border-solid border-2 rounded-lg border-[#1C2A56] bg-[#010924] ">
                <div className="p-6 justify-center items-center text-center">
                  <div className="flex">
                    <div className="flex relative mx-4 justify-center items-center -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <Image
                        src={trevor}
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-2 text-2xl font-playfair font-bold text-[#3D43D8]">
                      Trevor Mitchell
                    </h5>
                    <div className="flex justify-center gap-1 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <path
                          d="M12.0498 0L14.8562 8.63729H23.938L16.5907 13.9754L19.3971 22.6127L12.0498 17.2746L4.70249 22.6127L7.50891 13.9754L0.161598 8.63729H9.24338L12.0498 0Z"
                          fill="#05C580"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="26"
                        viewBox="0 0 25 26"
                        fill="none"
                      >
                        <path
                          d="M12.499 0.75L15.3054 9.38729H24.3872L17.0399 14.7254L19.8463 23.3627L12.499 18.0246L5.15171 23.3627L7.95813 14.7254L0.610817 9.38729H9.6926L12.499 0.75Z"
                          fill="#C4C4C4"
                        />
                        <mask
                          id="mask0_40_120335"
                          className="mask-type:alpha"
                          maskUnits="userSpaceOnUse"
                          x="-1"
                          y="0"
                          width="14"
                          height="25"
                        >
                          <rect
                            x="-0.000976562"
                            y="0.25"
                            width="12.5"
                            height="24"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_40_120335)">
                          <path
                            d="M12.499 0.75L15.3054 9.38729H24.3872L17.0399 14.7254L19.8463 23.3627L12.499 18.0246L5.15171 23.3627L7.95813 14.7254L0.610817 9.38729H9.6926L12.499 0.75Z"
                            fill="#05C580"
                          />
                        </g>
                      </svg>
                    </div>

                    <h6 className="text-white mb-4 font-bold mt-3.5 text-2xl">
                      &quot;Precision Trading&quot;
                    </h6>
                    <p className="text-[#C7C7C7] font-normal text-base">
                      “This app redefines trading with a sleek interface and
                      advanced features like Unlimited Order Quantity, Combined
                      Premium spread trading, and Custom Order types. Trading on
                      multiple ladders adds versatility, making it a must-have
                      for traders at every level. Unleash the power of precision
                      trading!”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
};

export default Testimonials;
