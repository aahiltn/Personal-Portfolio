import React from "react";
import { useStore } from "@nanostores/react";
import { direction } from "../store.js";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  function setDirection(dir: string) {
    direction.set(dir);
    console.log(direction.get());
  }

  const dir = useStore(direction);

  return (
    <nav className="flex flex-row w-full justify-around place-items-center">
      <Link
        className="mt-8 p-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("bio")}
        onMouseLeave={() => setDirection("home")}
        to={`#${dir}`}
      >
        Bio
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-700"></div>
      </Link>
      <a
        className="mt-8 p-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("experience")}
        onMouseLeave={() => setDirection("home")}
        href={`#${direction.get()}`}
      >
        Experiences
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-700"></div>
      </a>
      <a
        className="mt-8 p-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("projects")}
        onMouseLeave={() => setDirection("home")}
        href={`#${direction.get()}`}
      >
        Projects
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-700"></div>
      </a>
      <a
        className="mt-8 p-3 text-2xl font-semibold group transition duration-400"
        onMouseEnter={() => setDirection("contact")}
        onMouseLeave={() => setDirection("home")}
        href={`#${direction.get()}`}
      >
        Contact
        <div className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-700"></div>
      </a>
    </nav>
  );
};

export default Navbar;
