import Link from 'next/link'
import React from 'react'

export default function PricingPlans({ heading, subtitle, content, providers }) {
    return (
        <div className="max-width-background pad-t-lg pad-b-sm ">
            <div className="container">
                <div className="row flex-wrap flex-items-stretch justify-center">
                    <div className=" grid-col-12 grid-col-12-sm">
                        <div className="jsx-4036625550 marketing-table-panel text-center">
                            <div className="jsx-4036625550 rel pad-b-md text-center">
                                <h2 className="mar-b-xs heading-xxl">{heading}</h2>
                                <div className="jsx-4036625550 pad-b-xs pad-b-none-sm color-black">
                                    <div className="type-base rte-styles">
                                        <p>{subtitle}</p>
                                    </div>
                                </div>
                                <div className="jsx-4036625550 overflow-hidden table-main pad-t-xs-lg pad-t-xs-md pad-t-lg-sm">
                                    <div className="jsx-4036625550 table-main-head">
                                        <div className="jsx-4036625550 table-panel-main">
                                            <div className="jsx-417236822 ">
                                                <table className="jsx-417236822 height-xxxs table-fixed mar-b-xs  data-table width-full color-gray-800 type-sm">
                                                    <thead>
                                                        <tr>
                                                            <th className="pad-xs border-gray-300 bg-white border-top text-left"></th>
                                                            {providers.map((provider, idx) => (
                                                                <th key={idx} className={`pad-xs border-gray-300 border-top ${provider.bgClass} text-left`}>
                                                                    <div className={`font-regular flex-column text-center flex-items-center justify-center height-full setRTE pad-xxs ${provider.textClass}`}>
                                                                        <div className="type-base rte-styles">
                                                                            <strong>{provider.name}</strong>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="font-regular color-gray-700">
                                                        {content.map((item, index) => (
                                                            <tr key={index} className="border-bottom border-gray-300">
                                                                <td className="pad-xs border-right border-gray-300 color-gray-700 bg-white valign-top text-left">
                                                                    <div className="flex-column text-left flex-items-top  height-full setRTE table-width-body">
                                                                        <div className="type-base rte-styles">
                                                                            <p>{item.title}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="line-h-0">
                                                                            {item.option1 === 'yes' ? <svg aria-label="AT&amp;T first to launch" focusable="false" className="color-cobalt" height="24" width="24" viewBox="0 0 32 32"><path className="svg-base" d="M11.33 26.75l-10-10 1.42-1.42 8.62 8.63 18-18 1.42 1.41z"></path></svg> : <svg aria-label="T-Mobile not first to launch" focusable="false" className="color-red-600" height="24" width="24" viewBox="0 0 32 32"><path className="svg-base" fillRule="evenodd" clipRule="evenodd" d="M26.644 25.144l-1.523 1.523-9.125-9.125-9.14 9.102-1.523-1.523 9.121-9.12-9.098-9.099 1.558-1.569L16 14.455l9.099-9.098 1.569 1.558-9.126 9.088 9.103 9.141z"></path></svg>}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="line-h-0">
                                                                            {item.option2 === 'yes' ? <svg aria-label="AT&amp;T first to launch" focusable="false" className="color-cobalt" height="24" width="24" viewBox="0 0 32 32"><path className="svg-base" d="M11.33 26.75l-10-10 1.42-1.42 8.62 8.63 18-18 1.42 1.41z"></path></svg> : <svg aria-label="T-Mobile not first to launch" focusable="false" className="color-red-600" height="24" width="24" viewBox="0 0 32 32"><path className="svg-base" fillRule="evenodd" clipRule="evenodd" d="M26.644 25.144l-1.523 1.523-9.125-9.125-9.14 9.102-1.523-1.523 9.121-9.12-9.098-9.099 1.558-1.569L16 14.455l9.099-9.098 1.569 1.558-9.126 9.088 9.103 9.141z"></path></svg>}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="line-h-0">
                                                                            {item.option3 === 'yes' ? <svg aria-label="AT&amp;T first to launch" focusable="false" className="color-cobalt" height="24" width="24" viewBox="0 0 32 32"><path className="svg-base" d="M11.33 26.75l-10-10 1.42-1.42 8.62 8.63 18-18 1.42 1.41z"></path></svg> : <svg aria-label="T-Mobile not first to launch" focusable="false" className="color-red-600" height="24" width="24" viewBox="0 0 32 32"><path className="svg-base" fillRule="evenodd" clipRule="evenodd" d="M26.644 25.144l-1.523 1.523-9.125-9.125-9.14 9.102-1.523-1.523 9.121-9.12-9.098-9.099 1.558-1.569L16 14.455l9.099-9.098 1.569 1.558-9.126 9.088 9.103 9.141z"></path></svg>}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jsx-4036625550 mar-t-xs mar-b-xs">
                                    <Link id="tablePanelSection-Shop-AT-T-Fiber-lnk-1118" aria-label="Shop Skylink Fiber plans" href="/buy/internet/plans" className="jsx-1196099039 btn-primary ">Shop Skylink Fiber</Link>
                                </div>
                                <div className="row flex-wrap flex-items-stretch justify-center text-center">
                                    <div className="grid-col-10-md rel pad-b-none grid-col-8 grid-col-12-sm">
                                        <div className="type-legal pad-t-none">
                                            <span className=" ">Competitor comparison based on publicly available data as of 01/4/2025. Comparison reflects typical cable and hybrid fiber-coaxial (HFC) services; excludes dedicated fiber offerings where available. Availability varies by region. Speed claims are based on wired connections under ideal conditions. Actual experience may vary due to network factors, device capabilities, and service setup. For 5 Gbps plans, max wired speed per device is up to 4.7 Gbps. Please check the official website for the latest information.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
