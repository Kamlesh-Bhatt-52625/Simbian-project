import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const notificationVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: { duration: 0.4 },
  },
};

const NotificationStack = ({ alertTypes, position }) => {
  const [visibleNotifications, setVisibleNotifications] = useState([]);

  useEffect(() => {
    let alertIndex = 0;

    const addNotification = () => {
      const next = alertTypes[alertIndex % alertTypes.length];
      alertIndex++;

      setVisibleNotifications((prev) => {
        const updated = [...prev, { ...next, id: Date.now() }];
        if (updated.length > 3) {
          updated.shift();
        }
        return updated;
      });
    };

    const interval = setInterval(addNotification, 3000);
    return () => clearInterval(interval);
  }, [alertTypes]);

  return (
    <div
      className={`fixed bottom-4 ${position}-4 z-50 flex flex-col gap-2 w-[280px] sm:w-[300px]`}
    >
      <AnimatePresence initial={false}>
        {visibleNotifications.map((notif, i) => (
          <motion.div
            key={notif.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={notificationVariants}
            className="bg-blend-color-burn text-white px-4 py-3 rounded-xl shadow-lg border border-white/20 flex items-start gap-3"
          >
            <div className="mt-1">{notif.icon}</div>
            <div className="flex-1 text-sm">
              <div className="text-gray-300">{notif.message}</div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationStack;
