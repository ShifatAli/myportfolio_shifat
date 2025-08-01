/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import lightProfile from "../assets/profile-light.png"; // for light mode
import darkProfile from "../assets/profile-dark.png";   // for dark mode

export default function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 pt-16 sm:pt-20 relative"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 lg:gap-6 px-0 md:px-4">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6 md:pl-2 lg:pl-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-[#DA9928] dark:text-white">
            Shifat Ali
          </h1>

          <TypeAnimation
            sequence={[
              "Full-Stack Developer 💻", 1500,
              "MERN Stack Enthusiast 🚀", 1500,
              "Clean UI Designer 🎨", 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl font-semibold text-[#DA9928] dark:text-[#DA9928] block"
          />

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            I love building modern web applications that are scalable, fast, and user-friendly.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="/Shifat_ali_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-[#DA9928] text-[#DA9928] rounded-md font-semibold transition-all duration-300 hover:bg-[#DA9928] hover:text-white"
            >
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-[#DA9928] text-[#DA9928] rounded-md font-semibold transition-all duration-300 hover:bg-[#DA9928] hover:text-white"
            >
              Let’s Talk
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={lightProfile}
            alt="Premax Lio"
            className="block dark:hidden w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto object-cover"
          />
          <img
            src={darkProfile}
            alt="Premax Lio"
            className="hidden dark:block w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-6 right-6 sm:right-10 text-sm text-[#DA9928] hover:underline z-30"
      >
        Scroll Down ↓
      </a>
    </section>
  );
}
