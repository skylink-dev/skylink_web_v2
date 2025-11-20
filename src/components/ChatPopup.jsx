"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ChatPopup() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-5 right-5 bg-red-600 text-white p-4 rounded-full shadow-xl z-[300]"
      >
        Chat
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
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
              {/* 3CX Live Chat iframe */}
              <iframe
                src="https://skylink.3cx.in/callus/#cs"
                className="w-full h-full border-none"
                allow="camera; microphone"
              />

              {/* Close Button */}
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
