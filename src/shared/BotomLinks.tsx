import Link from "next/link";
import React from "react";

interface Props {
  text: string;
}
const BotomLinks = ({ text }: Props) => {
  return (
    <div>
      <Link
        href={""}
        className=" border-b border-current font-normal leading-5 text-[10px] md:text-[14px] pb-1"
      >
        {text}
      </Link>
    </div>
  );
};

export default BotomLinks;
