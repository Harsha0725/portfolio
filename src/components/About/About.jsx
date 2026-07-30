import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCertificate, FaBrain, FaChartLine, FaCogs, FaCheckCircle, FaDownload } from "react-icons/fa";
import { personalDetails } from "../../data/portfolio";

function About({ onOpenResume }) {
  const cards = [
    {
      icon: <FaGraduationCap className="text-sky-400" />,
      title: "Academic CGPA",
      value: "8.22",
      description: "B.Tech in AI & Data Science",
      badge: "KKWIEER"
    },
    {
      icon: <FaLaptopCode className="text-sky-400" />,
      title: "Flagship Projects",
      value: "5+",
      description: "AI, ML, DSA, Web & Mobile Systems",
      badge: "AI & Web Apps"
    },
    {
      icon: <FaCertificate className="text-sky-400" />,
      title: "Certifications",
      value: "5+",
      description: "AWS, Kaggle, Scaler & Simplilearn",
      badge: "Industry Verified"
    },
    {
      icon: <FaBrain className="text-sky-400" />,
      title: "Specialization",
      value: "AI & ML",
      description: "LSTM, XGBoost & Optimization",
      badge: "Core Expertise"
    },
  ];

  const pillars = [
    {
      icon: <FaBrain className="text-xl text-sky-400" />,
      title: "Artificial Intelligence & ML",
      text: "Building neural demand forecasting models (LSTM + Self-Attention) and supervised classification algorithms (XGBoost, Scikit-learn)."
    },
    {
      icon: <FaLaptopCode className="text-xl text-sky-400" />,
      title: "Web & Application Development",
      text: "Architecting interactive web and mobile applications with React.js, FastAPI, Flask, Node.js, Kotlin, and MongoDB."
    },
    {
      icon: <FaCogs className="text-xl text-sky-400" />,
      title: "Optimization & Quantum SDKs",
      text: "Solving logistics allocation bottlenecks using QUBO formulations on D-Wave Ocean SDK and Tesseract OCR text pipelines."
    },
    {
      icon: <FaChartLine className="text-xl text-sky-400" />,
      title: "Data Analytics & Dashboards",
      text: "Developing interactive Streamlit web apps and high-impact Power BI business intelligence dashboards."
    }
  ];

  return (
    <section
      id="about"
      className="bg-[#050b18] py-24 px-6 relative overflow-hidden border-t border-b border-sky-500/10"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

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
              Personal Overview
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              About <span className="text-gradient-blue">Harshada Wagh</span>
            </h2>
            <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-sm font-semibold tracking-wide shadow-md shadow-sky-500/10">
              Learning • Building • Growing 🚀
            </div>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Bio Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#0b1329]/70 backdrop-blur-xl p-8 rounded-3xl border border-sky-500/20 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              Driven by Curiosity, Powered by AI
            </h3>

            <p className="text-gray-300 text-base leading-relaxed mb-5">
              {personalDetails.summary}
            </p>

            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {personalDetails.aboutText}
            </p>

            {/* Quick Check Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-sky-500/15">
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <FaCheckCircle className="text-sky-400 shrink-0" />
                <span>B.Tech AI & DS Undergraduate</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <FaCheckCircle className="text-sky-400 shrink-0" />
                <span>CGPA: 8.22 / 10.0</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <FaCheckCircle className="text-sky-400 shrink-0" />
                <span>AWS Certified Cloud Explorer</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <FaCheckCircle className="text-sky-400 shrink-0" />
                <span>Hackathon Competitor</span>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition"
              >
                <FaDownload /> Download Detailed Resume
              </button>
            </div>
          </motion.div>

          {/* Right Cards Column (5 cols) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-sky-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 bg-sky-500/15 px-2.5 py-1 rounded-full border border-sky-400/20">
                      {card.badge}
                    </span>
                  </div>
                  <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    {card.title}
                  </h4>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    {card.value}
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-3 pt-3 border-t border-sky-500/10">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Core Pillars */}
        <div className="mt-16 pt-12 border-t border-sky-500/15">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Core Engineering & AI Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a1224] p-6 rounded-2xl border border-sky-500/15 hover:border-sky-400/40 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h4 className="text-white font-bold text-base mb-2">{pillar.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;