"use client";
import React, { useState } from "react";

export default function Faq({ title, content = [] }) {
  const [openItems, setOpenItems] = useState([]);

  const toggleFaq = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (openItems.length === content.length) {
      setOpenItems([]); // collapse all
    } else {
      setOpenItems(content.map((_, i) => i)); // expand all
    }
  };

  const isOpen = (index) => openItems.includes(index);

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title + Expand All */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {title}
          </h2>
          <button
            onClick={toggleAll}
            className="mt-4 text-red-600 font-semibold hover:text-red-700 transition"
          >
            {openItems.length === content.length ? "Collapse All" : "Expand All"}
          </button>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* FAQ Container */}
        <div className="divide-y divide-gray-200 border border-gray-100 rounded-2xl shadow-md overflow-hidden">
          {content.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                isOpen(index) ? "bg-red-50" : "bg-white"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </span>
                <svg
                  className={`w-5 h-5 text-red-600 transform transition-transform duration-300 ${
                    isOpen(index) ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen(index) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
