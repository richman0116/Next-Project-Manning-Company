"use client";
import React from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import arrow from "../../../public/assets/send.svg";
import { brands } from "@/lib/constants";
import BotomLinks from "@/app/Shared/BotomLinks";
import Wrapper from "../Shared/Wrapper";
const OurBrands = () => {
  return (
    <Wrapper>
      <section className="overflow-hidden  mt-10  hidden md:block lg:block ">
        <div className=" overflow-hidden flexCenter   h-full  gap-[8px] flex-col">
          <div className="md:w-[350px]   flex-col text-[#f1f0f0] up">
            <h1 className="   flexCenter aboutA  font-Akzidenz ">OUR brands</h1>
            <p className="ptext  ">
              <span className="font-SaolDisplay  italicA pr-1">Discover </span>
              <span className=" font-SaolDisplayR  normal">
                our Signature {""}
              </span>
              <span className=" font-SaolDisplay  italicA ">Labels</span>
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
          className="mySwiper"
        >
          {brands.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col  mt-12 items-center pt-10  gap-2">
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
                  <h2 className="ColDisc">{item.name}</h2>
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
    </Wrapper>
  );
};

export default OurBrands;
