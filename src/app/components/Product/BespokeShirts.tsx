import React from "react";
import Wrapper from "../../Shared/Wrapper";
import BotomLinks from "@/app/Shared/BotomLinks";

const BespokeShirts = () => {
  return (
    <Wrapper>
      <div className=" bg-[#F9F9F9] md:pt-[270px] pt-[220px]  ">
        <div className="pt-[60]  ">
          <h1 className="font-Akzidenz md:pb-0 pb-1.5 flexCenter   md:leading-[15px]  leading-[7.038px]  BDeserve">
            You Deserve Unique
          </h1>
          <p className=" text-center pb-2">
            <span className="font-SaolDisplayR md:leading-[55px] text-[28px] md:text-[60px]  leading-[25px] bCrafted">
              Bespoke{" "}
            </span>
            <span className="font-SaolDisplay md:leading-[55px] text-[28px] md:text-[60px]  leading-[3px] bWithCare">
              Shirts
            </span>
          </p>
          <p className="bCrafting leading-[16px] md:leading-[35px] text-[16px] md:text-[36px] font-SaolDisplayR  text-center">
            Crafting Your Perfect Fit with Expert Precision!
          </p>
        </div>

        <div className="   p-8  md:block hidden   text-center">
          <p className="   font-Akzidenzlc BespokeDs">
            When you want the best custom tailored shirt Hong Kong, Manning
            Company Bespoke Tailors is the only choice. We make best
            custom-tailored shirts to your exact measurements and
            specifications, so they fit perfectly. Manning Company has been
            providing high-quality dress shirts for over four decades. Manning
            Company offers a wide variety of fabrics and patterns so you can
            find exactly what you’re looking for when designing your custom
            shirt or suit. We also offer a wide variety of custom suits from the
            finest fabrics and materials, so you can have your suit made to
            measure for any occasion. You will get premium quality Bespoke
            tailored Shirt here.
          </p>
        </div>
        <div className=" flexCenter md:pt-0 pt-[20px]">
          <BotomLinks text={"Book an Appointment"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BespokeShirts;
