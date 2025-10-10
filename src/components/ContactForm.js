'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function ContactForm({ title, contentData, rightImage, leftImage, rightContentData }) {
    const [selectedId, setSelectedId] = useState(contentData[0].id);
    const selected = contentData.find(item => item.id === selectedId);
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedId(prev => {
                const nextIndex = (contentData.findIndex(item => item.id === prev) + 1) % contentData.length;
                return contentData[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="">
            <div className="max-width-background  bgcolor mar-b-none mar-t-none pad-b-md pad-t-lg theme-base-bg">
                <div className="container rel">
                    <div className="row flex-wrap justify-center">
                        <div className="text-center grid-col-10">
                            <h1 className="mar-b-xs heading-xxl color-att-blue">{title}</h1>
                        </div>
                    </div>
                    <div className="row flex-wrap flex-items-stretch justify-center">
                        <div className="grid-col-8">
                            <div id="card-40" className="jsx-3510905018 jsx-2300775981 card flex-card radius-lg rel bgcolor theme-dark-bg-img flex-card-background" style={{ backgroundImage: `url(${leftImage})` }}>
                                <div className="row flex card-height-tall rel flex-row">
                                    <div className="flex-1 grid-col-6 pad-r-none-lg pad-b-none pad-md-lg pad-md-md pad-lg-sm pad-r-none">
                                        <div className="">
                                            <p className="type-eyebrow-lg">{selected.subtitle}</p>
                                            <h3 className="heading-lg">{selected.title}</h3>
                                            <div className="type-base mar-t-xs rte-styles">{selected.description}</div>
                                            <div id="card-40-legal_Legal" className="type-legal mar-t-xxs">
                                                <span className=" ">{selected.details}</span>
                                                <button className="btn-reset nowrap" aria-label=" See details about this offer">See offer details</button>
                                            </div>
                                            <div className=" cta-container mar-t-xs font-color-change"><Link className="btn-primary bg-white" id="button-:R456khjmH1:" type="button" aria-label="Shop iPhone 16 Pro" href="/buy/phones/apple-iphone-16-pro.html">Shop now</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-col-4">
                            <div id="card-41" className="jsx-3886864564 jsx-2300775981 card flex-card radius-lg rel bgcolor theme-light-bg-img flex-card-background" style={{ backgroundImage: `url(${rightImage})` }}>
                                <div className="jsx-3886864564 jsx-2300775981 row flex flex-column card-height-tall rel">
                                    <div className="jsx-3886864564 jsx-2300775981 flex-1 grid-col-6 pad-b-none max-width pad-md-lg pad-md-md pad-lg-sm">
                                        <div className="jsx-3886864564 jsx-2300775981 ">
                                            <div className="flex-1">
                                                <form className="contact-form-wrapper flex flex-column gap-md" onSubmit={(e) => e.preventDefault()}>
                                                    <h3 className="heading-lg mar-b-sm">Get in Touch</h3>

                                                    <div className="form-group">
                                                        <label htmlFor="name" className="form-label">Your Name</label>
                                                        <input
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            placeholder="Enter your name"
                                                            required
                                                            className="form-input radius-md pad-sm"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="email" className="form-label">Your Email</label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            name="email"
                                                            placeholder="Enter your email"
                                                            required
                                                            className="form-input radius-md pad-sm"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="message" className="form-label">Message</label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            rows="4"
                                                            placeholder="Write your message"
                                                            required
                                                            className="form-input radius-md pad-sm"
                                                        ></textarea>
                                                    </div>

                                                    <div className="form-group">
                                                        <button type="submit" className="form-submit-btn btn-primary radius-md">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex-1 grid-col-6 pad-b-none max-width">
                                        <div className="">
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
