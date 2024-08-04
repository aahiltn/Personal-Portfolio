import React from "react";
import { useStore } from "@nanostores/react";
import { direction } from "../store"; // Adjust the import as necessary
import pfp from "../images/pfp.jpg";
import left from "../images/left.png";
import right from "../images/right.jpg";
import "@fontsource/schoolbell";

interface InstaxImage {
  [key: string]: ImageMetadata;
}

const images: InstaxImage = {
  home: pfp,
  bio: pfp,
  experience: left,
  projects: right,
  contact: pfp,
};

const Instax: React.FC = () => {
  const dir = useStore(direction);
  const pic = images[dir] || images.home;

  return (
    <div className="flex-none flex-col min-w-64 w-96 h-auto py-3 px-5 bg-white-500 text-black rounded-lg shadow-md hover:focus:outline-md focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
      <img src={pic.src} alt="aahil" className="py-4" />
      <div className="my-4 font-['Schoolbell'] flex flex-col justify-center text-center">
        <span className="text-4xl font-extrabold">Aahil Nishad</span>
        <span className="text-lg font-semibold">
          Northeastern '27, BSCS, Software Engineer
        </span>
      </div>
    </div>
  );
};

export default Instax;
