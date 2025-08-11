import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@nanostores/react";
import { direction } from "../store";
import pfp from "../images/pfp.jpg";
import contact from "../images/contact.jpg";
import experiences from "../images/experiences.jpg";
import projects from "../images/projects.jpg";

import "@fontsource/schoolbell";

interface InstaxImage {
  [key: string]: ImageMetadata;
}

const images: InstaxImage = {
  home: pfp,
  experience: experiences,
  projects: projects,
  contact: contact,
};

const sectionOrder = ["home", "experience", "projects", "contact"];

interface PhotoCard {
  id: number;
  section: string;
  rotation: number;
  zIndex: number;
  timestamp: number;
  shouldStraighten?: boolean;
}

interface InstaxProps {
  simplified?: boolean;
  initialSection?: string;
}

const Instax: React.FC<InstaxProps> = ({
  simplified = false,
  initialSection,
}) => {
  const dir = useStore(direction);
  const [currentSection, setCurrentSection] = useState(initialSection || dir);
  const [photoStack, setPhotoStack] = useState<PhotoCard[]>([
    {
      id: 1,
      section: currentSection,
      rotation: 0,
      zIndex: 1,
      timestamp: Date.now(),
    },
  ]);
  const [nextId, setNextId] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );

  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle changes to dir store value
  useEffect(() => {
    setCurrentSection(dir);
  }, [dir]);

  // Update photo stack when section changes
  useEffect(() => {
    if (simplified) {
      // For simplified version, just maintain a single photo
      setPhotoStack([
        {
          id: 1,
          section: currentSection,
          rotation: 0,
          zIndex: 1,
          timestamp: Date.now(),
        },
      ]);
      return;
    }

    if (isMobile) {
      setPhotoStack([
        {
          id: 1,
          section: currentSection,
          rotation: 0,
          zIndex: 1,
          timestamp: Date.now(),
        },
      ]);
      return;
    }

    if (
      photoStack.length === 0 ||
      photoStack[photoStack.length - 1].section !== currentSection
    ) {
      setPhotoStack((prev) => {
        const newStack = prev.length > 2 ? prev.slice(1) : prev;

        const newPhoto: PhotoCard = {
          id: nextId,
          section: currentSection,
          rotation: Math.random() * 30 - 15,
          zIndex: nextId,
          timestamp: Date.now(),
        };

        return [...newStack, newPhoto];
      });

      setNextId((prev) => prev + 1);
    }
  }, [currentSection, isMobile, simplified, nextId]);

  // Auto-delete photos after 5 seconds (except the top one) - DESKTOP ONLY
  useEffect(() => {
    if (isMobile || simplified) return; // Skip animations on mobile or simplified mode

    const interval = setInterval(() => {
      setPhotoStack((prev) => {
        if (prev.length <= 1) return prev;

        const now = Date.now();
        const topPhoto = prev[prev.length - 1];
        const filteredStack = prev.filter(
          (photo) => photo.id === topPhoto.id || now - photo.timestamp < 5000
        );

        if (filteredStack.length === 1 && filteredStack[0].id === topPhoto.id) {
          filteredStack[0].shouldStraighten = true;
        }
        return filteredStack.length !== prev.length ? filteredStack : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isMobile, simplified]);

  const handleSwipe = (info: {
    offset: { x: number };
    velocity: { x: number };
  }) => {
    const swipeThreshold = 50;
    const velocityThreshold = 300;

    const isSwipeLeft =
      info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold;
    const isSwipeRight =
      info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold;

    if (isSwipeLeft || isSwipeRight) {
      const currentIndex = sectionOrder.indexOf(currentSection);
      let newIndex;

      if (isSwipeLeft) {
        newIndex = (currentIndex + 1) % sectionOrder.length;
        setSwipeDirection("left");
      } else {
        newIndex =
          (currentIndex - 1 + sectionOrder.length) % sectionOrder.length;
        setSwipeDirection("right");
      }

      const newSection = sectionOrder[newIndex];
      direction.set(newSection);

      // Reset swipe direction after animation
      setTimeout(() => setSwipeDirection(null), 300);
    }
  };

  if (simplified || isMobile) {
    return (
      <div className="flex flex-col items-center">
        <motion.div
          className="w-72 max-w-[90vw] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => handleSwipe(info)}
          whileDrag={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              className="bg-white flex-col w-full h-auto py-3 px-5 text-black rounded-md shadow-lg border-r-4 border-[#98701f]"
              initial={{
                x:
                  swipeDirection === "left"
                    ? 300
                    : swipeDirection === "right"
                    ? -300
                    : 0,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x:
                  swipeDirection === "left"
                    ? -300
                    : swipeDirection === "right"
                    ? 300
                    : 0,
                opacity: 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative overflow-hidden py-4">
                <img
                  src={images[currentSection]?.src || images.home.src}
                  alt="aahil"
                  className="w-full"
                />
              </div>

              <div className="bg-white my-4 font-['Schoolbell'] flex flex-col justify-center text-center">
                <span className="text-4xl font-extrabold">Aahil Nishad</span>
                <span className="text-lg font-semibold">
                  Northeastern '27, Honors CS
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
          ← Swipe →
        </div>
      </div>
    );
  }

  // Desktop version - with all animations
  return (
    <div className="flex flex-col">
      <div className="relative w-[18rem] h-auto">
        <AnimatePresence>
          {photoStack.map((photo) => (
            <motion.div
              key={photo.id}
              className="absolute bg-white flex-none flex-col w-full h-auto py-3 px-5 text-black rounded-md shadow-xs border-r-4 border-b-2 dark:border-gray-600 border-orange-700 hover:outline-md"
              style={{
                zIndex: photo.zIndex,
                top: "25px", // Added top offset to move down
              }}
              initial={
                photo.id === 1
                  ? false
                  : {
                      x: -400 + Math.random() * 200 - 100,
                      y: -100 + Math.random() * 100 - 25,
                      rotate: -45 + Math.random() * 30 - 15,
                      scale: 0.7 + Math.random() * 0.2,
                      opacity: 0,
                    }
              }
              animate={{
                x: Math.random() * 20 - 10,
                y: 30 + Math.random() * 20 - 10, // Increased y value to move down
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
                stiffness: 60 + Math.random() * 40,
                damping: 15 + Math.random() * 15,
                mass: 0.8 + Math.random() * 0.6,
                duration: 0.6 + Math.random() * 0.4,
              }}
              whileHover={{
                scale: 1.01 + Math.random() * 0.03,
                rotate: photo.rotation + (Math.random() * 4 - 2),
                transition: { duration: 0.2 },
              }}
            >
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
    </div>
  );
};

export default Instax;
