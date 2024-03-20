

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../public/assets/send.svg';

const Collection = ({ collections }:any) => {
  return (
    <div className='max-container flexCenter h-full mt-10 gap-[8px] flex-col'>
      <div className='w-[500px] h-[101px] space-y-2 flex-col text-[#000000] up'>
        <h1 className='font-Akzidenz text-xs flexCenter inline-block leading-3 uppercase font-normal'>Shop now</h1>
        <p className="text-center uppercase font-SaolDisplay italic font-normal text-[40px] leading-10">Online shop</p>
      </div>

      <div className='p-1  grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2  gap-2 '>
        {collections.map((collection:any) => (
          <Link key={collection.handle} href={collection.path}>
            <div className='relative  mb-8 rounded overflow-hidden'>
              <div className=''>
                {collection.image?.url && (
                  <img
                    width={319}
                    height={339}
                    src={collection.image.url}
                    alt={`Image for ${collection.title}`}
                  />
                )}
                <div className=" flex gap-1 ">
                  <h2 className='mb-3 pt-2'>{collection.title}</h2>
                  <Image src={arrow} alt={""} className=" "></Image>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
