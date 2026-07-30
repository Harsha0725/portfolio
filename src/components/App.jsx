import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import ExtraCurricular from "./components/ExtraCurricular/ExtraCurricular";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ResumeModal from "./components/ResumeModal/ResumeModal";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="bg-[#030712] min-h-screen text-white selection:bg-sky-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections: Hero -> About -> Education -> Skills -> Projects -> Certificates -> ExtraCurricular -> Contact */}
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About onOpenResume={handleOpenResume} />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <ExtraCurricular />
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default App;
