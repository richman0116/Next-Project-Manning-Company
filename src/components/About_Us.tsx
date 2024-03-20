import BotomLinks from '@/shared/BotomLinks';
import React from 'react';

const About_Us = () => {
  return (
    <div className=' max-container flexCenter h-full mt-10 gap-[8px] flex-col'>
      <div className='w-[581px] h-[101px] space-y-2 flex-col text-[#000000] up'>
        <h1 className='font-Akzidenz text-xs flexCenter inline-block leading-3 uppercase font-normal'>About us</h1>
        <p className='text-center  uppercase font-SaolDisplay  font-normal text-[25px] lg:text-[40px] md:text-[40px] leading-10'>
          <span className='italic'>Elevating </span> 
          <span className=''>Style through Precision</span> 
          <span className='italic'>{''}Tailoring</span>
        </p>
      </div>
      <div className='md:p-10 lg:p-10 p-4 md:w-full lg:w-full   w-[362] text-center'>
        <p className='font-Akzidenz lg:text-[20px] md:text-[20px] text-[16px]  font-[300px] leading-[18px] md:leading-[30px] text-[#000000]'>
          At Manning Company, our commitment is simple yet profound: to deliver bespoke tailored garments that embody the epitome of individual panache and personality. 
          Renowned for producing only the highest quality, we cater to a discerning clientele, including leaders in various fields, who demand uncompromising excellence. 
          Welcome to a world where each stitch reflects a commitment to defining your unique style with unparalleled precision.
        </p>
      </div>
      <div className=' relative'>
      <BotomLinks text={'Book an Appointment'} />
      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"></div>
      
      </div>
    </div>
  );
};

export default About_Us;
