import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload, FaBrain } from "react-icons/fa";

function Navbar({ onOpenResume, activeSection, onSelectSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certificates" },
    { name: "Activities", id: "activities" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onSelectSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-sky-500/20 py-3 shadow-lg shadow-sky-950/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-sky-500/30 group-hover:scale-105 transition-transform duration-300">
            <FaBrain className="text-white text-lg animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors">
              Harshada Wagh
            </span>
            <span className="text-[10px] tracking-wider text-sky-400/80 font-medium uppercase -mt-1">
              AI & Data Science
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0f172a]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-500/15 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (link.id === "home" && activeSection === "home");
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30"
                    : "text-gray-300 hover:text-sky-400 hover:bg-sky-500/10"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border border-sky-400/30 cursor-pointer"
          >
            <FaDownload className="text-xs" />
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden text-gray-200 text-2xl p-2 rounded-xl bg-[#0f172a] border border-sky-500/20 hover:text-sky-400 hover:border-sky-500/40 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-2xl border-b border-sky-500/20 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:bg-sky-500/15 hover:text-sky-400 transition text-left cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  handleNavClick(link.id);
                }}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-sky-500/15 mt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-lg shadow-sky-500/30 text-xs cursor-pointer"
              >
                <FaDownload className="text-sm" />
                View / Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;