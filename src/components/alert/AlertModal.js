"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AlertModal({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto close after 4 seconds
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen, onClose]);

  // Modern color schemes with better contrast
  const typeStyles = {
    success: {
      container: "bg-emerald-50 border-emerald-200",
      text: "text-emerald-900",
      icon: "text-emerald-500",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
    },
    error: {
      container: "bg-rose-50 border-rose-200",
      text: "text-rose-900",
      icon: "text-rose-500",
      button: "bg-rose-600 hover:bg-rose-700 text-white",
    },
    warning: {
      container: "bg-amber-50 border-amber-200",
      text: "text-amber-900",
      icon: "text-amber-500",
      button: "bg-amber-500 hover:bg-amber-600 text-white",
    },
    info: {
      container: "bg-blue-50 border-blue-200",
      text: "text-blue-900",
      icon: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  };

  // Icons for each type
  const typeIcons = {
    success: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    ),
    info: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const styles = typeStyles[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative max-w-md w-full rounded-2xl border-2 ${styles.container} p-6 shadow-2xl`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 hover:bg-white/50 rounded-full transition-colors"
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

            {/* Content */}
            <div className="text-center">
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 ${styles.icon}`}
              >
                {typeIcons[type]}
              </div>

              {/* Title */}
              <h2 className={`text-2xl font-bold mb-3 ${styles.text}`}>
                {title}
              </h2>

              {/* Message */}
              <p className={`text-lg mb-6 leading-relaxed ${styles.text}`}>
                {message}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-white/50 rounded-full h-1.5 mb-6 overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className={`h-full ${styles.button.split(" ")[0]}`}
                />
              </div>

              {/* Action button */}
              <button
                onClick={onClose}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg ${styles.button}`}
              >
                Got it
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
