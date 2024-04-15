import React from "react";
import Wrapper from "../../Shared/Wrapper";
import BotomLinks from "@/app/Shared/BotomLinks";
import Dropdown from "./Dropdown";

const BespokeShirts = () => {
  const stepsData = [
    {
      number: 1,
      title: "SELECT FABRIC",
    },
    {
      number: 2,
      title: "DESIGN",
    },
    {
      number: 3,
      title: "EXTRAS",
    },
    {
      number: 4,
      title: "SIZING",
    },
  ];
  return (
    <Wrapper>
      <div className=" bg-[#F9F9F9] md:pt-[270px] pt-[150px]  ">
        <div className="pt-[60]  ">
          <h1 className="font-Akzidenz pb-1 flexCenter   md:leading-[15px]  leading-[7.038px]  BDeserve">
            You Deserve Unique
          </h1>
          <p className=" text-center">
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

        <div className="flexCenter md:pt-[80px] pt-[72px]    md:w-full gap-[26px]  md:gap-[40px]">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className=" flex md:hover:text-black  md:text-[#CCC] gap-[5.6px]  md:gap-[8px]"
            >
              <div className=" hidden  md:block">
                <p className=" selectnub     bg-[#CCC]    hover:bg-black text-white">
                  {step.number}
                </p>
              </div>
              <div className="   md:hidden">
                <p className=" slectnummob   text-white    ">{step.number}</p>
              </div>
              <p className=" selectname  leading-[14px] md:leading-[21px] font-Akzidenz md:text-[20px]  text-[13px]  pt-2.5">
                {step.title}
              </p>
            </div>
          ))}
        </div>
        <div className="   ">
          <Dropdown />
        </div>
      </div>
    </Wrapper>
  );
};

export default BespokeShirts;
