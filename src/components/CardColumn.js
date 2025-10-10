import Link from 'next/link'
import React from 'react'
import Image from "next/image"

export default function CardColumn({title, repeatcontent}) {
  return (
    <div className="max-width-background pad-t-lg pad-b-lg theme-base-bg bgcolor">
        <div className="container rel">
            <div className="row justify-center">
                <div className="grid-col-10 text-center">
                <h2 className=" heading-xxl">{title}</h2>
                </div>
            </div>
            <div className="row flex flex-wrap flex-items-stretch justify-center justify-start-md justify-start-sm">
                {repeatcontent.map((item, index) => (
                    <div key={index} className="rel grid-col-3 grid-col-6-md grid-col-6-sm">
                    <div className="card radius-lg rel zoom-on-hover flex-column justify-between ">
                        <div className="flex-column">
                            <div className="card-img radius-lg overflow-hidden">
                                <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '3 / 2' }}>
                                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="pad-t-xs"><h3 className=" heading-sm">{item.title}</h3>
                            <p className="type-sm mar-t-xxs rte-styles">{item.content}</p>
                            </div>
                        </div>
                        <div className="flex-column justify-end"><Link id="link-:re:" className="type-sm mar-t-xs primary-cta" aria-label="Shop Apple devices" href={item.href} viewport="[object Object]">{item.cta}</Link></div>
                    </div>
                </div>

                ))
                }
            </div>
        </div>
    </div>
  )
}
