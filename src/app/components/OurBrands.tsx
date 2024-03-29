"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import arrow from "../../../public/assets/send.svg";
import { brands } from "@/lib/constants";
import BotomLinks from "@/app/Shared/BotomLinks";
import Wrapper from "../Shared/Wrapper";
import TopHeading from "../Shared/TopHeading";

const OurBrands = () => {
  return (
    <Wrapper>
      <section className="overflow-hidden pt-[103px] hidden md:block lg:block">
        <div className="overflow-hidden w-full flexCenter  gap-[8px] flex-col">
          <TopHeading
            title="OUR brands"
            firstLine="Discover "
            secondLine="our Signature"
            thirdLine="Labels"
          />
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={4}
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
              <div className="flex flex-col pt-[70px] items-center">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={250}
                    height={88}
                    loading="eager"
                  />
                </div>
                <div className="flex flexCenter gap-2 pt-2">
                  <h2 className="Apercu font-Apercu">{item.name}</h2>
                  <Image src={arrow} alt={"Arrow Icon"} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative  pb-2 pt-[40px] flexCenter">
          <BotomLinks text={" Discover now"} />
        </div>
      </section>
    </Wrapper>
  );
};

export default OurBrands;
