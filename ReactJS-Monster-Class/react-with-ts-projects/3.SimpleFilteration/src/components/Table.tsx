import React from "react";
import { data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const Table = () => {
  const [projects, setProjects] = React.useState(data);
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: string;
  } | null>(null);

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

  return (
    <div className="py-4 w-[93%] ml-[5rem]">
      <div className="relative">
        <div className="flex items-center mb-5">
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
