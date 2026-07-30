import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaDownload, FaFilePdf, FaEye, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import { personalDetails } from "../../data/portfolio";

function ResumeModal({ isOpen, onClose }) {
  const [selectedResume, setSelectedResume] = useState("resume1"); // "resume1" | "resume2"

  if (!isOpen) return null;

  const currentFile =
    selectedResume === "resume1"
      ? "/Harshada_Wagh_Resume.pdf"
      : "/Harshada_Wagh_AI_DS_Resume.pdf";

  const currentDownloadName =
    selectedResume === "resume1"
      ? "Harshada_Wagh_Resume.pdf"
      : "Harshada_Wagh_AI_DS_Resume.pdf";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-[#0b1329] border border-sky-500/30 rounded-2xl shadow-2xl shadow-sky-950/80 overflow-hidden z-10 my-4 max-h-[94vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#0f1b38] border-b border-sky-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <FaFilePdf className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Harshada Mahesh Wagh – Resume Document
                </h3>
                <p className="text-xs text-sky-300 flex items-center gap-1.5 mt-0.5">
                  <FaCheckCircle className="text-sky-400 text-xs" />
                  Official Resume Document Preview & Direct Download
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={currentFile}
                download={currentDownloadName}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition"
              >
                <FaDownload /> Download PDF
              </a>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-sky-500/20 rounded-xl transition"
                aria-label="Close Modal"
              >
                <HiX className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Toggle Tab Bar */}
          <div className="bg-[#080d1e] px-6 py-3 border-b border-sky-500/15 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedResume("resume1")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                  selectedResume === "resume1"
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400 shadow-md shadow-sky-500/20"
                    : "bg-[#0f1b38] text-gray-300 hover:text-sky-300 border-sky-500/20 hover:border-sky-400/40"
                }`}
              >
                <FaFilePdf />
                Primary Resume (Harshada_Wagh_Resume.pdf)
              </button>

              <button
                onClick={() => setSelectedResume("resume2")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                  selectedResume === "resume2"
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400 shadow-md shadow-sky-500/20"
                    : "bg-[#0f1b38] text-gray-300 hover:text-sky-300 border-sky-500/20 hover:border-sky-400/40"
                }`}
              >
                <FaGraduationCap />
                Academic AI & DS Resume
              </button>
            </div>

            <div className="text-xs text-sky-400 font-medium hidden sm:block">
              {selectedResume === "resume1" ? "Primary Technical Resume" : "Academic AI & DS Resume"}
            </div>
          </div>

          {/* Embedded Native PDF Viewer */}
          <div className="p-4 sm:p-6 bg-[#060b18] flex-1 overflow-hidden flex flex-col min-h-[500px]">
            <div className="w-full h-full min-h-[520px] rounded-xl overflow-hidden border border-sky-500/30 bg-white shadow-2xl">
              <iframe
                src={currentFile}
                title="Harshada Wagh Resume PDF Document"
                className="w-full h-full min-h-[520px]"
              />
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3.5 bg-[#0f1b38] border-t border-sky-500/20 flex flex-wrap justify-between items-center gap-3">
            <span className="text-xs text-gray-400 flex items-center gap-1.5">
              <FaEye className="text-sky-400" />
              Showing document: <strong className="text-sky-300 font-mono">{currentDownloadName}</strong>
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-gray-800 text-gray-300 text-xs font-semibold hover:bg-gray-700 transition"
              >
                Close Window
              </button>
              <a
                href={currentFile}
                download={currentDownloadName}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition"
              >
                <FaDownload /> Save PDF File
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ResumeModal;
