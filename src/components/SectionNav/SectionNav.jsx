import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaCode, FaRocket, FaCertificate, FaTrophy, FaPaperPlane, FaArrowRight } from "react-icons/fa";

function SectionNav({ activeSection, onSelectSection }) {
  const sections = [
    {
      id: "about",
      name: "About Me",
      desc: "Personal Background, CGPA Highlights & Core Pillars",
      icon: <FaUser className="text-sky-400 text-xl" />,
      badge: "Overview"
    },
    {
      id: "education",
      name: "Education",
      desc: "B.Tech in AI & DS (8.22 CGPA), HSC & SSC Credentials",
      icon: <FaGraduationCap className="text-sky-400 text-xl" />,
      badge: "Academics"
    },
    {
      id: "skills",
      name: "Skills & Stack",
      desc: "Python, PyTorch, React, FastAPI, SQL & Cloud Technologies",
      icon: <FaCode className="text-sky-400 text-xl" />,
      badge: "Tech Stack"
    },
    {
      id: "projects",
      name: "Flagship Projects",
      desc: "Q-Link Pharma, BillDecoder, SmartShelf & Mobile Apps",
      icon: <FaRocket className="text-sky-400 text-xl" />,
      badge: "5+ Projects"
    },
    {
      id: "certificates",
      name: "Certifications",
      desc: "AWS Cloud Quest, Kaggle, Scaler & Industry Badges",
      icon: <FaCertificate className="text-sky-400 text-xl" />,
      badge: "Certificates"
    },
    {
      id: "activities",
      name: "Activities & Hackathons",
      desc: "Prompt Quest, Flash AI & Buildathon Competitions",
      icon: <FaTrophy className="text-sky-400 text-xl" />,
      badge: "Competitions"
    },
    {
      id: "contact",
      name: "Contact Me",
      desc: "Get In Touch, Email, Phone & Collaboration Inquiry",
      icon: <FaPaperPlane className="text-sky-400 text-xl" />,
      badge: "Connect"
    },
  ];

  return (
    <section id="sections-nav" className="bg-[#040916] py-16 px-6 border-t border-b border-sky-500/15 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
              Section Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Select a Section
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Click any section below to display its details.
            </p>
          </motion.div>
        </div>

        {/* Section Selection Table Grid (2 columns per row, stacked down like a table) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((sec, idx) => {
            const isSelected = activeSection === sec.id;
            const isLastOdd = idx === sections.length - 1 && sections.length % 2 !== 0;

            return (
              <button
                key={sec.id}
                onClick={() => onSelectSection(sec.id)}
                className={`relative p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md flex items-center justify-between text-left cursor-pointer group ${
                  isLastOdd ? "md:col-span-2" : ""
                } ${
                  isSelected
                    ? "bg-gradient-to-r from-sky-500/25 via-blue-600/30 to-[#0e1935] border-sky-400 shadow-xl shadow-sky-500/20 scale-[1.01]"
                    : "bg-[#0a1226]/90 hover:bg-[#0e1935] border-sky-500/20 hover:border-sky-400/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    isSelected ? "bg-sky-400/20 border-sky-300 shadow-md" : "bg-sky-500/10 border-sky-400/20"
                  }`}>
                    {sec.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className={`text-base font-bold transition-colors ${
                        isSelected ? "text-sky-300" : "text-white group-hover:text-sky-300"
                      }`}>
                        {sec.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/15 px-2 py-0.5 rounded-full border border-sky-400/20">
                        {sec.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-1">
                      {sec.desc}
                    </p>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border shrink-0 ml-3 transition-all ${
                  isSelected
                    ? "bg-sky-400 text-gray-950 border-sky-300 shadow-md"
                    : "bg-[#0e172e] text-sky-400 border-sky-500/20 group-hover:border-sky-400 group-hover:bg-sky-500/20"
                }`}>
                  <FaArrowRight className={`text-xs transition-transform ${isSelected ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SectionNav;
