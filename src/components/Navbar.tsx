"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import hamburgerIcon from "../../public/assets/Hamburger menu.svg";
import { PiWhatsappLogo } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        backgroundColor: scrollY ? "white" : "transparent",
        color: scrollY ? "black" : "white",
      }}
      className="transition-all duration-300 ease-in max-container   md:w-full  fixed top-0 z-50   "
    >
      <div className="w-full flex-col  max-container hidden    lg:block md:block">
        <div className=" r flex justify-between p-4 w-full">
          <div className="flex gap-3">
            <RiSearch2Line size={24} />
            <PiWhatsappLogo size={24} />
          </div>
          <div className="flex flex-col  ">
            <h1 className=" font-Akzidenzpc  text-3xl uppercase">
              Manning company
            </h1>
            <div className="flexCenter flex-col flex ">
              <p className=" font-Akzidenz text-[15.27px] leading-[22px]  uppercase">
                Bespoke tailors
              </p>
              <p className=" font-Akzidenz text-[15.27px] leading-[22px] ">
                Since 1979
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaRegUser size={24} />
            <FaShoppingBag size={24} />
          </div>
        </div>
        <div className="flex  justify-center">
          <ul className="hidden h-full  gap-[15px] lg:flex">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="font-Akzidenz leading-[21px] pb-1  text-[18.27px] "
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Hamburger menu */}
      <div
        className={`bg-[#F5F2ED]    fixed top-0 right-20 left-0 w-full flex justify-between lg:hidden md:hidden ${
          showMenu ? "hidden" : ""
        }`}
      >
        <div className=" px-3 pt-4 text-[#000000]">
          <h1 className="    font-Akzidenzpc uppercase text-[14.44px] ">
            Manning company
          </h1>

          <div className="flexCenter flex-col flex ">
            <p className="font-Akzidenz text-[6px] ">Bespoke tailors</p>
            <p className=" font-Akzidenz text-[6px]">Since 1979</p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className=" pt-5">
            <FaShoppingBag size={24} color="black" />
          </div>
          <div>
            <span
              onClick={toggleMenu}
              className="text-xl w-30 h-16 text-[#FFFFFF] inline-flex items-center justify-center rounded-full cursor-pointer px-3"
            >
              <Image src={hamburgerIcon} alt={""} />
            </span>
          </div>
        </div>
      </div>

      {/* Menu */}
      {showMenu && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#F5F2ED] z-10">
          <div className="flex flex-row justify-between p-4">
            <div className="text-[#000000]">
              <h1 className="font-Akzidenzpc   uppercase  ">Manning company</h1>
              <div className="flexCenter flex-col flex ">
                <p className="  ">Bespoke tailors</p>
                <p className="  ">Since 1979</p>
              </div>
            </div>
            <div>
              <span
                onClick={toggleMenu}
                className="text-xl w-10 h-10  text-white inline-flex items-center justify-center rounded-full cursor-pointer px-3"
              >
                <IoMdClose size={24} color="black" />
              </span>
            </div>
          </div>
          <div className="bg-[#ECECEC] top-0 right-20 left-0 w-[100%] p-5">
            <ul className="h-full gap-[15px] lg:flex ">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="">
                  <h1 className=" text-lg font-normal text-[#000000]">
                    {link.label}
                  </h1>
                </Link>
              ))}
              <div className="flex  gap-1  ">
                <PiWhatsappLogo size={24} color="black" />
                <p className=" text-lg font-normal text-[#000000]">
                  +852 5169 7732
                </p>
              </div>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
