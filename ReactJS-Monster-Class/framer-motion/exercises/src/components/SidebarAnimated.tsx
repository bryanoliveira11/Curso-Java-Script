import React from "react";
import { motion } from "framer-motion";

export default function SidebarAnimated() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex">
      <button
        className="btn btn-outline btn-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Sidebar
      </button>

      <motion.div
        className={`fixed left-0 top-0 h-full
        bg-gray-700 text-white p-4 ${isOpen ? "" : "-translate-x-full"}`}
        initial={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
      </motion.div>
    </div>
  );
}
