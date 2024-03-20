


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
      <div className=' space-y-2 flexCenter max-container w-full lg:w-[460px] md:w-[460px] mt-10 flex flex-col text-[#000000] up'>
        <h1 className='font-Akzidenz text-xs leading-3 uppercase font-normal'>Testimonials</h1>
        <p className="text-center font-SaolDisplay   text-[25px] font-normal lg:text-[40px]   md:text-[40px] leading-10 uppercase">
          <span className=' italic '>Rave Reviews </span>
          <span className='font-normal  '>from Our Satisfied</span>
          <span className=' italic '>Clients</span>
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
          <div className="flex  w-[336px]  ">
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="container bg-[#F5F2ED] hover:bg-[#F5F2ED]  hover:mt-2 mx-2 p-4 ">
                <div className="flex  flex-col   ">
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
