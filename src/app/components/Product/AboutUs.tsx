import BotomLinks from "@/app/Shared/BotomLinks";
import TopHeading from "@/app/Shared/TopHeading";
import Wrapper from "@/app/Shared/Wrapper";
import React from "react";
const About_Us = () => {
  return (
    <Wrapper>
      <div className="  w-full flexCenter  pt-24 gap-[8px] flex-col">
        <TopHeading
          title="About us"
          firstLine="Elevating "
          secondLine="Style through Precision"
          thirdLine="Tailoring"
        />
        <div className="  md:pt-14 md:p-9 p-8   text-center">
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

        <div className=" ">
          <BotomLinks text={"Book an Appointment"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default About_Us;
