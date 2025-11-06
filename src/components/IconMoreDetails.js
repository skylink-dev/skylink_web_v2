import Link from "next/link";
import React from "react";

export default function IconMoreDetails({ title, content = [] }) {
  return (
    <div className="py-16 text-center">
      {/* Title Section */}
      {title && (
        <div className="mb-12 max-w-3xl mx-auto">
          {title.eyebrow && (
            <p className="text-red-600 font-semibold uppercase tracking-wide mb-2">
              {title.eyebrow}
            </p>
          )}
          {title.heading && (
            <h2 className="text-4xl font-bold text-black mb-4">
              {title.heading}
            </h2>
          )}
          {title.description && (
            <p className="text-gray-600 text-base leading-relaxed">
              {title.description}
            </p>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-wrap justify-center gap-10">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 w-64 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-black">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            {item.cta && (
              <Link
                href={item.link || "#"}
                aria-label={`Learn more about ${item.title}`}
                className="text-red-600 hover:text-black transition-colors font-medium"
              >
                {item.cta}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
