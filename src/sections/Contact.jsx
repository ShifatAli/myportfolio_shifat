import { motion } from "framer-motion";
import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 bg-gray-50 dark:bg-black text-gray-800 dark:text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 relative"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left Side: Links vertically centered */}
        <div className="md:w-1/3 flex flex-col justify-center items-start gap-6">
          <h3 className="text-2xl font-semibold text-[#DA9928]">Let's Connect</h3>

          <div className="space-y-4">
            <a
              href="mailto:shifat@example.com"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#DA9928] transition"
            >
              <Mail size={18} /> shifat@example.com
            </a>

            <a
              href="https://linkedin.com/in/shifat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#DA9928] transition"
            >
              <Linkedin size={18} /> linkedin.com/in/shifat
            </a>

            <a
              href="https://github.com/shifat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#DA9928] transition"
            >
              <Github size={18} /> github.com/shifat
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-[#DA9928] mb-8 text-center md:text-left">
            Contact Me
          </h2>

          <div className="bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-600 p-8 rounded-lg shadow-lg">
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-white h-32 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#DA9928] text-white px-6 py-2 rounded-md hover:bg-[#c38721] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Name at Bottom Center */}
      <div className="mt-24 text-sm text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} Shifat Ali
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#DA9928] text-white shadow-lg hover:bg-opacity-90 transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
