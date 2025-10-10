'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function IconCard({titleData, cardData }) {

    return (
        <div className="max-width-background bgcolor pad-t-xl-sm pad-b-xl-sm pad-t-lg-lg pad-b-lg-lg pad-t-lg-md pad-b-lg-md">
            <div className="container">
                <div className="row flex-wrap">
                    <div className="pad-l-xs-lg text-center-md text-center-sm grid-col-4 grid-col-10-md grid-col-12-sm offset1-md">
                        <h2 className="no-default-margin heading-xl">{titleData.title}</h2>
                        <div className="type-base mar-t-xs rte-styles">{titleData.description}</div>
                        <div className="mar-t-sm-all">
                            <div className="inline-flex gap16 flex-wrap justify-center-md justify-center-sm cta-container">
                                {titleData.links.map((listItem, index) => (
                                    <div key={index}><Link className="primary-cta" href={listItem.url}>{listItem.title}</Link></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap pad-none pad-t-none grid-col-8 grid-col-12-md grid-col-12-sm">
                        <div className="row flex-wrap">
                            {cardData.map((card, index) => {
                                const { icon, title, description, legal } = card;
                                return (
                                    <div key={index} className="pad-b-xs grid-col-6 grid-col-6-md grid-col-6-sm">
                                        <div className="flex flex-row height-full">
                                            <div className="jsx-1560405031 icon">
                                                <div className="round overflow-hidden flex-shrink-0 bg-att-blue-100 height-xl-all width-xl-all flex flex-centered">
                                                    <Image src={icon} width={45} height={45} alt={title} />
                                                </div>
                                            </div>
                                            <div className="flex flex-column justify-between">
                                                <div>
                                                    <div className="nopad">
                                                        <h3 className="no-default-margin heading-sm">{title}</h3>
                                                    </div>
                                                    <div className="type-base mar-t-xxs rte-styles">{description}</div>
                                                    <div className="type-legal mar-t-xxs color-gray-700">
                                                        <span>{legal}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
