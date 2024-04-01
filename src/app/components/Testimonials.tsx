"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";
import quotes from "../../../public/assets/quotes.svg";
import { testimonials } from "@/lib/constants";
import BotomLinks from "@/app/Shared/BotomLinks";
import Wrapper from "../Shared/Wrapper";
import TopHeading from "../Shared/TopHeading";

export default function Testimonials() {
  const swiperRef = useRef<any | null>(null);

  const handleSlideChange = (direction: any) => {
    if (swiperRef.current) {
      if (direction === "next") {
        swiperRef.current.swiper.slideNext();
      } else if (direction === "prev") {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  return (
    <Wrapper>
      <div className="   pt-[65px]">
        <div className="overflow-hidden flexCenter h-full gap-[8px] flex-col">
          <TopHeading
            title="Testimonials"
            firstLine="Rave Reviews"
            secondLine="from Our Satisfied"
            thirdLine="Clients"
          />
        </div>

        <section className="overflow-hidden relative  pt-[105px]">
          <Swiper
            ref={swiperRef}
            navigation={{
              nextEl: ".arrow-right",
              prevEl: ".arrow-left",
            }}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
          >
            <div className="flex  w-[336px] h-[383px] ">
              {testimonials.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="container shadow-md hover:pt-9 hover:bg-[#F5F2ED] p-4 m-4"
                >
                  <div className="flex flex-col">
                    <Image
                      src={quotes}
                      alt="quotes"
                      className="pb-4 px-3 pt-4"
                      width={67}
                      height={46}
                    />
                    <blockquote className="font-Akzidenzlc Reviews">
                      {item.text}
                    </blockquote>
                    <p className="Apercu px-3 pb-6 font-Apercu pt-20">
                      {item.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </section>
        <div className="  ">
          <div className="text-black  pt-8  justify-end  flex md:flex pr-10       items-center gap-[12px]">
            <button
              className="arrow-left"
              onClick={() => handleSlideChange("prev")}
            >
              <Icon
                icon="akar-icons:chevron-left"
                className="w-[20px] h-[20px]"
                style={{ color: "black" }}
              />
            </button>
            <button
              className="arrow-right"
              onClick={() => handleSlideChange("next")}
            >
              <Icon
                className="w-[20px] h-[20px] rotate-180"
                icon="akar-icons:chevron-left"
                style={{ color: "black" }}
              />
            </button>
          </div>
        </div>
        <div className=" relative pt-6  pb-36 flexCenter">
          <BotomLinks text={"  See all"} />
        </div>
      </div>
    </Wrapper>
  );
}
