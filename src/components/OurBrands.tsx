"use client";
import React from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import arrow from "../../public/assets/send.svg";
import { brands } from "@/lib/constants";
import BotomLinks from "@/shared/BotomLinks";
const OurBrands = () => {
  return (
    <section className="overflow-hidden max-container  mt-10  hidden md:block lg:block ">
      <div className=" overflow-hidden flexCenter   h-full  gap-[8px] flex-col">
        <div className="md:w-[400px]   flex-col text-[#000000] up">
          <h1 className="    flexCenter text-[10px]  uppercase  font-Akzidenz">
            OUR brands
          </h1>
          <p className="text-center  uppercase font-normal text-[25px] lg:text-[40px] md:text-[40px] leading-10  ">
            <span className="font-SaolDisplay  ">Discover </span>
            <span className=" font-SaolDisplayR">our {""} Signature </span>
            <span className=" font-SaolDisplay ">Labels</span>
          </p>
        </div>
      </div>
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper" // Add custom class for Swiper component
      >
        {brands.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  mt-12 items-center gap-2">
              <div className="rounded-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={272}
                  height={88}
                  loading="eager"
                />
              </div>
              <div className="flex flexCenter gap-2">
                <h2 className="">{item.name}</h2>
                <Image src={arrow} alt={"Arrow Icon"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" relative pt-20 flexCenter">
        <BotomLinks text={" Discover now"} />
      </div>
    </section>
  );
};

export default OurBrands;
