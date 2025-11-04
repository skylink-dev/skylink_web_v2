import React from "react";

export default function SimpleBanner({ color = "text-white", content }) {
  return (
    <section
      className="relative w-[85%] mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center flex items-center justify-start min-h-[380px] md:min-h-[420px] lg:min-h-[460px] px-8 md:px-20"
      style={{
        backgroundImage: `url(${content.backgroundImage})`,
      }}
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white py-12">
        <p className="uppercase tracking-wide text-sm font-semibold text-red-400 mb-3">
          {content.eyebrowText}
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
          {content.heading}
        </h2>

        <p className="text-base md:text-lg mb-5 text-gray-200">
          {content.subText}
        </p>

        {content.legalNote && (
          <p className="text-sm text-gray-300 mb-6">{content.legalNote}</p>
        )}

        {content.cta && (
          <a
            href={content.cta.link}
            className="relative inline-block px-8 py-3 font-semibold rounded-full overflow-hidden bg-red-600 text-white transition-all duration-500 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-black to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10">{content.cta.text}</span>
          </a>
        )}
      </div>
    </section>
  );
}
