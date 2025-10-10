import Link from 'next/link';
import React from 'react';

export default function IconMoreDetails({ title, content = [] }) {
    return (
        <div className="pad-t-lg pad-b-lg rel max-width-background text-center">
            <div className="flex-column row-gap16-sm container">
                {title && (
                    <div className="row flex-items-stretch justify-center">
                        <div className="rel grid-col-10 text-center">
                            {title.eyebrow && <p className="type-eyebrow-xxl">{title.eyebrow}</p>}
                            {title.heading && <h2 className="heading-xxl">{title.heading}</h2>}
                            {title.description && (
                                <p className="type-base mar-t-xs rte-styles">{title.description}</p>
                            )}
                        </div>
                    </div>
                )}

                <div className="row flex-items-stretch justify-center">
                    <div className="grid-col-12 nopad text-center rel">
                        <div className="row flex-items-stretch flex flex-column-sm row-gap24 flex-wrap justify-center">
                            {content.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-column justify-between rel grid-col-4 grid-col-zero-md flex-items-center"
                                >
                                    <div className="row-gap16 flex-column flex-grow rel flex-items-center">
                                        {item.icon}
                                        <h3 className="mar-b-none heading-md">{item.title}</h3>
                                        <p className="type-sm mar-none rte-styles">{item.description}</p>
                                        {item.cta && 
                                        <Link
                                            className="type-sm move-last-link-to-bottom primary-cta type-base"
                                            aria-label={`Learn more about ${item.title}`}
                                            href={item.link || '#'}
                                        >
                                            {item.cta}
                                        </Link>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
