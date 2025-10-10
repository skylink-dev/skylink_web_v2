import Link from 'next/link'
import React from 'react'

export default function ProductCard({title, products}) {
    return (
        <div className="jsx-2913604578">
            <div className="max-width-background  bgcolor pad-t-lg pad-b-lg bg-white theme-accent-bg">
                <div className="container rel">
                    <div className="row flex-wrap justify-center">
                        <div className="text-center grid-col-10">
                            <h2 className="mar-b-xs heading-xxl">{title}</h2>
                        </div>
                    </div>
                    <div className="row flex-wrap flex-items-stretch justify-center">
                        {products.map((product) => (
                            <div className="grid-col-4" key={product.id}>
                                <div className="jsx-1680617885 jsx-2300775981 card flex-card radius-lg rel bgcolor theme-light-bg-img flex-card-background"  style={{ backgroundImage: `url(${product.image})` }}>
                                    <div className="jsx-1680617885 jsx-2300775981 row flex flex-column card-height-tall rel">
                                        <div className="jsx-1680617885 jsx-2300775981 flex-1 grid-col-12 text-center pad-b-none max-width pad-md-lg pad-md-md pad-lg-sm">
                                            <div className="jsx-1680617885 jsx-2300775981 ">
                                                <h3 className="heading-md">{product.name}</h3>
                                                <div className="cta-container mar-t-xs">
                                                    <Link
                                                        className="btn-primary"
                                                        id={`product-${product.id}`}
                                                        type="button"
                                                        aria-label={`Shop ${product.name}`}
                                                        href={product.link}
                                                    >
                                                        {product.buttonLabel}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
