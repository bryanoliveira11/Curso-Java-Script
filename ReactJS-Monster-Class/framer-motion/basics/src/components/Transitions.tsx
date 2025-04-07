import { motion } from "framer-motion";

export default function Transitions() {
  return (
    <div>
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 2, delay: 2, ease: 'easeInOut' }}
      />
    </div>
  );
}
