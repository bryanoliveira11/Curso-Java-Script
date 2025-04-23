import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function FadeComponent() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle Fade
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="p-4 bg-gray-200 rounded w-60 h-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-black font-bold text-3xl">
              Fade Component
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
