"use server";

import { getProducts } from "./shopify";

export async function fetchProducts() {
  try {
    const products = await getProducts({});
    // console.log("products", products);
    // const allTags = products.map((product) => product.tags).flat();
    // console.log(allTags);

    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}
