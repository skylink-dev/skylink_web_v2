'use client'
import Link from 'next/link'
import React from 'react'

export default function TwoColumnSection({title, promoCards}) {
    return (
        <div className="py-8 md:py-12 lg:py-16 bg-white relative">
            <div className="container mx-auto px-4 relative">
                <div className="flex justify-center items-stretch">
                    <div className="w-full lg:w-2/3 md:w-5/6 text-center relative">
                        <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{title}</h2>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-stretch -mx-4 mt-8">
                    {promoCards.map((card) => (
                        <div key={card.id} className="w-full lg:w-1/2 px-4 mb-8 group">
                            <div 
                                className="relative rounded-2xl flex flex-col justify-start items-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-h-[620px] group-hover:scale-[1.02] transition-transform duration-300 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${card.image}')`,
                                }}
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10" />
                                
                                {/* Content directly on image container */}
                                <div className="relative w-full z-20 p-6 mt-6">
                                    <p className="text-sm font-semibold tracking-wider text-red-600 uppercase mb-2">{card.eyebrow}</p>
                                    <h3 className="mb-4 text-2xl md:text-3xl font-bold text-white drop-shadow-lg" dangerouslySetInnerHTML={{ __html: card.heading }} />
                                    <div className="text-base text-white leading-relaxed drop-shadow-lg">
                                        <p dangerouslySetInnerHTML={{ __html: card.description }} />
                                    </div>
                                    <div className="text-xs text-white/80 mt-3 drop-shadow" dangerouslySetInnerHTML={{ __html: card.legal }} />
                                
                                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                                        <Link 
                                            href={card.ctaHref} 
                                            className="bg-white text-red-600 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105 text-center"
                                            aria-label={card.ctaText}
                                        >
                                            {card.ctaText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}