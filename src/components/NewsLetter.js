'use client'
import React, { useState } from 'react'
export default function NewsLetter({content}) {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="max-width-background bgcolor theme-neutral-bg pad-t-md pad-b-sm">
            <div className="container rel">
                <div className="undefined">
                    <div className="row flex-wrap justify-center">
                        <div className="text-center grid-col-10">
                            <h2 className="mar-b-none heading-xxl">{content.title}</h2>
                            <div className="type-base mar-t-xs rte-styles"><p>{content.description}</p></div>
                        </div>
                    </div>
                    <div className="row flex-wrap justify-center">
                        <div className=" grid-col-6 grid-col-8-md grid-col-12-sm">
                            <div className="flex flex-column-sm gap16">
                                <div className="form-row">
                                    <div data-testid="email-capture-input" className="jsx-1373263383 form-row rel ">
                                        <input type="email" data-testid="email-capture-input" aria-label="Enter your email here" autoComplete="off" data-spi="false" name="email" placeholder="Enter your email here" max="" className="jsx-1373263383 textfield" onChange={handleSubmit} value={email} />
                                    </div>
                                </div>
                                <div className="inline-flex flex-shrink-0">
                                    <button id="emailCapture-Sign-me-up-btn-6299" disabled type="button" data-testid="email-capture-button" className="jsx-1196099039 btn-secondary  btn-full-width">Sign me up!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-wrap">
                        <div className="pad-t-none centered text-center grid-col-10">
                            <div id="legal_14_Legal" className="type-legal mar-t-sm-all mar-b-none color-gray-700">
                                <span className=" ">{content.terms}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
