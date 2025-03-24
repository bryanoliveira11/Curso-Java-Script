import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white">
        <ul className="p-4 flex flex-col justify-between items-center h-full">
          <div className="top">
            <li className="mb-2">
              <div className="flex items-center cursor-pointer">
                <FaHome className="mr-2 mb-3" size={18} />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center cursor-pointer">
                <FaUser className="mr-2 mb-3" size={18} />
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center cursor-pointer">
                <FaSearch className="mr-2 mb-3" size={18} />
              </div>
            </li>
          </div>

          <div className="bottom">
            <li>
              <IoMdSettings size={18} className="cursor-pointer" />
              <FaUser className="mt-5 cursor-pointer" size={18} />
            </li>
          </div>
        </ul>
      </aside>
    </>
  );
}
