'use client'
import Link from 'next/link'
import React from 'react'

export default function StepByStepComponent({ steps }) {
  return (
    <div className="bg-gray-200 pad-t-lg pad-b-lg rel max-width-background text-center">
      <div className="flex-column row-gap16-sm container">
        <div className="row flex-items-stretch justify-center">
          <div className="rel grid-col-10 text-center">
            <h2 className="heading-xxl">Simple to set up and use</h2>
            <p className="type-base mar-t-xs rte-styles">
              Activate your device, add a line, or upgrade to a new wire plan.
            </p>
          </div>
        </div>
        <div className="row flex-items-stretch justify-center ">
          <div className="grid-col-12 grid-col-8-md nopad text-center rel ">
            <div className="row flex-items-stretch flex-column-sm row-gap24 flex-wrap justify-center">
              {steps.map(({ id, title, description, link, svg }) => (
                <div
                  key={id}
                  className="flex-column justify-between rel grid-col-3 grid-col-6-md flex-items-center"
                >
                  <div className="row-gap16 flex-column flex-grow rel flex-items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold make-round">
                      {id}
                    </div>
                    <h3 className="mar-b-none heading-md">{title}</h3>
                    <p className="type-sm mar-none rte-styles">
                      <span>{description}</span>
                    </p>
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
