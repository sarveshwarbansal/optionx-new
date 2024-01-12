// "use client";
// import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.svg";
import Image from "next/image";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import linkedin from "../assets/Linkedin.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/YouTube.svg";
import email from "../assets/Email.svg";
import phone from "../assets/Phone.svg";
import mark from "../assets/Mark.svg";

function Footer() {
  // const iconsTab = [
  //   { icon: <FaFacebook /> },
  //   { icon: <FaTwitter /> },
  //   { icon: <FaInstagram /> },
  //   { icon: <FaLinkedin /> },
  //   { icon: <FaYoutube /> },
  // ];
  return (
    <>
      <footer className="flex flex-col justify-between  bg-slate-950 lg:text-left p-8 md:px-16 md:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between  ">
          {/* First links section */}
          <div className="mb-6 w-full sm:w-[30%]">
            <a href="/">
              <Image className="mb-6" src={logo} alt="" />
            </a>
            <p className="mb-2.5 font-medium  text-[#6F6C90] max-w-full md:max-w-[60%]">
              Trade with Unleashed Speed and Execution
            </p>
            <div className="flex justify-start items-center gap-6">
              <a href="/">
                <Image src={facebook} alt="" />
              </a>
              <a href="/">
                <Image src={instagram} alt="" />
              </a>
              <a href="/">
                <Image src={linkedin} alt="" />
              </a>
              <a href="/">
                <Image src={twitter} alt="" />
              </a>
              <a href="/">
                <Image src={youtube} alt="" />
              </a>
            </div>
          </div>

          {/* Second links section */}
          <div className="mb-6 w-full sm:w-[20%]">
            <h5 className="mb-2.5 font-bold  text-[#6F6C90]">Products</h5>

            <ul className="mb-6 list-none">
              <li className="text-[#6F6C90] py-2">
                <a href="#!">Features</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#!">Pricing</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#!">Case Studies</a>
              </li>
            </ul>
          </div>

          {/* Third links section */}
          <div className="mb-6 w-full sm:w-[20%]">
            <h5 className="mb-2.5 font-bold  text-[#6F6C90]">Company</h5>

            <ul className="mb-0 list-none">
              <li className="text-[#6F6C90] py-2">
                <a href="#!">About</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#!">Contact Us</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#!">Career</a>
              </li>
            </ul>
          </div>

          {/* Fourth links section */}
          <div className="mb-6 w-full sm:w-[20%]">
            <h5 className="mb-2.5 font-bold  text-[#6F6C90]">
              Support
            </h5>

            <ul className="mb-0 list-none">
              <li className="text-[#6F6C90] py-2">
                <a href="#!" className="text-[#6F6C90]">
                  Getting Started
                </a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#!">Help Center</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#!">Report a bug</a>
              </li>
            </ul>
          </div>

          <div className="mb-6 w-full sm:w-[30%]">
            <h5 className="mb-2.5 font-bold  text-[#6F6C90] ">
              Contact Us
            </h5>

            <ul className="mb-0 list-none ">
              <li className="text-[#6F6C90] py-2 flex gap-2">
                <a href="/">
                  <Image src={email} alt="" />
                </a>

                <a href="#!">contact@optionxtrade.com</a>
              </li>
              <li className="text-[#6F6C90] py-2 flex gap-2">
                <a href="/">
                  <Image src={phone} alt="" />
                </a>
                <a href="#!">(414)-687-5892</a>
              </li>
              <li className="text-[#6F6C90] py-2 flex gap-2">
                <a href="/">
                  <Image src={mark} alt="" />
                </a>
                <a href="#!">Sector 44, Gurugram, Haryana, India</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
      </footer>
      <div className="w-full bg-slate-950 px-8 pb-8 text-gray-300">
        <p className="text-[#6F6C90] sm:float-left underline">
          Copyright © 2023 OptionX.trade
        </p>
        <div className="sm:float-right">
          <span className="text-[#6F6C90] underline">
            {" "}
            All Rights Reserved |
          </span>{" "}
          <span className="text-[#6A71E5] underline">
            Terms and Conditions |
          </span>{" "}
          <span className="text-[#6A71E5]  underline">Privacy Policy</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
