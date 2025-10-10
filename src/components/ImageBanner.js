import Link from 'next/link'
import React from 'react'

export default function ImageBanner() {
    return (
        <div className="jsx-2949999815 story-feature">
            <div className="max-width-background  pad-b-lg">
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="pad-b-none-lg pad-t-none-lg pad-t-xs-md pad-b-xxs-md pad-t-xs-sm  grid-col-12">
                            <div className="row flex-wrap flex-items-center rel flex-row radius-lg aspect-ratio-16-9 scale-video theme-neutral-bg bgcolor">
                                <div className="absolute-fill bgcolor bgcolor-fix z0 radius-lg"></div>
                                <div className="absolute-fill bg-no-repeat zoomable z0 radius-lg" style={{ "backgroundImage": "url('/assets/banner-skyplay-deals.jpg')", "backgroundSize": "cover" }}></div>
                                <div className="pad-r-none hide-md hide-sm grid-col-5 offset6">
                                    <div className="story-feature-card radius-lg rel pad-sm-lg  theme-base-bg bgcolor">
                                        <div className="marketing-copy">
                                            <div className="text-left">
                                                <div className="marketing-copy-heading">
                                                    <p className="type-eyebrow-xxl">Skylink Smart Deals
                                                        <span className="no-wrap"><sup>SM</sup></span></p>
                                                    <h2 className="mar-b-xs heading-xxl">
                                                       Best Broadband & IPTV Offers — No Credit Needed
                                                    </h2>
                                                </div>
                                                <div className="marketing-copy-text">
                                                    <div className="type-base mar-b-xs rte-styles">
                                                        Enjoy blazing-fast internet and premium TV with zero down payment and no credit checks. Just pay on time for 6 months to unlock even more benefits.
                                                    </div>
                                                    <sup>SM</sup>
                                                    postpaid plan.
                                                </div>
                                            </div>
                                            <div className="marketing-copy-legal">
                                                <div id="marketing-copy-legal-:rt:-0_Legal" className="type-legal mar-b-sm-all">
                                                    <span className=" ">
                                                        After 1000GB, speeds may reduce during peak times. IPTV features require active subscription. Single connection per home. Taxes & fees extra. Terms & conditions apply.</span>
                                                </div>
                                            </div>
                                            <div className="cta-container">
                                                <div className=" flex-row inline-flex flex-wrap gap16">
                                                    <div data-testid="marketing-copy-primary-cta">
                                                        <Link id="marketing-copy-btn-:ru:-0" aria-label="Shop Skylink Unlimited Level Up" href="/" className="jsx-1196099039 btn-primary ">Shop now</Link>
                                                    </div>
                                                    <div data-testid="marketing-copy-secondary-cta">
                                                        <Link id="marketing-copy-secondary-btn-:ru:-0" aria-label="Learn more about Skylink Unlimited Level Up" href="/prepaid/unlimited-level-up" className="jsx-1196099039 btn-secondary ">Learn more</Link></div></div></div>
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
