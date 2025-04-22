import { motion } from "framer-motion";

export default function ComplexAnimation() {
  return (
    <motion.div
      className="bg-purple-500 w-20 h-20"
      animate={{x:200, rotate: 360, scale: 1.5}}
      transition={{duration: 2, repeat: Infinity}}
    />
  );
}
