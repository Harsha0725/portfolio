import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt, FaCode } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl bg-[#0b1329] border border-sky-500/30 rounded-3xl shadow-2xl shadow-sky-950/80 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-[#0f1b38] border-b border-sky-500/20">
            <div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-sky-500/20 rounded-xl transition shrink-0"
            >
              <HiX className="text-2xl" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-300 text-sm leading-relaxed">
            
            {/* Period Badge */}
            <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold bg-sky-950/50 px-4 py-2 rounded-xl border border-sky-500/20 w-fit">
              <FaCalendarAlt />
              <span>Development Duration: {project.period}</span>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-white font-bold text-base mb-2">System Overview</h4>
              <p className="bg-[#111e3d] p-4 rounded-2xl border border-sky-500/15 text-gray-300">
                {project.summary}
              </p>
            </div>

            {/* Highlights Bullet List */}
            <div>
              <h4 className="text-white font-bold text-base mb-3">Key Technical Contributions</h4>
              <div className="space-y-3">
                {project.highlights.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#0d172e] p-3.5 rounded-xl border border-sky-500/10">
                    <FaCheckCircle className="text-sky-400 mt-0.5 shrink-0" />
                    <span className="text-gray-200 text-xs sm:text-sm">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                <FaCode className="text-sky-400" /> Technologies & Frameworks Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500/20 to-blue-600/20 text-sky-300 text-xs font-medium border border-sky-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer CTAs */}
          <div className="px-6 py-4 bg-[#0f1b38] border-t border-sky-500/20 flex flex-wrap justify-between items-center gap-3">
            <span className="text-xs text-gray-400 font-medium">Source Code & Architecture</span>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#121f3d] border border-sky-500/30 text-sky-300 hover:text-white hover:bg-sky-500/20 text-xs font-semibold transition"
              >
                <FaGithub /> GitHub Repository
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
