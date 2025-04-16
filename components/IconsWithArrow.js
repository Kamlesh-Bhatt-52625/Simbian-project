import { motion } from "framer-motion";

const IconsWithArrow = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="flex items-center justify-center w-8 h-8 bg-white text-gray-700 rounded-md border border-gray-300 shadow-sm"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          🌐
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-8 h-8 bg-white text-gray-700 rounded-md border border-gray-300 shadow-sm"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          🔒
        </motion.div>
        <motion.div
          className="flex items-center justify-center w-8 h-8 bg-white text-gray-700 rounded-md border border-gray-300 shadow-sm"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          🛡️
        </motion.div>

        <motion.div className="flex items-center justify-center w-8 h-8 bg-white text-gray-700 rounded-md border border-gray-300 shadow-sm ">
          <motion.div className="w-4 h-4 border-t-2 border-gray-700 border-solid rounded-full animate-spin"></motion.div>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="relative w-24 h-40">
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-36 bg-gray-300 rounded-full"
            animate={{
              backgroundColor: ["#ccc", "#999", "#ccc"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          <div className="text-white -rotate-90 -mt-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6  border-gray-300 ">
            {"<"}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IconsWithArrow;
