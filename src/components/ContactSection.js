import Link from 'next/link'
import React from 'react'


export default function ContactSection() {
    return (
        <>
            <div className="LandingHeaderPanel_headerPanelContainer__VjqFl">
                <div className="full-width-background mar-t-none mar-b-none" style={{"display":"none"}}>
                    <div className="container pad-l-none pad-r-none">
                        <div className="row nopad">
                            <div className="grid-col-12">
                                <div className="breadcrumbs overflow-hidden overflow-x-auto scrollbar-hidden pad-t-xs pad-b-xs pad-l-md-lg pad-l-lg-md pad-l-lg-sm">
                                    <ol className="flex flex-items-center type-12 nowrap" style={{ "listStyle": "none" }}>
                                        <li className="flex items-center">
                                            <Link className="" id="link-:Rlcl6H1:" href="/">Home</Link>
                                        </li>
                                        <li className="flex items-center">
                                            <Link className="" id="link-:Rlcl6H1:" href="/support">Support</Link>
                                        </li>
                                        <li aria-current="page" className=" pad-r-md-lg pad-r-lg-md pad-r-lg-sm"><span>Contact us</span></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="LandingHeader_headerContainer__Jqxhl" style={{"marginTop":"30px"}}>
                    <div className="pad-l-xs pad-r-xs pad-l-xxs-sm pad-r-xxs-sm">
                        <div>
                            <h2 className="mar-b-xs heading-lg">Contact us</h2>
                            <div className="type-sm LandingHeader_headerDesc__Ru3_h rte-styles">
                                Select a service to find helpful tips, chat options, and customer service numbers.
                            </div>
                            {/* <div className="LandingHeader_headerSignin__ryCJH">
                                <div className="LandingHeader_signIn__hgh2A">
                                    <div className="type-base LandingHeader_signInHeader__VO7nv rte-styles">Want personalized help?</div>
                                    <div className="LandingHeader_contactUssubmitButton__oFQ8I">
                                        <button id="Sign-in-btn-2401" type="button" className="jsx-1196099039 btn-primary  btn-small">Sign in</button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="type-base LandingHeader_headerDescDesktop__wcLdX rte-styles">
                                Select a service to find helpful tips, chat options, and customer service numbers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
