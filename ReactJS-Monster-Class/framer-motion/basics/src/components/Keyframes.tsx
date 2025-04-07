import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 3, 3, 4, 3, 2, 1], // start, end, start, end, start, end, start, end, start
          rotate: [0, 0, 270, 270, 0], // degrees
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 5 }}
      />
    </div>
  );
}
