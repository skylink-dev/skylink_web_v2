import Link from 'next/link'
import React from 'react'


export default function ProductHeader() {
    return (
        <div className="full-width-background pad-t-xxxxs pad-b-xxxxs">
            <div className="container pad-none">
                <div id="stepIndicator" className="jsx-4037049772 grid-col-12 pad-t-none pad-b-none pad-l-none pad-r-none null">
                    <div id="top-of-progressIndicator" className="jsx-4264476878 rel"></div>
                    <div id="progressIndicator" className="jsx-4264476878 bg-white mar-t-none mar-b-none sticky top  max-width-background">
                        <div className="container nopad">
                            <div className="row flex-wrap">
                                <div className="pad-none grid-col-12">
                                    <div className="overlay">
                                        <div className="duc-progress-indicator regular-pad">
                                            <div className="pi-row">
                                                <div className="flex justify-start justify-between flex-row">
                                                    <h1 className="mar-b-xs heading-md">Shop accessories</h1>
                                                    <div className="pi-step-indicator-mbl">
                                                        <Link href="#" className="solo type-sm font-regular pi-step-indicator-mbl-link link-text3">
                                                            <div className="color-cobalt-600 flex-row">
                                                                <div className="mar-r-xxs nowrap">Step 1 of 3</div>
                                                                <div className="pi-step-icon flex flex-items-centered">
                                                                    <svg aria-hidden="true" height="16" width="16" viewBox="0 0 16 16"><path className="svg-base" d="M11.13 6.94l.7.71L8.48 11 5.13 7.65l.7-.71 2.65 2.64zM16 8.5A7.5 7.5 0 118.5 1 7.5 7.5 0 0116 8.5zm-1 0A6.5 6.5 0 108.5 15 6.51 6.51 0 0015 8.5z"></path></svg>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="pi-elements">
                                                    <div className="desktop mar-r-xxs">
                                                        <div className="round overflow-hidden flex-shrink-0 height-lg-all width-lg-all flex flex-centered">
                                                            <svg className="height-sm-all width-sm-all color-gray-800" aria-hidden="true" height="32" width="32" viewBox="0 0 32 32"><path className="svg-base" d="M22 31H10a3 3 0 01-3-3V4a3 3 0 013-3h12a3 3 0 013 3v24a3 3 0 01-3 3zM10 3a1 1 0 00-1 1v24a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zm9 2h-6v2h6z"></path></svg>
                                                        </div>
                                                    </div>
                                                    <div className="pi-items">
                                                        <div className="pi-items-inner">
                                                            <div className="pi-list-container pi-hide">
                                                                <ul className="pi-list">
                                                                    <li className="pi-item pi-item-1 pi-active font-bold color-gray-800 bg-att-blue-100">
                                                                        <div className="type-sm border-att-blue-100 color-gray-700 rte-styles">1. Pick your accessory</div>
                                                                    </li>
                                                                    <li className="pi-item pi-item-2 pi-next type-sm color-gray-600">
                                                                        <div className="type-sm border-att-blue-100 color-gray-700 rte-styles">2. Customize your accessory</div>
                                                                    </li>
                                                                    <li className="pi-item pi-item-3 pi-next type-sm color-gray-600">
                                                                        <div className="type-sm border-att-blue-100 color-gray-700 rte-styles">3. Review your cart</div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="desktop next-steps flex flex-centered border-gray-300 bg-gray-200 text-center valign-middle mar-l-xs">
                                                        <div className="type-sm rte-styles">Checkout</div>
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
