import Intro from './sections/Intro';
import About from './sections/About';
import EducationCertificates from './sections/EducationCertificates';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
    <ThemeToggle/>
      <SocialBar />
      <Intro />
      <About />
      <EducationCertificates />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Navbar />
    </>
  );
}

export default App;
