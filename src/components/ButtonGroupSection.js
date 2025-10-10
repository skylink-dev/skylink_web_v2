'use client'
import Link from 'next/link'
import React from 'react'

export default function ButtonGroupSection({ content }) {
  return (
    <div className="max-width-background pad-t-md pad-b-lg bg-gray-200 mar-t-md ">
      <div className="container">
        <div className="row flex-items-stretch justify-center">
          <div className="rel grid-col-10 text-center">
            <h2 className="heading-xxl"><span className="block pad-b-md">{content.title}</span></h2>
            <div className="flex-wrap cta-container gap16 justify-center inline-flex-lg flex-column-sm">
              {content.buttons.map((item, index) => (
                <div key={index} className='inline-flex'>
                  <Link id="multiCta-Compare-iPhones-lnk-2297" aria-label="Compare iPhones" viewport="[object Object]" href={item.buttonurl} className="jsx-1196099039 btn-secondary ">{item.buttontitle}</Link>
                  <div className="inline-flex bg-gray-400 mar-l-xxs mar-r-xxs hide-sm" style={{ "width": "1px" }}></div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
