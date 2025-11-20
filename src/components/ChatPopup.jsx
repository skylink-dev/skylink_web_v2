"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ChatPopup() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (showChat && window.TCX) {
      // Load 3CX Widget when popup opens
      window.TCX.initLiveChat({
        show: true,
      });
    }

    return () => {
      if (window.TCX) {
        // Hide widget when popup closes
        window.TCX.hide();
      }
    };
  }, [showChat]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-5 right-5 bg-red-600 text-white px-5 py-4 rounded-full shadow-xl z-[300] font-semibold"
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
            className="fixed bottom-24 right-5 z-[9999]"
          >
            {/* Popup container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-white rounded-2xl shadow-2xl w-[90vw] h-[70vh] md:w-[400px] md:h-[600px] overflow-hidden flex flex-col"
            >
              {/* This div will host the 3CX chat widget */}
              <div id="tcx-chat-box" className="flex-1"></div>

              {/* Close Button */}
              <button
                onClick={() => setShowChat(false)}
                className="absolute top-2 right-2 bg-black text-white p-1 rounded-full hover:bg-gray-700 transition"
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
