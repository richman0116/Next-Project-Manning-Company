import React from 'react';
import Image from 'next/image';
import BotomLinks from '@/shared/BotomLinks';
import { Frame } from '@/lib/constants';

const OurProcess = () => {
    return (
        <div className='max-container flexCenter bg-[#F5F2ED] h-full mt-20 gap-[8px] flex-col'>
            <div className='w-[500px] h-[101px] space-y-2 flex-col text-[#000000] up'>
                <h1 className='font-Akzidenz text-xs flexCenter inline-block leading-3 uppercase font-normal'>Our process</h1>
                <p className="text-center uppercase">
                    <span className='font-SaolDisplay italic font-normal text-[40px] leading-10'>the </span>
                    <span className='font-normal font-SaolDisplay text-[40px] leading-10'>bespoke tailoring</span>
                    <span className='font-SaolDisplay italic font-normal text-[40px] leading-10 text-center'>Process</span>
                </p>
            </div>

            <div className="flex flexCenter gap-3 m-5">
                {Frame.map((item, index) => (
                    <div key={index} className="relative mb-8 rounded overflow-hidden">
                        <Image alt={item.alt} className="w-[252px] h-[339px]" src={item.src} />
                        {/* <p className="flexCenter proces">{item.name}</p> */}
                    </div>
                ))}
            </div>

            <BotomLinks text={'Book an Appointment'} />
        </div>
    );
};

export default OurProcess;
