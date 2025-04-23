import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="btn btn-outline btn-secondary"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Modal
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed flex
      justify-center items-center"
          >
            <motion.div
              className="bg-white p-4 rounded"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-100vh" }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.5 }}
              animate={{ y: "0vh" }}
            >
              <h2 className="text-lg font-bold text-black">Modal Title</h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                laboriosam adipisci corporis delectus officia tempore. Quos
                tempore debitis omnis voluptates, at blanditiis. Rerum, ipsam
                maxime beatae aliquam consequuntur aut harum!
              </p>
              <button
                className="btn btn-outline btn-error mt-2"
                onClick={() => setIsVisible(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
