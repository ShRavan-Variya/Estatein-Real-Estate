import React from "react";
import Image from "../../../assets/Image/Image.png";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import icon1 from "../../../assets/Image/icon1.png";
import icon2 from "../../../assets/Image/icon2.png";
import icon3 from "../../../assets/Image/icon3.png";
import icon4 from "../../../assets/Image/icon4.png";
import bg1 from "../../../assets/Image/bg1.png";
import bg2 from "../../../assets/Image/bg2.png";
import FeaturedProperties from "./FeaturedProperties";
import Review from "./Review";
import FAQs from "./FAQs";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="relative grid lg:grid-cols-2 w-full 2xl:gap-16 mb-10">
        <div className="relative flex lg:justify-end order-2 lg:order-first">
          <div className="flex justify-center flex-col gap-10 mx-5 2xl:w-3/4 lg:w-5/6 py-5">
            <div className="flex flex-col gap-4">
              <h1 className="md:text-5xl text-3xl font-semibold">
                Discover Your Dream Property with Estatein
              </h1>
              <p>
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <button className="border border-BgPurple text-BgPurple rounded-lg px-5 py-3 bg-BgLightPurple">
                Learn More
              </button>
              <button className="border border-BgPurple bg-BgPurple text-BgWhite rounded-lg px-5 py-3">
                Browser Properties
              </button>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
              <div className="flex flex-col gap-3 border rounded-lg p-3 md:text-start text-center">
                <span className="font-semibold text-3xl">200+</span>
                <span className="md:text-base text-sm">Happy Customers</span>
              </div>
              <div className="flex flex-col gap-3 border rounded-lg p-3 md:text-start text-center">
                <span className="font-semibold text-3xl">10k+</span>
                <span className="md:text-base text-sm">
                  Properties For Clients
                </span>
              </div>
              <div className="flex flex-col gap-3 border rounded-lg p-3 md:text-start text-center md:col-span-1 col-span-2">
                <span className="font-semibold text-3xl">16+</span>
                <span className="md:text-base text-sm">
                  Years of Experience
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute w-28 h-28 bg-black rounded-full flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
            <BsArrowUpRight className="w-8 h-8 text-white" />
          </div>
          <div className="absolute w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <path
                id="curve"
                d="M50,90 A40,40 0 1,1 50,10"
                fill="none"
                stroke="transparent"
              />
              <text className="fill-white text-[10px] uppercase">
                <textPath xlinkHref="#curve" startOffset="0%">
                  Only Dream Positively
                </textPath>
              </text>
            </svg>
          </div>
        </div> */}
        <div className="lg:w-full lg:m-0 m-5 lg:rounded-none rounded-xl overflow-hidden flex justify-end">
          <img src={Image} alt="" className="2xl:w-4/5" />
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 border m-5 md:p-6 p-3 my-10 rounded-lg shadow-xl">
        <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
          <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
            <HiOutlineArrowUpRight />
          </span>
          <img src={icon1} alt="" className="md:w-auto w-16" />
          <span className="text-sm">Find Your Dream Home</span>
        </div>
        <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
          <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
            <HiOutlineArrowUpRight />
          </span>
          <img src={icon2} alt="" className="md:w-auto w-16" />
          <span className="text-sm">Unlock Property Value</span>
        </div>
        <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
          <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
            <HiOutlineArrowUpRight />
          </span>
          <img src={icon3} alt="" className="md:w-auto w-16" />
          <span className="text-sm">Effortless Property Management</span>
        </div>
        <div className="relative border rounded-lg md:p-5 p-3 flex flex-col justify-center items-center text-center gap-5">
          <span className="absolute md:top-5 md:right-5 top-3 right-3 text-2xl">
            <HiOutlineArrowUpRight />
          </span>
          <img src={icon4} alt="" className="md:w-auto w-16" />
          <span className="text-sm">Smart Investments, Informed Decisions</span>
        </div>
      </div>

      <div className="container flex justify-center items-center">
        <FeaturedProperties />
      </div>

      <div className="container flex justify-center items-center">
        <Review />
      </div>

      <div className="container flex justify-center items-center">
        <FAQs />
      </div>

      <div className="relative border-y w-full flex justify-center items-center py-14 overflow-hidden">
        <div className="absolute md:-bottom-20 bottom-0 right-0 z-10">
          <img src={bg1} alt="" />
        </div>
        <div className="absolute lg:bottom-0 top-0 lg:left-0 -left-32 z-10 lg:rotate-0 rotate-90">
          <img src={bg2} alt="" />
        </div>
        <div className="container z-30">
          <div className="flex md:flex-row flex-col gap-5 justify-between items-center mx-5">
            <div className="flex flex-col gap-3 md:w-5/6">
              <h1 className="md:text-4xl text-3xl font-semibold">
                Start Your Real Estate Journey Today
              </h1>
              <p>
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Estatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </p>
            </div>
            <div className="md:w-fit w-full">
              <button className="border border-BgPurple bg-BgPurple text-BgWhite rounded-lg px-5 py-3 w-full">
                Browser Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
