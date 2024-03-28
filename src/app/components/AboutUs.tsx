import BotomLinks from "@/app/Shared/BotomLinks";
import React from "react";
import Wrapper from "../Shared/Wrapper";

const About_Us = () => {
  return (
    <Wrapper>
      <div className="  w-full flexCenter  mt-10 gap-[8px] flex-col">
        <div className="md:w-[581px]   flex-col text-[#000000] up">
          <h1 className="    flexCenter aboutA  font-Akzidenz uppercase">
            About us
          </h1>
          <p className="ptext p-2 ">
            <span className="font-SaolDisplay   italicA  ">Elevating </span>
            <span className="  font-SaolDisplayl  normal ">
              Style through Precision
            </span>
            <span className=" font-SaolDisplay italicA  ">Tailoring</span>
          </p>
        </div>
        <div className="md:p-10 lg:p-10 p-4 md:w-[1350px] lg:w-[1350px]   text-center">
          <p className="  font-Akzidenzlc about md:leading-[38px]  leading-[18px]">
            At Manning Company, our commitment is simple yet profound: to
            deliver bespoke tailored garments that embody the epitome of
            individual panache and personality. Renowned for producing only the
            highest quality, we cater to a discerning clientele, including
            leaders in various fields, who demand uncompromising excellence.
            Welcome to a world where each stitch reflects a commitment to
            defining your unique style with unparalleled precision.
          </p>
        </div>

        <BotomLinks text={"Book an Appointment"} />
      </div>
    </Wrapper>
  );
};

export default About_Us;
