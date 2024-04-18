// "use client";
// import React, { useEffect, useState } from "react";
// import Wrapper from "@/app/Shared/Wrapper";
// import { fetchProducts } from "@/lib/product";
// import ProductCard from "./ProductCard";

// const designOptions = ["DESIGN", "Stripes", "Checkered", "Plain"];
// const weightOptions = ["FABRIC WEIGHT SHIRTS", "Light", "Medium", "Heavy"];
// const fabricOptions = ["FABRIC TYPE", "Cotton", "Polyester", "Silk"];
// const priceOptions = ["PRICE", "Low", "Medium", "High"];

// interface Product {
//   id: string;
//   title: string;
//   featuredImage: {
//     url: string;
//     altText: string;
//   };
//   priceRange: {
//     minVariantPrice: {
//       amount: string;
//     };
//   };
// }

// const Dropdown = ({ searchParams }: any) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const [colorOptions, setColorOptions] = useState<string[]>([]);
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const allProducts = await fetchProducts();
//         setProducts(allProducts);
//         const colorOptions = allProducts.map((product) => product.tags).flat();

//         setColorOptions(colorOptions);
//         console.log("colorOptions", colorOptions);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     loadProducts();
//   }, []);

//   const handleSearch = async () => {
//     if (!searchTerm) return;
//     try {
//       const filteredProducts = await fetchProducts();
//       const filtered = filteredProducts.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setProducts(filtered);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };
//   return (
//     <Wrapper>
//       <div className="flex flex-wrap flexCenter pt-[68px] gap-[41px] w-full">
//         <div className=" hidden md:block">
//           <select id="color" className="p-2 bg-[#F9F9F9]">
//             <option className="filtersection font-Akzidenz" value="">
//               COLOR
//             </option>
//             {Array.from(new Set(colorOptions)).map((option, index) => (
//               <option
//                 className="filtersection font-Akzidenz"
//                 key={index}
//                 value={option.toLowerCase()}
//               >
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className=" hidden md:block">
//           <select id="design" className="p-2 bg-[#F9F9F9]">
//             {designOptions.map((option, index) => (
//               <option
//                 className="filtersection font-Akzidenz"
//                 key={index}
//                 value={option.toLowerCase()}
//               >
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className=" hidden md:block">
//           <select id="weight" className="p-2 bg-[#F9F9F9]">
//             {weightOptions.map((option, index) => (
//               <option
//                 className="filtersection font-Akzidenz"
//                 key={index}
//                 value={option.toLowerCase()}
//               >
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className=" hidden md:block">
//           <select id="fabric" className="p-2 bg-[#F9F9F9]">
//             {fabricOptions.map((option, index) => (
//               <option
//                 className="filtersection font-Akzidenz"
//                 key={index}
//                 value={option.toLowerCase()}
//               >
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className=" hidden md:block">
//           <select id="price" className="p-2 bg-[#F9F9F9]">
//             {priceOptions.map((option, index) => (
//               <option
//                 className="filtersection font-Akzidenz"
//                 key={index}
//                 value={option.toLowerCase()}
//               >
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className=" hidden md:block">
//           <p className="filtersection font-Akzidenz">Clear all</p>
//         </div>
//         <div className=" hidden md:block">
//           <p className="filtersection font-Akzidenz">CHANGE VIEW</p>
//         </div>
//         <div className="flex bg-[#F9F9F9]  md:pt-0 pt-[150px]  border-b-2 border-black mr-4">
//           <div className=" pt-1.5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="17"
//               height="17"
//               viewBox="0 0 17 17"
//               fill="none"
//             >
//               <path
//                 d="M6.03645 2.0249C7.10035 2.0249 8.12067 2.44753 8.87296 3.19982C9.62525 3.95211 10.0479 4.97243 10.0479 6.03633C10.0479 7.02993 9.68377 7.9433 9.08514 8.64684L9.25177 8.81347H9.73931L12.825 11.8992L11.8993 12.8249L8.8136 9.73919V9.25165L8.64697 9.08502C7.94342 9.68364 7.03005 10.0478 6.03645 10.0478C4.97256 10.0478 3.95223 9.62513 3.19994 8.87284C2.44766 8.12055 2.02502 7.10023 2.02502 6.03633C2.02502 4.97243 2.44766 3.95211 3.19994 3.19982C3.95223 2.44753 4.97256 2.0249 6.03645 2.0249ZM6.03645 3.25919C4.4936 3.25919 3.25931 4.49347 3.25931 6.03633C3.25931 7.57919 4.4936 8.81347 6.03645 8.81347C7.57931 8.81347 8.8136 7.57919 8.8136 6.03633C8.8136 4.49347 7.57931 3.25919 6.03645 3.25919Z"
//                 fill="#2B2B2B"
//               />
//             </svg>
//           </div>
//           <div className="bg-[#F9F9F9]  ">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Search"
//               className="bg-[#F9F9F9] focus:outline-none"
//             />
//           </div>
//         </div>
//         <div className="">
//           <div className="   md:px-0 flex justify-between ">
//             <div className=" flex    gap-6  pt-4">
//               <p className="namep  font-Akzidenz ">Show</p>
//               <p className="  underline border-black number font-Akzidenz ">
//                 25
//               </p>
//               <p className="number  font-Akzidenz ">50</p>
//               <p className="number  font-Akzidenz ">100</p>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-[35px]">
//             {products.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 id={product.id}
//                 imageUrl={product.featuredImage.url}
//                 imageAlt={product.featuredImage.altText}
//                 title={product.title}
//                 price={product.priceRange.minVariantPrice.amount}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Dropdown;
// "use client";
// import { useEffect, useState } from "react";
// import BespokeShirts from "../components/Product/BespokeShirts";
// import PaginationControls from "../components/Product/PaginationControls";
// import ProductCard from "../components/Product/ProductCard";
// import { fetchProducts } from "@/lib/product";

