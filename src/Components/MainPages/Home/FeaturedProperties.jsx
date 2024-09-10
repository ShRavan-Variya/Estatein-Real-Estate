import React from "react";
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

const FeaturedProperties = () => {
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
    <div className="flex flex-col mx-5 justify-center items-center md:my-10 my-5 gap-5 w-full">
      <div className="flex flex-col gap-3 w-full md:px-5">
        <h1 className="text-3xl font-semibold">Featured Properties</h1>
        <div className="flex flex-row justify-between items-center">
          <p className="md:w-3/4 w-full md:text-base text-sm">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.
          </p>
          <button className="border rounded-lg px-5 py-3 bg-[#f8f6ff] border-BgPurple text-BgPurple md:flex hidden">
            View All Properties
          </button>
        </div>
      </div>

      <div className="md:px-5">
        <div className="relative flex flex-col items-center justify-center pb-5 border-b">
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
                    <div>
                      <h1 className="font-semibold text-xl">{data.title}</h1>
                      <p className="text-sm">{data.description}</p>
                    </div>
                    <div className="flex justify-start items-start gap-3 flex-wrap">
                      <span className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                        <IoBed />
                        <span>{data.bedroom}-Bedroom</span>
                      </span>
                      <span className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                        <FaBath />
                        <span>{data.bathroom}-Bathroom</span>
                      </span>
                      <span className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                        <HiMiniBuildingOffice />
                        <span>Villa</span>
                      </span>
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
        <div className="flex flex-row gap-5 items-center justify-between md:p-4 py-4">
          <button className="md:hidden text-sm flex border rounded-lg px-2 py-3 bg-[#f8f6ff] border-BgPurple text-BgPurple">
            View All Properties
          </button>
          <span className="hidden md:flex gap-1">
            <b>01</b> of 60
          </span>
          <div className="flex flex-row gap-2 items-center">
            <span className="custom-prev-feature md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
              <BsArrowLeft />
            </span>
            <span className="md:hidden flex gap-1">
              <b>01</b> of 60
            </span>
            <span className="custom-next-feature md:text-xl text-lg cursor-pointer border border-BgPurple rounded-full md:p-2 p-1 text-BgPurple bg-BgLightPurple">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
