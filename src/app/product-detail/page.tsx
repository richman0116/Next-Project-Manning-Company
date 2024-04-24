"use client";

import React, { useState } from "react";

import Image from "next/image";
import ProductPhotos from "../components/ProductPhotos";
import TypeCard from "../components/TypeCard";
import { RELATED_PRODUCTS } from "@/lib/constants";
import RelatedProducts from "../components/RelatedProducts";

const Page = () => {
  const [isdropdownProduct, setIsDropDownProduct] = useState(false);
  const [isdropdownFeatures, setIsDropDownFeatures] = useState(false);
  const [isCustomizeShow, setIsCustomizeShow] = useState(false);
  const [count, setCount] = useState(0);

  const handleClickProduct = () => {
    setIsDropDownProduct((index) => !index);
  };

  const handleClickFeatures = () => {
    setIsDropDownFeatures((index) => !index);
  };

  const handleClickCustomize = () => {
    setIsCustomizeShow((index) => !index);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div className="bg-[#F9F9F9] md:pt-[215px] pt-[100px] flex flex-col w-full font-Akzidenregular items-center gap-[50px]">
      <div className="flex flex-col space-y-[22px] p-[22px] justify-start xl:flex-row xl:items-start xl:space-y-0">
        <ProductPhotos />
        <div className="flex flex-col space-y-[20px]">
          <p className="text-5xl font-Akzidenregular">Black Shirt</p>
          <p className="text-xl font-Akzidenregular">$63.85</p>
          <div className="flex flex-col text-black space-y-2">
            <p className="flex md:hidden">Product description</p>
            <p className="flex md:hidden">
              The classic blue multi-pinstripe shirt makes an excellent
              professional statement to your wardrobe. The Manning Company
              workmanship made this in keeping comfort and wearing experience in
              mind. It feels lightweight and perfectly fits your body contours.
              A perfect addition to enhance your business and add value to your
              presence.
            </p>
          </div>
          <div className="flex flex-col text-black space-y-2">
            <p className="flex md:hidden">Features</p>
            <div className="flex md:hidden">
              <ul className="text-black list-disc pl-[20px]">
                <li>Cotton</li>
                <li>Striped Design</li>
                <li>Button down collar</li>
                <li>One button rounded cuff</li>
                <li>Full length sleeve</li>
                <li>
                  Available in different collar sizes & sleeve length
                  combinations
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-[20px]">
            <div className="flex items-center bg-white text-xl text-black w-[130px] justify-center h-[56px] p-2 rounded-[10px]">
              <button
                className="px-2 py-1 bg-[#F5F2ED] rounded-full w-[35px] h-[35px]"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-4">{count}</span>
              <button
                className="px-2 py-1 bg-[#F5F2ED] rounded-full w-[35px] h-[35px]"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <button
              className="bg-black flex-1 h-[56px] text-white text-md xl:flex-none xl:w-[200px] whitespace-nowrap rounded-[10px]"
              onClick={handleClickCustomize}
            >
              Customize
            </button>
          </div>
          {isCustomizeShow ? (
            <div className="flex flex-col">
              <div className="flex w-full">
                <TypeCard />
              </div>
              <label className="flex pt-[40px] items-center gap-[10px] font-semibold">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                Add Monogram(+4 USD)
              </label>
              <div className="flex relative w-full mt-[20px]">
                <input
                  placeholder="Add special request"
                  className=" w-full h-[70px] px-[60px] rounded-md text-[20px]"
                />
                <p className="absolute top-[20px] left-[30px] text-xl">+</p>
              </div>
            </div>
          ) : (
            <div className="hidden">
              <div className="flex w-full">
                <TypeCard />
              </div>
              <label className="flex pt-[40px] items-center gap-[10px] font-semibold">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                Add Monogram(+4 USD)
              </label>
              <div className="flex relative w-full mt-[20px]">
                <input
                  placeholder="Add special request"
                  className=" w-full h-[70px] px-[60px] rounded-md text-[20px]"
                />
                <p className="absolute top-[20px] left-[30px] text-xl">+</p>
              </div>
            </div>
          )}
          <button className="hidden md:flex justify-center items-center rounded-md w-full h-[70px] text-white bg-black">
            Add to bag
          </button>
          <div className="hidden md:flex flex-col gap-[5px]">
            <div
              className="flex flex-col bg-white p-[20px] w-full xl:w-[530px] rounded-xl gap-[10px] hover:cursor-pointer"
              onClick={handleClickProduct}
            >
              <div className="flex justify-between">
                <p>Product description</p>
                <button>
                  {!isdropdownProduct ? (
                    <Image
                      src={"/assets/dropdown.png"}
                      alt="dropdown"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={"/assets/dropup.png"}
                      alt="dropup"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>
              {isdropdownProduct && (
                <p className="flex text-black/50 pr-[50px]">
                  The classic blue multi-pinstripe shirt makes an excellent
                  professional statement to your wardrobe. The Manning Company
                  workmanship made this in keeping comfort and wearing
                  experience in mind. It feels lightweight and perfectly fits
                  your body contours. A perfect addition to enhance your
                  business and add value to your presence.
                </p>
              )}
            </div>
            <div
              className="flex flex-col bg-white p-[20px] w-full xl:w-[530px]  rounded-xl gap-[10px] hover:cursor-pointer"
              onClick={handleClickFeatures}
            >
              <div className="flex justify-between">
                <p>Features</p>
                <button>
                  {!isdropdownFeatures ? (
                    <Image
                      src={"/assets/dropdown.png"}
                      alt="dropdown"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={"/assets/dropup.png"}
                      alt="dropup"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
              </div>
              {isdropdownFeatures && (
                <ul className="text-black/50 pr-[50px] list-disc pl-[20px]">
                  <li>Cotton</li>
                  <li>Striped Design</li>
                  <li>Button down collar</li>
                  <li>One button rounded cuff</li>
                  <li>Full length sleeve</li>
                  <li>
                    Available in different collar sizes & sleeve length
                    combinations
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="font-SaolDisplayl text-4xl sm:text-5xl">Related Products</p>
      <div className="flex flex-col gap-[20px] justify-center px-[22px] pb-[150px]">
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
