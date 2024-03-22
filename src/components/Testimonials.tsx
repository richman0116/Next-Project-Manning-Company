// 'use client'
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import BotomLinks from '@/shared/BotomLinks';
// import { testimonials } from '@/lib/constants';
// import Quation from '../../public/assets/Quation.svg';

// function useClient() {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 768); 
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return isDesktop;
// }

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const isDesktop = useClient();

//   const slideToNext = () => {
//     setCurrentIndex(prevIndex => {
//       if (isDesktop && prevIndex < testimonials.length - 4) {
//         return prevIndex + 1;
//       } else if (!isDesktop && prevIndex < testimonials.length - 1) {
//         return prevIndex + 1;
//       } else {
//         return 0;
//       }
//     });
//   };

//   const slideToPrev = () => {
//     setCurrentIndex(prevIndex => {
//       if (prevIndex > 0) {
//         return prevIndex - 1;
//       } else if (!isDesktop && prevIndex === 0) {
//         return testimonials.length - 1;
//       } else {
//         return 0;
//       }
//     });
//   };

//   return (
//     <>
//       <div className='space-y-2 flexCenter max-container w-full lg:w-[460px] md:w-[460px] mt-10 flex flex-col text-[#000000] up'>
//         <h1 className='font-Akzidenz text-xs leading-3 uppercase font-normal'>Testimonials</h1>
//         <p className="text-center font-SaolDisplay text-[25px] font-normal lg:text-[40px] md:text-[40px] leading-10 uppercase">
//           <span className='italic'>Rave Reviews </span>
//           <span className='font-normal'>from Our Satisfied</span>
//           <span className='italic'>Clients</span>
//         </p>
//       </div>

//       <section className="overflow-hidden max-container pt-20 relative">
//         <div className="flex  w-full">
//           {testimonials.slice(currentIndex, currentIndex + (isDesktop ? 4 : 1)).map((item, index) => (
//             <div key={index} className="container bg-[#F5F2ED] hover:bg-[#F5F2ED] mx-2 p-4">
//               <div className="flex flex-col">
//                 <Image src={Quation} alt="Quation" className="pb-4 pt-4" width={67} height={46} />
//                 <blockquote className="tracking-[0.05em] leading-7 font-Akzidenz font-light text-2xl pb-4 pt-4">{item.text}</blockquote>
//                 <p className="text-sm font-light pb-4 pt-4">{item.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="absolute bottom-4  right-4 flex items-end">
//           <button onClick={slideToPrev} className=" text-[#000000] rounded-full p-2 mr-4 focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button onClick={slideToNext} className=" text-[#000000] rounded-full p-2 focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//         <div className="pt-20 flexCenter">
//           <BotomLinks text={'See all'} />
//         </div>
//       </section>
//     </>
//   );
// }




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
    <div className=" relative pt-20 flexCenter">
      <BotomLinks text={" Discover now"} />
    
      </div>
      <div className=' space-y-2 flexCenter max-container w-full lg:w-[460px] md:w-[460px] mt-10 flex flex-col text-[#000000] up'>
        <h1 className='font-Akzidenz text-[10px] leading-3 uppercase '>Testimonials</h1>
        <p className="text-center    text-[25px]  lg:text-[40px]   md:text-[40px]  uppercase">
          <span className='  font-SaolDisplay '>Rave Reviews </span>
          <span className=' font-SaolDisplayR  '>from Our Satisfied</span>
          <span className='  font-SaolDisplay '>Clients</span>
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
          <div className="flex  w-[336px]  h-[383px]  ">

            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="container bg-[#F5F2ED] hover:bg-[#F5F2ED]   mx-2 p-4 ">
                <div className="flex  flex-col   ">
                  <Image src={Quation} alt="Quation" className="pb-4 pt-4" width={67} height={46} />
                  <blockquote className="font-Akzidenz">{item.text}</blockquote>
                  <p className=" font-Akzidenzpc pt-5 ">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
       
      </section>
    </>
  );
  }
