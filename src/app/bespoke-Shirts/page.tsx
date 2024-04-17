"use client";
import { useEffect, useState } from "react";
import BespokeShirts from "../components/Product/BespokeShirts";
import PaginationControls from "../components/Product/PaginationControls";
import ProductCard from "../components/Product/ProductCard";
import { fetchProducts } from "@/lib/product";

const ITEMS_PER_PAGE = 25;

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
  const [productTypeOptions, setProductTypeOptions] = useState<string[]>([]);
  const [selectedProductType, setSelectedProductType] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  let pageNumber = parseInt(searchParams.page, 10) || 1;
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
          new Set(productsData.map((product) => product.productType))
        );
        setProductTypeOptions(productTypes);
        const tags = items.flatMap((product) => product.tags);
        setAllTags([...new Set(tags)]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [pageNumber, totalPages]);
  useEffect(() => {
    if (!selectedProductType) {
      setProducts(allProducts);
      return;
    }

    const filteredProducts = allProducts.filter(
      (product) => product.productType === selectedProductType
    );
    setProducts(filteredProducts);
  }, [selectedProductType, allProducts]);
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    try {
      const filteredProducts = (await fetchProducts()).filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleTagChange = (selectedOptions: string[]) => {
    setSelectedTags(selectedOptions);
  };
  const sortProducts = (order: any) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      if (order === "lowToHigh") {
        return priceA - priceB;
      } else if (order === "highToLow") {
        return priceB - priceA;
      } else {
        // Default sorting order
        return 0;
      }
    });
    setProducts(sortedProducts);
  };
  const handleSortChange = (event: any) => {
    const order = event.target.value;
    setSortOrder(order);
    sortProducts(order);
  };
  return (
    <div className="bg-[#F9F9F9]">
      <BespokeShirts />
      <div className="flex flex-wrap flexCenter pt-[68px] gap-[41px] w-full">
        <div>
          <select
            multiple
            value={selectedTags}
            onChange={(e) =>
              handleTagChange(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="p-2 rounded border-gray-300"
            size={5}
          >
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag} COLOR
              </option>
            ))}
          </select>
        </div>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="bg-[#F9F9F9]"
        >
          <option value="PRICE">PRICE</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <select
          onChange={(e) => {
            setSelectedProductType(e.target.value);
          }}
        >
          <option value="">FABRIC TYPE</option>
          {productTypeOptions.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <div className="flex bg-[#F9F9F9] border-b-2 border-black mr-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search"
            className="bg-[#F9F9F9] focus:outline-none"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products
            .filter((product) =>
              selectedTags.every((tag) => product.tags.includes(tag))
            )
            .map((product) => (
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
            nextPage={pageNumber + 1} // Correct nextPage value
          />
        )}
      </div>
    </div>
  );
}
