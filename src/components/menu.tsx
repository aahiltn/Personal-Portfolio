import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, m } from "framer-motion";
import { direction } from "../store.js";
import "@fontsource/schoolbell";

const Menu: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [hint, setHint] = useState(false);

  function setDirection(dir: string) {
    direction.set(dir);
    setHint(true);
  }

  const mobileDevice = () => {
    return typeof window !== "undefined" && window.innerWidth <= 768;
  };

  useEffect(() => {
    if (mobileDevice()) {
      setHint(false);
    }
  });

  const handleMouseEnter = (item: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setHoveredItem(item);
    setIsTimerActive(true);

    // Start .5 second timer
    timerRef.current = setTimeout(() => {
      setDirection(item);
      setIsTimerActive(false);
    }, 500);
  };

  const handleMouseLeave = () => {
    // Clear timer on mouse leave
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setHoveredItem(null);
    setIsTimerActive(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const CircularTimer = () => (
    <motion.div
      className="absolute -top-2 -right-6 w-6 h-6 pointer-events-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-300 dark:text-gray-600"
        />
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-amber-900 dark:text-yellow-500"
          strokeDasharray="62.83"
          strokeDashoffset="62.83"
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
        />
      </svg>
    </motion.div>
  );

  const [contactText, setContactText] = useState("Contact");

  return (
    <nav className="bg-transparent text-[#412819] dark:text-gray-200 flex flex-wrap w-full justify-around place-items-center">
      <a
        className="mt-8 gap-3 text-2xl font-[Schoolbell] font-semibold group transition duration-400 relative"
        onMouseEnter={() => handleMouseEnter("experience")}
        onMouseLeave={handleMouseLeave}
        href="/experience/"
      >
        Experiences
        <AnimatePresence>
          {hoveredItem === "experience" && isTimerActive && <CircularTimer />}
        </AnimatePresence>
      </a>

      <a
        className="mt-8 gap-3 text-2xl font-[Schoolbell] font-semibold group transition duration-400 relative"
        onMouseEnter={() => handleMouseEnter("projects")}
        onMouseLeave={handleMouseLeave}
        href="/projects/"
      >
        Projects
        <AnimatePresence>
          {hoveredItem === "projects" && isTimerActive && <CircularTimer />}
        </AnimatePresence>
      </a>

      <button
        className="mt-8 gap-3 text-2xl font-[Schoolbell] font-semibold group transition duration-400 relative justify-center"
        onMouseEnter={() => handleMouseEnter("contact")}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          const contactButton = document.getElementById("contact-button");
          if (contactButton) {
            contactButton.click();
            // Toggle between "Bio" and "Contact"
            if (contactText === "Contact") {
              setContactText("About");
            } else if (contactText === "About") {
              setContactText("Contact");
            }
          }
        }}
      >
        {contactText}
        <AnimatePresence>
          {hoveredItem === "contact" && isTimerActive && <CircularTimer />}
        </AnimatePresence>
        {!hint && (
          <div className="absolute transform -left-2 translate-x-1/4 p-1.5 top-8 duration-500 rounded-sm bg-amber-950 dark:bg-[#2d3739] text-xs text-gray-200 delay-[800ms] taos:opacity-0">
            Hover me!
          </div>
        )}
      </button>
    </nav>
  );
};

export default Menu;
