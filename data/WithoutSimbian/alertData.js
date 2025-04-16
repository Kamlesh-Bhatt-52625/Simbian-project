const alertData = [
  {
    title: "Ignored Alerts",
    count: 200,
    icon: "🚨",
    color: "red",
    desc: "Wasting valuable analyst time on false positives",
  },
  {
    title: "Wrongly Closed Alerts",
    count: 35,
    icon: "❌",
    color: "yellow",
    desc: "Processing one alert at a time, missing the big picture",
  },
  {
    title: "Active Threats",
    count: 5,
    icon: "⚠️",
    color: "orange",
    desc: "More time fixing SOAR automation, less time on real threats",
    threat: true,
  },
];

export default alertData;
