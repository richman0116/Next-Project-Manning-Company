import Image from "next/image";

import { TYPE_CARDS } from "@/lib/constants";
import { useState } from "react";

const TypeCard = () => {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  const handleNextButton = () => {
    setCurrentTypeIndex((index) =>
      index === TYPE_CARDS.length - 1 ? 0 : index + 1
    );
  };

  const handlePrevButton = () => {
    setCurrentTypeIndex((index) =>
      index === 0 ? TYPE_CARDS.length - 1 : index - 1
    );
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-[10px] w-full">
        <div className="flex flex-row justify-between w-full">
          <p className="text-xl font-semibold">
            {TYPE_CARDS[currentTypeIndex].title}
          </p>
          <div className="flex flex-row">
            <button
              onClick={() => handlePrevButton()}
              className="font-black font-mono text-2xl pr-[20px]"
            >
              <Image
                src={"/assets/arrowleft.png"}
                alt="arrowleft"
                width={20}
                height={20}
              />
            </button>
            <button
              onClick={() => handleNextButton()}
              className="font-black font-mono text-2xl pr-[20px]"
            >
              <Image
                src={"/assets/arrowright.png"}
                alt="arrowright"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-[15px]">
          {TYPE_CARDS[currentTypeIndex].images.map((image, index) => (
            <Image
              key={index}
              src={image.imageUrl}
              alt={image.imageAlt}
              width={60}
              height={60}
              style={{ width: "90px", height: "90px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeCard;
