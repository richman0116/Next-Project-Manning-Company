import React from "react";

function TopHeading(props: any) {
  return (
    <div className="md:w-[520px]  flex-col text-[#000000] up">
      <h1 className="flexCenter aboutA  font-Akzidenz">{props.title}</h1>
      <p className="  ptext ">
        <span className="font-SaolDisplay  italicA ">
          {props.firstLine} {""}
        </span>
        <span className="font-SaolDisplayl  normal">{props.secondLine}</span>
        <span className="font-SaolDisplay  italicA px-0.5">
          {props.thirdLine}
        </span>
      </p>
    </div>
  );
}

export default TopHeading;
