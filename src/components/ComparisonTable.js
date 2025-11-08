import Link from 'next/link'
import React from 'react'

export default function ComparisonTable({ heading, subtitle, content, providers }) {
    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-white py-10 md:py-14 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="flex flex-wrap items-stretch justify-center">
                    <div className="w-full">
                        <div className="text-center">
                            <div className="relative pb-6 md:pb-8 text-center">
                                <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{heading}</h2>
                                <div className="pb-3 text-gray-600">
                                    <div className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                        <p>{subtitle}</p>
                                    </div>
                                </div>
                                <div className="overflow-hidden pt-6 lg:pt-8">
                                    {/* Desktop Table */}
                                    <div className="hidden lg:block table-main-head">
                                        <div className="table-panel-main">
                                            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full table-auto min-w-full">
                                                        <thead className="bg-gradient-to-r from-gray-100 to-gray-50">
                                                            <tr>
                                                                <th className="w-2/5 px-4 py-6 text-left border-r border-gray-200">
                                                                    <div className="text-gray-700 font-semibold text-base text-left">
                                                                        Features
                                                                    </div>
                                                                </th>
                                                                {providers.map((provider, idx) => (
                                                                    <th 
                                                                        key={idx} 
                                                                        className={`px-4 py-6 text-center border-r border-gray-200 last:border-r-0 group hover:bg-red-600 transition-colors duration-200 cursor-pointer ${provider.bgClass}`}
                                                                    >
                                                                        <div className={`font-regular flex flex-col text-center items-center justify-center h-full ${provider.textClass}`}>
                                                                            <div className="text-lg font-semibold text-gray-700 group-hover:text-white transition-colors duration-200">
                                                                                <strong>{provider.name}</strong>
                                                                            </div>
                                                                        </div>
                                                                    </th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody className="font-regular text-gray-700 divide-y divide-gray-100">
                                                            {content.map((item, index) => (
                                                                <tr key={index} className={`border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                                                    <td className="px-4 py-4 border-r border-gray-100 bg-white text-left align-top">
                                                                        <div className="flex flex-col text-left items-top h-full">
                                                                            <div className="text-sm font-medium text-gray-900" style={{"padding":"0px 8px", "wordBreak": "break-word"}}>
                                                                                <p>{item.title}</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    {['option1', 'option2', 'option3', 'option4', 'option5'].map((option, optionIndex) => (
                                                                        <td 
                                                                            key={optionIndex} 
                                                                            className="px-4 py-4 border-r border-gray-100 bg-white align-top group hover:bg-red-50 transition-colors duration-150 last:border-r-0"
                                                                        >
                                                                            <div className="flex flex-col text-center items-center justify-center h-full">
                                                                                <div className="px-1 text-gray-700 text-sm group-hover:text-red-600 transition-colors duration-150" style={{"padding":"0px 8px", "wordBreak": "break-word"}}>
                                                                                    {item[option]}
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Cards */}
                                    <div className="lg:hidden space-y-4">
                                        {content.map((item, index) => (
                                            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                                {/* Feature Header */}
                                                <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-4 border-b border-gray-200">
                                                    <div className="text-sm font-semibold text-gray-900">
                                                        {item.title}
                                                    </div>
                                                </div>
                                                
                                                {/* Provider Options */}
                                                <div className="divide-y divide-gray-100">
                                                    {providers.map((provider, providerIndex) => (
                                                        <div 
                                                            key={providerIndex} 
                                                            className="flex justify-between items-center px-4 py-3 hover:bg-red-50 transition-colors duration-150"
                                                        >
                                                            <div className="flex-1">
                                                                <div className="text-sm font-medium text-gray-700">
                                                                    {provider.name}
                                                                </div>
                                                            </div>
                                                            <div className="flex-1 text-right">
                                                                <div className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-150">
                                                                    {item[`option${providerIndex + 1}`]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-5 mb-4">
                                    <Link 
                                        id="tablePanelSection-Shop-AT-T-Fiber-lnk-1118" 
                                        aria-label="Shop Skylink Fiber plans" 
                                        href="/buy/internet/plans" 
                                        className="inline-flex items-center px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                                    >
                                        Shop Skylink Fire TV
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}