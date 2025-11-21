import React from 'react'

export default function Counter() {
    const counters = [
        {
            number: "10+",
            label: "Years of Excellence",
            description: "Delivering reliable broadband, OTT, and TV services across India."
        },
        {
            number: "1M+",
            label: "Connections Activated",
            description: "Homes and businesses connected through Skylink’s powerful network."
        },
        {
            number: "500+",
            label: "Active Partners",
            description: "Growing network of regional partners and cable operators nationwide."
        }
    ];

    return (
        <div className="py-16 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center special-card-wrap">
                    {counters.map((item, index) => (
                        <div key={index} className="p-4 sm:p-6 shadow-md rounded-xl bg-gray-50 hover:shadow-lg transition duration-300 special-card">
                            <div
                                className="text-3xl sm:text-4xl font-extrabold text-red-600 bignumber">{item.number}</div>
                            <h4 className="mt-2 text-base sm:text-lg font-semibold subtitle">{item.label}</h4>
                            <p className="mt-1 text-sm text-gray-600 hidden md:block">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
