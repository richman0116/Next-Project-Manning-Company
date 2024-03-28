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
      <div className="  pb-10  mt-10">
        <div className="overflow-hidden flexCenter h-full gap-[8px] flex-col">
          <div className="md:w-[450px] flex-col text-[#000000] up">
            <h1 className="flexCenter aboutA  font-Akzidenz">Testimonials</h1>
            <p className="  ptext ">
              <span className="font-SaolDisplay  italicA p-1">
                Rave Reviews{" "}
              </span>
              <span className="font-SaolDisplayl  normal">
                from Our Satisfied
              </span>
              <span className="font-SaolDisplay  italicA px-1">Clients</span>
            </p>
          </div>
        </div>

        <section className="overflow-hidden relative  pt-10 ">
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
            <div className="flex  w-60">
              {testimonials.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="container bg-[#F5F2ED] hover:bg-[#F5F2ED] mx-2 p-4"
                >
                  <div className="flex flex-col">
                    <Image
                      src={quotes}
                      alt="quotes"
                      className="pb-4 px-3 pt-4"
                      width={67}
                      height={46}
                    />
                    <blockquote className="font-Akzidenzlc about">
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
        <div className=" relative pt-20 flexCenter">
          <BotomLinks text={"  See all"} />
        </div>
      </div>
    </Wrapper>
  );
}
