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
      className="relative min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 relative"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left Side: Contact Info */}
        <div className="md:w-1/3 flex flex-col justify-center items-start gap-6">
          <h3 className="text-2xl font-semibold text-[#DAA520] dark:text-white">
            Let's Connect
          </h3>

          <div className="space-y-4">
            <a
              href="mailto:shifatali0906@gmail.com"
              className="flex items-center gap-2 text-black dark:text-white hover:text-[#DAA520] transition"
            >
              <Mail size={18} /> shifatali0906@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/shifatali/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black dark:text-white hover:text-[#DAA520] transition"
            >
              <Linkedin size={18} /> linkedin.com/in/shifat
            </a>

            <a
              href="https://github.com/ShifatAli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black dark:text-white hover:text-[#DAA520] transition"
            >
              <Github size={18} /> github.com/ShifatAli
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-[#DAA520] mb-8 text-center md:text-left">
            Contact Me
          </h2>

          <div className="bg-[#e2e8f0] dark:bg-[#0f172a] border border-gray-300 dark:border-gray-700 p-8 rounded-lg shadow-lg">
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white h-32 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#DAA520] text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-24 text-sm text-[#DAA520] text-center">
        © {new Date().getFullYear()} Shifat Ali
      </div>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#DAA520] text-white shadow-lg hover:bg-yellow-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
