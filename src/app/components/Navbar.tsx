"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import hamburgerIcon from "../../../public/assets/Hamburger menu.svg";
import Wrapper from "@/app/Shared/Wrapper";
import searchNormal from "../../../public/assets/search-normal.svg";
import searchWhite from "../../../public/assets/search-w.svg";
import whatsappNormal from "../../../public/assets/whatsapp.svg";
import whatsappWhite from "../../../public/assets/whatsaapp.svg";
import profileNormal from "../../../public/assets/profile.svg";
import profileWhite from "../../../public/assets/profile-w.svg";
import bagNormal from "../../../public/assets/bag-2.svg";
import bagNormalb from "../../../public/assets/bag-black.svg";
import bagWhite from "../../../public/assets/bag-w.svg";
import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { PiWhatsappLogo } from "react-icons/pi";

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
  const searchIcon = scrollY || !isHomepage ? searchNormal : searchWhite;
  const whatsappIcon = scrollY || !isHomepage ? whatsappNormal : whatsappWhite;
  const profileIcon = scrollY || !isHomepage ? profileNormal : profileWhite;
  const bagIcon = scrollY || !isHomepage ? bagNormal : bagWhite;

  return (
    <Wrapper>
      <nav
        style={{ backgroundColor: navbarBackground, color: navbarTextColor }}
        className="transition-all duration-300 ease-in w-full lg:max-w-[2000px] mx-auto fixed top-0 z-50"
      >
        <div className="hidden h-[214px] lg:block md:block">
          <div className="  justify-between  flex ">
            <div className="flex gap-3 px-[60px] ">
              <Image src={searchIcon} alt="Search" width={24} height={24} />
              <Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} />
            </div>
            <div className="flex-col  flex pt-6 ">
              <h1 className="font-Akzidenzpc   manning">Manning company</h1>
              <div className="flexCenter flex-col">
                <p className="font-Akzidenregular Bespoke">Bespoke tailors</p>
                <p className="font-Akzidenregular  Since">Since 1979</p>
              </div>
            </div>
            <div className=" flex flex-row gap-3  px-[60px]">
              <Image src={profileIcon} alt="Profile" width={24} height={24} />
              <Image src={bagIcon} alt="Bag" width={24} height={24} />
            </div>
          </div>

          <div className="flexCenter pt-[30px]">
            <ul className="hidden h-full gap-[15px] lg:flex">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="font-Akzidenregular navlink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile menu */}

        <div className="lg:hidden md:hidden fixed top-0  w-full  bg-[#F5F2ED] z-10 flex justify-between p-3">
          <div className="   text-[#000000]  ">
            <h1 className="    font-Akzidenzpc uppercase text-[14.44px] ">
              Manning company
            </h1>
            <div className="flexCenter flex-col flex ">
              <p className="font-Akzidenregular text-[6px] ">Bespoke tailors</p>
              <p className=" font-Akzidenregular text-[6px]">Since 1979</p>
            </div>
          </div>

          <div className="flex  gap-2   ">
            <div className=" pt-1.5 ">
              <Image src={bagNormalb} alt="Bag" width={24} height={24} />
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
