import Link from 'next/link'
import React from 'react'

export default function Banner({ content }) {
    return (
        <div className="theme-accent-bg bgcolor  max-width-background  mar-b-xxs">
            <div className="container">
                <div className="row">
                    <div className="jsx-3623535681 flex centered flex-items-top justify-center grid- microbanner pad-t-xs pad-b-xs">
                        <div className="text-center type-base mar-b-none microbanner-pad">
                            <div className="jsx-3623535681 mar-b-xxs">
                                <div>
                                    <div>
                                <div className="type-base rte-styles">
                                    <p>
                                        <strong>{content.subtitle}</strong>
                                        <br />
                                        {content.title}{' '}
                                        <Link href="/" className="">
                                            {content.firstcta}
                                        </Link>
                                    </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="type-legal mar-b-none">
                                <span>{content.offercontent}</span>
                                <button
                                    className="btn-reset nowrap"
                                    aria-label="See offer details"
                                >
                                    {content.offercta}
                                </button>
                            </div>

                        <Link
                            href={content.href}
                            className="btn-reset nowrap link-text3"
                        >
                            {content.secondcta}
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
