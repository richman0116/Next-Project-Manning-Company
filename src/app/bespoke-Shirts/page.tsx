"use client";
import { useEffect, useState } from "react";
import BespokeShirts from "../components/Product/BespokeShirts";
import PaginationControls from "../components/Product/PaginationControls";
import ProductCard from "../components/Product/ProductCard";
import { fetchProducts } from "@/lib/product";

const ITEMS_PER_PAGE = 25;
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
  tags: string[];
}

async function getData(
  pageNumber: number
): Promise<{ items: any[]; itemCount: number }> {
  const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
  const allProducts = await fetchProducts();
  const paginatedProducts = allProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  return { items: paginatedProducts, itemCount: allProducts.length };
}

export default function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const [sortOrder, setSortOrder] = useState("default");
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [productTypeOptions, setProductTypeOptions] = useState<any[]>([]);
  const [selectedProductType, setSelectedProductType] = useState("");
  const [designOptions, setDesignOptions] = useState<any[]>([]);
  const [selectedDesign, setSelectedDesign] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [fabricOptions, setFabricOptions] = useState<any[]>([]);
  const [selectedFabric, setSelectedFabric] = useState("");
  const [ColorOptions, setColorOptions] = useState<any[]>([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [pageNumber, setPageNumber] = useState<number>(
    parseInt(searchParams.page, 10) || 1
  );
  const [totalPages, setTotalPages] = useState(0);
  const [isPageOutOfRange, setIsPageOutOfRange] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items, itemCount } = await getData(pageNumber);
        setProducts(items);
        setTotalPages(Math.ceil(itemCount / ITEMS_PER_PAGE));
        setIsPageOutOfRange(pageNumber > totalPages);

        const productsData = await fetchProducts();
        setAllProducts(productsData);

        const productTypes = Array.from(
          new Set(productsData.map((product: any) => product.productType))
        );
        setProductTypeOptions(productTypes);

        const allDesignOptions = new Set(
          productsData.flatMap((product) =>
            product.variants.flatMap((variant) =>
              variant.selectedOptions
                .filter((option) => option.name === "DESIGN")
                .map((option) => option.value)
            )
          )
        );
        setDesignOptions(Array.from(allDesignOptions));

        const allFabricOptions = new Set(
          productsData.flatMap((product) =>
            product.variants.flatMap((variant) =>
              variant.selectedOptions
                .filter((option) => option.name === "FABRIC-WEIGHT-SHIRTS")
                .map((option) => option.value)
            )
          )
        );
        setFabricOptions(Array.from(allFabricOptions));

        const allColorOptions = new Set(
          productsData.flatMap((product) =>
            product.variants.flatMap((variant) =>
              variant.selectedOptions
                .filter((option) => option.name === "Color")
                .map((option) => option.value)
            )
          )
        );
        setColorOptions(Array.from(allColorOptions));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [pageNumber, totalPages]);

  useEffect(() => {
    if (selectedProductType) {
      const filteredProducts = allProducts.filter(
        (product) => product.productType === selectedProductType
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [selectedProductType, allProducts]);

  useEffect(() => {
    if (selectedDesign) {
      const filteredProducts = allProducts.filter((product) =>
        product.variants.some((variant: any) =>
          variant.selectedOptions.some(
            (option: any) =>
              option.name === "DESIGN" && option.value === selectedDesign
          )
        )
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [selectedDesign, allProducts]);

  useEffect(() => {
    if (selectedColor) {
      const filteredProducts = allProducts.filter((product) =>
        product.variants.some((variant: any) =>
          variant.selectedOptions.some(
            (option: any) =>
              option.name === "Color" && option.value === selectedColor
          )
        )
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [selectedColor, allProducts]);

  useEffect(() => {
    if (selectedFabric) {
      const filteredProducts = allProducts.filter((product) =>
        product.variants.some((variant: any) =>
          variant.selectedOptions.some(
            (option: any) =>
              option.name === "FABRIC-WEIGHT-SHIRTS" &&
              option.value === selectedFabric
          )
        )
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [selectedFabric, allProducts]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleDesignChange = (event: any) => {
    setSelectedDesign(event.target.value);
    setSearchTerm("");
    setSelectedColor("");
    setSelectedFabric("");
    setPageNumber(1);
  };

  const handleFabricChange = (event: any) => {
    setSelectedFabric(event.target.value);
    setSearchTerm("");
    setSelectedColor("");
    setSelectedDesign("");
    setPageNumber(1);
  };

  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value);
    setSearchTerm("");
    setSelectedDesign("");
    setSelectedFabric("");
    setPageNumber(1);
  };

  const handleSortChange = (event: any) => {
    const order = event.target.value;
    setSortOrder(order);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      return order === "lowToHigh" ? priceA - priceB : priceB - priceA;
    });
    setProducts(sortedProducts);
  };

  const handleClearAll = () => {
    setSelectedProductType("");
    setSelectedDesign("");
    setSelectedFabric("");
    setSelectedColor("");
    setSearchTerm("");
    setPageNumber(1);
    setProducts(allProducts);
  };

  return (
    <div className="bg-[#F9F9F9]">
      <BespokeShirts />
      <div className="flex flex-wrap flexCenter pt-[68px]  w-full">
        <div className="flex flex-wrap flexCenter gap-[41px]">
          <div className=" hidden md:block">
            <select
              value={selectedColor}
              onChange={handleColorChange}
              className="bg-[#F9F9F9]"
            >
              <option value="" className="filter  font-Akzidenregular">
                COLOR
              </option>
              {ColorOptions.map((Color, index) => (
                <option
                  key={index}
                  value={Color}
                  className="clear font-Akzidenregular"
                >
                  {Color}
                </option>
              ))}
            </select>
          </div>

          <div className=" hidden md:block">
            <select className="bg-[#F9F9F9]" onChange={handleDesignChange}>
              <option value="" className="filter  font-Akzidenregular">
                DESIGN
              </option>
              {designOptions.map((design, index) => (
                <option
                  key={index}
                  value={design}
                  className="clear font-Akzidenregular"
                >
                  {design}
                </option>
              ))}
            </select>
          </div>
          <div className=" hidden md:block">
            <select className="bg-[#F9F9F9]" onChange={handleFabricChange}>
              <option value="" className="filter  font-Akzidenregular">
                FABRIC WEIGHT SHIRTS
              </option>
              {fabricOptions.map((fabric, index) => (
                <option
                  key={index}
                  value={fabric}
                  className="clear font-Akzidenregular"
                >
                  {fabric}
                </option>
              ))}
            </select>
          </div>
          <div className=" hidden md:block">
            <select
              onChange={(e) => setSelectedProductType(e.target.value)}
              className="bg-[#F9F9F9]"
            >
              <option value="" className="filter  font-Akzidenregular">
                FABRIC TYPE
              </option>
              {productTypeOptions.map((type, index) => (
                <option
                  key={index}
                  value={type}
                  className="clear font-Akzidenregular"
                >
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className=" hidden md:block">
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="bg-[#F9F9F9]"
            >
              <option value="default" className="filter  font-Akzidenregular">
                PRICE
              </option>
              <option value="lowToHigh" className="clear font-Akzidenregular">
                Low to High
              </option>
              <option value="highToLow" className="clear font-Akzidenregular">
                High to Low
              </option>
            </select>
          </div>
          <div className=" hidden md:block">
            <button
              onClick={handleClearAll}
              className="clear font-Akzidenregular"
            >
              Clear all
            </button>
          </div>
          <div className="flex bg-[#F9F9F9] border-b-2 border-black mr-4">
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
      </div>
      <div className=" md:px-[60px] pt-[80px]">
        <div className=" px-[26px]  md:px-0 flex justify-between ">
          <div className=" flex    gap-6  pt-4">
            <p className="show   font-Akzidenregular ">Show</p>
            <p className=" border-b-[0.5px] border-black pb-0.5 number  text-[#000] font-Akzidenregular ">
              25
            </p>
            <p className="number  text-[#726D6D] font-Akzidenregular">50</p>
            <p className="number text-[#726D6D]  font-Akzidenregular">100</p>
          </div>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 pt-[40px] gap-4 ">
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
        {!isPageOutOfRange && (
          <PaginationControls
            pageNumber={pageNumber}
            totalPages={totalPages}
            nextPage={pageNumber + 1}
          />
        )}
      </div>
    </div>
  );
}
