import { motion } from "framer-motion";
import React from "react";

const items = [
  {
    title: "Title 1",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nostrum, minus ex nihil",
  },
  { title: "Title 2", content: "Lorem ipsum dolor sit, amet" },
  {
    title: "Title 3",
    content:
      "amet consectetur adipisicing elit. Ducimus nostrum, minus ex nihil",
  },
  { title: "Title 4", content: "Ducimus nostrum, minus ex nihil" },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="btn btn-outline btn-secondary"
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </button>
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="p-2 bg-gray-200 rounded text-black">
              {item.content}
            </h1>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
