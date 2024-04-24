"use client";

import Image from "next/image";
import { PRODUCT_PHOTOS } from "@/lib/constants";
import { useState } from "react";

const ProductPhotos = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickSelect = (index: number) => {
    setIsSelected(index);
    setCurrentImageIndex(index);
  };

  const handleNextButton = () => {
    setCurrentImageIndex((index) =>
      index === PRODUCT_PHOTOS.length - 1 ? 0 : index + 1
    );
    setIsSelected((index) =>
      index === PRODUCT_PHOTOS.length - 1 ? 0 : index + 1
    );
  };

  const handlePrevButton = () => {
    setCurrentImageIndex((index) =>
      index === 0 ? PRODUCT_PHOTOS.length - 1 : index - 1
    );
    setIsSelected((index) =>
      index === 0 ? PRODUCT_PHOTOS.length - 1 : index - 1
    );
  };

  return (
    <div className="flex flex-col-reverse md:p-0 md:flex-row gap-8">
      <div className="flex flex-row space-x-4 md:space-x-0 md:flex-col justify-between">
        {PRODUCT_PHOTOS.map((property, index) => (
          <div
            className="flex"
            key={index}
            onClick={() => handleClickSelect(index)}
          >
            <Image
              src={property.imageUrl}
              alt={property.imageAlt}
              width={150}
              height={150}
              style={{
                width: "100%",
                height: "auto",
                opacity: index === isSelected ? 1 : 0.5,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full gap-5">
        <button className="hidden md:block" onClick={() => handlePrevButton()}>
          <div>
            <Image
              src={"/assets/arrowleft.png"}
              alt="arrowleft"
              width={20}
              height={20}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </button>
        <div className="w-full">
          <Image
            src={PRODUCT_PHOTOS[currentImageIndex].imageUrl}
            alt={PRODUCT_PHOTOS[currentImageIndex].imageAlt}
            width={"550"}
            height={"550"}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <button className="hidden md:block" onClick={() => handleNextButton()}>
          <Image
            src={"/assets/arrowright.png"}
            alt="arrowright"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductPhotos;
