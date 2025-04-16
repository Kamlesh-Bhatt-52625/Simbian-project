"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const alertVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30, transition: { duration: 1 } },
};

export default function AnimatedAlertList({ alerts, position = "left" }) {
  const [currentAlert, setCurrentAlert] = useState(null);
  const isRight = position === "right";
  const side = isRight ? "left" : "right";

  useEffect(() => {
    if (alerts.length === 0) return;

    const latestAlert = alerts[alerts.length - 1];
    setCurrentAlert(null);

    const timer = setTimeout(() => {
      setCurrentAlert({ ...latestAlert, timestamp: Date.now() });
    }, 300);

    return () => clearTimeout(timer);
  }, [alerts]);

  return (
    <div
      className={`absolute top-[30%] ${
        isRight ? "right-[20%]" : "left-[20%]"
      } flex flex-col items-start z-20 gap-2`}
    >
      <AnimatePresence mode="wait">
        {currentAlert && (
          <motion.div
            key={
              currentAlert.title + currentAlert.desc + currentAlert.timestamp
            }
            className="relative overflow-visible flex items-start gap-3 px-4 py-3 bg-blend-color-burn text-white border border-white/20 rounded-md shadow-md backdrop-blur-sm min-w-[300px]"
            variants={alertVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", damping: 20 }}
          >
            {/* External Light Ray */}
            <div
              className={`absolute top-1/2 ${
                isRight ? "left-[-60%]" : "right-[-60%]"
              } transform -translate-y-1/2 w-[200px] h-[2px] pointer-events-none z-[-1] ${
                !isRight ? "rotate-180" : ""
              }`}
            >
              <div className="w-full h-full bg-gradient-to-l from-white/70 via-white/20 to-transparent" />
            </div>

            {currentAlert.icon}
            <div>
              <h4 className="text-sm font-bold leading-none">
                {currentAlert.title}
              </h4>
              <p className="text-xs text-white/80">{currentAlert.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
