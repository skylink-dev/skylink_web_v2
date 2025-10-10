import Link from 'next/link'
import React from 'react'

export default function BGImageRightContent({image, content}) {
    return (
        <div className="jsx-2949999815 story-feature">
            <div className="max-width-background  pad-t-xl">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="pad-b-none-lg pad-t-none-lg pad-t-xs-md pad-b-xxs-md pad-t-xs-sm  grid-col-12">
                            <div className="row flex-wrap flex-items-center rel flex-row radius-lg aspect-ratio-16-9 scale-video theme-base-bg bgcolor">
                                <div className="absolute-fill bgcolor bgcolor-fix z0 radius-lg"></div>
                                <div className="absolute-fill bg-no-repeat zoomable z0 radius-lg" style={{"backgroundImage":"url('/assets/bg-image.jpg')", "backgroundPosition": "center center", "backgroundSize":"cover"}}></div>
                            <div className="pad-r-none hide-md hide-sm grid-col-5 offset6">
                                <div className="story-feature-card radius-lg rel pad-sm-lg  theme-base-bg bgcolor">
                                    <div>
                                        <div className="text-left">
                                            <div className="marketing-copy-heading">
                                                <p className="type-eyebrow-xxl">{content.subtitle}<sup>SM</sup></p>
                                                <h2 className="mar-b-xs heading-xxl">{content.title}</h2>
                                            </div>
                                            <div className="marketing-copy-text">
                                                <div className="type-base mar-b-xs rte-styles">{content.description}</div>
                                            </div>
                                            <div data-testid="marketing-copy-legal">
                                                <div id="marketing-copy-legal-:r2:-0_Legal" className="type-legal mar-b-sm-all">
                                                    <button className="btn-reset nowrap" aria-label="See AT&amp;T Next Up Anytime details">{content.subcta}</button></div></div>
                                            <div className="cta-container">
                                                <div className=" flex-row inline-flex flex-wrap gap16">
                                                    <div data-testid="marketing-copy-primary-cta">
                                                        <Link id="marketing-copy-btn-:r3:-0" aria-label="Learn more about AT&amp;T Next Up Anytime" href="/plans/next-up-anytime/" className="jsx-1196099039 btn-primary ">{content.cta}</Link>
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
