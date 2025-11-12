"use client";
import { useEffect } from "react";

export default function AlertModal({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
}) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  // Different colors for success, error, and warning
  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 px-4">
      <div
        className={`max-w-sm w-full rounded-2xl shadow-xl border ${typeStyles[type]} p-6 text-center transform transition-all`}
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm mb-4">{message}</p>
        <button
          onClick={onClose}
          className={`px-5 py-2 rounded-lg font-medium ${
            type === "error"
              ? "bg-red-600 text-white hover:bg-red-700"
              : type === "success"
              ? "bg-green-600 text-white hover:bg-green-700"
              : type === "warning"
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          OK
        </button>
      </div>
    </div>
  );
}
