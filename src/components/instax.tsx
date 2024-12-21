import React from "react";
import { useStore } from "@nanostores/react";
import { direction } from "../store";
import pfp from "../images/pfp.jpg";
import bio from "../images/bio.jpeg";
import contact from "../images/contact.jpeg";
import experiences from "../images/experiences.jpeg";
import projects from "../images/projects.jpg";

import "@fontsource/schoolbell";

interface InstaxImage {
  [key: string]: ImageMetadata;
}

const images: InstaxImage = {
  home: pfp,
  bio: bio,
  experience: experiences,
  projects: projects,
  contact: contact,
};

const Instax: React.FC = () => {
  const dir = useStore(direction);
  const pic = images[dir] || images.home;

  return (
    <div
      className="bg-white flex-none flex-col w-[19.5rem] h-auto py-3 px-5 text-black rounded-md shadow-xs border-r-4 dark:border-gray-600 border-[#98701f] hover:outline-md "
      onMouseEnter={() => direction.set("home")}
    >
      <img src={pic.src} alt="aahil" className="py-4" />
      <div className="sticky top-0 bg-white my-4 font-['Schoolbell'] flex flex-col justify-center text-center">
        <span className="text-4xl font-extrabold">Aahil Nishad</span>
        <span className="text-lg font-semibold">
          Northeastern '27, Honors CS
        </span>
      </div>
    </div>
  );
};

export default Instax;
