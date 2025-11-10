import Link from 'next/link'
import React from 'react'

export default function ProductCard({title, products}) {
    return (
        <div className="w-full bg-white py-3 sm:py-4 md:py-5">
            <div className="container mx-auto px-2 sm:px-3 md:px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-3 sm:mb-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                        {title}
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden aspect-[5/6] sm:aspect-[4/5] relative"
                        >
                            {/* Background Image - Full container */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${product.image})` }}
                            />
                            
                            {/* Content Overlay at Top */}
                            <div className="relative z-10 p-2 sm:p-1.5 md:p-2.5 flex flex-col items-center">
                                {/* Product Name */}
                                <h3 className="text-sm sm:text-[11px] md:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-1 md:mb-1.5 leading-tight text-center">
                                    {product.name}
                                </h3>
                                
                                {/* CTA Button with Black Animation */}
                                <Link
                                    className="relative inline-flex items-center justify-center px-4 sm:px-2.5 md:px-4 py-1.5 sm:py-0.5 md:py-1 bg-red-600 text-white text-xs sm:text-[9px] md:text-xs font-semibold rounded-full overflow-hidden group/btn text-center transition-all duration-300"
                                    id={`product-${product.id}`}
                                    aria-label={`Shop ${product.name}`}
                                    href={product.link}
                                >
                                    {/* Black background that slides in from left on hover */}
                                    <span className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                    
                                    {/* Text content */}
                                    <span className="relative z-10 transition-colors duration-300 whitespace-nowrap">
                                        {product.buttonLabel}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}