import { motion, useTransform, useMotionValue } from "framer-motion";

export default function UseTransform() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const bgColor = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"]);

  return (
    <motion.div
      className="w-32 h-32 flex items-center justify-center
     rounded-lg shadow-lg cursor-pointer bg-yellow-500"
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      style={{x, y, backgroundColor: bgColor}}
    >
      <span className="text-black font-bold">Drag me</span>
    </motion.div>
  );
}
