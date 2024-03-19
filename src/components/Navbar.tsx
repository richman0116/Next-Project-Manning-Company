import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import bag from '../../public/assets/bag-2.svg';
import profile from '../../public/assets/profile.svg';
import search from '../../public/assets/search-normal.svg';
import whatsapp from '../../public/assets/whatsapp.svg';
import { NAV_LINKS } from '@/lib/constants';

const Navbar = () => {
    return (
        <section className="max-container">
            <div className='w-full flex flex-col max-container'>
                <div className="bg-opacity-40 flex justify-between p-6 w-full">
                    <div className="flex gap-3">
                        <Link href={''}><Image src={search} width={24} height={24} alt={''} /></Link>
                        <Link href={''}><Image src={whatsapp} width={24} height={24} alt={''} /></Link>
                    </div>
                    <div className="flex flex-col gap-2 text-[#FFFFFF]">
                        <h1 className="font-Akzidenz text-[36.65px] font-[700px] uppercase leading-[38.18px]">Manning company</h1>
                        <div className='flexCenter flex-col flex gap-2'>
                            <p className="font-Akzidenz text-[15.27px] font-normal uppercase">Bespoke tailors</p>
                            <p className="font-Akzidenz text-base font-normal">Since 1979</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link href={''}><Image src={profile} width={24} height={24} alt={''} /></Link>
                        <Link href={''}><Image src={bag} width={24} height={24} alt={''} /></Link>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ul className="hidden h-full gap-[15px] lg:flex">
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} className="">
                                <h1 className='font-Akzidenz text-lg font-normal text-[#FFFFFF]'>{link.label}</h1>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
