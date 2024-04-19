import Image from "next/image";

interface IRelatedProducts {
  imageurl: string;
  clothesname: string;
  isdiscount: string;
  upperprice: string;
  price: string;
  issale: number;
}

const RelatedProducts = ({
  imageurl,
  clothesname,
  isdiscount,
  upperprice,
  price,
  issale,
}: IRelatedProducts) => {
  return (
    <div className="flex flex-col relative gap-[10px]">
      <Image src={imageurl} alt="image" width={350} height={120} />
      <p className="flex justify-start font-Akzidenregular text-xl">
        {clothesname}
      </p>
      <div className="flex flex-row gap-12 justify-between items-center">
        <p className="flex justify-end text-[#000000]/50 font-Akzidenregular text-xl">
          {isdiscount}
        </p>
        <div className="flex flex-row gap-4">
          <p className="flex justify-end text-[#000000]/50 font-Akzidenzpc text-2xl">
            {upperprice}
          </p>
          {+issale === 1 ? (
            <p className="flex justify-end text-[#FF6F61] font-Akzidenzpc text-2xl">
              {price}
            </p>
          ) : (
            <p className="flex justify-end text-[black] font-Akzidenzpc text-2xl">
              {price}
            </p>
          )}
          {+issale === 1 ? (
            <div className="absolute left-0 top-10 bg-[#1E2832] text-white text-xl font-Akzidenzpc px-3">
              <p>SALE</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
