import BotomLinks from "@/app/Shared/BotomLinks";
import React from "react";
import Wrapper from "../Shared/Wrapper";

const About_Us = () => {
  return (
    <Wrapper>
      <div className="  w-full flexCenter h-full mt-10 gap-[8px] flex-col">
        <div className="md:w-[581px]   flex-col text-[#000000] up">
          <h1 className="    flexCenter aboutA  font-Akzidenz">About us</h1>
          <p className="ptext ">
            <span className="font-SaolDisplay   italicA ">Elevating </span>
            <span className=" font-SaolDisplayR  normal ">
              Style through Precision
            </span>
            <span className=" font-SaolDisplay italicA  ">Tailoring</span>
          </p>
        </div>
        <div className="md:p-10 lg:p-10 p-4 md:w-full lg:w-full   text-center">
          <p className="  font-Akzidenzlc md:about">
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
