import React from "react";
import Explore from "../../Common/Explore";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { SiHackthebox } from "react-icons/si";
import { HiHomeModern } from "react-icons/hi2";
import { BsCalendar } from "react-icons/bs";
import Union from "../../../assets/Image/Union.png";
import {
  Search,
  ChevronDown,
  MapPin,
  Home,
  DollarSign,
  Maximize,
  Calendar,
} from "lucide-react";
import img1 from "../../../assets/Image/img1.png";
import img2 from "../../../assets/Image/img2.png";
import img3 from "../../../assets/Image/img3.png";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import MessageForm from "./MessageForm";

const Properties = () => {
  const properties = [
    {
      id: 1,
      imageUrl: img1,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
    {
      id: 2,
      imageUrl: img2,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
    {
      id: 3,
      imageUrl: img3,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
    {
      id: 4,
      imageUrl: img3,
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
      bedroom: 4,
      bathroom: 3,
      price: "$550,000",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col md:gap-20 gap-10">
      {/* <div className="border-b w-full flex justify-center items-center py-20">
        <div className="container">
          <div className="flex flex-col gap-5 mx-5">
            <h1 className="md:text-3xl text-2xl font-semibold">
              Find Your Dream Property
            </h1>
            <p>
              Welcome to Estatein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container w-full">
        <div className="flex flex-col justify-center items-center md:gap-20 gap-10 mx-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative w-full">
              <div className="flex justify-center items-center w-full">
              <div className="absolute md:bottom-11 border p-3 flex justify-between items-center w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search For a Property"
                  className=""
                />
                <div className="flex justify-center items-center">
                  <CiSearch />
                  <button>Find Property</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="flex justify-center items-center flex-col md:gap-20 gap-10 mx-5">
          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <div className="flex flex-col gap-3 w-full">
              <h1 className="text-3xl font-semibold">
                Discover a World of Possibilities
              </h1>
              <div className="flex flex-row justify-between items-center">
                <p className="w-full md:text-base text-sm">
                  Our portfolio of properties is as diverse as your dreams.
                  Explore the following categories to find the perfect property
                  that resonates with your vision of home
                </p>
              </div>
            </div>

            <div className="md:px-5">
            <div className="relative flex flex-col items-center justify-center ">
              <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={3}
                spaceBetween={24}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".custom-next-feature",
                  prevEl: ".custom-prev-feature",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="flex md:flex-row flex-col  md:container w-72 md:p-5"
              >
                {properties?.map((data, index) => {
                  return (
                    <SwiperSlide
                      className="border rounded-lg md:p-5 p-3 flex flex-col gap-5"
                      key={index}
                    >
                      <div>
                        <img
                          src={data.imageUrl}
                          alt=""
                          className="w-full"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start gap-3">
                        <span className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm w-fit">
                          Coastal Escapes - Where Waves Beckon
                        </span>
                        <div>
                          <h1 className="font-semibold text-xl">
                            {data.title}
                          </h1>
                          <p className="text-sm line-clamp-2">
                            {data.description}{" "}
                            <Link className="underline">Read More</Link>
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-3 w-full">
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Price</span>
                            <span className="md:text-xl text-base font-semibold">
                              {data.price}
                            </span>
                          </div>
                          <div>
                            <button className="border border-BgPurple bg-BgPurple text-BgWhite rounded-lg 2xl:px-5 px-3 py-3 text-sm md:text-base">
                              View Property Detail
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex flex-row gap-5 items-center justify-between w-full md:p-5 md:py-0 py-5">
              <span className="hidden md:flex gap-1">
                <b>01</b> of 10
              </span>
              <div className="flex flex-row gap-2 md:justify-end justify-between items-center w-full md:w-fit">
                <span className="custom-prev-feature md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full p-2 text-BgPurple bg-BgLightPurple">
                  <BsArrowLeft />
                </span>
                <span className="md:hidden flex gap-1">
                  <b>01</b> of 10
                </span>
                <span className="custom-next-feature md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full p-2 text-BgPurple bg-BgLightPurple">
                  <BsArrowRight />
                </span>
              </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 w-full">
            <MessageForm/>
          </div>
        </div>
      </div>

      <Explore />
    </div>
  );
};

export default Properties;
