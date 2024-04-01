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
        className="  border-b-[1px] border-black pb-0.5 font-Akzidenz unserlinetext"
      >
        {text}
      </Link>
    </div>
  );
};

export default BotomLinks;
