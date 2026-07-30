import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRocket, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/profile.jpeg";
import { personalDetails } from "../../data/portfolio";

function Hero({ onOpenResume }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-16 bg-[#030712] text-white"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Background Grid Accent Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">

        {/* LEFT SIDE CONTENT (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/30 backdrop-blur-md mb-6 w-fit shadow-md shadow-sky-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-sky-300 uppercase">
              Open for Internships & AI/Web Roles
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
              {personalDetails.name}
            </span>
          </h1>

          {/* Typewriter Role */}
          <div className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold flex items-center gap-2 h-12">
            <span className="text-gray-300">I am a</span>
            <TypeAnimation
              sequence={[
                "AI & Data Science Student",
                2200,
                "Machine Learning & AI Enthusiast",
                2200,
                "Web & Mobile App Enthusiast",
                2200,
                "Data Analytics & Problem Solver",
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-extrabold"
            />
          </div>

          {/* Bio Description */}
          <p className="mt-5 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            B.Tech student at KKWIEER specializing in Artificial Intelligence & Data Science. I craft intelligent algorithms, optimization systems, and modern web apps that transform data into high-impact solutions.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 max-w-lg">
            <div className="bg-[#0b1329]/80 border border-sky-500/20 p-3 rounded-2xl backdrop-blur-md">
              <div className="text-2xl font-black text-sky-400">8.22</div>
              <div className="text-[11px] text-gray-400 font-medium">B.Tech CGPA</div>
            </div>
            <div className="bg-[#0b1329]/80 border border-sky-500/20 p-3 rounded-2xl backdrop-blur-md">
              <div className="text-2xl font-black text-sky-400">5+</div>
              <div className="text-[11px] text-gray-400 font-medium">Flagship Projects</div>
            </div>
            <div className="bg-[#0b1329]/80 border border-sky-500/20 p-3 rounded-2xl backdrop-blur-md">
              <div className="text-2xl font-black text-sky-400">5+</div>
              <div className="text-[11px] text-gray-400 font-medium">Certifications</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer border border-sky-400/40 text-sm"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </button>

            <a
              href="#sections-nav"
              className="flex items-center gap-2.5 bg-[#0e172e] hover:bg-sky-500/10 border border-sky-500/30 hover:border-sky-400 text-sky-300 font-semibold px-7 py-3.5 rounded-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md text-sm"
            >
              <FaRocket className="text-sm text-sky-400" />
              Explore Projects
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex items-center gap-6 mt-9 pt-6 border-t border-sky-500/15">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Connect:</span>
            
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0e172e] border border-sky-500/20 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:border-sky-400 hover:bg-sky-500/10 hover:scale-110 transition duration-300 shadow-md"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0e172e] border border-sky-500/20 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:border-sky-400 hover:bg-sky-500/10 hover:scale-110 transition duration-300 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href={`mailto:${personalDetails.email}`}
              className="w-10 h-10 rounded-xl bg-[#0e172e] border border-sky-500/20 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:border-sky-400 hover:bg-sky-500/10 hover:scale-110 transition duration-300 shadow-md"
              aria-label="Send Email"
            >
              <FaEnvelope className="text-xl" />
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 ml-auto bg-[#0b1329] px-3 py-1.5 rounded-lg border border-sky-500/15">
              <FaMapMarkerAlt className="text-sky-400" />
              <span>Nashik, MH</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE AVATAR CARD (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-72 sm:w-80 lg:w-[370px]">
            {/* Outer Animated Glow Ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-400 opacity-60 blur-xl animate-pulse"></div>

            {/* Main Avatar Card Frame */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-sky-400 via-sky-600 to-blue-800 shadow-2xl shadow-sky-500/30">
              <div className="relative w-full h-[380px] sm:h-[430px] rounded-[22px] overflow-hidden bg-[#0a1226]">
                <img
                  src={profile}
                  alt="Harshada Wagh"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter brightness-[1.02] contrast-[1.03]"
                />

                {/* Gradient Overlay for sleek effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0b1329]/90 backdrop-blur-xl p-3.5 rounded-2xl border border-sky-400/30 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-lg shrink-0">
                    <FaStar />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold">AI & Data Science Student</h4>
                    <p className="text-sky-300 text-[11px]">KKWIEER • Class of 2027</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right Floating Chip */}
            <div className="absolute -top-4 -right-4 bg-[#0b1329]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-sky-500/30 shadow-lg text-xs font-semibold text-sky-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
              Python • ML • Web
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#sections-nav"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-sky-400 transition cursor-pointer group"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase group-hover:text-sky-300">Scroll Down</span>
        <div className="w-5 h-9 border-2 border-sky-500/30 rounded-full flex justify-center p-1 group-hover:border-sky-400">
          <div className="w-1.5 h-2.5 bg-sky-400 rounded-full animate-bounce"></div>
        </div>
      </a>
    </section>
  );
}

export default Hero;