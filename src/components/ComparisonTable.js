import Link from 'next/link'
import React from 'react'

export default function ComparisonTable({ heading, subtitle, content, providers }) {
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
                                                                        <div className="type-base rte-styles" style={{"padding":"0px 10px",  "wordBreak": "break-word"}}>
                                                                            <p>{item.title}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="px-1 text-left" style={{"padding":"0px 10px",  "wordBreak": "break-word"}}>
                                                                            {item.option1}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="px-1 text-left" style={{"padding":"0px 10px",  "wordBreak": "break-word"}}>
                                                                            {item.option2}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="px-1 text-left" style={{"padding":"0px 10px",  "wordBreak": "break-word"}}>
                                                                            {item.option3}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="px-1 text-left" style={{"padding":"0px 10px", "wordBreak": "break-word"}}>
                                                                            {item.option4}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="pad-xs border-right border-gray-300 bg-white valign-top text-left">
                                                                    <div className="flex-column text-center flex-items-center justify-center height-full setRTE table-width-body">
                                                                        <div className="px-1 text-left" style={{"padding":"0px 10px",  "wordBreak": "break-word"}}>
                                                                            {item.option5}
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
                                    <Link id="tablePanelSection-Shop-AT-T-Fiber-lnk-1118" aria-label="Shop Skylink Fiber plans" href="/buy/internet/plans" className="jsx-1196099039 btn-primary ">Shop Skylink Fire TV</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
