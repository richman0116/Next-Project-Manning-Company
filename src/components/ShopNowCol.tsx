import React from 'react';
import Image from 'next/image';
import BotomLinks from '@/shared/BotomLinks';
import { shop_now_image } from '@/lib/constants';

const ShopNowCol = () => {
    return (
        <div className='max-container flexCenter bg-[#F5F2ED] h-full mt-20 gap-[8px] flex-col'>
            <div className='w-[500px] h-[101px] space-y-2 flex-col text-[#000000] up'>
                <p className="text-center uppercase font-SaolDisplay italic font-normal text-[40px] leading-10">shop now</p>
            </div>

            <div className="flex flexCenter gap-3 m-5">
                {shop_now_image.map((item, index) => (
                    <div key={index} className="relative mb-8 rounded overflow-hidden">
                        <Image alt={item.alt} className="w-[425px] h-[339px]" src={item.src} />
                        {/* <p className="flexCenter proces">{item.name}</p> */}
                    </div>
                ))}
            </div>

            <BotomLinks text={'Shop Now'} />
        </div>
    );
};

export default ShopNowCol;
