import React from "react";

function TopHeading(props: any) {
  return (
    <div className="overflow-hidden flexCenter h-full gap-[8px] flex-col">
      <div className="md:w-[560px]  flex-col text-[#000000] up">
        <h1 className="flexCenter abouth   ">{props.title}</h1>
        <p className="   text-center ">
          <span className="font-SaolDisplay md:leading-[40px] text-[24px] md:text-[40px]  leading-[25px]  Elevating px-1">
            {props.firstLine} {""}
          </span>
          <span className="font-SaolDisplayl  md:leading-[40px] text-[24px] md:text-[40px]  leading-[25px]  style">
            {props.secondLine}
          </span>
          <span className="font-SaolDisplay   md:leading-[40px] text-[24px] md:text-[40px]  leading-[25px] Elevating px-0.5">
            {props.thirdLine}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TopHeading;
