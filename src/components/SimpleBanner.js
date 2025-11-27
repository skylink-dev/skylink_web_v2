import React from "react";

export default function SimpleBanner({ color = "text-white", content }) {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto mt-6 md:mt-10 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center flex flex-col md:flex-row items-start md:items-center justify-between 
                 h-auto min-h-fit md:min-h-[360px] lg:min-h-[380px] px-5 md:px-10 lg:px-14 group"
      style={{
        backgroundImage: `url(${content.backgroundImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b70000]/90 via-[#cc0000]/70 to-transparent group-hover:from-[#990000]/95 transition-all duration-700"></div>

      {/* Left Text Section */}
      <div className="relative z-10 text-left max-w-2xl text-white py-4 md:py-8">
        {/* Eyebrow */}
        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200 mb-1">
          {content.eyebrowText}
        </p>

        {/* Heading */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2 md:mb-3">
          {content.heading}
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base leading-tight sm:leading-relaxed mb-2 md:mb-3 text-gray-100">
          {content.subText}
        </p>

        {/* Legal Note */}
        {content.legalNote && (
          <p className="text-xs text-gray-200 mb-2 md:mb-4 opacity-80">
            {content.legalNote}
          </p>
        )}

        {/* CTA Button */}
        {content.cta && (
          <a
            href={content.cta.link}
            className="relative inline-flex items-center justify-center px-5 py-2.5 font-semibold rounded-lg bg-white text-red-600 
                       hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              {content.cta.text}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
        )}
      </div>

      {/* Decorative Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#ff0000]/60 to-transparent"></div>
    </section>
  );
}
