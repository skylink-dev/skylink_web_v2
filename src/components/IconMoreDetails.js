import Link from "next/link";
import React from "react";

export default function IconMoreDetails({ title, content = [] }) {
    return (
        <div className="w-full bg-gradient-to-br from-red-50 to-red-25 py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                {title && (
                    <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
                        {title.eyebrow && (
                            <p className="text-red-600 font-bold uppercase tracking-widest text-sm md:text-base mb-4">
                                {title.eyebrow}
                            </p>
                        )}
                        {title.heading && (
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {title.heading}
                            </h2>
                        )}
                        {title.description && (
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                                {title.description}
                            </p>
                        )}
                    </div>
                )}

                {/* Content Section - 3 columns centered */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 max-w-6xl">
                        {content.slice(0, 3).map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl lg:rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200/50 hover:scale-105 hover:bg-white/95"
                            >
                                {/* Icon Container */}
                                <div className="mb-6 flex justify-center">
                                    <div className="p-4 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors duration-300">
                                        <div className="text-red-600 group-hover:text-red-700 transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                        {item.description}
                                    </p>

                                    {/* CTA Link */}
                                    {item.cta && (
                                        <Link
                                            href={item.link || "#"}
                                            aria-label={`Learn more about ${item.title}`}
                                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-all duration-300 group/link"
                                        >
                                            <span className="text-base">{item.cta}</span>
                                            <svg
                                                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional Bottom CTA */}
                <div className="text-center mt-16 md:mt-20">
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to learn more?
                        </h3>
                        <p className="text-gray-600 mb-6 md:mb-8 text-lg">
                            Discover how our solutions can transform your experience
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/new_plans"
                                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/contact-us"
                                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-red-500 hover:text-red-600 transition-all duration-300 text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}