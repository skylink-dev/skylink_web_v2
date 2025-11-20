"use client";
import React from "react";
import Link from "next/link";

export default function LookForSomething() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle search here if needed
        const searchTerm = e.target.elements["search-field"].value;
        console.log("Search term:", searchTerm);
    };

    return (
        <div className="bg-gray-50 py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Looking for something?</h2>

                    {/* Search Form */}
                    <div className="relative max-w-2xl mx-auto mb-8">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="relative">
                                {/* Search Input */}
                                <input
                                    id="search-field"
                                    type="search"
                                    autoComplete="off"
                                    className="w-full py-4 px-5 pr-14 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-gray-700 placeholder-gray-500"
                                    aria-controls="Search our site"
                                    aria-expanded="true"
                                    aria-label="Search our site"
                                    placeholder="Search our site"
                                />

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    aria-label="Search"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Quick Links Section */}
                    <div className="mb-10">
                        <h3 className="text-lg font-medium text-gray-700 mb-4">Popular categories</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/plans"
                                  className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm border border-gray-200">
                                Internet Plans
                            </Link>
                            <Link href="/support"
                                  className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm border border-gray-200">
                                Support
                            </Link>
                            <Link href="/about"
                                  className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm border border-gray-200">
                                About Us
                            </Link>
                            <Link href="/contact-us"
                                  className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm border border-gray-200">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Featured Results */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div
                            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Internet Plans &
                                        Packages</h3>
                                    <p className="text-gray-600 mb-3">Explore our range of high-speed internet plans
                                        designed to suit your needs.</p>
                                    <Link href="/plans"
                                          className="text-red-600 hover:text-red-800 font-medium text-sm inline-flex items-center">
                                        View Plans
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Customer Support</h3>
                                    <p className="text-gray-600 mb-3">Need help with your service? Our support team is
                                        available 24/7.</p>
                                    <Link href="/support"
                                          className="text-red-600 hover:text-red-800 font-medium text-sm inline-flex items-center">
                                        Get Help
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Help Text */}
                    <div className="mt-10 bg-red-50 rounded-lg p-6 text-left">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Can&apos;t find what
                                    you&apos;re looking for?</h3>
                                <p className="text-gray-700">Try our advanced search or contact our support team for
                                    assistance.</p>
                                <div className="mt-4 flex space-x-4">
                                    <Link href="/contact-us"
                                          className="text-red-600 hover:text-red-800 font-medium inline-flex items-center">
                                        Contact Support
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}