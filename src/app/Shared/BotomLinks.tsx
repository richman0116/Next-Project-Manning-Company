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
        className=" border-b border-current md:bottomL text-[10px]  pb-1"
      >
        {text}
      </Link>
    </div>
  );
};

export default BotomLinks;
