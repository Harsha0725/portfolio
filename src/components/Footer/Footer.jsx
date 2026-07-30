import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaBrain, FaHeart } from "react-icons/fa";
import { personalDetails } from "../../data/portfolio";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#02050e] text-gray-400 py-12 px-6 border-t border-sky-500/15 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-base shadow-md">
            <FaBrain />
          </div>
          <div>
            <h4 className="text-white font-extrabold text-lg">
              Harshada Wagh
            </h4>
            <p className="text-xs text-gray-500">AI & Data Science Student • KKWIEER</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#education" className="hover:text-sky-400 transition">Education</a>
          <a href="#certificates" className="hover:text-sky-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
        </div>

        {/* Social & Top Scroll */}
        <div className="flex items-center gap-4">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-[#0b1329] border border-sky-500/20 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:border-sky-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-[#0b1329] border border-sky-500/20 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:border-sky-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personalDetails.email}`}
            className="w-9 h-9 rounded-xl bg-[#0b1329] border border-sky-500/20 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:border-sky-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/25 hover:scale-110 transition cursor-pointer"
            aria-label="Back to Top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-sky-500/10 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sky-300 font-semibold text-xs tracking-wider bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-400/20">
          Learning • Building • Growing 🚀
        </span>
        <span>© {new Date().getFullYear()} Harshada Mahesh Wagh. Built with React & Tailwind CSS.</span>
      </div>
    </footer>
  );
}

export default Footer;
