import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBookOpen } from "react-icons/fa";
import { educationData } from "../../data/portfolio";

function Education() {
  return (
    <section
      id="education"
      className="bg-[#030712] py-24 px-6 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

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
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Education & <span className="text-gradient-blue">Qualifications</span>
            </h2>
            <p className="text-gray-400 text-base mt-4">
              My academic journey in Artificial Intelligence & Data Science and foundational science education in Nashik.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Vertical Connecting Glow Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-sky-400 via-blue-600 to-sky-500/20 rounded-full hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-16">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Icon (Center) */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 p-0.5 shadow-xl shadow-sky-500/30 hidden sm:flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#0b1329] flex items-center justify-center text-sky-400 text-lg">
                      <FaGraduationCap />
                    </div>
                  </div>

                  {/* Card Content (Half width on desktop) */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="bg-[#0b1329]/80 backdrop-blur-xl p-7 rounded-3xl border border-sky-500/20 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300">
                      
                      {/* Score Badge */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-600/20 text-sky-300 font-bold text-xs border border-sky-400/30 flex items-center gap-1.5">
                          <FaAward className="text-sky-400" /> {edu.score}
                        </span>
                        <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                          <FaCalendarAlt className="text-sky-400" /> {edu.period}
                        </span>
                      </div>

                      {/* Degree & Field */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sky-400 font-semibold text-sm mb-3">
                        {edu.field}
                      </p>

                      {/* Institution */}
                      <div className="flex items-start gap-2 text-xs text-gray-300 mb-4 bg-[#080e21] p-3 rounded-xl border border-sky-500/10">
                        <FaBookOpen className="text-sky-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-white">{edu.institution}</p>
                          <p className="text-gray-400 flex items-center gap-1 mt-0.5">
                            <FaMapMarkerAlt className="text-sky-400 text-[10px]" /> {edu.location}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
