import Image from 'next/image'
import React from 'react'

export default function CEOBanner() {
    return (
        <>
            <div className="SNR_section section">
                <div className="region region--black region--flush-vertical ">
                    <div className="region__wrap">
                        <div className="snr-banner section">
                            <div className="component">
                                <div className="banner">
                                    <div className="banner__img">
                                        <div className="flex justify-end" style={{ position: 'relative', width: '100%', height: '400px' }}>
                                            <Image src="/assets/mdsir.png" width={0} height={0}  sizes="100vw" alt="CEO" style={{ width: 'auto', height: 'auto', "paddingTop": "40px", "marginRight": "90px"}} />
                                        </div>
                                    </div>
                                    <div className="banner__content banner__content--left  ">
                                        <div className="content__wrap ">
                                            <div className="banner__text ">
                                                <div className="banner__level2">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.5587 2.23872C4.6935 6.64773 0.879569 11.7793 0.116914 17.6336C-1.07037 26.7474 7.07992 31.2084 11.2096 27.2002C15.3392 23.1922 12.8638 18.1046 9.87347 16.714C6.88318 15.3233 5.05451 15.8077 5.3735 13.9494C5.69248 12.091 9.94677 6.93854 13.6843 4.539C13.9323 4.32813 14.0267 3.91899 13.7879 3.60866C13.6308 3.40446 13.3228 3.00412 12.8638 2.40752C12.4624 1.88582 12.0778 1.90534 11.5587 2.23872Z" fill="#ff0000"></path>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.6327 2.23872C22.7675 6.64773 18.9536 11.7793 18.1909 17.6336C17.0036 26.7474 25.1539 31.2084 29.2836 27.2002C33.4133 23.1922 30.9378 18.1046 27.9475 16.714C24.9572 15.3233 23.1284 15.8077 23.4475 13.9494C23.7665 12.091 28.0208 6.93854 31.7583 4.539C32.0063 4.32813 32.1007 3.91899 31.8618 3.60866C31.7048 3.40446 31.3968 3.00412 30.9378 2.40752C30.5364 1.88582 30.1518 1.90534 29.6327 2.23872Z" fill="#ff0000"></path>
                                                    </svg>
                                                    <div style={{ "fontSize": "0.75em" }}>
                                                        <b>Skylink’s team and partners are driving our 2030 vision connecting 1 million Indians with next-gen IPTV, broadband, and OTT, powered by 6G, fiber, AI, and edge for smarter, happier communities.</b>
                                                    </div>
                                                </div>
                                                <div className="banner__level3">Senthil.K, MD , Skylink Private Limited.</div>
                                            </div>
                                            <div className="banner__cta" style={{ "marginTop": "20px" }}>
                                                <a className="cta--button btn-primary" data-role="none" aria-label="Learn About Our Leadership" href="/" target="_blank" data-order="2" data-slot="0">Learn About Our Leadership</a>
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
