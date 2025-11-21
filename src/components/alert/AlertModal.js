"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

export default function AlertModal({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
}) {
  useEffect(() => {
    // if (isOpen) {
    //   document.body.style.overflow = "hidden";
    //   const timer = setTimeout(onClose, 3500);
    //   return () => clearTimeout(timer);
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  }, [isOpen, onClose]);

  // SKYLINK POPUP STYLE (Blue theme, subtle shadows, soft UI)
  const typeStyles = {
    success: {
      icon: <FaCheckCircle className="text-green-600" size={38} />,
      ring: "ring-green-300",
      bar: "bg-green-600",
    },
    error: {
      icon: <FaTimesCircle className="text-red-600" size={38} />,
      ring: "ring-red-300",
      bar: "bg-red-600",
    },
    warning: {
      icon: <FaExclamationTriangle className="text-amber-500" size={38} />,
      ring: "ring-amber-300",
      bar: "bg-amber-500",
    },
    info: {
      icon: <FaInfoCircle className="text-blue-600" size={38} />,
      ring: "ring-blue-300",
      bar: "bg-blue-600",
    },
  };

  const style = typeStyles[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-6 bg-black/60">
          {/* Fade background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className={`relative bg-white w-full max-w-sm rounded-2xl shadow-2xl px-7 py-8 border border-gray-200`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-full flex justify-center mb-3">{style.icon}</div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
              {title}
            </h2>

            {/* Message */}
            <p className="text-gray-600 text-center text-base leading-relaxed mb-6">
              {message}
            </p>

            {/* Auto Close Bar */}
            {/* <div className="w-full bg-gray-200 rounded-full h-1 mb-5 overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3.4, ease: "linear" }}
                className={`h-full ${style.bar}`}
              />fdfd
            </div> */}

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-sm"
              >
                Okay
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
