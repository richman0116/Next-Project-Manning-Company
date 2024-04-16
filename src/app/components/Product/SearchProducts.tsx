"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/lib/product";
import v6icon from "../../../../public/assets/icon.svg";
const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        console.log("allProducts", allProducts);
        setProducts(allProducts as any);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    loadProducts();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      const filteredProducts = await fetchProducts();
      console.log("filteredProducts", filteredProducts);
      setProducts(
        filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div>
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
        <div className="bg-[#F9F9F9]">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-[#F9F9F9] focus:outline-none"
          />
        </div>
      </div>
      <div className=" px-[26px]  md:px-0 flex justify-between ">
        <div className=" flex    gap-6  pt-4">
          <p className="namep  font-Akzidenz ">Show</p>
          <p className="  underline border-black number font-Akzidenz ">25</p>
          <p className="number  font-Akzidenz ">50</p>
          <p className="number  font-Akzidenz ">100</p>
        </div>
        <div className="  gap-[4px] p-[5px] hidden mt-3 px-[15px] bg-black">
          <Image src={v6icon} alt={""} />
          <p className=" text-white">filter</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-[35px]">
        {products.map((product: any) => (
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
  );
};

export default SearchProducts;
