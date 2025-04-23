import { motion } from "framer-motion";

export default function ResponsiveButton() {
  return (
    <motion.button
      className="btn btn-outline btn-secondary"
      initial={{scale: 1}}
      transition={{duration: 0.5}}
      whileTap={{scale: 0.9}}
    >
      Responsive Button
    </motion.button>
  );
}
