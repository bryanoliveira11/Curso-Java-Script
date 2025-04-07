import { motion } from "framer-motion";

export default function Animations() {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          x: 100,
          y: 50,
          rotate: 60,
          scale: 2,
          skew: 20,
        }}
      />
    </div>
  );
}
