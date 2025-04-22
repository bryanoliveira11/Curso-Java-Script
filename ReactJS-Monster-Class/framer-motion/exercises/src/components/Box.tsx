import { motion } from "framer-motion";

export default function Box() {
  return (
    <motion.div
      className="box bg-blue-200 w-20 h-20"
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 2 }}
    />
  );
}
