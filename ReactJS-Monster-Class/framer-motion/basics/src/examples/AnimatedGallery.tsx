import { motion } from "framer-motion";
import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, staggerDirection: 1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedGallery() {
  const [showImages, setShowImages] = React.useState(false);

  return (
    <div>
      <button
        className="btn btn-warning font-bold text-black p-4"
        onClick={() => setShowImages(!showImages)}
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>
      <motion.div
        className="flex gap-5 mt-5"
        variants={parentVariants}
        initial="initial"
        animate={showImages ? 'visible' : 'hidden'}
      >
        {galleryImages.map((image, index) => (
          <motion.img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[300px] rounded"
            variants={childVariants}
          />
        ))}
      </motion.div>
    </div>
  );
}
