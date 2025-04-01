import React from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

export default function Sidebar() {
  const [categories, setCategories] = React.useState<string[]>([]);
  const [keywords] = React.useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const categories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(categories);
      } catch (error) {
        console.log("error fetching products", error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeyword = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>

      <section>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <div className="flex justify-center gap-2 items-center mt-3 mb-5">
          <input
            type="number"
            className="input"
            placeholder="Min"
            min="1"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            className="input"
            placeholder="Max"
            min="1"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
          <div>
            {categories.map((category, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  name="radio-3"
                  className="radio mr-3"
                  value={category}
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategory === category}
                />
                <span className="capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                className="block mb-2 py-2 px-4 w-full cursor-pointer
                text-left border rounded hover:bg-gray-200 hover:text-black"
                onClick={() => handleKeyword(keyword)}
              >
                <span className="capitalize">{keyword}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          className="btn btn-neutral w-full cursor-pointer"
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
}
