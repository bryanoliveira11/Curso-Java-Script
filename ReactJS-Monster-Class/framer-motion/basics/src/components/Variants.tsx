import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

export default function Variants() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <motion.div
        className="box cursor-pointer"
        variants={variants}
        initial="hidden" // initial state
        animate={isVisible ? "visible" : "hidden"} // animate to this state
        exit={"exit"} // exit to this state
        transition={{ duration: .5 }}
        onClick={() => setIsVisible(!isVisible)}
      />
    </div>
  );
}
