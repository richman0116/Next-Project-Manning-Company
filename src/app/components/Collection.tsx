import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../../public/assets/send.svg";
import BotomLinks from "@/app/Shared/BotomLinks";
import Wrapper from "../Shared/Wrapper";
const Collection = ({ collections }: any) => {
  return (
    <Wrapper>
      <div className=" w-full flexCenter  pt-[123px]  flex-col">
        <div className="md:w-[500px]  flexCenter flex-col text-[#000000] up">
          <h1 className="flexCenter flexCenter abouth  font-Akzidenz ">
            Shop now
          </h1>
          <p className=" font-SaolDisplay  Elevating md:leading-[40px] text-[24px] md:text-[40px]  leading-[25px] ">
            Online shop
          </p>
        </div>
        <div className="  grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2  pt-[70px] gap-2 p-1">
          {collections.map((collection: any) => (
            <Link key={collection.handle} href={collection.path}>
              <div className="relative  mb-8 rounded overflow-hidden">
                <div className="">
                  {collection.image?.url && (
                    <Image
                      width={319}
                      height={339}
                      src={collection.image.url}
                      alt={`Image for ${collection.title}`}
                    />
                  )}
                  <div className=" flex gap-1 ">
                    <h2 className="mb-3 pt-2 Apercu font-Apercu">
                      {collection.title}
                    </h2>
                    <Image src={arrow} alt={""} className=" "></Image>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className=" pt-[20px] ">
          <BotomLinks text={"Shop all"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Collection;
