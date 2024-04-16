"use client";
import BespokeShirts from "../components/Product/BespokeShirts";
import PaginationControls from "../components/Product/PaginationControls";
import ProductCard from "../components/Product/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/product";

const ITEMS_PER_PAGE = 25;

const designOptions = ["DESIGN", "Stripes", "Checkered", "Plain"];
const weightOptions = ["FABRIC WEIGHT SHIRTS", "Light", "Medium", "Heavy"];
const fabricOptions = ["FABRIC TYPE", "Cotton", "Polyester", "Silk"];
const priceOptions = ["PRICE", "Low", "Medium", "High"];

interface Product {
  id: string;
  title: string;
  featuredImage: {
    url: string;
    altText: string;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
}

async function getData(perPage: any, page: any) {
  try {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const allProducts = await fetchProducts();
    const colorOptions = allProducts.map((product) => product.tags).flat();
    console.log(colorOptions);
    const paginatedProducts = allProducts.slice(startIndex, endIndex);
    const itemCount = allProducts.length;

    return { items: paginatedProducts, itemCount };
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
}

export default function Page({ searchParams }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [colorOptions, setColorOptions] = useState<string[]>([]);
  let pageNumber = parseInt(searchParams.page, 8);
  pageNumber = !pageNumber || pageNumber < 1 ? 1 : pageNumber;
  const [totalPages, setTotalPages] = useState(0);
  const [isPageOutOfRange, setIsPageOutOfRange] = useState(false);

  // Calculate nextPage
  const nextPage = pageNumber + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(ITEMS_PER_PAGE, pageNumber);
        setProducts(data.items);
        const totalPages = Math.ceil(data.itemCount / ITEMS_PER_PAGE);
        setTotalPages(totalPages);
        setIsPageOutOfRange(pageNumber > totalPages);
        const colorOptions = data.items.map((product) => product.tags).flat();
        setColorOptions(colorOptions);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [pageNumber]); // Run useEffect whenever pageNumber changes

  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      const filteredProducts = await fetchProducts();
      const filtered = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtered);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className=" bg-[#F9F9F9]">
      <BespokeShirts />
      <div className="flex flex-wrap flexCenter pt-[68px] gap-[41px] w-full">
        <select id="color" className="p-2 bg-[#F9F9F9]">
          <option className="filtersection font-Akzidenz" value="">
            COLOR
          </option>
          {Array.from(new Set(colorOptions)).map((option, index) => (
            <option
              className="filtersection font-Akzidenz"
              key={index}
              value={option.toLowerCase()}
            >
              {option}
            </option>
          ))}
        </select>

        <div className=" hidden md:block">
          <select id="design" className="p-2 bg-[#F9F9F9]">
            {designOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className=" hidden md:block">
          <select id="weight" className="p-2 bg-[#F9F9F9]">
            {weightOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className=" hidden md:block">
          <select id="fabric" className="p-2 bg-[#F9F9F9]">
            {fabricOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className=" hidden md:block">
          <select id="price" className="p-2 bg-[#F9F9F9]">
            {priceOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className=" hidden md:block">
          <p className="filtersection font-Akzidenz">Clear all</p>
        </div>
        <div className=" hidden md:block">
          <p className="filtersection font-Akzidenz">CHANGE VIEW</p>
        </div>
        <div className="flex bg-[#F9F9F9]  md:pt-0 pt-[150px]  border-b-2 border-black mr-4">
          <div className=" pt-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M6.03645 2.0249C7.10035 2.0249 8.12067 2.44753 8.87296 3.19982C9.62525 3.95211 10.0479 4.97243 10.0479 6.03633C10.0479 7.02993 9.68377 7.9433 9.08514 8.64684L9.25177 8.81347H9.73931L12.825 11.8992L11.8993 12.8249L8.8136 9.73919V9.25165L8.64697 9.08502C7.94342 9.68364 7.03005 10.0478 6.03645 10.0478C4.97256 10.0478 3.95223 9.62513 3.19994 8.87284C2.44766 8.12055 2.02502 7.10023 2.02502 6.03633C2.02502 4.97243 2.44766 3.95211 3.19994 3.19982C3.95223 2.44753 4.97256 2.0249 6.03645 2.0249ZM6.03645 3.25919C4.4936 3.25919 3.25931 4.49347 3.25931 6.03633C3.25931 7.57919 4.4936 8.81347 6.03645 8.81347C7.57931 8.81347 8.8136 7.57919 8.8136 6.03633C8.8136 4.49347 7.57931 3.25919 6.03645 3.25919Z"
                fill="#2B2B2B"
              />
            </svg>
          </div>
          <div className="bg-[#F9F9F9]  ">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search"
              className="bg-[#F9F9F9] focus:outline-none"
            />
          </div>
        </div>
        <div className="">
          <div className="   md:px-0 flex justify-between ">
            <div className=" flex    gap-6  pt-4">
              <p className="namep  font-Akzidenz ">Show</p>
              <p className="  underline border-black number font-Akzidenz ">
                25
              </p>
              <p className="number  font-Akzidenz ">50</p>
              <p className="number  font-Akzidenz ">100</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-[35px]">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.featuredImage.url}
                imageAlt={product.featuredImage.altText}
                title={product.title}
                price={product.priceRange.minVariantPrice.amount}
              />
            ))}
          </div>
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
