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
        className="aboutA font-Akzidenz pb-0.5 text-[14px] border-b border-black"
      >
        {text}
      </Link>
    </div>
  );
};

export default BotomLinks;
