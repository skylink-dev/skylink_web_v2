'use client'
import Link from 'next/link'
import React from 'react'


export default function TwoColumnSection({title, promoCards}) {
    return (
        <div className="pad-t-sm pad-b-md   rel max-width-background ">
            <div className="rel container">
                <div className="row flex-items-stretch justify-center">
                    <div className="grid-col-8 grid-col-10-md grid-col-12-sm text-center rel ">
                        <h2 className="mar-b-xs heading-xxl">{title}</h2>
                    </div>
                </div>
                <div className="row flex-items-stretch   flex-wrap">
                    {promoCards.map((card) => (
                        <div key={card.id} className="zoom-on-hover rel grid-col-6">
                            <div className="rel radius-lg flex justify-center" style={{ minHeight: '620px', overflow: 'hidden' }}>
                                <div className="absolute-fill bgcolor bgcolor-fix" />
                                <div
                                    className="absolute-fill bg-no-repeat zoomable"
                                    style={{
                                        backgroundImage: `url('${card.image}')`,
                                        backgroundPosition: 'center center',
                                        backgroundSize: 'cover',
                                    }}
                                />
                                <div className="rel flex flex-column">
                                    <div className={`flex-1 rel pad-md-all pad-l-md-md pad-r-md-md pad-b-md-md pad-l-lg-sm pad-r-lg-sm pad-b-lg-sm text-center ${card.color}`}>
                                        <p className="type-eyebrow-lg">{card.eyebrow}</p>
                                        <h3 className="mar-b-xs heading-lg" dangerouslySetInnerHTML={{ __html: card.heading }} />
                                        <div className="type-base rte-styles">
                                            <p dangerouslySetInnerHTML={{ __html: card.description }} />
                                        </div>
                                        <div className="type-legal mar-t-xs" dangerouslySetInnerHTML={{ __html: card.legal }} />
                                        <button className="btn-reset nowrap" aria-label={card.buttonLabel}>
                                            {card.buttonLabel}
                                        </button>
                                        <div className="row flex-items-stretch cta-container inline-flex flex-column-md flex-column-sm flex-wrap justify-center gap16">
                                            <Link href={card.ctaHref} className="btn-secondary" aria-label={card.ctaText}>
                                                {card.ctaText}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
