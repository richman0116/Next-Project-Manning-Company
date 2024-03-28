import Link from "next/link";
import React from "react";

interface Props {
  text: string;
}
const BotomLinks = ({ text }: Props) => {
  return (
    <div>
      <Link href={""} className=" aboutA  font-Akzidenz underline pb-1">
        {text}
      </Link>
    </div>
  );
};

export default BotomLinks;
