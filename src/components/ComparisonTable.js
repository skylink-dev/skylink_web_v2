import Link from "next/link";
import React from "react";

export default function ComparisonTable({
  heading,
  subtitle,
  content,
  providers,
}) {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-8 md:py-12 lg:py-14">
      <div className="container mx-auto px-3 sm:px-6 lg:px-10 max-w-7xl">
        <div className="flex flex-wrap items-stretch justify-center">
          <div className="w-full text-center">
            {/* Heading */}
            <div className="pb-6 md:pb-8">
              <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {heading}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {subtitle}
              </p>
            </div>

            {/* Table Section */}
            <div className="overflow-hidden pt-6 lg:pt-8">
              {/* Desktop Table */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="overflow-x-auto">
                    <table className="w-full table-fixed min-w-[1100px]">
                      <thead className="bg-gradient-to-r from-gray-100 to-gray-50">
                        <tr>
                          <th className="w-[28%] px-5 py-4 text-left border-r border-gray-200">
                            <div className="text-gray-700 font-semibold text-base">
                              Features
                            </div>
                          </th>
                          {providers.map((provider, idx) => (
                            <th
                              key={idx}
                              className={`px-5 py-4 text-center border-r border-gray-200 last:border-r-0 group hover:bg-red-600 transition-colors duration-200 cursor-pointer ${provider.bgClass}`}
                            >
                              <div
                                className={`flex flex-col text-center items-center justify-center h-full ${provider.textClass}`}
                              >
                                <span className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-200">
                                  {provider.name}
                                </span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 divide-y divide-gray-100">
                        {content.map((item, index) => (
                          <tr
                            key={index}
                            className={`hover:bg-blue-50 transition-colors duration-150 ${
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }`}
                          >
                            <td className="px-5 py-3 border-r border-gray-100 bg-white text-left align-top">
                              <div className="text-sm font-medium text-gray-900 leading-snug">
                                {item.title}
                              </div>
                            </td>

                            {[
                              "option1",
                              "option2",
                              "option3",
                              "option4",
                              "option5",
                            ].map((option, optionIndex) => (
                              <td
                                key={optionIndex}
                                className="px-5 py-3 border-r border-gray-100 bg-white align-top text-center last:border-r-0 group hover:bg-red-50 transition-colors duration-150"
                              >
                                <span className="text-sm text-gray-700 group-hover:text-red-600 transition-colors duration-150 leading-snug break-normal whitespace-normal">
                                  {item[option]}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Mobile View */}
              <div className="lg:hidden space-y-4">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {providers.map((provider, providerIndex) => (
                        <div
                          key={providerIndex}
                          className="flex justify-between items-center px-4 py-3 hover:bg-red-50 transition-colors duration-150"
                        >
                          <div className="text-sm font-medium text-gray-700">
                            {provider.name}
                          </div>
                          <div className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-150">
                            {item[`option${providerIndex + 1}`]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 mb-2">
              <Link
                href="/plans"
                aria-label="Shop Skylink Fiber plans"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Shop Skylink Fire TV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
