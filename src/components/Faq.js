'use client'
import React, { useState } from 'react'

export default function Faq({ title, content }) {
    const [openContent, setOpenContent] = useState([]);

    const toggleFaq = (index) => {
        setOpenContent((prev) =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const toggleAll = () => {
        if (openContent.length === content.length) {
            setOpenContent([]); // Collapse all
        } else {
            setOpenContent(content.map((_, i) => i)); // Expand all
        }
    };

    const activeFaqClass = (index) => {
        return openContent.includes(index) ? 'animate-slide-open' : 'animate-slide-close overflow-hidden';
    };

    return (
        <div className="max-width-background pad-t-lg">
            <div className="container">
                <div className="row">
                    <div className="grid-col-10 centered">
                        <div className="text-center"><h2 className="heading-xxl">{title}</h2>
                            <button onClick={toggleAll} className="inline-block link-text3 solo mar-t-md transparent border-none" aria-label="Expand all"> {openContent.length === content.length ? "Collapse All" : "Expand All"}</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="grid-col-12">
                        <div className="border-top border-gray-300">
                            {content && content.map((item, index) => (
                                <div key={index} className="border-bottom border-gray-300">
                                    <h3>
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            id={`faqs-${index}-btn`}
                                            aria-controls={`faqs-${index}`}
                                            aria-expanded={openContent === index}
                                            className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-lg width-full flex flex-items-top justify-between text-left pad-t-md pad-b-md"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="reading-width">{item.title}</span>
                                            <i className="icon-chevron animate mar-l-sm-all font-bold type-lg rotate90-after"></i>
                                        </button></h3>
                                    <div id={`faqs-${index}`} className={`${activeFaqClass(index)} hide-focusable `}>

                                        <div>
                                            <div className="type-base rte-styles">
                                                <p style={{ "paddingBottom": "20px" }}>{item.content}</p>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
