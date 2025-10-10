import React from 'react'

export default function SimpleBanner({color, content}) {
  return (
    <div className="max-width-background pad-t-none pad-b-xl hero-panel flex-column zoom-on-hover theme-light-bg-img">
        <div className="jsx-1049057036 bg-art absolute-fill bgcolor overflow-hidden order1 bgcolor-fix panel-height-short">
            <div className="absolute-fill bgcolor bgcolor-fix">
            </div>
            <div className="absolute-fill bg-no-repeat zoomable" id="heropanel-1-0-background" style={{ backgroundImage: `url('${content.backgroundImage}')` }}>
            </div>
        </div>
        <div className="container flex panel-height-short">
            <div className="row flex-wrap flex-self-stretch hero-panel-content rel">
                <div className="flex flex-items-center justify-center order1 hero-panel-image grid-col-6 grid-col-6-md grid-col-12-sm flex-self-stretch"></div>
                <div className={`flex-self-center pad-t-xl pad-b-xl rel grid-col-6 grid-col-6-md grid-col-12-sm ${color} sm:${color ? 'color-black' : ''}` }>
                <p className="type-eyebrow-xl">{content.eyebrowText}</p>
                <h2 className="mar-b-xs heading-xl">{content.heading}</h2>
                <div className="type-base mar-b-xs rte-styles">{content.subText}</div>
                <div id="heropanel-1-3_Legal" className="type-legal pad-b-none pad-t-none">
                    <span className=" ">
                        {content.legalNote}
                    </span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
