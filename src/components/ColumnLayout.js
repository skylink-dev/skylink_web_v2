import Link from 'next/link'
import React from 'react'

export default function ThreeColumnLayout({content, columnCount}) {
    return (
        <div className='bau-flex-card'>
            <div className="max-width-background  bgcolor pad-t-md pad-b-sm undefined">
                <div className="container rel">
                    <div className="row flex-wrap flex-items-stretch justify-center">
                        {content && content.map((item, index) => (
                            <div key={index} className={`grid-col-${columnCount}`}>
                                <div id="card-40" className="jsx-3705208810 jsx-2300775981 card flex-card radius-lg rel bgcolor theme-dark-bg-img flex-card-background" style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover',backgroundPosition: 'center',}}>
                                    <div className="jsx-3705208810 jsx-2300775981 row flex flex-column card-height-tall rel">
                                        <div className="jsx-3705208810 jsx-2300775981 flex-1 grid-col-6 pad-b-none max-width pad-md-lg pad-md-md pad-lg-sm">
                                            <div className="jsx-3705208810 jsx-2300775981 ">
                                                <p className="type-eyebrow-md">{item.subtitle}</p>
                                                <h3 className="heading-md">{item.title}</h3>
                                                <div className="type-base mar-t-xs rte-styles">{item.description}</div>
                                                <div id="card-40-legal_Legal" className="type-legal mar-t-xxs">
                                                    <span className=" ">
                                                        {item.subdescription}
                                                    </span>
                                                    <button className="btn-reset nowrap" aria-label="See iPhone 16 Pro offer details">{item.smallcta}</button>
                                                </div>
                                                <div className=" cta-container mar-t-xs">
                                                    <Link className="btn-primary " id="button-:R8ad8hjmH1:" type="button" aria-label="Shop iPhone 16 Pro" href="/buy/phones/apple-iphone-16-pro.html">{item.cta}</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="jsx-3705208810 jsx-2300775981 flex-3 height-full width-full radius-lg radius-t-none overflow-hidden grid-col-6 pad-b-none pad-r-none hide max-width pad-l-none"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
