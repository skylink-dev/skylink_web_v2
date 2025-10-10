import Link from 'next/link'
import React from 'react'


export default function ContentBaseBanner({content, color}) {
  return (
        <div className={`max-width-background pad-t-md pad-b-md theme-neutral-bg ${color}`}>
            <div className="container">
                <div className="row flex-wrap flex-items-stretch justify-center">
                    <div className="rel grid-col-10 text-center">
                    <p className="type-eyebrow-xxl">{content?.subtitle}</p>
                    <h2 className="heading-xxl">{content?.title}</h2>
                    <p className="type-base mar-t-xs rte-styles">{content?.description}</p>
                    <div id="multicta1-2_Legal" className="type-legal mar-t-xs"><span className=" ">{content?.policy}</span> <button className="btn-reset nowrap  
                  " aria-label="See switcher offer details">{content?.subcta}</button></div>
                  <div className="flex-wrap cta-container gap16 justify-center inline-flex-lg flex-column-sm"><Link id="multiCta-Call-855-716-1186-lnk-1437" href={content.href} className="jsx-1196099039 btn-primary ">{content?.cta}</Link></div>
                    </div>
                </div>
            </div>
        </div>
  )
}
