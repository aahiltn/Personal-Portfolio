import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface PhotoCard {
  id: number;
  section: string;
  rotation: number;
  zIndex: number;
  timestamp: number;
  shouldStraighten?: boolean;
}

const Instax: React.FC = () => {
  const dir = useStore(direction);
  const [photoStack, setPhotoStack] = useState<PhotoCard[]>([
    { id: 1, section: dir, rotation: 0, zIndex: 1, timestamp: Date.now() },
  ]);
  const [nextId, setNextId] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  // Auto-delete photos after 5 seconds (except the top one)
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoStack((prev) => {
        const now = Date.now();
        const topPhoto = prev[prev.length - 1]; // Keep the top photo
        const filteredStack = prev.filter(
          (photo) => photo.id === topPhoto.id || now - photo.timestamp < 5000
        );

        if (filteredStack.length === 1 && filteredStack[0].id === topPhoto.id) {
          filteredStack[0].shouldStraighten = true; // Mark the top photo to straighten
        }
        // Only update if something was removed
        return filteredStack.length !== prev.length ? filteredStack : prev;
      });
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  // Handle direction changes
  useEffect(() => {
    if (
      photoStack.length > 0 &&
      photoStack[photoStack.length - 1].section !== dir
    ) {
      // Remove the bottom photo when we have more than 2 photos
      setPhotoStack((prev) => {
        const newStack = prev.length > 2 ? prev.slice(1) : prev;

        // Add new photo on top
        const newPhoto: PhotoCard = {
          id: nextId,
          section: dir,
          rotation: Math.random() * 30 - 15, // Random rotation between -15 and 15 degrees
          zIndex: nextId,
          timestamp: Date.now(),
        };

        return [...newStack, newPhoto];
      });

      setNextId((prev) => prev + 1);
    }
  }, [dir, nextId, photoStack]);

  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSectionClick = (section: string) => {
    if (isMobile) {
      direction.set(section);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-[18rem] h-auto">
        <AnimatePresence>
          {photoStack.map((photo) => (
            <motion.div
              key={photo.id}
              className="absolute bg-white flex-none flex-col w-full h-auto py-3 px-5 text-black rounded-md shadow-xs border-r-4 dark:border-gray-600 border-[#98701f] hover:outline-md"
              style={{
                zIndex: photo.zIndex,
              }}
              initial={
                photo.id === 1
                  ? false
                  : {
                      x: -400 + Math.random() * 200 - 100, // Random x between -500 and -300
                      y: -200 + Math.random() * 100 - 50, // Random y between -250 and -150
                      rotate: -45 + Math.random() * 30 - 15, // Random initial rotation between -60 and -30
                      scale: 0.7 + Math.random() * 0.2, // Random scale between 0.7 and 0.9
                      opacity: 0,
                    }
              }
              animate={{
                x: Math.random() * 20 - 10, // Random final x offset between -10 and 10
                y: Math.random() * 20 - 10, // Random final y offset between -10 and 10
                rotate: photo.rotation,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{
                type: "spring",
                stiffness: 60 + Math.random() * 40, // Random stiffness between 60-100
                damping: 15 + Math.random() * 15, // Random damping between 15-30
                mass: 0.8 + Math.random() * 0.6, // Random mass between 0.8-1.4
                duration: 0.6 + Math.random() * 0.4, // Random duration between 0.6-1.0s
              }}
              whileHover={{
                scale: 1.01 + Math.random() * 0.03, // Random hover scale between 1.01-1.04
                rotate: photo.rotation + (Math.random() * 4 - 2), // Random additional rotation ±2
                transition: { duration: 0.2 },
              }}
            >
              {/* Image with animation */}
              <div className="relative overflow-hidden py-4">
                <motion.img
                  src={images[photo.section].src}
                  alt="aahil"
                  className="w-full"
                  initial={photo.id === 1 ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                />
              </div>

              <div className="sticky top-0 bg-white my-4 font-['Schoolbell'] flex flex-col justify-center text-center">
                <motion.span
                  className="text-4xl font-extrabold"
                  initial={photo.id === 1 ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  Aahil Nishad
                </motion.span>
                <motion.span
                  className="text-lg font-semibold"
                  initial={photo.id === 1 ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  Northeastern '27, Honors CS
                </motion.span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile section tabs */}
      {isMobile && (
        <motion.div
          className="flex justify-center space-x-2 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          {Object.keys(images).map((section, index) => (
            <motion.button
              key={section}
              className={`px-3 py-1 rounded-md text-sm ${
                dir === section ? "bg-[#98701f] text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSectionClick(section)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Instax;
