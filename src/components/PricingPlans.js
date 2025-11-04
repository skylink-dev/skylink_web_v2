import Link from 'next/link'
import React from 'react'

export default function PricingPlans({ heading, subtitle, content, providers }) {
  return (
    <div className="bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full border-collapse text-left text-sm md:text-base">
            <thead>
              <tr>
                <th className="py-5 px-6 bg-gray-50"></th>

                {providers.map((provider, idx) => (
                  <th
                    key={idx}
                    className={`py-5 px-6 text-center font-semibold text-white ${
                      provider.name.toLowerCase().includes('skyplay')
                        ? 'bg-red-600'
                        : 'bg-red-600'
                    }`}
                  >
                    {provider.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {content.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="py-4 px-6 font-medium text-gray-800">{item.title}</td>

                  {[item.option1, item.option2, item.option3].map((opt, i) => (
                    <td key={i} className="py-4 px-6 text-center">
                      {opt === 'yes' ? (
                        <svg
                          aria-label="Yes"
                          className="text-red-600 mx-auto"
                          height="24"
                          width="24"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M11.33 26.75l-10-10 1.42-1.42 8.62 8.63 18-18 1.42 1.41z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : (
                        <svg
                          aria-label="No"
                          className="text-red-500 mx-auto"
                          height="24"
                          width="24"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M26.644 25.144l-1.523 1.523-9.125-9.125-9.14 9.102-1.523-1.523 9.121-9.12-9.098-9.099 1.558-1.569L16 14.455l9.099-9.098 1.569 1.558-9.126 9.088 9.103 9.141z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            href="/buy/internet/plans"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Shop Skylink Fiber
          </Link>
        </div>

        {/* Legal Note */}
        <div className="text-center mt-8 text-gray-500 text-sm max-w-4xl mx-auto leading-relaxed">
          Competitor comparison based on publicly available data as of 01/4/2025. Comparison reflects
          typical cable and hybrid fiber-coaxial (HFC) services; excludes dedicated fiber offerings
          where available. Availability varies by region. Speed claims are based on wired connections
          under ideal conditions. Actual experience may vary due to network factors, device capabilities,
          and service setup.
        </div>
      </div>
    </div>
  )
}
