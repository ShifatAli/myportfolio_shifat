import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function EducationCertificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "JavaScript Mastery – Udemy",
      image: "/certificates/js.png",
    },
    {
      title: "React Frontend Pro – Coursera",
      image: "/certificates/react.png",
    },
    {
      title: "Node.js Backend Bootcamp – YouTube",
      image: "/certificates/node.png",
    },
    {
      title: "MongoDB Essentials – MongoDB University",
      image: "/certificates/mongo.png",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-black text-gray-800 dark:text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto space-y-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-center text-[#DA9928] dark:text-white mb-10">
          Education & Certificates
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* === LEFT: EDUCATION === */}
          <motion.div
            className="md:w-1/2 bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-600 rounded-lg shadow-md p-6 space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              <TypeAnimation
                sequence={["Education", 500]}
                speed={50}
                wrapper="span"
                cursor={true}
                repeat={1}
                className="inline-block"
              />
            </h3>

            <div className="space-y-6">
              {/* === MCA === */}
              <div>
                <strong className="text-lg">
                  <TypeAnimation
                    sequence={["MCA – Manipal University (Online)", 500]}
                    speed={60}
                    wrapper="span"
                    cursor={false}
                    repeat={1}
                    className="inline-block"
                  />
                </strong>
                <p className="text-sm text-gray-500 dark:text-gray-400">2023 – 2025</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>Full-Stack Development</li>
                  <li>Cloud & Scalable Systems</li>
                </ul>
              </div>

              {/* === BCA === */}
              <div>
                <strong className="text-lg">
                  <TypeAnimation
                    sequence={["BCA – Sarla Birla University", 500]}
                    speed={60}
                    wrapper="span"
                    cursor={false}
                    repeat={1}
                    className="inline-block"
                  />
                </strong>
                <p className="text-sm text-gray-500 dark:text-gray-400">2020 – 2023</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                  <li>Web & Mobile Development</li>
                  <li>Core CS Fundamentals</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* === RIGHT: CERTIFICATES === */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Certificates</h3>

            <div className="h-96 overflow-y-scroll no-scrollbar space-y-4 pr-2">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-sm cursor-pointer transition-all duration-300"
                >
                  <h4 className="text-md font-medium mb-2">{cert.title}</h4>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-28 object-contain rounded"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* === Modal View === */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setSelectedCert(null)}
        >
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-3xl w-full mx-4 relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-xl text-gray-700 dark:text-white"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">{selectedCert.title}</h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
