import React from "react";
import { useStore } from "@nanostores/react";
import { direction } from "../store.js";

const Navbar: React.FC = () => {
  function setDirection(dir: string) {
    direction.set(dir);
  }

  const dir = useStore(direction);

  return (
    <nav className="text-[#412819] dark:text-gray-200 flex flex-wrap w-full justify-around place-items-center">
      <a
        className="mt-8 gap-2 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("bio")}
        //onMouseLeave={() => setDirection("home")}
        href={`#${dir}`}
      >
        Bio
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
      </a>
      <a
        className="mt-8 gap-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("experience")}
        // onMouseLeave={() => setDirection("home")}
        href={`#${direction.get()}`}
      >
        Experiences
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
      </a>
      <a
        className="mt-8 gap-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("projects")}
        // onMouseLeave={() => setDirection("home")}
        href={`#${direction.get()}`}
      >
        Projects
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
      </a>
      <a
        className="mt-8 gap-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("contact")}
        //onMouseLeave={() => setDirection("home")}
        href={`#${direction.get()}`}
      >
        Contact
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 dark:bg-yellow-500 bg-amber-900"></div>
      </a>
    </nav>
  );
};

export default Navbar;
