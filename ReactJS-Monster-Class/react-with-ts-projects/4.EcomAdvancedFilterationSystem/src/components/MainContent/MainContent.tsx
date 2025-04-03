import React from "react";
import { useFilter } from "../Sidebar/FilterContext";
import { BsFillFilterCircleFill } from "react-icons/bs";
import axios from "axios";
import { Product } from "./Product";
import ProductCard from "./ProductCard";

export default function MainContent() {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [filter, setFilter] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;

  React.useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(`error while fetching data ${error}`));
  }, [currentPage, keyword]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "cheap":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredProducts = getFilteredProducts();

  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - currentPage - 1));
    }

    if (currentPage + 2 > totalPages) {
      startPage = Math.min(1, startPage - (2 - totalPages - currentPage));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5 mr-[10rem]">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-5 mt-3">
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-soft rounded
            flex items-center border px-4 py-2"
              >
                <BsFillFilterCircleFill size={16} className="mr-2" />
                <span className="capitalize">
                  {filter === "all"
                    ? "Filter"
                    : filter.charAt(0).toLowerCase() + filter.slice(1)}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md"
              >
                <li>
                  <a onClick={() => setFilter("cheap")}>Cheap</a>
                </li>
                <li>
                  <a onClick={() => setFilter("expensive")}>Expensive</a>
                </li>
                <li>
                  <a onClick={() => setFilter("popular")}>Popular</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4
        gap-5 mt-4"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="join mt-3">
          <button
            className="join-item btn disabled:hidden"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            «
          </button>
          {getPaginationButtons().map((page) => (
            <button
              className={`join-item btn ${
                page === currentPage ? "btn-neutral" : ""
              }`}
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="join-item btn disabled:hidden"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            »
          </button>
        </div>
      </div>
    </section>
  );
}
