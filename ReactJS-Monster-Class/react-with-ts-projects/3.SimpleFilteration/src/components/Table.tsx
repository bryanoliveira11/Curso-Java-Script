import React from "react";
import { data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdSort } from "react-icons/md";

const Table = () => {
  const [projects, setProjects] = React.useState(data);
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const [filtersVisible, setFiltersVisible] = React.useState(false);
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: string;
  } | null>(null);

  const [filters, setFilters] = React.useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });

  const [searchQuery, setSearchQuery] = React.useState("");

  const sortProjects = (key: keyof (typeof data)[0]) => {
    const sortedProjects = [...projects];

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setSortConfig({ key, direction: "desc" });
    } else {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "asc" });
    }

    setProjects(sortedProjects);
  };

  const handleSortOption = (option: keyof (typeof data)[0]) => {
    sortProjects(option);
    setDropdownVisible(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredProjects = projects.filter(
    (project) =>
      (searchQuery === "" ||
        Object.values(project).some((value) =>
          value.toLowerCase().includes(searchQuery.toLowerCase())
        )) &&
      (filters.name === "" ||
        project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.country === "" ||
        project.country
          .toLowerCase()
          .includes(filters.country.toLowerCase())) &&
      (filters.email === "" ||
        project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.project === "" ||
        project.project
          .toLowerCase()
          .includes(filters.project.toLowerCase())) &&
      (filters.status === "" ||
        project.status.toLowerCase().includes(filters.status.toLowerCase()))
  );

  return (
    <div className="py-4 w-[93%] ml-[5rem]">
      <div className="flex relative items-center mb-5">
        <button
          onClick={() => setDropdownVisible(!dropdownVisible)}
          className="border border-gray-700 flex items-center
            justify-center text-white p-2 rounded cursor-pointer"
        >
          <BiSort className="mr-[0.3rem]" /> Sort
          <AiOutlineDown className="ml-2" />
        </button>

        {dropdownVisible && (
          <div
            className="absolute top-full left-0 mt-2 bg-gray-800
            border-gray-700 shadow-lg"
          >
            <button
              className="block px-4 py-2 text-white w-full
            hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSortOption("client")}
            >
              Client
            </button>
            <button
              className="block px-4 py-2 text-white w-full
            hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSortOption("country")}
            >
              Country
            </button>
            <button
              className="block px-4 py-2 text-white w-full
            hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSortOption("date")}
            >
              Date
            </button>
          </div>
        )}

        <div className="relative ml-4 w-full">
          <button
            onClick={() => setFiltersVisible(!filtersVisible)}
            className="border border-gray-700 flex items-center
        justify-center text-white p-2 rounded cursor-pointer"
          >
            <MdSort className="mr-[0.3rem]" /> Filters
            <AiOutlineDown className="ml-2" />
          </button>

          {filtersVisible && (
            <div
              className="absolute top-full left-0 mt-2 bg-gray-800 border
            border-gray-700 rounded shadow-lg p-4"
            >
              <div>
                <label className="block text-white">Filter By Name:</label>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onClick={handleFilterChange}
                  className="bg-gray-900 text-white rounded
                    p-2 w-full mt-2 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mt-2">
                  Filter By Country:
                </label>
                <input
                  type="text"
                  name="country"
                  value={filters.country}
                  onClick={handleFilterChange}
                  className="bg-gray-900 text-white rounded
                    p-2 w-full mt-2 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mt-2">
                  Filter By Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={filters.email}
                  onClick={handleFilterChange}
                  className="bg-gray-900 text-white rounded
                    p-2 w-full mt-2 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mt-2">
                  Filter By Project:
                </label>
                <input
                  type="text"
                  name="project"
                  value={filters.project}
                  onClick={handleFilterChange}
                  className="bg-gray-900 text-white rounded
                    p-2 w-full mt-2 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white mt-2">
                  Filter By Status:
                </label>
                <input
                  type="text"
                  name="status"
                  value={filters.status}
                  onClick={handleFilterChange}
                  className="bg-gray-900 text-white rounded
                    p-2 w-full mt-2 focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <table
        className="min-w-full table-auto rounded border
        border-gray-700 text-white"
      >
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr className="border border-gray-700" key={index}>
              <td className="px-4 py-2">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-[3rem] h-[3rem] object-cover rounded-full"
                />
              </td>
              <td className="px-4 py-2">{project.client}</td>
              <td className="px-4 py-2">{project.country}</td>
              <td className="px-4 py-2">{project.email}</td>
              <td className="px-4 py-2">{project.project}</td>
              <td className="px-4 py-2">
                <div className="w-24 h-2 bg-gray-700 rounded">
                  <div className="h-2 bg-green-500 rounded"></div>
                </div>
              </td>
              <td className="px-4 py-2 w-[10rem]">
                <span>{project.status}</span>
              </td>
              <td className="px-4 py-2">{project.date}</td>
              <td className="px-4 py-2">
                <div className="relative">
                  <BsThreeDots className="cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2
        disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-white">Page 1 of 4</span>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2
        disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
