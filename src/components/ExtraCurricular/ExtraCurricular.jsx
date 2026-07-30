import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaLightbulb, FaPenFancy } from "react-icons/fa";
import { coCurricularData } from "../../data/portfolio";

function ExtraCurricular() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <FaTrophy className="text-sky-400" />;
      case 1: return <FaLightbulb className="text-sky-400" />;
      case 2: return <FaUsers className="text-sky-400" />;
      default: return <FaPenFancy className="text-sky-400" />;
    }
  };

  return (
    <section
      id="activities"
      className="bg-[#030712] py-24 px-6 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

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
              Beyond Academics
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Co-Curricular & <span className="text-gradient-blue">Competitions</span>
            </h2>
            <p className="text-gray-400 text-base mt-4">
              Active engagement in hackathons, AI debugging challenges, and college-level tech competitions.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Activities Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coCurricularData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#0b1329]/80 backdrop-blur-xl p-7 rounded-3xl border border-sky-500/20 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-xl shrink-0 shadow-md">
                {getIcon(idx)}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-sky-400 bg-sky-500/15 px-2.5 py-0.5 rounded-full border border-sky-400/25 shrink-0">
                    {item.years}
                  </span>
                </div>

                <p className="text-sky-300 font-semibold text-xs">
                  {item.organization}
                </p>

                <p className="text-gray-300 text-xs leading-relaxed pt-2 border-t border-sky-500/10">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExtraCurricular;
