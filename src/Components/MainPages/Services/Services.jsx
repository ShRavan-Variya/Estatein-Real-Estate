import React from "react";
import Explore from "../../Common/Explore";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import AbstractDesign3 from "../../../assets/Image/AbstractDesign3.png";
import icon1 from "../../../assets/Image/icon1.png";
import icon2 from "../../../assets/Image/icon2.png";
import icon3 from "../../../assets/Image/icon3.png";
import icon4 from "../../../assets/Image/icon4.png";
import icon5 from "../../../assets/Image/icon5.png";
import icon6 from "../../../assets/Image/icon6.png";
import icon7 from "../../../assets/Image/icon7.png";
import icon8 from "../../../assets/Image/icon8.png";
import icon9 from "../../../assets/Image/icon9.png";
import icon10 from "../../../assets/Image/icon10.png";
import icon11 from "../../../assets/Image/icon11.png";
import icon12 from "../../../assets/Image/icon12.png";
import icon13 from "../../../assets/Image/icon13.png";
import icon14 from "../../../assets/Image/icon14.png";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center md:gap-20 gap-10 w-full">
      <div className="flex flex-col border-b w-full justify-center items-center ">
        <div className="container w-full py-14">
          <div className="flex flex-col mx-5">
            <h1 className="text-4xl font-bold mb-4">
              Elevate Your Real Estate Experience
            </h1>
            <p className="text-gray-400 mb-8 max-w-3xl">
              Welcome to Estatein, where your real estate aspirations meet
              expert guidance. Explore our comprehensive range of services, each
              designed to cater to your unique needs and dreams.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 mx-5 md:p-6 p-3 rounded-lg shadow-custom w-full">
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
            <span className="text-sm">
              Smart Investments, Informed Decisions
            </span>
          </div>
        </div>
      </div>

      <div className="container w-full">
        <div className="flex justify-center items-center md:gap-20 gap-10 w-full">
          <div className="flex flex-col gap-14 justify-center mx-5">
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold md:text-4xl text-2xl">
                Unlock Property Value
              </h1>
              <p>
                Selling your property should be a rewarding experience, and at
                Estatein, we make sure it is. Our Property Selling Service is
                designed to maximize the value of your property, ensuring you
                get the best deal possible. Explore the categories below to see
                how we can help you at every step of your selling journey
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex gap-4 items-center">
                    <img src={icon2} alt="" className="w-16" />
                    <span className="text-xl font-semibold">
                      Valuation Mastery
                    </span>
                  </div>
                  <span>
                    Discover the true worth of your property with our expert
                    valuation services.
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex gap-4 items-center">
                    <img src={icon2} alt="" className="w-16" />
                    <span className="text-xl font-semibold">
                      Strategic Marketing
                    </span>
                  </div>
                  <span>
                    Selling a property requires more than just a listing; it
                    demands a strategic marketing approach.
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex gap-4 items-center">
                    <img src={icon2} alt="" className="w-16" />
                    <span className="text-xl font-semibold">
                      Negotiation Wizardry
                    </span>
                  </div>
                  <span>
                    Negotiating the best deal is an art, and our negotiation
                    experts are masters of it.
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5">
                <div className="flex flex-col gap-4 p-5 border rounded-xl">
                  <div className="flex gap-4 items-center">
                    <img src={icon2} alt="" className="w-16" />
                    <span className="text-xl font-semibold">
                      Closing Success
                    </span>
                  </div>
                  <span>
                    A successful sale is not complete until the closing. We
                    guide you through the intricate closing process.
                  </span>
                </div>
                <div
                  className="col-span-2 flex flex-col gap-4 p-5 border rounded-xl md:mt-0 mt-5"
                  style={{
                    backgroundImage: `url(${AbstractDesign3})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex md:flex-row flex-col w-full md:justify-between gap-4">
                    <span className="text-xl font-semibold">
                      Unlock the Value of Your Property Today
                    </span>
                    <button className="border border-BgPurple text-BgPurple rounded-lg px-5 py-3 bg-BgLightPurple md:w-fit w-full">
                      Learn More
                    </button>
                  </div>
                  <span>
                    Ready to unlock the true value of your property? Explore our
                    Property Selling Service categories and let us help you
                    achieve the best deal possible for your valuable asset.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
    </div>
  );
};

export default Services;
