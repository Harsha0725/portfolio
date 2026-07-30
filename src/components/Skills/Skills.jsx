import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode, 
  FaBrain, 
  FaLaptopCode, 
  FaDatabase, 
  FaChartBar, 
  FaCogs, 
  FaCheckCircle, 
  FaTerminal, 
  FaLayerGroup, 
  FaMicrochip, 
  FaServer, 
  FaCloud,
  FaLightbulb,
  FaStar,
  FaCheck
} from "react-icons/fa";
import { skillsData } from "../../data/portfolio";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsData.map((cat) => cat.category)];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "FaCode": return <FaCode className="text-[#38BDF8]" />;
      case "FaBrain": return <FaBrain className="text-[#38BDF8]" />;
      case "FaLaptopCode": return <FaLaptopCode className="text-[#38BDF8]" />;
      case "FaDatabase": return <FaDatabase className="text-[#38BDF8]" />;
      case "FaChartBar": return <FaChartBar className="text-[#38BDF8]" />;
      default: return <FaCogs className="text-[#38BDF8]" />;
    }
  };

  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes("python")) return <FaCode className="text-[#38BDF8]" />;
    if (name.includes("c++")) return <FaTerminal className="text-[#00A3FF]" />;
    if (name.includes("sql")) return <FaDatabase className="text-[#60A5FA]" />;
    if (name.includes("pytorch") || name.includes("lstm") || name.includes("scikit") || name.includes("xgboost")) return <FaBrain className="text-[#38BDF8]" />;
    if (name.includes("pandas") || name.includes("numpy")) return <FaMicrochip className="text-[#00A3FF]" />;
    if (name.includes("react")) return <FaLaptopCode className="text-[#38BDF8]" />;
    if (name.includes("fastapi") || name.includes("flask") || name.includes("node")) return <FaServer className="text-[#60A5FA]" />;
    if (name.includes("mysql") || name.includes("postgres") || name.includes("mongo")) return <FaDatabase className="text-[#38BDF8]" />;
    if (name.includes("aws")) return <FaCloud className="text-[#00A3FF]" />;
    if (name.includes("power bi")) return <FaChartBar className="text-[#38BDF8]" />;
    if (name.includes("git")) return <FaLayerGroup className="text-[#60A5FA]" />;
    if (name.includes("ocr") || name.includes("d-wave")) return <FaLightbulb className="text-[#38BDF8]" />;
    return <FaCogs className="text-[#38BDF8]" />;
  };

  // When a specific category is selected, filter individual skills
  const selectedCategoryData = skillsData.find((c) => c.category === activeCategory);

  return (
    <section
      id="skills"
      className="bg-[#030712] py-24 px-6 relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
              Technical Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Skills & <span className="text-gradient-blue">Technologies</span>
            </h2>
            <p className="text-gray-400 text-base mt-4">
              Explore my technical stack across Artificial Intelligence, Data Science, Full-Stack Web Development, and Systems.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Filter Category Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 border border-sky-400/40 scale-105"
                    : "bg-[#0c152b] text-gray-300 hover:text-sky-400 hover:bg-sky-500/10 border border-sky-500/15"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display based on Filter */}
        <div className="mt-14">
          <AnimatePresence mode="wait">
            {activeCategory === "All" ? (
              /* "ALL" SECTION: Sleek Categorized Overview Cards */
              <motion.div
                key="all-categories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {skillsData.map((catGroup, idx) => (
                  <motion.div
                    key={catGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="bg-[#0b1329]/80 backdrop-blur-xl rounded-3xl p-7 border border-sky-500/20 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-sky-500/15">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                          {getCategoryIcon(catGroup.icon)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                            {catGroup.category}
                          </h3>
                          <span className="text-[11px] font-mono text-sky-400 font-medium">
                            {catGroup.skills.length} Key Competencies
                          </span>
                        </div>
                      </div>

                      {/* Skill Tags Chips */}
                      <div className="flex flex-wrap gap-2.5 mb-6">
                        {catGroup.skills.map((s) => (
                          <div
                            key={s.name}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#070e21] border border-sky-500/15 hover:border-sky-400/40 hover:bg-sky-500/10 transition group/tag"
                          >
                            <span className="text-sky-400 text-xs">
                              {getSkillIcon(s.name)}
                            </span>
                            <span className="text-xs font-semibold text-gray-200 group-hover/tag:text-sky-300">
                              {s.name}
                            </span>
                            <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded ml-1">
                              {s.badge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Trigger */}
                    <div className="pt-4 border-t border-sky-500/10 flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-medium flex items-center gap-1">
                        <FaCheckCircle className="text-sky-400 text-xs" /> Applied in Real Projects
                      </span>
                      <button
                        onClick={() => setActiveCategory(catGroup.category)}
                        className="text-sky-300 hover:text-white font-semibold transition hover:underline"
                      >
                        Explore →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* SPECIFIC CATEGORY TAB: Detailed Individual Skill Cards */
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {selectedCategoryData?.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-[#0b1329]/80 backdrop-blur-xl p-6 rounded-3xl border border-sky-500/20 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/15 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                          {activeCategory.split(" ")[0]}
                        </span>
                        <span className="text-[10px] font-bold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded border border-sky-400/30">
                          {skill.badge}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition shadow-md">
                          {getSkillIcon(skill.name)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </h3>
                          <p className="text-[11px] text-gray-400 font-medium">Applied Knowledge</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 pt-3 border-t border-sky-500/10 space-y-1.5">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-gray-400 font-medium flex items-center gap-1">
                          <FaCheck className="text-sky-400 text-[10px]" /> Proficiency
                        </span>
                        <span className="text-sky-400 font-mono font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#070c1c] overflow-hidden p-0.5 border border-sky-500/15">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-sm shadow-sky-400/40"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default Skills;