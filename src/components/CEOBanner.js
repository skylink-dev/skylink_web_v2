import Image from 'next/image'
import React from 'react'

export default function CEOBanner() {
    return (
        <section className="w-full bg-gray-100 py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
                    {/* Content Section - Left side on desktop, top on mobile */}
                    <div className="w-full md:w-1/2 lg:w-2/5 order-2 md:order-1 space-y-6">
                        <div className="space-y-4 max-w-xl">
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-start">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mr-2">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M11.5587 2.23872C4.6935 6.64773 0.879569 11.7793 0.116914 17.6336C-1.07037 26.7474 7.07992 31.2084 11.2096 27.2002C15.3392 23.1922 12.8638 18.1046 9.87347 16.714C6.88318 15.3233 5.05451 15.8077 5.3735 13.9494C5.69248 12.091 9.94677 6.93854 13.6843 4.539C13.9323 4.32813 14.0267 3.91899 13.7879 3.60866C13.6308 3.40446 13.3228 3.00412 12.8638 2.40752C12.4624 1.88582 12.0778 1.90534 11.5587 2.23872Z"
                                              fill="#ff0000"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M29.6327 2.23872C22.7675 6.64773 18.9536 11.7793 18.1909 17.6336C17.0036 26.7474 25.1539 31.2084 29.2836 27.2002C33.4133 23.1922 30.9378 18.1046 27.9475 16.714C24.9572 15.3233 23.1284 15.8077 23.4475 13.9494C23.7665 12.091 28.0208 6.93854 31.7583 4.539C32.0063 4.32813 32.1007 3.91899 31.8618 3.60866C31.7048 3.40446 31.3968 3.00412 30.9378 2.40752C30.5364 1.88582 30.1518 1.90534 29.6327 2.23872Z"
                                              fill="#ff0000"></path>
                                    </svg>
                                    <blockquote className="text-sm md:text-base font-medium text-gray-800">
                                        <p className="leading-relaxed">
                                            <strong>Skylink&apos;s team and partners are driving our 2030 vision
                                                connecting 1
                                                million Indians with next-gen IPTV, broadband, and OTT, powered by 6G,
                                                fiber, AI, and edge for smarter, happier communities.</strong>
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="text-gray-700 font-medium mt-2 pl-8">Senthil.K, MD, Skylink Private
                                    Limited
                                </div>
                            </div>
                            <div className="pt-4 pl-8">
                                <a
                                    href="/"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                    aria-label="Learn About Our Leadership"
                                >
                                    Learn About Our Leadership
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image Section - Right side on desktop, bottom on mobile */}
                    <div className="w-full md:w-1/2 lg:w-3/5 order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[550px] w-full">
                            <Image
                                src="/assets/mdsir.png"
                                alt="CEO of Skylink"
                                fill
                                className="object-contain object-center md:object-right scale-110 md:scale-125 lg:scale-130"
                                sizes="(max-width: 768px) 100vw, 60vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}