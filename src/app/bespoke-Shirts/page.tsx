import Image from "next/image";
import BespokeShirts from "../components/Product/BespokeShirts";
import v6icon from "../../../public/assets/icon.svg";
import PaginationControls from "../components/Product/PaginationControls";
import { getProducts } from "@/lib/shopify";
const ITEMS_PER_PAGE = 8;

async function getData(perPage: any, page: any) {
  try {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const allProducts = await getProducts({});

    const paginatedProducts = allProducts.slice(startIndex, endIndex);
    const itemCount = allProducts.length;

    return { items: paginatedProducts, itemCount };
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
}

export default async function Page({ searchParams }: any) {
  let pageNumber = parseInt(searchParams.page, 8);
  pageNumber = !pageNumber || pageNumber < 1 ? 1 : pageNumber;
  const data = await getData(ITEMS_PER_PAGE, pageNumber);

  const totalPages = Math.ceil(data.itemCount / ITEMS_PER_PAGE);
  const nextPage = pageNumber + 1;
  const isPageOutOfRange = pageNumber > totalPages;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className=" ">
      <BespokeShirts />
      <div className="pt-[91px] md:px-[60px] bg-[#F9F9F9] ">
        <div className=" px-[26px]  md:px-0 flex justify-between md:pb-[35px]">
          <div className=" flex    gap-6  pt-4">
            <p className="namep  font-Akzidenz ">Show</p>
            <p className="  underline border-black number font-Akzidenz ">25</p>
            <p className="number  font-Akzidenz ">50</p>
            <p className="number  font-Akzidenz ">100</p>
          </div>
          <div className=" flex gap-[4px] p-[5px] mt-3 px-[15px] bg-black">
            <Image src={v6icon} alt={""} />
            <p className=" text-white">filter</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-4 grid-cols-1  gap-4 mt-[35px]">
          {data.items.map((Product) => (
            <div key={Product.id} className=" px-[58px]   md:px-0">
              <Image
                src={Product.featuredImage.url}
                alt={Product.featuredImage.altText}
                width={312}
                height={100}
              />
              <div className=" flex  gap-[52px] p-2 pt-[18px]">
                <h2 className="namep  font-Akzidenz">{Product.title}</h2>
                <p className=" pt-[18px] pricep  font-Akzidenzpc ">
                  ${Product.priceRange.minVariantPrice.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" pt-[100px] pb-[40px]">
          {!isPageOutOfRange && (
            <PaginationControls
              pageNumber={pageNumber}
              totalPages={totalPages}
              nextPage={nextPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
