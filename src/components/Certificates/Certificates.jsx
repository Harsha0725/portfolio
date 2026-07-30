import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaCalendarAlt, FaCheckCircle, FaAward, FaExternalLinkAlt, FaTimes, FaDownload } from "react-icons/fa";
import { certificatesData } from "../../data/portfolio";

function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certificates"
      className="bg-[#050b18] py-24 px-6 relative overflow-hidden border-t border-sky-500/10"
    >
      {/* Background Decorative Element */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>

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
              Industry Verifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Certifications & <span className="text-gradient-blue">Credentials</span>
            </h2>
            <p className="text-gray-400 text-base mt-4">
              Verified certifications from AWS, Kaggle, MKCL, Scaler Academy, and Simplilearn. Click "View Certificate" to inspect certificate credentials.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Certificates Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0b1329]/80 backdrop-blur-xl rounded-3xl p-6 border border-sky-500/20 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-500/15 px-3 py-1 rounded-full border border-sky-400/25">
                    {cert.badge}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <FaAward className="text-lg" />
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sky-400 font-semibold text-xs mt-1">
                  Issued by {cert.issuer}
                </p>

                {/* Date Tag */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mt-3 bg-[#080e21] p-2.5 rounded-xl border border-sky-500/10 w-fit">
                  <FaCalendarAlt className="text-sky-400" />
                  <span>Completion: {cert.date}</span>
                </div>

                {/* Skill Chips */}
                <div className="mt-5 space-y-1.5">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Key Competencies:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-sky-950/70 text-sky-300 text-[11px] border border-sky-500/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-sky-500/10 flex justify-between items-center">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <FaCheckCircle className="text-sky-400" /> Verified Credential
                </span>
                <button
                  onClick={() => setActiveCert(cert)}
                  className="px-4 py-2 rounded-xl bg-[#0e1933] border border-sky-500/30 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                >
                  View Certificate <FaExternalLinkAlt className="text-[10px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Full Photo Preview Modal */}
      {activeCert && (
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveCert(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0b1329] border border-sky-500/30 rounded-3xl max-w-3xl w-full shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#0f1b38] border-b border-sky-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                    <FaCertificate />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{activeCert.title}</h3>
                    <p className="text-sky-400 text-xs font-medium">Issued by {activeCert.issuer} • {activeCert.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-sky-500/20 rounded-xl transition"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* Modal Body / Image Viewer */}
              <div className="p-6 overflow-y-auto space-y-5">
                {/* Certificate Image Frame */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-sky-500/30 bg-[#070d1e] shadow-2xl p-2 flex items-center justify-center min-h-[250px]">
                  {activeCert.image ? (
                    <img
                      src={activeCert.image}
                      alt={activeCert.title}
                      className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                      onError={(e) => {
                        // Fallback styling if photo file isn't placed yet
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}

                  {/* Fallback Display Badge until photo is uploaded */}
                  <div
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4 w-full"
                    style={{ display: activeCert.image ? 'none' : 'flex' }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-500/20 to-blue-600/30 border-2 border-sky-400/40 flex items-center justify-center text-sky-400 text-3xl shadow-lg">
                      <FaAward />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{activeCert.title}</h4>
                      <p className="text-sky-400 text-xs font-semibold">Official Credential Issued by {activeCert.issuer}</p>
                      <p className="text-gray-400 text-xs mt-2 max-w-md mx-auto">
                        Covered Modules: {activeCert.skills.join(", ")}
                      </p>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono">
                      Photo Ready Slot: {activeCert.imagePath || `public/certificates/${activeCert.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`}
                    </div>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="grid sm:grid-cols-2 gap-3 text-xs bg-[#0f1b38] p-4 rounded-2xl border border-sky-500/15">
                  <div>
                    <span className="text-gray-400 block font-semibold">Issuer Organization:</span>
                    <span className="text-white font-bold">{activeCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">Date of Achievement:</span>
                    <span className="text-sky-400 font-bold font-mono">{activeCert.date}</span>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-sky-500/10">
                    <span className="text-gray-400 block font-semibold mb-1">Key Verified Skills:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCert.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[11px] border border-sky-500/20">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-[#0f1b38] border-t border-sky-500/20 flex justify-between items-center">
                <span className="text-xs text-gray-400">Verified Professional Certificate</span>
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-md"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </section>
  );
}

export default Certificates;
