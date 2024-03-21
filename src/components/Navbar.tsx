'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import bagIcon from '../../public/assets/bag-2.svg';
import profileIcon from '../../public/assets/profile.svg';
import searchIcon from '../../public/assets/search-normal.svg';
import whatsappIcon from '../../public/assets/whatsapp.svg';

import hamburgerIcon from '../../public/assets/Hamburger menu.svg';
import closeIcon from '../../public/assets/Close_Icons_UIA.svg';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <section className="max-container">
            <div className='w-full flex-col max-container hidden lg:block md:block'>
                <div className="bg-opacity-40 flex justify-between p-6 w-full">
                    <div className="flex gap-3">
                        <Link href={''}><Image src={searchIcon} width={24} height={24} alt={''} /></Link>
                        <Link href={''}><Image src={whatsappIcon} width={24} height={24} alt={''} /></Link>
                    </div>
                    <div className="flex flex-col gap-2 text-[#FFFFFF]">
                        <h1 className="font-Akzidenz text-[36.65px] font-[700px] uppercase leading-[38.18px]">Manning company</h1>
                        <div className='flexCenter flex-col flex gap-2'>
                            <p className="font-Akzidenz text-[15.27px] font-normal uppercase">Bespoke tailors</p>
                            <p className="font-Akzidenz text-base font-normal">Since 1979</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link href={''}><Image src={profileIcon} width={24} height={24} alt={''} /></Link>
                        <Link href={''}><Image src={bagIcon} width={24} height={24} alt={''} /></Link>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ul className="hidden h-full gap-[15px] lg:flex">
                    {NAV_LINKS.slice(0, 4).map((link) => (
                            <Link href={link.href} key={link.key} className="">
                                <h1 className='font-Akzidenz text-lg font-normal text-[#FFFFFF]'>{link.label}</h1>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Hamburger menu */}
            <div className={`bg-[#F5F2ED] flex justify-between lg:hidden md:hidden ${showMenu ? 'hidden' : ''}`}>
                <div className='p-6'>
                    <h1 className="font-Akzidenz  text-[14.44px] font-[700px] uppercase leading-[15.05px] text-[#000000]">Manning company</h1>
                    <div className='flexCenter flex-col flex '>
                        <p className="font-Akzidenz text-[6.02px] font-[400px] leading-[9.03px] uppercase">Bespoke tailors</p>
                        <p className="font-Akzidenz text-[6.02px] font-[400px] leading-[9.03px] uppercase">Since 1979</p>
                    </div>
                </div>
                <div className='flex gap-4 p-2'>
                    <div>
                        <Image src={bagIcon} alt={''} className='w-30 h-16'/>
                    </div>
                    <div>
                        <span onClick={toggleMenu} className="text-xl w-30 h-16 text-white inline-flex items-center justify-center rounded-full cursor-pointer px-3">
                            <Image src={hamburgerIcon} alt={''} />
                        </span>
                    </div>
                </div>
            </div>

            {/* Menu */}
            {showMenu && (
                <div className='flex flex-col justify-between w-full h-full bg-[#F5F2ED]'>
                    <div className='flex flex-row justify-between p-5'>
                        <div>
                            <h1 className="font-Akzidenz text-[14.44px] font-[700px] uppercase leading-[15.05px] text-[#000000]">Manning company</h1>
                            <div className='flexCenter flex-col flex gap-1'>
                                <p className="font-Akzidenz text-[6.02px] font-[400px] leading-[9.03px] uppercase">Bespoke tailors</p>
                                <p className="font-Akzidenz text-[6.02px] font-[400px] leading-[9.03px] uppercase">Since 1979</p>
                            </div>
                        </div>
                        <div>
                            <span onClick={toggleMenu} className="text-xl w-10 h-10 bg-white text-white inline-flex items-center justify-center rounded-full cursor-pointer px-3">
                                <Image src={closeIcon} alt={''} />
                            </span>
                        </div>
                    </div>
                    <div className='bg-[#ECECEC] p-5'>
                        <ul className="h-full gap-[15px] lg:flex ">
                            {NAV_LINKS.map((link) => (
                                <Link href={link.href} key={link.key} className="">
                                    <h1 className='font-Akzidenz text-lg font-normal text-[#000000]'>{link.label}</h1>
                                </Link>
                                
                            ))}
                            <div className='flex  gap-1 '>
                                <Image className='w-6 h-6 pt-1' src={whatsappIcon} alt="WhatsApp Icon" />
                                <p className='font-Akzidenz text-lg font-normal text-[#000000]'>+852 5169 7732</p>
                            </div>
                        </ul> 
                    </div>
                </div>
            )}
        </section>
    );
};

export default Navbar;
