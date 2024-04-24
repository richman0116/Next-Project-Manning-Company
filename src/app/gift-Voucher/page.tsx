import React from "react";
import GiftVoucher from "../components/GiftVoucher";
import RelatedProducts from "../components/RelatedProducts";
import { RELATED_PRODUCTS } from "@/lib/constants";
import GiftCard from "../components/GiftCard";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-[#F9F9F9] md:pt-[215px] pt-[100px] flex flex-col items-center justify-center w-full">
      <div className="w-full h-[750px] xl:h-[1100px] bg-back1 bg-cover bg-no-repeat  bg-center">
        <GiftVoucher />
      </div>
      <div className="flex xl:hidden w-full">
        <GiftCard />
      </div>
      <p className="font-SaolDisplayl text-4xl sm:text-5xl pt-[150px]">
        Related Products
      </p>
      <div className="flex flex-col gap-[20px] justify-center p-[50px] pb-[150px]">
        <div className=" grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-[20px] sm:gap-[40px]">
          {RELATED_PRODUCTS.map((property, index) => (
            <RelatedProducts
              imageurl={property.imageurl}
              clothesname={property.clothesname}
              isdiscount={property.isdiscount}
              upperprice={property.upperprice}
              price={property.price}
              issale={property.issale}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
