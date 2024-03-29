import React from "react";
import Wrapper from "../Shared/Wrapper";
import Product from "./Product";

const BespokeShirts = () => {
  return (
    <Wrapper>
      <div className=" bg-[#F9F9F9] pt-24  ">
        <div className=" ">
          <h1 className="font-Akzidenz text-black freme8 leading-[15px] text-center">
            You Deserve Unique
          </h1>
          <p className="text-[28px] text-black lg:text-[63px] md:text-[63px] leading-[25px]   md:leading-[55px] text-center">
            <span className="font-SaolDisplayR text-black fremeh8 pr-0.5">
              Bespoke{" "}
            </span>
            <span className="font-SaolDisplay text-black fremei8">Shirts</span>
          </p>
          <p className="Decades md:text-[40px] font-SaolDisplayR  text-center">
            Crafting Your Perfect Fit with Expert Precision!
          </p>
        </div>

        <div className=" p-4 w-full   flexCenter   text-center">
          <p className=" md:w-[1416px] text-[14px] font-Akzidenzlc about md:leading-[38px]  leading-[18px]">
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
        <Product />
      </div>
    </Wrapper>
  );
};

export default BespokeShirts;
