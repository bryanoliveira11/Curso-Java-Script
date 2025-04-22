import { easeInOut, motion } from "framer-motion";

export default function SpinningIcon() {
  return (
    <motion.div className="bg-blue-400 w-20 h-20"
    animate={{rotate: 360}}
    transition={{duration:2, repeat: Infinity, ease: easeInOut}}/>
  );
}
