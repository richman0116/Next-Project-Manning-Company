import React from "react";
import Image from "next/image";
import BotomLinks from "@/app/Shared/BotomLinks";
import { Frame } from "@/lib/constants";
import Wrapper from "../Shared/Wrapper";
const OurProcess = () => {
  return (
    <Wrapper>
      <div className=" w-full flexCenter  h-full pt-[100px]  flex-col">
        <div className="md:w-[500px]   flex-col text-[#000000] up">
          <h1 className="   flexCenter abouth  font-Akzidenz ">Our process</h1>
          <p className="   text-center ">
            <span className="font-SaolDisplay md:leading-[40px] text-[28px] md:text-[40px]  leading-[25px]  Elevating px-1">
              THE{" "}
            </span>
            <span className=" font-SaolDisplayl md:leading-[40px] text-[28px] md:text-[40px]  leading-[25px]  style">
              bespoke tailoring {""}
            </span>
            <span className=" font-SaolDisplay  Elevating md:leading-[40px] text-[28px] md:text-[40px]  leading-[25px] ">
              Process
            </span>
          </p>
        </div>
        <div className="w-full md:flex-row md:px-16   mt-3  md:gap-[13px] justify-center   gap-1 flex lg:flex-row">
          <div className=" md:flex-row pt-10 flex-row md:gap-[13px]  gap-1 flex">
            <div className="md:flex-row   flex-col md:gap-[13px]  gap-1 flex">
              <div className="relative ">
                <Image
                  alt={Frame[0].alt}
                  className="md:w-[252px] object-cover md:h-[339px]"
                  src={Frame[0].src}
                />
                <p className="   proces1  ">{Frame[0].name}</p>
              </div>
              <div className="  relative">
                <Image
                  alt={Frame[1].alt}
                  className="md:w-[252px] object-cover  md:h-[339px] "
                  src={Frame[1].src}
                />
                <p className=" proces1  ">{Frame[1].name}</p>
              </div>
            </div>
            <div className="md:flex-row flex-col gap-1 md:gap-[13px]  flex">
              <div className="  relative">
                <Image
                  alt={Frame[2].alt}
                  className="md:w-[252px] object-cover md:h-[339px] "
                  src={Frame[2].src}
                />
                <p className=" proces1   ">{Frame[2].name}</p>
              </div>
              <div className="  relative ">
                <Image
                  alt={Frame[3].alt}
                  className="md:w-[252px] object-cover md:h-[339px] "
                  src={Frame[3].src}
                />
                <p className=" proces    ">{Frame[3].name}</p>
              </div>
            </div>
          </div>
          <div className="  relative pt-10 ">
            <Image
              alt={Frame[4].alt}
              className="md:w-[252px]  object-cover md:h-[339px]  w-[250px] sm:h-[100%] h-[100%]"
              src={Frame[4].src}
            />
            <p className=" flexCenter font-SaolDisplay md:leading-[40px]  text-[21px]  leading-[21.939px]  pb-[34px] text-white   imagereletivetext lg:text-[40px]   absolute inset-0  md:text-[40px] pt-[24]  md:pt-64 ">
              {Frame[4].name}
            </p>
          </div>
        </div>
        <div className=" pt-8 ">
          <BotomLinks text={"Book an Appointment"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default OurProcess;
