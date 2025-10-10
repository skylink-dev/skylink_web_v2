import Link from 'next/link'
import React from 'react'

export default function SimpleColumnSection({title, columns}) {
    return (
        <div className="pad-b-lg pad-t-lg theme-base-bg bgcolor  rel max-width-background text-center">
            <div className="flex-column row-gap16-sm container">
                <div className="row flex-items-stretch justify-center ">
                    <div className="rel grid-col-10 text-center">
                        <h2 className=" heading-xxl">{title}</h2>
                    </div>
                </div>
                <div className="row flex-items-stretch justify-center ">
                    <div className="grid-col-12 grid-col-8-md nopad text-center rel ">
                        <div className="row flex-items-stretch row flex flex-column-sm row-gap24 flex-wrap justify-center">
                            {columns.map((item, index) => (
                                <div key={index} className="flex-column  justify-between    rel grid-col-3 grid-col-6-md flex-items-center ">
                                    <div className="row-gap16 flex-column flex-grow rel  flex-items-center">
                                        {item.icon}
                                        <h3 className="mar-b-none heading-md">{item.title}</h3>
                                        <p className="type-sm mar-none rte-styles">{item.description}</p>
                                        <Link id="genericList-Explore-deals-lnk-1051" aria-label="Explore our best deals on every smartphone" viewport="[object Object]" href="/deals/cell-phone-deals/" className="jsx-1196099039 btn-primary mar-t-xs move-last-link-to-bottom">{item.cta}</Link>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
