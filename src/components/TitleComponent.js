import React from 'react'

export default function TitleComponent({ title }) {
    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-white py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-stretch justify-center">
                    <div className="relative w-full max-w-4xl text-center">
                        <h2 
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
                            dangerouslySetInnerHTML={{ __html: title }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}