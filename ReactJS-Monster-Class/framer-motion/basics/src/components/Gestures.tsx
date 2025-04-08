import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <div className="flex gap-20">
      {/* whileHover */}
      <motion.div
        className="bg-yellow-300 flex items-center justify-center h-[180px] w-[180px]"
        whileHover={{ scale: 1.2, rotate: 30 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-black font-bold text-2xl">Hover</span>
      </motion.div>

      {/* whileTap */}
      <motion.div
        className="bg-yellow-300 flex items-center justify-center h-[180px] w-[180px] cursor-pointer"
        whileTap={{ scale: 0.8, background: "crimson" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-black font-bold text-2xl">Tap</span>
      </motion.div>

      {/* whileDrag */}
      <motion.div
        className="bg-yellow-300 flex items-center justify-center h-[180px] w-[180px] cursor-grab"
        drag
        dragConstraints={{
          top: -50,
          left: 50,
          right: 50,
          bottom: -50,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-black font-bold text-2xl">Drag</span>
      </motion.div>
    </div>
  );
}
