import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { direction } from "../store.js";

const Navbar: React.FC = () => {
  function setDirection(dir: string) {
    direction.set(dir);
    setHint(true);
  }

  const dir = useStore(direction);
  const [hint, setHint] = useState(false);

  return (
    <nav className="bg-transparent text-[#412819] dark:text-gray-200 flex flex-wrap w-full justify-around place-items-center">
      <a
        className="mt-8 gap-2 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("bio")}
        href={`#${dir}`}
      >
        Bio
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
      </a>
      <a
        className="mt-8 gap-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("experience")}
        href={`#${direction.get()}`}
      >
        Experiences
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
      </a>
      <a
        className="mt-8 gap-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("projects")}
        href={`#${direction.get()}`}
      >
        Projects
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
      </a>
      <a
        className="mt-8 gap-3 text-2xl font-semibold group transition duration-400 relative justify-center"
        onMouseEnter={() => setDirection("contact")}
        href={`#${direction.get()}`}
      >
        Contact
        <div className="justify-items-center block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
        {!hint && (
          <div className="absolute transform -left-2 translate-x-1/4 p-1.5 top-8 duration-500 rounded-sm bg-amber-950 dark:bg-[#2d3739] text-xs text-gray-200 delay-[800ms] taos:opacity-0">
            Hover me!
          </div>
        )}
      </a>
    </nav>
  );
};

export default Navbar;
