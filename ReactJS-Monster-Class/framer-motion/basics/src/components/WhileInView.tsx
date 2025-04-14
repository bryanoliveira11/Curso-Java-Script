import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-start mt-[30rem]">
      <div className="h-[200vh] w-[30rem] flex justify-center items-center">
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            scale: 1.1,
            opacity: 1,
            y: -200,
          }}
        >
          <h2 className="text-2xl font-bold mb-2 text-black">Card</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            repudiandae provident nisi rerum, ratione iusto qui, veniam
            architecto tempora veritatis illo nam nemo! Libero unde voluptatem,
            dolorum voluptas nulla harum.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function WhileInView() {
  return (
    <div>
      <h1 className="text-center text-3xl mt-[50rem]">Scroll</h1>
      <div className="h-screen">
        <AnimatedCard />
      </div>
    </div>
  );
}
