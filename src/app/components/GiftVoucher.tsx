"use client";
import React, { useState } from "react";
import GiftCard from "./GiftCard";

const GiftVoucher = () => {
  return (
    <div className="flex flex-row pt-[100px] sm:pt-[200px] md:pt-[100px] xl:pt-[250px] justify-center items-center font-Akzidenregular">
      <div className="flex flex-row w-10/12 h-1/2 items-center justify-between gap-[20px]">
        <div className="flex flex-col w-full xl:w-3/5 gap-8">
          <p className="font-SaolDisplay italic text-5xl sm:text-7xl md:text-9xl text-white font-bold">
            Gift Card
          </p>
          <p className="font-Akzidenregular text-sm sm:text-md md:text-xl text-white">
            Celebrations and occasions is the time to enjoy with your dear ones
            and delight them with a token of love. You can buy online gift
            vouchers to make the moment special and surprise your loved ones.
            Let your family, friends and colleagues feel special and honored
            with the shopping vouchers we offer. If you are packed up with your
            schedule or really confused to pick a right gift; buying an online
            gift voucher will make it easy and less time consuming. All what you
            need is to fill in your personal details and recipients details in
            the form and submit it. At a click you have your gift voucher ready
            to be mailed to the recipient.<br></br>
            <br></br>
            Make us a part of your memories and surprise you dear ones with a
            unique e-gift card which adds style to their persona and elegance to
            their classy look. You can buy vouchers and e gift cards just at a
            click!
          </p>
        </div>
        <div className="hidden xl:flex">
          <GiftCard />
        </div>
      </div>
    </div>
  );
};

export default GiftVoucher;
