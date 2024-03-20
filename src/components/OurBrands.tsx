'use client'
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
    <section className="overflow-hidden max-container   hidden md:block lg:block ">
    <div className=" overflow-hidden flexCenter   h-full mt-10  gap-[8px] flex-col">
      <div className="w-[500px] h-[101px] space-y-2 flex-col text-[#000000] up">
        <h1 className="font-Akzidenz text-xs flexCenter inline-block leading-3 uppercase font-normal">
          OUR Brands
        </h1>
        <p className="text-center uppercase font-SaolDisplay text-[28px]   font-normal lg:text-[40px] md:text-[40px] md:leading-10">
          <span className=" italic">
            Discover Our
          </span>
          <span className=" ">
            Signature
          </span>
          <span className=" italic">
            Labels
          </span>
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
      <div className=" pt-20 flexCenter">
      <BotomLinks text={" Discover now"} />
      </div>
    
    </section>
  );
};

export default OurBrands;


// "use client";
// import { A11y, Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

// import Image from "next/image";
// import Link from "next/link";

// import img2 from "../../public/assets/brand1.png";
// import { brands } from "@/lib/constants";


// const slideImages = [
//   {
//     src: img2,
//     alt: "Slide 1",
//     text: {
//       heading: "NEW COLLECTION 2024",
//     },
//   },
//   {
//     src: img2,
//     alt: "Slide 2",
//     text: {
//       heading: "NEW COLLECTION 2024",
//     },
//   },
//   {
//     src: img2,
//     alt: "Slide 2",
//     text: {
//       heading: "NEW COLLECTION 2024",
//     },
//   },
//   {
//     src: img2,
//     alt: "Slide 2",
//     text: {
//       heading: "NEW COLLECTION 2024",
//     },
//   },
//   {
//     src: img2,
//     alt: "Slide 2",
//     text: {
//       heading: "NEW COLLECTION 2024",
//     },
//   },
// ];
// const OurBrands = () => {
//   return (
//     <section className="overflow-hidden max-container ">
//        <div className=" overflow-hidden flexCenter bg-[#F5F2ED] h-full mt-20  gap-[8px] flex-col">
//        </div>
//       <Swiper
//         modules={[Pagination, Autoplay, A11y]}
//         slidesPerView={4}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//       >
//         {brands.map((slideImage, index) => (
//           <SwiperSlide key={index}>
//             <div className=" flex cursor-pointer">
//               <div className="">
//                 <Image
//                   src={slideImage.src}
//                   alt={slideImage.alt}
//                   loading="eager"
//                   className=""
//                 />
               
//               </div>
             
              
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
  
//     </section>
//   );
// };

// export default OurBrands