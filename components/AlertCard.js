import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AlertCard = ({ title, count, icon, color, desc, threat }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const motionValue = useMotionValue(0);
  const transformed = useTransform(motionValue, (val) => Math.floor(val));

  useEffect(() => {
    const unsubscribe = transformed.on("change", (v) => setDisplayCount(v));

    const duration = count >= 5 ? 5 : count;

    const controls = animate(motionValue, count, {
      duration,
      ease: "easeInOut",
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count]);

  const colorClasses = {
    red: "border-red-500",
    yellow: "border-yellow-400",
    orange: "border-orange-500",
    blue: "border-[#3B82F6]",
  };

  const baseClasses = `relative p-4 rounded-2xl border text-white bg-blend-saturation backdrop-blur-md shadow-lg transition-all duration-500 hover:shadow-xl hover:bg-black/50 hover:scale-105 flex flex-col justify-between items-start gap-4 cursor-pointer`;

  return (
    <motion.div
      className={`${baseClasses} ${colorClasses[color] || "border-gray-300"} `}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {threat && (
        <motion.div
          className={`absolute inset-0 rounded-2xl z-0 `}
          animate={{
            backgroundColor: [
              "rgba(255, 0, 0, 0.1)",
              "rgba(255, 0, 0, 0.2)",
              "rgba(255, 0, 0, 0.1)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="text-lg md:text-md font-semibold flex items-center gap-2">
            <span className="text-xl">{icon}</span> {title}
          </div>
          <motion.div
            className="text-xl ml-2 font-bold"
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            {displayCount}
          </motion.div>
        </div>
        {desc ? (
          <p className="mt-3 text-xs md:text-base text-white/80">{desc}</p>
        ) : (
          <div className="flex items-center justify-between mx-2 mt-2 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 p-4 rounded-xl" />
        )}
      </div>
    </motion.div>
  );
};

export default AlertCard;
