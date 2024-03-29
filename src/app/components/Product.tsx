import React from "react";
import { getProducts } from "../../lib/shopify/index";
import Image from "next/image";

const Product = async () => {
  const fetchedProducts = await getProducts({});
  console.log("fetchedProducts", fetchedProducts);
  return (
    <div className="flex gap-[35px] pt-10 w-full flexCenter">
      {fetchedProducts.map((Product) => (
        <div key={Product.id} className=" ">
          <Image
            src={Product.featuredImage.url}
            alt={Product.featuredImage.altText}
            width={312}
            height={400}
          />
          <h2>{Product.title}</h2>
          <p>
            Price: {Product.priceRange.minVariantPrice.amount}{" "}
            {Product.priceRange.minVariantPrice.currencyCode}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Product;
