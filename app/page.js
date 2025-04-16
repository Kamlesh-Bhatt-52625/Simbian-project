"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AlertCard from "../components/AlertCard";
import alertData from "../data/WithoutSimbian/alertData.js";
import alertData2 from "@/data/WithSimbian/alertData2";
import IconsWithArrow from "../components/IconsWithArrow";
import AnimatedAlert from "@/components/AlertList";
import {
  AiOutlineClockCircle,
  AiOutlineCode,
  AiOutlineRobot,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import NotificationStack from "@/components/NotificationStack";
import sampleNotifications from "@/data/WithoutSimbian/sampleNotifications";

export default function HomePage() {
  const [showWithSimbian, setShowWithSimbian] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [alertsWithSimbian, setAlertsWithSimbian] = useState([]);

  const alertTypes = [
    {
      title: "Waiting For Analyst",
      desc: "Analyst is dealing with other problems, hold on..",
      icon: <AiOutlineClockCircle className="text-yellow-400 text-xl mt-1" />,
    },
    {
      title: "Writing Query",
      desc: "Querying across so many tools gets complex...",
      icon: <AiOutlineCode className="text-blue-400 text-xl mt-1" />,
    },
    {
      title: "AI is Thinking",
      desc: "Analyzing context and generating the best response.",
      icon: <AiOutlineRobot className="text-green-400 text-xl mt-1" />,
    },
    {
      title: "System Lag",
      desc: "Performance is slower than expected — optimizing...",
      icon: <AiOutlineThunderbolt className="text-red-400 text-xl mt-1" />,
    },
  ];
  const alertTypes2 = [
    {
      title: "Triaged & Reported",
      desc: "The SOC Agent handled investigation and reporting.",
      icon: <AiOutlineClockCircle className="text-yellow-400 text-xl mt-1" />,
    },
    {
      title: "Less Noise",
      desc: "90% of alerts resolved automatically, 24/7",
      icon: <AiOutlineCode className="text-blue-400 text-xl mt-1" />,
    },
    {
      title: "Holistic Insight",
      desc: "Correlate alerts and your environment into the big picture.",
      icon: <AiOutlineRobot className="text-green-400 text-xl mt-1" />,
    },
    {
      title: "Adapts automatically",
      desc: "Investigate every alert, with best of Simbian's knowledge and yours.",
      icon: <AiOutlineThunderbolt className="text-red-400 text-xl mt-1" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWithSimbian((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let lastAlertIndex = -1;

    const alertInterval = setInterval(() => {
      let nextIndex;

      do {
        nextIndex = Math.floor(Math.random() * alertTypes.length);
      } while (nextIndex === lastAlertIndex && alertTypes.length > 1);

      lastAlertIndex = nextIndex;
      const randomAlert = alertTypes[nextIndex];

      setAlerts((prevAlerts) => [...prevAlerts, randomAlert]);
    }, 3000);

    return () => clearInterval(alertInterval);
  }, []);

  useEffect(() => {
    let lastAlertIndex = -1;

    const alertInterval = setInterval(() => {
      let nextIndex;

      do {
        nextIndex = Math.floor(Math.random() * alertTypes2.length);
      } while (nextIndex === lastAlertIndex && alertTypes2.length > 1);

      lastAlertIndex = nextIndex;
      const randomAlert = alertTypes2[nextIndex];

      setAlertsWithSimbian((prevAlerts) => [...prevAlerts, randomAlert]);
    }, 3000);

    return () => clearInterval(alertInterval);
  }, []);

  const alertCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Without Simbian Section */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-blend-lighten"
        style={{ backgroundImage: "url('/assets/Background.jpg')" }}
        initial={{ x: 0 }}
        animate={{ x: showWithSimbian ? "-100%" : 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="relative z-10 flex justify-end-safe mt-16 mr-4 h-full">
          <div>
            <h1 className="text-4xl font-bold mb-3 text-[#3958ff] text-right">
              Without Simbian
            </h1>
            <h3 className="text-1xl text-right font-semibold mb-4 text-[#3988ff]">
              If this sounds all too familiar, you might want to..
            </h3>
            <div className="flex justify-end mb-4">
              <motion.button
                whileHover={{ scale: 1.1, transition: { duration: 1 } }}
                whileTap={{ scale: 0.9 }}
                className="items-end border-2 border-white bg-white text-black font-semibold font-mono text-sm py-2 px-4 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-100 ease-in-out"
              >
                Book a demo
              </motion.button>
            </div>

            <div className="flex justify-end w-full mt-10 px-4">
              <div className="w-full sm:w-[90%] md:w-[60%] lg:w-[55%] lg:mr-[40%]">
                <div className="grid grid-cols-1 gap-6">
                  {alertData.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={alertCardVariants}
                    >
                      <AlertCard
                        key={`${index}-${
                          showWithSimbian ? "hidden" : "visible"
                        }`}
                        title={item.title}
                        count={item.count}
                        icon={item.icon}
                        color={item.color}
                        desc={item.desc}
                        threat={item.threat || false}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NotificationStack
            alertTypes={sampleNotifications}
            position={"left"}
          />
        </div>

        <div className="hidden absolute inset-0 lg:flex items-center justify-center z-10 ">
          <IconsWithArrow />
        </div>

        <AnimatedAlert alerts={alerts} position={"left"} />
      </motion.div>

      {/* With Simbian Section */}
      {showWithSimbian && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-blend-lighten"
          style={{ backgroundImage: "url('/assets/Background.jpg')" }}
          initial={{ x: "100%" }}
          animate={{ x: showWithSimbian ? 0 : "100%" }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 1 }}
        >
          <div className="absolute inset-0 bg-gray-400 opacity-40 z-0"></div>

          <div className="relative z-10 flex justify-start mt-16 ml-4 h-full">
            <div>
              <h1 className="text-4xl font-bold mb-3 text-green-400 text-left">
                With Simbian
              </h1>
              <h3 className="text-1xl text-left font-semibold mb-4 text-green-500">
                Relax. Our AI Agents will take it from here.
              </h3>

              <div className="flex justify-start w-full mt-10 px-4">
                <div className="w-full sm:w-[90%] md:w-[60%] lg:w-[55%] lg:ml-[40%]">
                  <div className="grid grid-cols-1 gap-6">
                    {alertData2.map((item, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={alertCardVariants}
                      >
                        <AlertCard
                          key={`${index}-${
                            showWithSimbian ? "visible" : "hidden"
                          }`}
                          title={item.title}
                          count={item.count}
                          icon={item.icon}
                          color={item.color}
                          desc={item.desc}
                          threat={item.threat || false}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden absolute inset-0 lg:flex items-center justify-center z-10 ">
            <IconsWithArrow />
          </div>

          <div className="ml-[50%] right-4">
            <AnimatedAlert alerts={alertsWithSimbian} position={"right"} />
          </div>
        </motion.div>
      )}
    </main>
  );
}
