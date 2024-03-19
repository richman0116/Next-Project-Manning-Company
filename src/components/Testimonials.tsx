


'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';
import BotomLinks from '@/shared/BotomLinks';
import { testimonials } from '@/lib/constants';
import Quation from '../../public/assets/Quation.svg';

export default function Testimonials() {
  return (
    <>
      <div className='space-y-2 flexCenter max-container w-[460px] pt-20 flex flex-col text-[#000000] up'>
        <h1 className='font-Akzidenz text-xs leading-3 uppercase font-normal'>Testimonials</h1>
        <p className="text-center uppercase">
          <span className='font-SaolDisplay italic font-normal text-[40px] leading-10'>Rave Reviews </span>
          <span className='font-normal font-SaolDisplay text-[40px] leading-10'>from Our Satisfied</span>
          <span className='font-SaolDisplay italic font-normal text-[40px] leading-10 text-center'>Clients</span>
        </p>
      </div>

      <section className="overflow-hidden max-container pt-20 ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          <div className="flex  w-[336px] ">
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="container bg-[#ece7df] mx-2 p-4 ">
                <div className="flex  flex-col  ">
                  <Image src={Quation} alt="Quation" className="pb-4 pt-4" width={67} height={46} />
                  <blockquote className="tracking-[0.05em] leading-7 font-Akzidenz font-light text-2xl pb-4 pt-4">{item.text}</blockquote>
                  <p className="text-sm font-light pb-4 pt-4 ">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="pt-20 flexCenter ">
          <BotomLinks text={'See all'} />
        </div>
      </section>
    </>
  );
}
