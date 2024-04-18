"use server";

import { getProducts } from "./shopify";

export async function fetchProducts() {
  try {
    const products = await getProducts({});

    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}
