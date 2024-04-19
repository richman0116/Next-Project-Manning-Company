"use client";
import { useState } from "react";

const GiftCard = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex-col w-full h-[370px] sm:h-[500px] bg-[#F5F2ED] p-4 sm:p-16">
      <p className="text-4xl pb-[40px]">GIFT CARD</p>
      <p className="text-xl sm:text-3xl pb-[40px] whitespace-nowrap">
        50.00 US $-4,000.00 US $
      </p>
      <div className="relative inline-block text-left w-1/2 h-[100px]">
        <p className="text-xl pb-[10px] font-Apercu">Value</p>
        <select className="w-full h-[40px] shadow-md text-xl">
          <option>$50.00</option>
        </select>
      </div>
      <div className="flex flex-row gap-4 pt-[40px]">
        <div className="flex items-center bg-white text-md md:text-2xl text-black w-[150px] justify-center h-[40px] md:h-[80px] p-2">
          <button
            className="px-2 py-1 bg-[#F5F2ED] rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            onClick={decrement}
          >
            -
          </button>
          <span className="px-4">{count}</span>
          <button
            className="px-2 py-1 bg-[#F5F2ED] rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            onClick={increment}
          >
            +
          </button>
        </div>
        <button className="bg-black w-full h-[43px] md:h-[83px] text-white text-md md:text-2xl whitespace-nowrap">
          Send Gift Card
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
