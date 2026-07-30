import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaStar, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../../data/portfolio";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = [
    "All",
    "AI & Optimization",
    "AI & NLP",
    "AI & Game Dev",
    "DSA & Algorithms",
    "Machine Learning & Web App",
    "Full-Stack Web Development",
    "Mobile Application"
  ];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => {
        if (activeFilter === "AI & Optimization") return p.category.includes("Optimization");
        if (activeFilter === "AI & NLP") return p.category.includes("Natural Language") || p.category.includes("NLP");
        if (activeFilter === "AI & Game Dev") return p.category.includes("Game");
        if (activeFilter === "DSA & Algorithms") return p.category.includes("Data Structures") || p.category.includes("Algorithms");
        if (activeFilter === "Machine Learning & Web App") return p.category.includes("Machine Learning");
        if (activeFilter === "Full-Stack Web Development") return p.category.includes("Full-Stack") || p.category.includes("Web Application");
        if (activeFilter === "Mobile Application") return p.category.includes("Mobile");
        return true;
      });

  return (
    <section
      id="projects"
      className="bg-[#050b18] py-24 px-6 relative overflow-hidden border-t border-sky-500/10"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Featured <span className="text-gradient-blue">Projects</span>
            </h2>
            <p className="text-gray-400 text-base mt-4">
              Real-world software architectures spanning AI Logistics, OCR Document Summarizers, DSA File Simulators, AI Maze Solvers, ML Dashboards, and Mobile Apps.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === opt
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 border border-sky-400/40"
                  : "bg-[#0c152b] text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 border border-sky-500/15"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-[#0b1329]/80 backdrop-blur-xl rounded-3xl p-7 border border-sky-500/20 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/25">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-gradient-to-r from-sky-500/20 to-blue-600/20 px-3 py-1 rounded-full border border-sky-400/30">
                        <FaStar className="text-sky-400 text-xs" /> Featured Project
                      </span>
                    )}
                  </div>

                  {/* Title & Period */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-400 font-mono mt-1 mb-4">{project.period}</p>

                  {/* Summary */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6 bg-[#080f21] p-4 rounded-2xl border border-sky-500/10">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="text-sky-400 mt-0.5">•</span>
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#111e3b] text-sky-300 text-xs font-medium border border-sky-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-sky-500/15 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0e1933] border border-sky-500/30 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 text-xs font-semibold transition"
                  >
                    <FaGithub className="text-sm" /> GitHub Repo <FaExternalLinkAlt className="text-[10px]" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition cursor-pointer"
                  >
                    View Details <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
