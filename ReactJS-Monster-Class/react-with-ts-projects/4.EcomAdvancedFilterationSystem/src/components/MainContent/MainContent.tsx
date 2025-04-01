import React from "react";
import { useFilter } from "../Sidebar/FilterContext";
import { BsFillFilterCircleFill } from "react-icons/bs";

export default function MainContent() {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();
  const [products, setProducts] = React.useState<unknown[]>([]);
  const [filter, setFilter] = React.useState("all");
  const [current, setCurrent] = React.useState(1);
  const itemsPerPage = 12;

  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
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
                <BsFillFilterCircleFill size={16} className="mr-2"/>
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
      </div>
    </section>
  );
}
