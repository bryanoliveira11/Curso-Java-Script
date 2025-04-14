import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

export default function UseMotionVal() {
  const x = useMotionValue(100);

  useMotionValueEvent(x, "animationStart", () => {
    console.log("anim started on x");
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{ left: 0, right: 200 }}
      style={{ x }}
    ></motion.div>
  );
}
