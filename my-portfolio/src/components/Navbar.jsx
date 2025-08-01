import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const navItems = [
  { id: "intro", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "skills", icon: <FaTools />, label: "Skills" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" }, // New
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },    // New
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function Navbar() {
  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
      bg-white/10 dark:bg-white/5 
      backdrop-blur-md border border-white/20 
      shadow-lg rounded-full px-6 py-3 flex gap-6 z-50 transition-all duration-300"
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-gray-700 dark:text-gray-300 hover:text-[#DA9928] text-xl transition duration-200"
          title={item.label} // Tooltip for clarity
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
