import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <motion.div className="card bg-base-100 w-96 shadow-sm cursor-pointer"
    initial={{scale: 1, rotate: 0}}
    whileHover={{scale: 1.05, rotate: 3}}
    whileTap={{scale: 0.95}}
    drag dragConstraints={{left: -50, right: 50, top: -50, bottom: 50}}
    dragElastic={0.2}
    transition={{type: 'spring', stiffness: 300}}>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </motion.div>
  );
}
