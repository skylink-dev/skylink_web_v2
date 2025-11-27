'use client'
import Link from 'next/link'
import React from 'react'

export default function TwoColumnSection({title, promoCards}) {
    return (
        <div className="py-6 md:py-14 lg:py-18 bg-gradient-to-br from-gray-50 to-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Header Section */}
                <div className="text-center mb-8 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Promo Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {promoCards.map((card) => (
                        <div key={card.id} className="group">
                            <div 
                                className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[420px] md:min-h-[580px] group-hover:scale-[1.02] bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${card.image}')`,
                                }}
                            >
                                {/* Content - No Overlay */}
                                <div className="relative h-full flex flex-col justify-end p-5 md:p-8">
                                    {/* Eyebrow */}
                                    <p className="text-sm font-semibold tracking-wider text-red-600 uppercase mb-3">
                                        {card.eyebrow}
                                    </p>
                                    
                                    {/* Heading */}
                                    <h3 
                                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                                        dangerouslySetInnerHTML={{ __html: card.heading }} 
                                    />
                                    
                                    {/* Description */}
                                    <div className="text-gray-700 text-base leading-relaxed mb-4">
                                        <p dangerouslySetInnerHTML={{ __html: card.description }} />
                                    </div>
                                    
                                    {/* Legal Text */}
                                    {card.legal && (
                                        <div 
                                            className="text-gray-600 text-xs mb-6 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: card.legal }} 
                                        />
                                    )}
                                
                                    {/* CTA Button */}
                                    <div className="mt-4">
                                        <Link 
                                            href={card.ctaHref} 
                                            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center min-w-[160px]"
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