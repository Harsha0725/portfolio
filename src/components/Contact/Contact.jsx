import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaDownload } from "react-icons/fa";
import { personalDetails } from "../../data/portfolio";

function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="bg-[#050b18] py-24 px-6 relative overflow-hidden border-t border-sky-500/10"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>

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
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Contact <span className="text-gradient-blue">Me</span>
            </h2>
            <p className="text-gray-400 text-base mt-4">
              Interested in collaborating, discussing AI/ML project opportunities, or hiring an intern? Feel free to drop a message!
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Contact Grid */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN: Contact Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0b1329]/80 backdrop-blur-xl p-8 rounded-3xl border border-sky-500/20 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                I am actively seeking software engineering, machine learning, and data science internships or project collaborations.
              </p>

              {/* Email Card */}
              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e1936] border border-sky-500/15 hover:border-sky-400/40 hover:bg-sky-500/10 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xl group-hover:scale-110 transition">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Email Address</span>
                  <span className="text-white text-sm font-bold group-hover:text-sky-300 transition">{personalDetails.email}</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalDetails.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e1936] border border-sky-500/15 hover:border-sky-400/40 hover:bg-sky-500/10 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xl group-hover:scale-110 transition">
                  <FaPhone />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Phone Contact</span>
                  <span className="text-white text-sm font-bold group-hover:text-sky-300 transition">{personalDetails.phone}</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e1936] border border-sky-500/15">
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-white text-sm font-bold">{personalDetails.location}</span>
                </div>
              </div>

              {/* Resume Trigger Card */}
              <div className="pt-4 border-t border-sky-500/15 flex flex-col gap-3">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition cursor-pointer"
                >
                  <FaDownload /> Download Complete Resume
                </button>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0b1329]/80 backdrop-blur-xl p-8 rounded-3xl border border-sky-500/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-sky-950/40 rounded-2xl border border-sky-400/30">
                  <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-400 text-3xl mx-auto animate-bounce">
                    <FaCheckCircle />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-gray-300 text-xs leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to Harshada Wagh. I will review your message and respond promptly via email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#091024] border border-sky-500/20 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#091024] border border-sky-500/20 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Internship Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#091024] border border-sky-500/20 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Harshada, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#091024] border border-sky-500/20 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition duration-300 cursor-pointer border border-sky-400/30 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
