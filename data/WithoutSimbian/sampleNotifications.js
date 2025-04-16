import { AiOutlineClockCircle, AiOutlineRobot } from "react-icons/ai";

const sampleNotifications = [
  {
    id: 1,
    message: "Wasting valueable analyst time on false positives.",
    icon: <AiOutlineClockCircle className="text-red-500 text-lg" />,
  },
  {
    id: 2,
    message: "Processing one alert at a time, missing the big picture.",
    icon: <AiOutlineRobot className="text-green-500 text-lg" />,
  },
  {
    id: 3,
    message: "More time fixing SOAR automation, less time on real threats.",
    icon: <AiOutlineClockCircle className="text-yellow-500 text-lg" />,
  },
  {
    id: 4,
    message: "Hold on, pulling results.",
    icon: <AiOutlineClockCircle className="text-blue-500 text-lg" />,
  },
];

export default sampleNotifications;
