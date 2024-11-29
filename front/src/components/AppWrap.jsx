import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarterGif from './StarterGif';
import HeroText from './HeroText';

const AppWrap = () => {
  const [startTransition, setStartTransition] = useState(false);

  const handleStartTransition = () => {
    setStartTransition(true);
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      onClick={handleStartTransition} // Trigger transition on click
    >
      {/* Full-Screen GIF Transition */}
      <AnimatePresence>
        {!startTransition && (
          <motion.div
            key="gif-screen"
            className="absolute inset-0"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.2, y: -100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <StarterGif />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        className="absolute top-0 w-full bg-black bg-opacity-80 text-white px-6 py-4 shadow-lg flex justify-between items-center"
        initial={{ y: -100 }}
        animate={startTransition ? { y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>

      {/* HeroText Transition */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 text-center"
        initial={{ y: 0, fontSize: '3rem', color: '#00FFFF' }}
        animate={
          startTransition
            ? { y: -window.innerHeight / 2 + 36, fontSize: '1.5rem', color: '#FFFFFF' } // Move HeroText to the navbar
            : {}
        }
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ whiteSpace: 'nowrap', paddingBottom: '8px' }}
      >
        <HeroText />
      </motion.div>
    </div>
  );
};

export default AppWrap;
