"use client";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const updateProgressBar = () => {
    const scrollPosition = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / totalHeight) * 100;

    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgressBar);

    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);
  return (
    <span
      style={{ transform: `translateX(${progress - 100}%)` }}
      className="absolute bg-yellow-400 h-1 w-full bottom-0"
      id="scroll-progress-indicator"
    />
  );
};

export default ScrollProgressBar;
