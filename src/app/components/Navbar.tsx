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
import bagWhite from "../../../public/assets/bag-w.svg";
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
          <div className="justify-between flex px-6 pr-6 ">
            <div className="flex gap-3 ">
              <Image src={searchIcon} alt="Search" width={24} height={24} />
              <Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} />
            </div>
            <div className="flex-col p-6 flex">
              <h1 className="font-Akzidenzpc manning">Manning company</h1>
              <div className="flexCenter flex-col">
                <p className="font-Akzidenz manningsh">Bespoke tailors</p>
                <p className="font-Akzidenz manningsh">Since 1979</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Image src={profileIcon} alt="Profile" width={24} height={24} />
              <Image src={bagIcon} alt="Bag" width={24} height={24} />
            </div>
          </div>
          <div className="flexCenter">
            <ul className="hidden h-full gap-[15px] lg:flex">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="font-Akzidenz linksf pb-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:hidden md:hidden fixed top-0 w-full bg-[#F5F2ED] z-10 flex justify-between p-2">
          <div className="text-[#000000]">
            <h1 className="font-Akzidenzpc uppercase text-[14.44px]">
              Manning company
            </h1>
            <div className="flexCenter flex-col">
              <p className="font-Akzidenz text-[6px]">Bespoke tailors</p>
              <p className="font-Akzidenz text-[6px]">Since 1979</p>
            </div>
          </div>
          <div className="flex gap-3 p-2">
            <div className="">
              <Image src={bagNormal} alt="Bag" width={24} height={24} />
            </div>
            <span onClick={toggleMenu} className="cursor-pointer">
              <Image
                src={hamburgerIcon}
                alt="Menu"
                width={24}
                height={24}
                className="pt-1"
              />
            </span>
          </div>
        </div>
        {showMenu && (
          <div className="lg:hidden md:hidden fixed top-0 left-0 w-full h-screen z-20 bg-white flex flex-col">
            <div className="self-end p-4">
              <MdClose
                className="cursor-pointer"
                size={24}
                onClick={toggleMenu}
              />
            </div>
            <ul className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </Wrapper>
  );
};

export default Navbar;
