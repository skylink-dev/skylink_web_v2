'use client';
import Link from 'next/link'
import React from 'react'
import StarRating from './ProductStar'
import Image from 'next/image'

export default function ProductSingle() {
    const handleChange = () => {

    }
    return (
        <>
            <div className="product-single-page">
                <div className="container">
                    <br className="jsx-83c201297fe97f38" />
                </div>
                <div className="container">
                    <div className="row flex-wrap">
                        <div className="pad-l-none grid-col-7 grid-col-6-md">
                            <Link href="#" className="type-xs font-bold color-ui-black block line-h-md pad-t-xxs pad-l-none-sm pad-b-lg-sm fit-content">
                                <span className="flex items-center">
                                    <svg className="mar-r-xxxs flex justify-center items-center" height="16" width="16" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"></path></svg>
                                    See all accessories</span></Link>
                            <div className="jsx-83c201297fe97f38 flex justify-between flex-items-center">
                                <div className="flex pad-t-md pad-t-md">
                                    <div className="focusable">
                                        <svg aria-label="favorite-icon" aria-hidden="false" height="24" width="24" role="img" viewBox="0 0 24 21"><title>Add to favorites</title><path fillRule="evenodd" clipRule="evenodd" d="M12.0005 20.4247L2.5955 11.0197C0.130928 8.55509 0.130928 4.55924 2.5955 2.09467C5.06007 -0.369905 9.05593 -0.369905 11.5205 2.09467L12.0005 2.57467L12.4805 2.09467C14.0748 0.500368 16.3985 -0.122276 18.5764 0.461277C20.7542 1.04483 22.4553 2.74593 23.0389 4.92378C23.6224 7.10163 22.9998 9.42537 21.4055 11.0197L12.0005 20.4247ZM7.058 1.74967C5.09477 1.73255 3.31839 2.91094 2.57078 4.72633C1.82317 6.54172 2.25456 8.6293 3.6605 9.99967L12.0005 18.3022L20.3405 9.99967C22.219 8.12121 22.219 5.07562 20.3405 3.19717C18.462 1.31871 15.4165 1.31871 13.538 3.19717L12.0005 4.69717L10.5005 3.15967C9.5887 2.24675 8.34822 1.73866 7.058 1.74967Z" fill="#0057B8"></path></svg>
                                    </div>
                                    <div className="mar-l-xs" id="shareIcon">
                                        <div>
                                            <div>
                                                <i className="SVGIcon-module_svgIcon__3jORD " style={{ "display": "inline-block", "minWidth": "20px", "maxWidth": "20px", "maxHeight": "20px" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ "height": "20px" }}><path className="svg-base" d="M26 14h2v13a3 3 0 01-3 3H7a3 3 0 01-3-3V11a3 3 0 013-3h6v2H7a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1zm-9-1a5 5 0 015-5h4.17l-3.25 3.24 1.42 1.42L30 7l-5.66-5.66-1.42 1.42L26.17 6H22a7 7 0 00-7 7v4h2z"></path></svg></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jsx-83c201297fe97f38 mar-l-xs pad-t-md">
                                    <svg aria-label="Edit Icon" aria-hidden="false" className="cursor color-gray-800 svg-accent-att-blue" height="24" width="24" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="white" fillOpacity="0.01"></rect>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.25 3.75V2.25H2.25V8.25H3.75V4.81069L8.46965 9.53034L9.53031 8.46968L4.81063 3.75H8.25ZM20.25 4.81065V8.25H21.75V2.25H15.75V3.75H19.1893L14.4697 8.46968L15.5303 9.53034L20.25 4.81065ZM20.25 19.1894L15.5303 14.4697L14.4697 15.5303L19.1893 20.25H15.75V21.75H21.75V15.75H20.25V19.1894ZM8.46965 14.4697L9.53031 15.5303L4.81065 20.25H8.25V21.75H2.25V15.75H3.75V19.1893L8.46965 14.4697Z" fill="#0057B8"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="jsx-83c201297fe97f38 stickyContainer">
                                <div className="jsx-83c201297fe97f38 text-center heroCarouselContainer">
                                    <div className="jsx-2419068230 max-width-background">
                                        <div className="jsx-2419068230 container">
                                            <div className="jsx-2419068230 row">
                                                <div className="jsx-2419068230 grid-col-12 pad-none">
                                                    <div className="flex justify-center flex-centered pad-r-xxs pad-l-xxs pad-b-lg-sm pad-b-xs-md pad-b-xxs-lg fade">
                                                        <div className="jsx-83c201297fe97f38 width-full">
                                                            <div className="jsx-83c201297fe97f38">
                                                                <Image src="/assets/firestick-product-1.jpg"
                                                                     alt="Skylink Fire TV device" />
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
                        <div className="pad-b-xxs-lg pad-b-sm-md pad-b-lg-sm pad-r-none grid-col-5 grid-col-6-md">
                            <div className="row flex-wrap pad-none">
                                <div className="pad-none grid-col-8 grid-col-12-md grid-col-12-sm">
                                    <div className="jsx-83c201297fe97f38">
                                        <div className="jsx-284813413">
                                            <Link href="#" className="jsx-284813413 star-rating inline-flex flex-items-stretch valign-bottom rel color-gray-800">
                                                <div className="jsx-284813413 hidden-spoken">Rated 3.6 out of 5 stars  with 17 reviews</div>
                                                <div className="jsx-284813413 star-rating-stars flex"><StarRating rating={4}></StarRating></div>
                                                <div className="jsx-284813413 star-rating-text mar-t-2 mar-t-none-sm flex flex-items-center type-12 line-h-tight mar-l-xxs">
                                                    <span className="jsx-284813413 span-a font-bold">3.6</span>
                                                    <span aria-hidden="true" className="jsx-284813413 span-b star-rating-divider mar-l-xxxs mar-r-xxxs bg-gray-500"></span>
                                                    <span className="jsx-284813413 span-c">17</span>
                                                </div>
                                            </Link>
                                            <Link href="#" className="mar-t-none-sm mar-l-xxxs type-12 line-h-tight nowrap link-text2">Write a review</Link>
                                        </div>
                                    </div>
                                    <div className="device-header">
                                        <div className="mar-t-xxs mar-r-xxs DeviceHeader_displayName__IxA3u">
                                            <span className="color-ui-black DeviceHeader_displayName__IxA3u">
                                                <h1 className="mar-b-none heading-md color-ui-black">Skylink Fire tv</h1>
                                            </span>
                                        </div>
                                        <p className="DeviceHeader_deviceCompatibleHeader__Skrko">Compatible with Apple iPhone 16 Pro Max</p>
                                    </div>
                                </div>
                                <div className="jsx-83c201297fe97f38 pad-t-sm-md">
                                    <div style={{ "height": "32px" }}></div>
                                    <div className="mar-b-xs price"><div className=" "><div aria-hidden="false" className="flex flex-items-top font-bold line-h-tight  "><span className="type-18 line-h-reset">$</span><span className="type-34 line-h-xs">29.99<span className="type-15"></span></span></div></div></div>
                                    <div style={{ "alignSelf": "flex-end" }}></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="row flex-wrap pad-none">
                                <div className="pad-none grid-col-12"></div>
                                <div className="jsx-317c0b2a2807998a mar-t-xs color-ui-dark-gray  type-xs font-regular"></div>
                                <div className="jsx-83c201297fe97f38 mar-t-sm-lg ">
                                    <div className="width-full flex flex-column">
                                        <div className="jsx-53d823fddb7915a4 font-regular flex-column pad-t-xs radius-lg bg-gray-200 gray-background fullBleed">
                                            <div className="justify-between pad-b-xs pad-l-lg-sm pad-l-xs-md pad-l-sm-lg pad-r-lg-sm pad-r-xs-md pad-r-sm-lg">
                                                <div className="jsx-53d823fddb7915a4 font-bold line-h-lg flex flex-items-center">
                                                    <div className="jsx-53d823fddb7915a4 heading-xxs flex">
                                                        <span className="jsx-53d823fddb7915a4 flex-self-center">
                                                            <h2 className="heading-sm">Special offers  (1) </h2>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jsx-f23a2db07c9b0b82 singleOfferTile mar-sm-lg mar-sm-md mar-md-sm mar-t-none">
                                                <div className="jsx-3239c2f9467760f5 offerTile bg-ui-white radius-lg pad-xs flex-column flex-1 justify-between undefined">
                                                    <div className="jsx-3239c2f9467760f5 flex">
                                                        <div className="jsx-3239c2f9467760f5 offerIcon mar-r-xxs pad-t-xxxs">
                                                            <Image style={{ "width": "32px" }} src="/assets/credit-card.png"
                                                                 alt="Credit card icon" />
                                                        </div>
                                                        <div className="jsx-3239c2f9467760f5 flex-column height-full">
                                                            <h2 className="jsx-3239c2f9467760f5 font-bold type-15">Earn up to $440 back</h2>
                                                            <div className="jsx-3239c2f9467760f5 type-sm line-h-md">
                                                                <span className="jsx-3239c2f9467760f5 letter-spacing-3">
                                                                    Skylink Wire customers enjoy an exclusive benefit with the Skylink Points Plus® Card from Citi. Terms apply.
                                                                </span>
                                                                <br />
                                                                <Link href="/" className="jsx-3239c2f9467760f5 cursor underline  type-legal">Learn how</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jsx-83c201297fe97f38 mar-t-sm-all" style={{ "width": "100%" }}>
                                    <div className="">
                                        <div className="jsx-2200991819 card height-full rel z0 pad-sm-lg pad-md-md bg-white bgcolor theme-base-bg border-shadow pad-xs-sm radius-lg pad-sm-lg pad-md-md pad-xs-sm pad-sm-md pad-t-md-md pad-b-md-md pad-t-lg-sm pad-b-lg-sm">
                                            <div>
                                                <h2 className="width-full heading-sm mar-b-xs">
                                                    <div className="flex">Color:
                                                        <div className="ColorSelector_label__rKBD0">Black</div>
                                                    </div>
                                                </h2>
                                                <div className="ColorSelector_colorWrapper__c5IEl">
                                                    <div className="type-sm mmar-b-none">
                                                        <div className=" mar-b-2 font-bold">
                                                            Color:
                                                            <span className=" mar-b-2 font-regular" data-selected-color="true" role="status">Black</span>
                                                        </div>
                                                        <div className="flex-wrap flex gap4">
                                                            <label className="jsx-2202735406 radio-color-option inline-flex flex-items-center rel">
                                                                <input aria-disabled="false" name="color-selector" type="radio" aria-label="Black" className="jsx-2202735406" value="#000000" checked="" onChange={handleChange} />
                                                                <span className="jsx-2202735406 radio-skin round flex rel z0" style={{ "backgroundColor": "rgb(0, 0, 0)" }}></span>
                                                                <span className="jsx-2202735406 condition"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mar-t-sm"></div>
                                                <div className="mar-t-md mar-t-md-md mar-t-md-sm">
                                                    <div className="FulfillmentOptions_deliveryContainer__hsYre mar-t-sm">
                                                        <div className="flex flex-items-center">
                                                            <svg aria-label="Delivery_icon" class="FulfillmentOptions_iconBackground__Q4wyG color-cobalt-600 mar-r-xxs-lg mar-r-xxs-md mar-r-sm-sm" height="16" width="16" role="img" viewBox="0 0 16 17"><circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red"></circle> <g id="Shopping-bag/shopping-bag_16"><path id="ð¨ Fill" fill-rule="evenodd" clip-rule="evenodd" d="M11 4.3999V3.3999C11 1.74305 9.65685 0.399902 8 0.399902C6.34315 0.399902 5 1.74305 5 3.3999V4.3999H2V14.8999C2 15.7283 2.67157 16.3999 3.5 16.3999H12.5C13.3284 16.3999 14 15.7283 14 14.8999V4.3999H11ZM6 3.3999C6 2.29533 6.89543 1.3999 8 1.3999C9.10457 1.3999 10 2.29533 10 3.3999V4.3999H6V3.3999ZM13 14.8999C13 15.176 12.7761 15.3999 12.5 15.3999H3.5C3.22386 15.3999 3 15.176 3 14.8999V5.3999H5V7.3999H6V5.3999H10V7.3999H11V5.3999H13V14.8999Z" fill="white"></path></g></svg>
                                                            <span class="mar-none type-sm font-bold"> Available for pickup at <a id="link-:r24:" class="type-sm link-text3" aria-label="store name" tabindex="0" role="button">Mockingbird Ln store</a></span>
                                                        </div>
                                                        <div className="flex flex-items-center">
                                                            <svg aria-label="Delivery_icon" class="FulfillmentOptions_iconBackground__Q4wyG color-cobalt-600 mar-r-xxs-lg mar-r-xxs-md mar-r-sm-sm" height="16" width="16" role="img" viewBox="0 0 16 17"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7 7.9899L14.2 5.9899C13.9157 5.61471 13.4707 5.39596 13 5.3999H11V3.8999C11 3.07148 10.3284 2.3999 9.5 2.3999H1.5C0.671573 2.3999 0 3.07148 0 3.8999V10.8999C0 11.7283 0.671573 12.3999 1.5 12.3999H2.09C2.29601 13.003 2.86273 13.4082 3.5 13.4082C4.13727 13.4082 4.70399 13.003 4.91 12.3999H11.09C11.296 13.003 11.8627 13.4082 12.5 13.4082C13.1373 13.4082 13.704 13.003 13.91 12.3999H14.5C15.3284 12.3999 16 11.7283 16 10.8999V8.8999C15.9993 8.57239 15.8942 8.25362 15.7 7.9899ZM10 11.3999H4.91C4.70399 10.7968 4.13727 10.3916 3.5 10.3916C2.86273 10.3916 2.29601 10.7968 2.09 11.3999H1.5C1.22386 11.3999 1 11.176 1 10.8999V3.8999C1 3.62376 1.22386 3.3999 1.5 3.3999H9.5C9.77614 3.3999 10 3.62376 10 3.8999V11.3999ZM15 10.8999C15 11.176 14.7761 11.3999 14.5 11.3999H13.91C13.704 10.7968 13.1373 10.3916 12.5 10.3916C11.8627 10.3916 11.296 10.7968 11.09 11.3999H11V6.3999H13C13.1581 6.39659 13.3078 6.4714 13.4 6.5999L14.9 8.5999C14.961 8.68847 14.9956 8.79247 15 8.8999V10.8999Z" fill="white"></path></svg>
                                                            <div><span class="mar-none type-sm font-bold">FREE delivery by Jun 24 - Jun 25</span><br /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jsx-1096a46673dbddfb mar-t-sm quantity-container">
                                        <div>
                                            <div className="jsx-2200991819 card height-full rel z0 pad-sm-lg pad-md-md bg-white bgcolor theme-base-bg border-shadow pad-xs-sm radius-lg pad-sm-lg pad-md-md pad-xs-sm pad-sm-md pad-t-md-md pad-b-md-md pad-t-lg-sm pad-b-lg-sm">
                                                <div className="flex width-full focusableHeader pad-b-xs-lg">
                                                    <h2 class="width-full heading-sm">Quantity</h2>
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
