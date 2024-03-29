import BotomLinks from "@/app/Shared/BotomLinks";
import React from "react";
import Wrapper from "../Shared/Wrapper";
import TopHeading from "../Shared/TopHeading";

const About_Us = () => {
  return (
    <Wrapper>
      <div className="  w-full flexCenter  pt-20 gap-[8px] flex-col">
        <TopHeading
          title="About us"
          firstLine="Elevating "
          secondLine="Style through Precision"
          thirdLine="Tailoring"
        />
        <div className=" pt-[70px] md:p-10 p-8 md:w-[1350px] lg:w-[1350px]   text-center">
          <p className=" md:leading-[30px] text-[16px] md:text-[24px]  leading-[18px]  font-Akzidenzlc aboutus">
            At Manning Company, our commitment is simple yet profound: to
            deliver bespoke tailored garments that embody the epitome of
            individual panache and personality. Renowned for producing only the
            highest quality, we cater to a discerning clientele, including
            leaders in various fields, who demand uncompromising excellence.
            Welcome to a world where each stitch reflects a commitment to
            defining your unique style with unparalleled precision.
          </p>
        </div>

        <div className=" pt-[40]">
          <BotomLinks text={"Book an Appointment"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default About_Us;
