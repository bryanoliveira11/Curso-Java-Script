import { motion } from "framer-motion";

export default function ImageGallery() {
  return (
    <div className="flex w-[80%]">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://picsum.photos/400"
            alt={`Caption for Image ${index}`}
            className="w-full h-auto"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center 
           backdrop-brightness-50 text-white opacity-0 
          hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <p className="text-lg">Caption for Image {index}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
