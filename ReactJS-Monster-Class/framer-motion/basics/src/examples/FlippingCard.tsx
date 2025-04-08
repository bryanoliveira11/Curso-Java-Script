import { motion } from "framer-motion";
import React from "react";

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export default function FlippingCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      variants={cardVariants}
      initial="front"
      animate={isFlipped ? "back" : "front"}
      transition={{ duration: 0.5 }}
      className="card bg-base-100 w-96 shadow-sm cursor-pointer"
    >
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
