import React from 'react';
import Image from 'next/image';
import BotomLinks from '@/shared/BotomLinks';
import { shop_now_image } from '@/lib/constants';

const ShopNowCol = () => {
    return (
        <div className='max-container flexCenter  h-full gap-[8px] flex-col'>
            <div className='   text-[#000000] up'>
            <p className=" font-SaolDisplay  uppercase  text-[40px]"
>Online shop</p>
            </div>
 
            <div className="flex  md:flex-row flex-col flexCenter gap-3 md:p-5 p-1">
                {shop_now_image.map((item, index) => (
                    <div key={index} className="relative mb-8 rounded overflow-hidden">
                        <Image alt={item.alt} className="w-[425px] h-[339px]  object-cover" src={item.src} />
                        <p className="flexCenter shopnow">{item.name}</p>
                    </div>
                ))}
            </div>

            <BotomLinks text={'Shop Now'} />
            
        </div>
    );
};

export default ShopNowCol;
