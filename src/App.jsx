import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SectionNav from "./components/SectionNav/SectionNav";
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
  const [activeSection, setActiveSection] = useState(null); // Initially NO section is open

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  const handleSelectSection = (sectionId) => {
    setActiveSection((prev) => (prev === sectionId ? null : sectionId));
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById("sections-display");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <div className="bg-[#030712] min-h-screen text-white selection:bg-sky-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenResume={handleOpenResume}
        activeSection={activeSection || "home"}
        onSelectSection={handleSelectSection}
      />

      {/* Main Content */}
      <main>
        {/* 1. Standalone Home Hero View */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. Section Directory Cards (Only section names after scroll down) */}
        <SectionNav
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />

        {/* 3. Dynamic Section Content (Displays ONLY when a section card is clicked) */}
        <div id="sections-display" className="transition-all duration-300">
          {activeSection === "about" && (
            <About onOpenResume={handleOpenResume} />
          )}

          {activeSection === "education" && (
            <Education />
          )}

          {activeSection === "skills" && (
            <Skills />
          )}

          {activeSection === "projects" && (
            <Projects />
          )}

          {activeSection === "certificates" && (
            <Certificates />
          )}

          {activeSection === "activities" && (
            <ExtraCurricular />
          )}

          {activeSection === "contact" && (
            <Contact onOpenResume={handleOpenResume} />
          )}

          {activeSection === "all" && (
            <>
              <About onOpenResume={handleOpenResume} />
              <Education />
              <Skills />
              <Projects />
              <Certificates />
              <ExtraCurricular />
              <Contact onOpenResume={handleOpenResume} />
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default App;