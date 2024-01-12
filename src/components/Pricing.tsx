const Pricing = () => {
  return (
    <div className="bg-slate-950  p-8 md:px-48 md:py-16 text-center">
      <h2 className="text-[36px] text-white  font-[700] text-center pb-16 ">
        Pricing Plan
      </h2>

      {/* Pricing table */}
      <div className="max-w-xs mx-auto grid gap-24  lg:grid-cols-3 items-start lg:max-w-none">
        {/* Pricing tab 1 */}
        <div className="h-full">
          <div className="relative flex flex-col h-full p-6 bg-[#010924] dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="p-4">
              <div className=" dark:text-slate-200 text-white font-semibold p-4 text-2xl">
                Monthly
              </div>
              <div className="text-sm text-slate-500 p-2">
                Make your trading life easier
              </div>
              <div className="flex justify-center items-center gap-2 p-4">
                <p className=" text-center text-zinc-400 text-lg font-semibold font-['Montserrat'] line-through">
                  ₹2199
                </p>
                <p className="px-2.5 py-1 bg-emerald-500 bg-opacity-40 rounded-[40px] text-center text-emerald-500 text-xs font-semibold font-['Montserrat']">
                  SAVE 55%
                </p>
              </div>
              <div className="inline-flex items-baseline p-4 pb-16">
                <span className="text-white dark:text-slate-200 font-bold text-3xl">
                  ₹
                </span>
                <span className="text-white dark:text-slate-200 font-bold text-4xl">
                  999.00
                </span>
                <span className="text-white font-medium">/mo</span>
              </div>

              <button className="w-full inline-flex justify-center px-3.5 py-2.5 text-indigo-400 border-4 border-indigo-400 hover:bg-indigo-400 hover:text-white">
                Subscribe Now
              </button>
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
            <div className="p-4">
              <div className="text-white dark:text-slate-200 font-semibold p-4 text-2xl">
                Quarterly
              </div>
              <div className="text-sm text-slate-500 p-2">
                Make your trading life easier
              </div>

              <div className="flex justify-center items-center gap-2 p-4">
                <p className=" text-center text-zinc-400 text-lg font-semibold font-['Montserrat'] line-through">
                  ₹6599
                </p>
                <p className="px-2.5 py-1 bg-emerald-500 bg-opacity-40 rounded-[40px] text-center text-emerald-500 text-xs font-semibold font-['Montserrat']">
                  SAVE 59%
                </p>
              </div>

              <div className="inline-flex items-baseline p-4 pb-16">
                <span className="text-white dark:text-slate-200 font-bold text-3xl">
                  ₹
                </span>
                <span className="text-white dark:text-slate-200 font-bold text-4xl">
                  2699.00
                </span>
                <span className="text-white font-medium">/qt</span>
              </div>

              <a
                className="w-full inline-flex justify-center items-center border-4 border-[#C63572]  bg-pink-600  px-3.5 py-2.5 font-medium text-white hover:bg-pink-900 hover:border-pink-900"
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
            <div className="p-4">
              <div className="text-white dark:text-slate-200 font-semibold p-4 text-2xl">
                Yearly
              </div>
              <div className="text-sm text-slate-500 p-2">
                Make your trading life easier
              </div>
              <div className="flex justify-center items-center gap-2 p-4">
                <p className=" text-center text-zinc-400 text-lg font-semibold font-['Montserrat'] line-through">
                  ₹25999
                </p>
                <p className="px-2.5 py-1 bg-emerald-500 bg-opacity-40 rounded-[40px] text-center text-emerald-500 text-xs font-semibold font-['Montserrat']">
                  SAVE 65%
                </p>
              </div>

              <div className="inline-flex items-baseline  p-4 pb-16">
                <span className="text-white dark:text-slate-200 font-bold text-3xl">
                  ₹
                </span>
                <span className="text-white dark:text-slate-200 font-bold text-4xl">
                  9599.00
                </span>
                <span className="text-white font-medium">/yr</span>
              </div>

              <button className="w-full inline-flex justify-center px-3.5 py-2.5 text-indigo-400 border-4 border-indigo-400 hover:bg-indigo-400 hover:text-white">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
