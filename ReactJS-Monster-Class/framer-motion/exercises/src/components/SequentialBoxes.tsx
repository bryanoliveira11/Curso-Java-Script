import { motion } from "framer-motion";

export default function SequentialBoxes() {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-teal-500 h-20 w-20 m-2"
          animate={{ x: 100 }}
          transition={{ duration: 0.5, delay: index * 1 }}
        />
      ))}
    </div>
  );
}