// const ITEMS_PER_PAGE = 25;

// async function getData(
//   pageNumber: number
// ): Promise<{ items: any[]; itemCount: number }> {
//   const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
//   const allProducts = await fetchProducts();
//   const paginatedProducts = allProducts.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );
//   return { items: paginatedProducts, itemCount: allProducts.length };
// }

// export default function Page({
//   searchParams,
// }: {
//   searchParams: { page: string };
// }) {
//   const [sortOrder, setSortOrder] = useState("default");
//   const [allProducts, setAllProducts] = useState<any[]>([]);
//   const [products, setProducts] = useState<any[]>([]);
//   const [productTypeOptions, setProductTypeOptions] = useState<string[]>([]);
//   const [selectedProductType, setSelectedProductType] = useState<string>("");

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [allTags, setAllTags] = useState<string[]>([]);
//   let pageNumber = parseInt(searchParams.page, 10) || 1;
//   const [totalPages, setTotalPages] = useState(0);
//   const [isPageOutOfRange, setIsPageOutOfRange] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { items, itemCount } = await getData(pageNumber);
//         setProducts(items);
//         setTotalPages(Math.ceil(itemCount / ITEMS_PER_PAGE));
//         setIsPageOutOfRange(pageNumber > totalPages);
//         const productsData = await fetchProducts();
//         setAllProducts(productsData);

//         const productTypes = Array.from(
//           new Set(productsData.map((product) => product.productType))
//         );
//         setProductTypeOptions(productTypes);
//         const tags = items.flatMap((product) => product.tags);
//         setAllTags([...new Set(tags)]);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchData();
//   }, [pageNumber, totalPages]);
//   useEffect(() => {
//     if (!selectedProductType) {
//       setProducts(allProducts);
//       return;
//     }

//     const filteredProducts = allProducts.filter(
//       (product) => product.productType === selectedProductType
//     );
//     setProducts(filteredProducts);
//   }, [selectedProductType, allProducts]);
//   const handleSearch = async () => {
//     if (!searchTerm.trim()) return;
//     try {
//       const filteredProducts = (await fetchProducts()).filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setProducts(filteredProducts);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleTagChange = (selectedOptions: string[]) => {
//     setSelectedTags(selectedOptions);
//   };
//   const sortProducts = (order: any) => {
//     const sortedProducts = [...products];
//     sortedProducts.sort((a, b) => {
//       const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
//       const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
//       if (order === "lowToHigh") {
//         return priceA - priceB;
//       } else if (order === "highToLow") {
//         return priceB - priceA;
//       } else {
//         // Default sorting order
//         return 0;
//       }
//     });
//     setProducts(sortedProducts);
//   };
//   const handleSortChange = (event: any) => {
//     const order = event.target.value;
//     setSortOrder(order);
//     sortProducts(order);
//   };
//   return (
//     <div className="bg-[#F9F9F9]">
//       <BespokeShirts />
//       <div className="flex flex-wrap flexCenter pt-[68px] gap-[41px] w-full">
//         <div>
//           <select
//             multiple
//             value={selectedTags}
//             onChange={(e) =>
//               handleTagChange(
//                 Array.from(e.target.selectedOptions, (option) => option.value)
//               )
//             }
//             className="p-2 rounded border-gray-300"
//             size={5}
//           >
//             {allTags.map((tag, index) => (
//               <option key={index} value={tag}>
//                 {tag} COLOR
//               </option>
//             ))}
//           </select>
//         </div>
//         <select
//           value={sortOrder}
//           onChange={handleSortChange}
//           className="bg-[#F9F9F9]"
//         >
//           <option value="PRICE">PRICE</option>
//           <option value="lowToHigh">Low to High</option>
//           <option value="highToLow">High to Low</option>
//         </select>
//         <select
//           onChange={(e) => {
//             setSelectedProductType(e.target.value);
//           }}
//         >
//           <option value="">FABRIC TYPE</option>
//           {productTypeOptions.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//         <div className="flex bg-[#F9F9F9] border-b-2 border-black mr-4">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Search"
//             className="bg-[#F9F9F9] focus:outline-none"
//           />
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//           {products
//             .filter((product) =>
//               selectedTags.every((tag) => product.tags.includes(tag))
//             )
//             .map((product) => (
//               <ProductCard
//                 key={product.id}
//                 id={product.id}
//                 imageUrl={product.featuredImage.url}
//                 imageAlt={product.featuredImage.altText}
//                 title={product.title}
//                 price={product.priceRange.minVariantPrice.amount}
//               />
//             ))}
//         </div>
//         {!isPageOutOfRange && (
//           <PaginationControls
//             pageNumber={pageNumber}
//             totalPages={totalPages}
//             nextPage={pageNumber + 1} // Correct nextPage value
//           />
//         )}
//       </div>
//     </div>
//   );
// }

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
        const productsData = await fetchProducts();
        setAllProducts(productsData);

        const { items, itemCount } = await getData(pageNumber, productsData);
        setProducts(items);
        setTotalPages(Math.ceil(itemCount / ITEMS_PER_PAGE));
        setIsPageOutOfRange(pageNumber > totalPages);

        const productTypes = new Set(
          productsData.map((product) => product.productType)
        );
        setProductTypeOptions(Array.from(productTypes));

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
  }, [pageNumber]);

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
              {tag}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="bg-[#F9F9F9]"
        >
          <option value="PRICE">PRICE</option>
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
