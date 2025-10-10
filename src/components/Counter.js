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
        <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-3 md:grid-cols-3 text-center special-card-wrap">
                    {counters.map((item, index) => (
                        <div key={index} className="p-6 shadow-md rounded-xl bg-gray-50 hover:shadow-lg transition duration-300 special-card">
                            <div className="text-4xl font-extrabold text-blue-600 bignumber">{item.number}</div>
                            <h4 className="mt-2 text-lg font-semibold subtitle">{item.label}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
