// Pulled from https://github.com/Shashwatsharma97 (forked repos and the
// profile README repo excluded). Add an `image` path (under /public/images)
// to any entry once you have a screenshot for it.

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "real-time-driver-drowsiness-detection",
    title: "Real-Time Driver Drowsiness Detection",
    description:
      "A real-time driver drowsiness detection system using computer vision and deep learning to monitor a driver's face and detect signs of fatigue — eye closure, yawning, head tilt — with timely alerts to prevent drowsy-driving accidents.",
    tags: ["Python", "Computer Vision", "Deep Learning"],
    href: "https://github.com/Shashwatsharma97/Real-Time-Driver-Drowsiness-Detection-System-By-Shashwat",
  },
  {
    slug: "fit-sync",
    title: "FitSync",
    description:
      "A fitness coach app that provides personalized exercise advice and workout schedules, letting users track progress and set fitness goals for better health management.",
    tags: ["JavaScript"],
    href: "https://github.com/Shashwatsharma97/Fit_sync",
  },
  {
    slug: "blackjack",
    title: "Blackjack",
    description:
      "A browser-based Blackjack card game built with JavaScript.",
    tags: ["JavaScript"],
    href: "https://github.com/Shashwatsharma97/Blackjack",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    description: "A classic Tic Tac Toe game implemented in C++.",
    tags: ["C++"],
    href: "https://github.com/Shashwatsharma97/Tic-Tac-Toe",
  },
  {
    slug: "sql-basics",
    title: "SQL Basics",
    description: "A collection of foundational SQL queries and exercises.",
    tags: ["SQL"],
    href: "https://github.com/Shashwatsharma97/sql_basic",
  },
];
