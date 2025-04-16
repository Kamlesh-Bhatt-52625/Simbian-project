## 🧠 Thought Process & Overview

This project compares two views — **"Without Simbian"** and **"With Simbian"** — to highlight the difference Simbian makes in handling alerts. The layout switches every 10 seconds, and alerts animate in periodically to mimic real-time behavior.

## 🎞️ Animation Library Used

This project uses **Framer Motion**, a powerful animation library for React, to handle:

- Transitions between the "Without" and "With" Simbian states
- Smooth entrance/exit animations of alerts
- Subtle motion effects on UI elements like buttons and icons

Components like `motion.div`, `AnimatePresence`, and custom `variants` were used to provide a seamless and engaging experience.

## ⚠️ Known Issues & Future Improvements

- The **alert counters reset** every time the section switches. This is intentional for clarity, but could be improved to maintain a live total with smooth increments.
- **Responsiveness** needs attention, especially around alert layouts and icon spacing on smaller devices.  
  Due to time constraints and being a **full-time working professional**, I couldn’t focus on optimizing for mobile and tablet views as much as I wanted.

---
