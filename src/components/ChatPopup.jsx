"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ChatPopup() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-2 right-3 bg-red-600 text-white p-4 rounded-full shadow-xl z-[20000]"
      >
        Chat
      </button>

      {/* Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-5 z-[20000]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-2xl w-[90vw] h-[70vh] md:w-[400px] md:h-[600px] overflow-hidden border"
            >
              {/* 3CX Live Chat Window */}
              <call-us-selector
                phonesystem-url="https://skylink.3cx.in"
                party="LiveChat226943"
                style={{ width: "100%", height: "100%", display: "block" }}
              ></call-us-selector>

              {/* Close */}
              <button
                onClick={() => setShowChat(false)}
                className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
