import BotomLinks from '@/shared/BotomLinks';
import React from 'react';

const About_Us = () => {
  return (
    <div className='max-container flexCenter bg-[#F5F2ED] h-full mt-20 gap-[8px] flex-col'>
      <div className='w-[581px] h-[101px] space-y-2 flex-col text-[#000000] up'>
        <h1 className='font-Akzidenz text-xs flexCenter inline-block leading-3 uppercase font-normal'>About us</h1>
        <p className='text-center uppercase'>
          <span className='font-SaolDisplay italic font-normal text-[40px] leading-10'>Elevating </span> 
          <span className='font-normal font-SaolDisplay text-[40px] leading-10'>Style through Precision</span> 
          <span className='font-SaolDisplay italic font-normal text-[40px] leading-10'>Tailoring</span>
        </p>
      </div>
      <div className='p-10 text-center'>
        <p className='font-Akzidenz text-[24px] font-[300px] leading-[30px] text-[#000000]'>
          At Manning Company, our commitment is simple yet profound: to deliver bespoke tailored garments that embody the epitome of individual panache and personality. 
          Renowned for producing only the highest quality, we cater to a discerning clientele, including leaders in various fields, who demand uncompromising excellence. 
          Welcome to a world where each stitch reflects a commitment to defining your unique style with unparalleled precision.
        </p>
      </div>
      <BotomLinks text={'Book an Appointment'} />
      
    </div>
  );
};

export default About_Us;
