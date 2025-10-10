import Link from 'next/link'
import React from 'react'

export default function IconDetails({iconslist, title}) {
    return (
        <div className="mar-b-none pad-t-lg pad-b-xl theme-base-bg bgcolor  rel max-width-background text-center">
            <div className="nopad container">
                <div className="row flex-items-stretch justify-center container">
                    <div className="rel grid-col-10 text-center">
                        <h2 className=" heading-xxl">{title}</h2>
                    </div>
                </div>
                <div className="row flex-items-stretch justify-center container overflow-x-scroll overflow-y-hidden scrollbar-hidden rel">
                    <div className="generic-list grid-col-12 nopad pad-t-xs pad-b-xs pad-t-reset-sm pad-b-reset-sm text-center rel ">
                        <ul className="flex justify-center justify-start-md justify-start-sm nowrap width-full pad-l-xs pad-r-xs row-gap24">
                            {iconslist.map((item, index) => (
                                <li key={index} className="flex-column false   rel  flex-items-center  inline-flex row-gap16 ">
                                    <div className="row-gap16 flex-column flex-grow rel  flex-items-center">
                                        {item.icon}
                                        <p className="type-sm mar-none rte-styles">
                                            <Link aria-label="Get help online" className="link-text3 solo cta-overlay" href="/support/"><strong>{item.cta}</strong></Link>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
