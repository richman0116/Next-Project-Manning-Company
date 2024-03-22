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
        <section className="max-container w-[360px]  md:w-full  fixed top-0 z-50  bg-[#F5F2ED]   ">
            <div className='w-full flex-col  max-container hidden    lg:block md:block'>
                <div className=" r flex justify-between p-4 w-full">
                    <div className="flex gap-3">
                        <Link href={''}><Image src={searchIcon} width={24} height={24} alt={''} /></Link>
                        <Link href={''}><Image src={whatsappIcon} width={24} height={24} alt={''} /></Link>
                    </div>
                    <div className="flex flex-col  ">
                        <h1 className=" font-Akzidenzpc  text-3xl uppercase">Manning company</h1>
                        <div className='flexCenter flex-col flex '>
                            <p className=" font-Akzidenz text-[15.27px]  uppercase">Bespoke tailors</p>
                            <p className=" font-Akzidenz text-[15.27px] ">Since 1979</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link href={''}><Image src={profileIcon} width={24} height={24} alt={''} /></Link>
                        <Link href={''}><Image src={bagIcon} width={24} height={24} alt={''} /></Link>
                    </div>
                </div>
                <div className='flex  justify-center'>
                    <ul className="hidden h-full  gap-[15px] lg:flex">
                    {NAV_LINKS.slice(0, 4).map((link) => (
                            <Link href={link.href} key={link.key} className="font-Akzidenz text-[18.27px] ">
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Hamburger menu */}
            <div className={`bg-[#F5F2ED]   w-[360px]  fixed  z-50 flex justify-between lg:hidden md:hidden ${showMenu ? 'hidden' : ''}`}>
                <div className=' px-3 pt-4 text-[#000000]'>
                    <h1 className="    font-Akzidenzpc uppercase text-[14.44px] ">Manning company</h1>

                    <div className='flexCenter flex-col flex '>
                        <p className="font-Akzidenz text-[6px] ">Bespoke tailors</p>
                        <p className=" font-Akzidenz text-[6px]">Since 1979</p>
                    </div>
                </div>
                <div className='flex gap-4 '>
                    <div>
                        <Image src={bagIcon} alt={''} className='w-30 h-16'/>
                    </div>
                    <div>
                        <span onClick={toggleMenu} className="text-xl w-30 h-16 text-[#FFFFFF] inline-flex items-center justify-center rounded-full cursor-pointer px-3">
                            <Image src={hamburgerIcon} alt={''} />
                        </span>
                    </div>
                </div>
            </div>

            {/* Menu */}
            {showMenu && (
                <div className='flex w-[360px]  flex-col justify-between  bg-[#F5F2ED]'>
                    <div className='flex flex-row justify-between p-4'>
                        <div className='text-[#000000]'>
                            <h1 className="font-Akzidenzpc   uppercase  ">Manning company</h1>
                            <div className='flexCenter flex-col flex '>
                                <p className="  ">Bespoke tailors</p>
                                <p className="  ">Since 1979</p>
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
                                    <h1 className=' text-lg font-normal text-[#000000]'>{link.label}</h1>
                                </Link>
                                
                            ))}
                            <div className='flex  gap-1  '>
                                <Image className='w-6 h-6 pt-1' src={whatsappIcon} alt="WhatsApp Icon" />
                                <p className=' text-lg font-normal text-[#000000]'>+852 5169 7732</p>
                            </div>
                        </ul> 
                    </div>
                </div>
            )}
        </section>
    );
};

export default Navbar;