import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { RiMailAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/Image/Logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center items-center w-full">
        <div className="container">
          {/* <div className="mx-5 flex flex-row flex-wrap justify-between gap-5"> */}
          <div className="mx-5 grid md:grid-cols-7 grid-cols-2 md:gap-5 gap-10 py-20">
            <div className="flex flex-col gap-8 col-span-2">
              <div className="">
                <img src={logo} alt="" className="h-10" />
              </div>

              <div className="flex gap-5 border rounded-lg p-3">
                <span className="text-2xl">
                  <RiMailAddLine />
                </span>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your Email"
                  className="outline-none border-none w-full"
                />
                <span className="text-2xl">
                  <PiPaperPlaneTiltFill />
                </span>
              </div>
            </div>
            <div className="flex md:justify-end justify-start">
              <div className="flex flex-col gap-5">
                <h1>Home</h1>
                <ul className="font-semibold flex flex-col gap-2">
                  <li>
                    <Link>Hero Section</Link>
                  </li>
                  <li>
                    <Link>Features</Link>
                  </li>
                  <li>
                    <Link>Properties</Link>
                  </li>
                  <li>
                    <Link>Testimonials</Link>
                  </li>
                  <li>
                    <Link>FAQ's</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex md:justify-end justify-start">
              <div className="flex flex-col gap-5">
                <h1>About Us</h1>
                <ul className="font-semibold flex flex-col gap-2">
                  <li>
                    <Link>Our Story</Link>
                  </li>
                  <li>
                    <Link>Our Work</Link>
                  </li>
                  <li>
                    <Link>How It Works</Link>
                  </li>
                  <li>
                    <Link>Our Team</Link>
                  </li>
                  <li>
                    <Link>Our Clients</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex md:justify-center justify-start">
              <div className="flex flex-col gap-5">
                <h1>Properties</h1>
                <ul className="font-semibold flex flex-col gap-2">
                  <li>
                    <Link>Portfolio</Link>
                  </li>
                  <li>
                    <Link>Categories</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex md:justify-end justify-start">
              <div className="flex flex-col gap-5">
                <h1>Services</h1>
                <ul className="font-semibold flex flex-col gap-2">
                  <li>
                    <Link>Valuation Mastery</Link>
                  </li>
                  <li>
                    <Link>Strategic Marketing</Link>
                  </li>
                  <li>
                    <Link>Negotiation Wizardry</Link>
                  </li>
                  <li>
                    <Link>Closing Success</Link>
                  </li>
                  <li>
                    <Link>Property Management</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex md:justify-end justify-start">
              <div className="flex flex-col gap-5">
                <h1>Contact Us</h1>
                <ul className="font-semibold flex flex-col gap-2">
                  <li>
                    <Link>Contact Form</Link>
                  </li>
                  <li>
                    <Link>Our Offices</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-5 bg-slate-200">
        <div className="container">
          <div className="mx-5 flex md:flex-row flex-col md:justify-between justify-center items-center gap-5">
            <div className="flex md:gap-5 gap-3 items-center flex-wrap justify-center text-center md:order-first order-last">
              <span className="md:text-lg text-sm">@2023 Estatein. All Right Reserved.</span>
              <span className="md:text-lg text-sm">
                <Link>Terms & Conditions</Link>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-4 rounded-full bg-black bg-opacity-50 text-white text-xl hover:bg-opacity-70 transition-all">
                <FaFacebookF />
              </span>
              <span className="p-4 rounded-full bg-black bg-opacity-50 text-white text-xl hover:bg-opacity-70 transition-all">
                <CiLinkedin />
              </span>
              <span className="p-4 rounded-full bg-black bg-opacity-50 text-white text-xl hover:bg-opacity-70 transition-all">
                <FaTwitter />
              </span>
              <span className="p-4 rounded-full bg-black bg-opacity-50 text-white text-xl hover:bg-opacity-70 transition-all">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
