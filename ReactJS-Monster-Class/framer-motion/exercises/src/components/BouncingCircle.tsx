import { easeInOut, motion } from "framer-motion";

export default function BouncingCircle() {
  return (
    <motion.div
      className="bg-red-500 rounded-full w-20 h-20"
      animate={{y: [0, -100, 0]}}
      transition={{duration: 1, repeat: Infinity, ease: easeInOut}}
    />
  );
}
