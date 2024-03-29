import React from "react";
import Image from "next/image";
import BotomLinks from "@/app/Shared/BotomLinks";
import { shop_now_image } from "@/lib/constants";
import Wrapper from "../Shared/Wrapper";
const ShopNowCol = () => {
  return (
    <Wrapper>
      <div className=" w-full flexCenter pt-24  h-full gap-[8px] flex-col">
        <div className="md:w-[500px]  flexCenter flex-col text-[#000000] up">
          <p className=" font-SaolDisplay  Elevating md:leading-[40px] text-[28px] md:text-[40px]  leading-[25px] ">
            Online Now
          </p>
        </div>
        <div className="flex  md:flex-row flex-col pt-10  flexCenter gap-3 md:p-5 p-1">
          {shop_now_image.map((item, index) => (
            <div key={index} className="relative mb-8 rounded overflow-hidden">
              <Image
                alt={item.alt}
                className="w-[425px] h-[339px]  object-cover"
                src={item.src}
              />
              <p className="flexCenter shopnow text-white">{item.name}</p>
            </div>
          ))}
        </div>
        <div className=" pt-[20px] ">
          <BotomLinks text={"Book an Appointment"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopNowCol;
