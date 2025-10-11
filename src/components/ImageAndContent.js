import Link from 'next/link'
import React from 'react'

export default function ImageAndContent({ image, content, row="row" }) {
    return (
        <div id="storyoffer" className="max-width-background pad-t-xl pad-b-xl bgcolor theme-base-bg">
            <div className="container">
                <div className={`${row} flex flex-items-center`}>
                    <div className="order1  flex grid-col-6 flex-items-center nopad">
                        <div className={`row flex-items-stretch ${row === "row" ? "justify-end" : ""}`}>
                            <div className={`${row === "row" ? "grid-col-11" : "grid-col-11"} grid-col-12-md grid-col-12-sm`}>
                                <p className="type-eyebrow-xxl">{content.subtitle}</p>
                                <h2 className="mar-b-xs heading-xxl">{content.title}</h2>
                                <div className="type-base mar-b-xs rte-styles">
                                    <p>{content.description}</p>
                                    {content.contentlists.map((item, index) => (
                                    <div key = {index} className="list-svg line-h-normal type-base rte-checkmark-att-blue">
                                        <ul role="list">
                                            <li>
                                                <p>{item}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    ))}
                                </div>
                                <div id="storyoffer-0-panel-1-2_Legal" className="type-legal mar-b-xs">
                                    <span className="" style={{"display":"none"}}>Limited availability in select areas. Savings based on ₹40/mo. discount on Skylink Business Fiber 1 GIG and ₹20/mo. off Managed Internet Backup. With purchase of an eligible business internet service. Ltd availability/areas.</span>
                                    <button className="btn-reset nowrap" aria-label="Learn more about our home business bundle deal"></button>
                                </div>
                                <div className="flex flex-wrap gap16 ">
                                    <Link id="storyOffer-Learn-more-lnk-1009" aria-label="Learn more about our home-based business bundle offer details" viewport="[object Object]" href="/plans" className="jsx-1196099039 btn-primary ">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="zoom-on-hover  rel grid-col-6">
                        <div className="overflow-hidden radius-lg">
                            <div>
                                <img src={image} alt="content" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
