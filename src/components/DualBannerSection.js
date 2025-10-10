import Link from 'next/link'
import React from 'react'
import Image from "next/image"

export default function DualBannerSection() {
    return (
        <>
            <div id="dual-banner-section" className="max-width-background mar-t-sm hero-panel flex-column zoom-on-hover theme-dark-bg-img" style={{"borderRadius":"1.6rem 1.6rem 0px 0px", "marginBottom":"0px"}}>
                <div className="bg-art absolute-fill bgcolor overflow-hidden order1 bgcolor-fix panel-height-base">
                    <div className="absolute-fill bgcolor bgcolor-fix"></div>
                    <div className="absolute-fill bg-no-repeat zoomable" style={{ backgroundImage: `url('/assets/dual-banner-bg.jpg')`, "backgroundSize": "cover" }}></div>
                </div>
                <div className="container flex panel-height-base">
                    <div className="row flex-wrap flex-self-stretch hero-panel-content rel">
                        <div className="flex flex-items-center justify-center order1 hero-panel-image grid-col-6 grid-col-6-md grid-col-12-sm flex-self-stretch">

                        </div>
                        <div className="flex-self-center pad-t-xl pad-b-xl rel grid-col-6 grid-col-6-md grid-col-12-sm">
                            <p className="type-eyebrow-xxl">Wireless + home internet</p>
                            <h2 className="mar-b-xs heading-xxl">Save 20% every month </h2>
                            <div className="type-base mar-b-xs rte-styles">When you bundle internet service with unlimited wire from Skylink.</div>
                            <div id="hero2-3_Legal" className="  type-legal mar-b-sm-all  ">
                                <span className=" ">
                                    <p><b>Skylink Wireless<sup>SM</sup>: Skylink may temporarily slow data speeds if the network is busy.</b></p>
                                    Savings applied to one service based on eligibility and service(s) purchased/added.</span>
                                <button className="btn-reset nowrap  
                  " aria-label="Click to know about 20 percent Internet Savings Offer">
                                    See offer details
                                </button>
                            </div>
                            <div className="flex flex-wrap gap16">
                                <Link id="heroPanel-New-customers-lnk-6389" aria-label="Shop bundles for new customers" viewport="[object Object]" href="/bundles/connectivity/" className="jsx-1196099039 btn-primary bg-white">New customers</Link>
                                <Link id="heroPanel-Current-customers-lnk-6389" aria-label="Shop bundles for current customers" viewport="[object Object]" href="/bundles/internet-wireless/" className="jsx-1196099039 btn-primary bg-white">Current customers</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-width-background"style={{"marginTop":"-33px !important"}}>
                <div className="jsx-1736972233 overlay-container">
                    <div className="jsx-1736972233 overlay-bottom-outer-style">
                        <div className="theme-accent-bg bgcolor  max-width-background"  style={{"borderRadius":"0px 0px 1.6rem 1.6rem"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="jsx-3623535681 flex centered flex-items-top justify-center grid- microbanner pad-t-xs pad-b-xs">
                                        <div className="text-center type-base mar-b-none microbanner-pad">
                                            <div className="jsx-3623535681 ">
                                                <div className="jsx-1736972233 overlay-content-bottom rel text-center-md text-left-sm">
                                                    <div data-testid="overlay-heading" className="jsx-1736972233 overlay-heading-bottom">
                                                        <h2 className="mar-b-xxs heading-sm">Get up to a ₹150 reward card</h2>
                                                    </div>
                                                    <div data-testid="overlay-copy" className="jsx-1736972233">
                                                        <div className="type-base mar-b-xxs rte-styles">When you buy both Skylink Fiber and an eligible wire plan.</div>
                                                    </div>
                                                    <div data-testid="overlay-legal" className="jsx-1736972233 false">
                                                        <div id="overlay-legal-:r1:-0_Legal" className=" type-legal mar-b-sm-all">
                                                            <span className=" ">₹50 with 300Mbps; ₹100 with 500Mpbs; ₹150 with 1 GIG+. Redemption reqd. Skyplay Fiber: Limited availability in select areas.</span>
                                                            <button className="btn-reset nowrap" aria-label="See Skylink Fiber offer details">
                                                                See offer details
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div data-testid="overlay-image" className="jsx-1736972233 reward-img-with-copy-bottom reward-img absolute z1">
                                                        <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '3 / 2', display: "none" }}>
                                                          <Image className="zoomable" src="/assets/at-t-absolute-image.webp" alt="zoomable"  fill style={{ objectFit: 'cover' }}/>
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
        </>
    )
}
