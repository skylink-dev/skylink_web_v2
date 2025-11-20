"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si"; // For Twitter/X logo
import { FiMessageCircle, FiX, FiPhoneCall } from "react-icons/fi";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/skylinkfibernetindia/",
    color: "#1877F2",
    icon: <FaFacebookF size={22} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/skylink-fibernet?originalSubdomain=in",
    color: "#0A66C2",
    icon: <FaLinkedinIn size={22} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/skylinkfibernet/",
    color: "#E4405F",
    icon: <FaInstagram size={22} />,
  },
  {
    name: "X",
    url: "https://x.com/skylinkfiber",
    color: "#1DA1F2",
    icon: <SiX size={22} />,
  },
];

export default function SocialSidebar() {
  const [open, setOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* 🌐 Left Side — Social Sidebar (Desktop) */}
      <div className="fixed top-1/3 left-3 z-40 hidden md:flex flex-col items-center gap-4">
        {socialLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.25,
              rotate: 10,
              boxShadow: `0px 0px 25px ${item.color}`,
            }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-12 h-12 rounded-full 
                       shadow-xl bg-white/20 backdrop-blur-lg border border-white/40 
                       transition-all duration-500 hover:shadow-2xl"
            style={{
              color: item.color,
              background: `linear-gradient(135deg, ${item.color}25, #ffffff20)`,
            }}
          >
            {item.icon}
            <motion.span
              className="absolute inset-0 rounded-full border border-current opacity-40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* 📱 Mobile — Connect on Left Corner */}
      <div className="md:hidden fixed bottom-5 left-5 z-50 flex flex-col items-center gap-3">
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white shadow-2xl 
                     bg-gradient-to-br from-sky-400 via-blue-600 to-sky-800 
                     border border-white/40 backdrop-blur-2xl relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-sky-300/40 to-white/10 blur-2xl"
            animate={{
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <FiMessageCircle
            size={28}
            className={`relative transition-all duration-300 ${
              open ? "rotate-45" : "rotate-0"
            }`}
          />
          <span className="text-[10px] font-semibold mt-0.5 tracking-wide relative">
            Connect
          </span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: -10 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="relative flex flex-col items-center gap-3 p-3 rounded-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl blur-lg bg-gradient-to-br from-red-500/70 via-blue-500/60 to-purple-700/70 -z-10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg 
                             bg-white/30 backdrop-blur-xl border border-white/40"
                  style={{
                    color: item.color,
                    background: `linear-gradient(145deg, ${item.color}30, #ffffff20)`,
                  }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 📞 Fixed Call Button */}
      {/* <motion.button
        onClick={() => setShowChat(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full 
                   flex items-center justify-center shadow-2xl border border-white/40 
                   overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #ff004d, #ff66c4, #7d00ff)",
          boxShadow:
            "0 0 25px rgba(255,0,100,0.6), 0 0 60px rgba(255,0,150,0.4)",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-white/10 blur-2xl"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <FiPhoneCall size={28} className="text-white relative drop-shadow-lg" />
      </motion.button> */}

      {/* 💬 Chat Popup */}
      {/* <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-5 z-[200]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-2xl w-[90vw] h-[70vh] md:w-[400px] md:h-[600px] overflow-hidden"
            >
              <iframe
                src="https://skylink.3cx.in/callus/#cs"
                className="w-full h-full border-none"
                title="Skylink Chat"
                allow="camera; microphone"
              ></iframe>
              <button
                onClick={() => setShowChat(false)}
                className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full shadow-lg"
              >
                <FiX size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* <call-us-selector
          phonesystem-url="https://skylink.3cx.in"
          party="LiveChat226943"
        ></call-us-selector> */}
    </>
  );
}
