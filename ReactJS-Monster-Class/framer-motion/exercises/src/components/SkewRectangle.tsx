import { motion } from "framer-motion";
import React from "react";

export default function SkewRectangle() {
  const [isSkewed, setIsSkewed] = React.useState(true);

  return (
    <motion.div
      className="bg-green-400 w-20 h-20 flex flex-col align-center justify-center"
      animate={{ skewX: isSkewed ? 20 : 0 }}
      transition={{ duration: 1 }}
      onClick={() => setIsSkewed(!isSkewed)}
    >
      <span className="text-black text-bold text-2xl text-center">CLICK</span>
    </motion.div>
  );
}
