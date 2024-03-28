import React from "react";
import Image from "next/image";
import BotomLinks from "@/app/Shared/BotomLinks";
import { Frame } from "@/lib/constants";
import Wrapper from "../Shared/Wrapper";
const OurProcess = () => {
  return (
    <Wrapper>
      <div className=" w-full flexCenter  h-full pt-20  flex-col">
        <div className="md:w-[400px]   flex-col text-[#000000] up">
          <h1 className="    flexCenter  aboutA  uppercase font-Akzidenz">
            Our process
          </h1>
          <p className="ptext   ">
            <span className="font-SaolDisplay  italicA pr-1">THE </span>
            <span className=" font-SaolDisplayl  normal">
              bespoke tailoring {""}
            </span>
            <span className=" font-SaolDisplay  italicA ">Process</span>
          </p>
        </div>
        <div className="w-full md:flex-row md:p-5 p-1   md:gap-[13px] justify-center   gap-1 flex lg:flex-row">
          <div className=" md:flex-row pt-10 flex-row md:gap-[13px]  gap-1 flex">
            <div className="md:flex-row   flex-col md:gap-[13px]  gap-1 flex">
              <div className="relative ">
                <Image
                  alt={Frame[0].alt}
                  className="md:w-[252px] object-cover md:h-[339px]"
                  src={Frame[0].src}
                />
                <p className="flexCenter   proces text-white ">
                  {Frame[0].name}
                </p>
              </div>
              <div className="  relative">
                <Image
                  alt={Frame[1].alt}
                  className="md:w-[252px] object-cover  md:h-[339px] "
                  src={Frame[1].src}
                />
                <p className="flexCenter proces text-white ">{Frame[1].name}</p>
              </div>
            </div>
            <div className="md:flex-row flex-col gap-1 md:gap-[13px]  flex">
              <div className="  relative">
                <Image
                  alt={Frame[2].alt}
                  className="md:w-[252px] object-cover md:h-[339px] "
                  src={Frame[2].src}
                />
                <p className="flexCenter proces text-white  ">
                  {Frame[2].name}
                </p>
              </div>
              <div className="  relative">
                <Image
                  alt={Frame[3].alt}
                  className="md:w-[252px] object-cover md:h-[339px] "
                  src={Frame[3].src}
                />
                <p className="flexCenter proces px-3 text-white ">
                  {Frame[3].name}
                </p>
              </div>
            </div>
          </div>
          <div className="  relative pt-10 ">
            <Image
              alt={Frame[4].alt}
              className="md:w-[252px]  object-cover md:h-[339px]  w-[250px] sm:h-[100%] h-[100%]"
              src={Frame[4].src}
            />
            <p className=" flexCenter proces text-white ">{Frame[4].name}</p>
          </div>
        </div>
        <div className=" pt-10">
          <BotomLinks text={"Book an Appointment"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default OurProcess;
