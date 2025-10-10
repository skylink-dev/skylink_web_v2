import Link from 'next/link'
import React from 'react'

export default function SupportSection({ title, subtitle, cta, supports }) {
    return (
        <div className="container">
            <div className="pad-b-sm pad-l-xs pad-t-md text-center row">
                <h1 className="headerTitle mar-b-xs heading-lg color-ui-black">{title}</h1>
                <div className="headerSignin pad-r-xs">
                    <div className="type-base mar-r-md mar-t-xxs rte-styles">{subtitle}</div>
                    <button id="Sign-in-btn-7107" type="button" data-testid="signInButton" className="jsx-1196099039 btn-primary mar-t-xxs-sm">{cta}</button>
                </div>
            </div>
            <div style={{}}></div>
            <div className="row flex-wrap justify-start">
                {supports && supports.map((item, index) => (
                    <div key={index} className="SupportLanderCards_supportCardPanel__dUC_e grid-col-4">
                        <div className="card height-full rel z0 pad-sm-lg pad-md-md undefined bgcolor theme-base-bg border-shadow color-gray-800 pad-xs-sm  radius-lg  undefined">
                            <div className="flex-row pad-xs items-center flex content-center">
                                <div>
                                    {item.icon}
                                </div>
                                <div className="flex items-center" style={{"alignItems":"center"}}><h2 className="heading-sm">{item.title}</h2></div>
                            </div>
                            <div>
                                <div className="pad-xs">
                                    <div className="">
                                        {item.links.map((linkitem, linkindex) => (
                                            <div key={linkindex} className="pad-l-none mar-b-xs">
                                                <span className=" mar-t-xxs">
                                                    <Link id="Set-up-mobile-hotspot-lnk-6163" className="no-hover solo primary-cta link-text3" href={linkitem.href}>
                                                        <strong>{linkitem.label}</strong>
                                                    </Link>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {item.ctabutton ? <div className="_2siQb">
                                <Link id="Get-wireless-help-lnk-1162" aria-label="Get wireless help" href="/support/wireless/" className="jsx-1196099039 btn-secondary  btn-full-width">{item.ctabutton}</Link>
                            </div> : ''}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
