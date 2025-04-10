import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StaggerAnimation() {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="box2 mt-[2rem]"
          variants={childVariants}
        />
      ))}
    </motion.div>
  );
}
