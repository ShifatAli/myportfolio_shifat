import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Dilate Tech",
      role: "Frontend Developer Intern",
      date: "Feb 2024 – May 2024",
      points: [
        "Built responsive UI using React and Tailwind CSS",
        "Collaborated with UI/UX team to implement pixel-perfect designs",
        "Improved code reusability with modular components",
      ],
    },
    {
      company: "Enord",
      role: "Frontend Developer",
      date: "Jun 2024 – Present",
      points: [
        "Integrated RESTful APIs with React-based dashboards",
        "Worked on optimizing performance and state management",
        "Implemented dark mode and responsive layouts",
      ],
    },
    {
      company: "Content Company",
      role: "Web Developer Intern",
      date: "Oct 2023 – Jan 2024",
      points: [
        "Created dynamic content-driven pages using Next.js",
        "Maintained SEO best practices and accessibility",
        "Automated content updates via CMS integrations",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-black text-gray-800 dark:text-white">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-[#DA9928] dark:text-white mb-12">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{exp.role} – <span className="text-[#DA9928]">{exp.company}</span></h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
              </div>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
