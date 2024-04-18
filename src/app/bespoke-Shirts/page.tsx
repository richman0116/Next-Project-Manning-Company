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
  const [designOptions, setDesignOptions] = useState<any[]>([]);
  const [selectedDesign, setSelectedDesign] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [fabricOptions, setFabricOptions] = useState<any[]>([]);
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
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
          new Set(productsData.map((product) => product.productType))
        );
        setProductTypeOptions(productTypes);

        const tags = new Set(productsData.flatMap((product) => product.tags));
        setAllTags(Array.from(tags));

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

  const handleTagChange = (selectedOptions: string[]) => {
    setSelectedTags(selectedOptions);
    const filteredProducts = allProducts.filter((product) =>
      selectedOptions.every((tag) => product.tags.includes(tag))
    );
    setProducts(filteredProducts);
  };

  const handleDesignChange = (event: any) => {
    setSelectedDesign(event.target.value);
    setSearchTerm("");
    setSelectedTags([]);
    setSelectedFabric("");
    setPageNumber(1);
  };

  const handleFabricChange = (event: any) => {
    setSelectedFabric(event.target.value);
    setSearchTerm("");
    setSelectedTags([]);
    setSelectedDesign("");
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
    setSelectedTags([]);
    setSearchTerm("");
    setPageNumber(1);
    setProducts(allProducts);
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
          >
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="bg-[#F9F9F9]"
        >
          <option value="default">PRICE</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <select onChange={(e) => setSelectedProductType(e.target.value)}>
          <option value="">FABRIC TYPE</option>
          {productTypeOptions.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          className="p-2 border rounded-md mb-4"
          onChange={handleDesignChange}
        >
          <option value="">Select a Design</option>
          {designOptions.map((design, index) => (
            <option key={index} value={design}>
              {design}
            </option>
          ))}
        </select>
        <select
          className="p-2 border rounded-md mb-4"
          onChange={handleFabricChange}
        >
          <option value="">FABRIC WEIGHT SHIRTS</option>
          {fabricOptions.map((fabric, index) => (
            <option key={index} value={fabric}>
              {fabric}
            </option>
          ))}
        </select>
        <div>
          <button onClick={handleClearAll}>Clear all</button>
        </div>
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
