import { motion } from "framer-motion";

export default function PulsingButton() {
  return (
    <div>
      <motion.button
        className="btn btn-info"
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <span className="font-bold text-md text-white">Click me</span>
      </motion.button>
    </div>
  );
}
