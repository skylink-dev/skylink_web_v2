import Link from 'next/link'
import React from 'react'

export default function HeroBanner({content}) {
    return (
        <div className="jsx-2949999815 story-feature">
            <div className="max-width-background  pad-b-lg">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="pad-b-none-lg pad-t-none-lg pad-t-xs-md pad-b-xxs-md pad-t-xs-sm  grid-col-12">
                            <div className="row flex-wrap flex-items-center rel flex-row radius-lg aspect-ratio-16-9 scale-video theme-neutral-bg bgcolor">
                                <div className="absolute-fill bgcolor bgcolor-fix z0 radius-lg"></div>
                                <div className="absolute-fill bg-no-repeat zoomable z0 radius-lg" id="story-feature-2-background" style={{ backgroundImage: `url(${content.image})` }}></div>
                                <div className="pad-l-none hide-md hide-sm grid-col-5 offset1">
                                    <div className="story-feature-card radius-lg rel pad-sm-lg  theme-base-bg bgcolor">
                                        <div className="marketing-copy">
                                            <div className="text-left">
                                                <span className="jsx-541690672 inline-flex height-sm-all child-height-full color-gray-800">
                                                    <span className="inline-flex">
                                                       
                                                    </span>
                                                </span>
                                                <div id="marketing-copy-heading">
                                                    <h1 className="mar-b-xs heading-xl">{content.title}</h1>
                                                </div>
                                                <div id="marketing-copy-text">
                                                    <div className="type-base mar-b-xs rte-styles">
                                                        {content.description}
                                                    </div>
                                                </div>
                                                <div id="marketing-copy-legal">
                                                    <div id="marketing-copy-legal-:Rck9jm:-0_Legal" className="type-legal mar-b-sm-all">
                                                        <span>
                                                            <p className="paragraph">{content.additionaldescription}</p>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="cta-container">
                                                    <div className=" flex-row inline-flex flex-wrap gap16">
                                                        <div data-testid="marketing-copy-primary-cta">
                                                            <Link id="marketing-copy-btn-:Rck9jmH1:-0" aria-label="Shop Skyplay Fiber plans" href="/plans" className="jsx-1196099039 btn-primary ">{content.subcta}</Link>
                                                        </div>
                                                        <div data-testid="marketing-copy-secondary-cta">
                                                            <Link id="marketing-copy-secondary-btn-:Rck9jmH1:-0" aria-label="Call 844.886.4258 to order Skyplay Fiber" href="tel:+919944199448" className="jsx-1196099039 btn-secondary ">{content.maincta}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
