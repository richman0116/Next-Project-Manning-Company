"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import hamburgerIcon from "../../../public/assets/Hamburger menu.svg";
import Wrapper from "@/app/Shared/Wrapper";
import { RiSearch2Line } from "react-icons/ri";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleScroll = () => {
    setScrollY(window.scrollY > 60);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === "/";
  const navbarBackground = isHomepage && !scrollY ? "transparent" : "#F5F2ED";
  const navbarTextColor = isHomepage && !scrollY ? "white" : "black";

  return (
    <Wrapper>
      <nav
        style={{
          backgroundColor: navbarBackground,
          color: navbarTextColor,
        }}
        className="transition-all duration-300  ease-in w-full lg:max-w-[2000px] mx-auto fixed top-0 z-50"
      >
        <div className=" hidden  h-[214px]   lg:block md:block">
          <div className="justify-between flex  p-8">
            <div className="flex gap-3">
              <RiSearch2Line size={24} />
              <PiWhatsappLogo size={24} />
            </div>

            <div className="  flex-col flex  ">
              <h1 className=" font-Akzidenzpc  manning">Manning company</h1>
              <div className="flexCenter flex-col flex ">
                <p className=" font-Akzidenz manningsh">Bespoke tailors</p>
                <p className=" font-Akzidenz manningsh ">Since 1979</p>
              </div>
            </div>

            <div className=" flex flex-row gap-3">
              <FaRegUser size={24} />
              <FaShoppingBag size={24} />
            </div>
          </div>

          <div className=" flexCenter ">
            <ul className="hidden h-full  gap-[15px] lg:flex">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="font-Akzidenz linksf pb-1 "
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile menu */}

        <div className="lg:hidden md:hidden fixed top-0  w-full  bg-[#F5F2ED] z-10 flex justify-between p-2">
          <div className="   text-[#000000]  ">
            <h1 className="    font-Akzidenzpc uppercase text-[14.44px] ">
              Manning company
            </h1>
            <div className="flexCenter flex-col flex ">
              <p className="font-Akzidenz text-[6px] ">Bespoke tailors</p>
              <p className=" font-Akzidenz text-[6px]">Since 1979</p>
            </div>
          </div>

          <div className="flex  gap-2   ">
            <div className=" pt-1.5 ">
              <FaShoppingBag size={24} color="black" />
            </div>
            <span
              onClick={toggleMenu}
              className="text-xl  text-white inline-flex items-center justify-center rounded-full cursor-pointer px-3"
            >
              <Image src={hamburgerIcon} alt={""} width={24} height={24} />
            </span>
          </div>
        </div>

        {/* Menu */}
        {showMenu && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#F5F2ED] z-10">
            <div className="flex flex-row justify-between p-4">
              <div className="text-[#000000]">
                <h1 className="font-Akzidenzpc uppercase">Manning company</h1>
                <div className="flexCenter flex-col">
                  <p>Bespoke tailors</p>
                  <p>Since 1979</p>
                </div>
              </div>
              <div>
                <span
                  onClick={toggleMenu}
                  className="text-xl w-10 h-10 text-white inline-flex items-center justify-center rounded-full cursor-pointer"
                >
                  <MdClose size={24} color="black" />
                </span>
              </div>
            </div>
            <div className="bg-[#ECECEC] w-full overflow-auto">
              <ul className="p-5">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="block text-lg font-normal text-[#000000] mb-4"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-1 items-center mt-4">
                  <PiWhatsappLogo size={24} color="black" />
                  <p className="text-lg font-normal text-[#000000]">
                    +852 5169 7732
                  </p>
                </div>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </Wrapper>
  );
};

export default Navbar;
