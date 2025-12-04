"use client";
import {useState} from "react";

// Import location data
import CoimbatoreData from "../data/Coimbatore";
import TiruppurData from "../data/Tiruppur";
import ErodeData from "../data/Erode";

/**
 * @typedef {Object} LocationFAQProps
 * @property {string} [city="Coimbatore"] - The name of the city
 */

/**
 * LocationFAQ component displays frequently asked questions for a specific city
 * @param {LocationFAQProps} props - Component props
 * @returns {JSX.Element}
 */
export default function LocationFAQ({city = "Coimbatore"}) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Select the appropriate data based on city
    const getLocationData = () => {
        switch (city) {
            case "Tiruppur":
                return TiruppurData.faq;
            case "Erode":
                return ErodeData.faq;
            case "Coimbatore":
            default:
                return CoimbatoreData.faq;
        }
    };

    const faqData = getLocationData();

    const ChevronIcon = ({isOpen}) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
            }`}
        >
            <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 font-sans relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(31,41,55,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(31,41,55,0.03)_0%,transparent_50%)]"/>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        {faqData.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {faqData.subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="flex flex-col gap-5 mb-16">
                    {faqData.questions.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/95 rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer border border-red-100 hover:shadow-xl hover:-translate-y-1 hover:border-red-300"
                        >
                            {/* Question */}
                            <div
                                onClick={() => toggleFAQ(index)}
                                className={`p-6 flex justify-between items-center gap-6 ${
                                    openIndex === index
                                        ? "bg-gradient-to-r from-red-50 to-red-100"
                                        : "bg-white"
                                }`}
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed flex-1">
                                    {faq.question}
                                </h3>
                                <div
                                    className="flex-shrink-0 text-red-600 flex items-center justify-center w-10 h-10 rounded-full bg-red-100 transition-all duration-300">
                                    <ChevronIcon isOpen={openIndex === index}/>
                                </div>
                            </div>

                            {/* Answer */}
                            <div
                                className={`transition-all duration-400 overflow-hidden ${
                                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                }`}
                            >
                                <div className="px-6">
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed pt-3">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="bg-white/95 rounded-xl p-8 text-center shadow-lg mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Still Can&apos;t Find Your Answer?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Our dedicated support team is here to help you with any questions
                        about our services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                                        />
                                    </svg>
                                ),
                                label: "24/7 Support",
                                value: "+91 99441-99445",
                            },
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                                        />
                                    </svg>
                                ),
                                label: "Email",
                                value: "info@skylink.net.in",
                            },
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                ),
                                label: "Response Time",
                                value: "< 30 mins",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200"
                            >
                                <div className="text-red-600 mb-3 flex justify-center">
                                    {item.icon}
                                </div>
                                <div className="font-semibold text-gray-700 mb-2 text-lg">
                                    {item.label}
                                </div>
                                <div className="text-gray-600 font-medium text-base">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <button
                        onClick={() => (window.location.href = "tel:+919944199445")}
                        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 border-none rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1"
                    >
                        Contact Support Now
                    </button>
                </div>
            </div>
        </div>
    );
}