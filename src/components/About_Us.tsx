import BotomLinks from "@/shared/BotomLinks";
import React from "react";

const About_Us = () => {
  return (
    <div className=" max-container flexCenter h-full mt-10 gap-[8px] flex-col">
      <div className="md:w-[581px]   flex-col text-[#000000] up">
        <h1 className="    flexCenter  font-normal leading-5 text-[10px]  md:text-[14px]  pb-1  font-Akzidenz">
          About us
        </h1>
        <p className="text-center  uppercase font-normal text-[25px] lg:text-[40px] md:text-[40px]   ">
          <span className="font-SaolDisplay  ">Elevating </span>
          <span className=" font-SaolDisplayR">Style through Precision</span>
          <span className=" font-SaolDisplay ">{""}Tailoring</span>
        </p>
      </div>
      <div className="md:p-10 lg:p-10 p-4 md:w-full lg:w-full   text-center">
        <p className="  font-Akzidenzlc md:text-[24px] text-[16px]  leading-[30px]">
          At Manning Company, our commitment is simple yet profound: to deliver
          bespoke tailored garments that embody the epitome of individual
          panache and personality. Renowned for producing only the highest
          quality, we cater to a discerning clientele, including leaders in
          various fields, who demand uncompromising excellence. Welcome to a
          world where each stitch reflects a commitment to defining your unique
          style with unparalleled precision.
        </p>
      </div>

      <BotomLinks text={"Book an Appointment"} />
    </div>
  );
};

export default About_Us;
