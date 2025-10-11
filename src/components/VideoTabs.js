'use client'
import React, { useState } from 'react';

const TabContent = ({ videoSrc, title, description, legalText }) => (
  <div className="jsx-2949999815 story-feature">
    <div className="max-width-background pad-t-none mar-t-none">
      <div className="container">
        <div className="row flex-wrap">
          <div className="pad-b-none-lg pad-t-none-lg pad-t-xs-md pad-b-xxs-md pad-t-xs-sm grid-col-12">
            <div className="row flex-wrap flex-items-center rel flex-row radius-lg aspect-ratio-16-9 scale-video theme-neutral-bg bgcolor">
              <div className="absolute-fill bgcolor bgcolor-fix z0 radius-lg"></div>
              <div className="absolute-fill bg-no-repeat z0 radius-lg">
                <video className="height-full" playsInline autoPlay loop muted>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className="pad-l-none hide-md hide-sm grid-col-5 offset1">
                <div className="story-feature-card radius-lg rel pad-sm-lg undefined bgcolor">
                  <div className="text-left">
                    <div className="marketing-copy-heading">
                      <h2 className="mar-b-xs heading-xxl">{title}</h2>
                    </div>
                    <div className="marketing-copy-text">
                      <div className="type-base mar-b-xs rte-styles">{description}</div>
                    </div>
                    {legalText && (
                      <div className="type-legal mar-b-sm-all">
                        <span>{legalText}</span>
                        <button className="btn-reset nowrap" aria-label="See network interruption details">See details</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
);

const tabsData = [
  {
    title: 'Connectivity',
    content: (
      <TabContent
        videoSrc="/assets/video/your-partner-connectivity.mp4"
        title="Your partner in connectivity"
        description="Keeping you connected is our promise. If you experience a network interruption, we’ll fix it fast and credit you with a full day of service."
        legalText="Credit for fiber downtime lasting 20 minutes or more; or for wire broadband downtime lasting 60 minutes or more caused by a single incident impacting 10 or more towers. Restrictions and exclusions apply."
      />
    ),
  },
  {
    title: 'Deals and pricing',
    content: (
      <TabContent
        videoSrc="/assets/video/your-partner-connectivity.mp4"
        title="Great deals and pricing for you"
        description="Our best deals on any smartphone don't require the most expensive plan. Plus, enjoy Skylink Fiber® with no hidden fees or equipment charges, guaranteed."
        legalText="Offers vary by device. Restrictions may apply."
      />
    ),
  },
  {
    title: 'Customer care',
    content: (
    <TabContent
        videoSrc="/assets/video/your-partner-connectivity.mp4"
        title="Care when you need it"
        description="Speak to a friendly technical expert within five minutes or schedule a callback at a time that you choose. Plus, enjoy same or next day technician appointment availability. If we don’t deliver on our promise, you can redeem a benefit to help make it right."
        legalText="Five minutes begins once customer is routed to technical support assistance. See details"
      />
    ),
  },
];
export default function VideoTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="jsx-2547793320 rel max-width-background">
      {/* Background */}
      <div className="jsx-2547793320 absolute-fill">
        <div className="jsx-2547793320 absolute-fill bgcolor"></div>
        <div className="jsx-2547793320 absolute-fill zoomable"></div>
      </div>

      {/* Tabs Header */}
      <div className="jsx-2547793320 tabs-panel-large max-width-background mar-t-none mar-b-none">
        <div className="jsx-2547793320 container mobile-scroll-x pad-l-none-sm pad-l-none-md pad-r-none-sm pad-r-none-md">
          <div className="jsx-647480390 row scrollbar-hidden">
            <div className="jsx-647480390 grid-col-12 pad-none-md pad-none-sm pad-t-none pad-b-none">
              <div className="jsx-647480390 tabs-bar tabs-center flex flex-items-stretch pill-radius no-radius-md no-radius-sm mar-t-md-lg mar-t-md-md mar-t-lg-sm mar-b-md-lg mar-b-md-md mar-b-lg-sm">
                <div className="tabs-left-arrow justify-end flex flex-shrink-0 pad-t-xxs pad-b-xxs pad-l-none-md pad-l-none-sm hide">
                  <button className="btn-reset border-right border-gray-400 rel hide">
                    <span className="inline-flex flex-centered width-md-all width-lg-sm height-md-all height-lg-sm color-gray-500 rotate180">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="width-xs height-xs">
                        <path className="svg-base" d="M6.64 13.35l-.71-.7L10.58 8 5.93 3.35l.71-.7L12 8z" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="jsx-647480390 tabs justify-center grid-col-12 flex flex-shrink flex-self-center flex-items-center overflow-hidden overflow-x-scroll scrollbar-hidden color-cobalt-600 pad-t-xxs pad-b-xxs rel col-gap1">
                  {tabsData.map((tab, index) => (
                    <button
                      key={index}
                      id={`tab-${index}-att-guarantee`}
                      onClick={() => setActiveTab(index)}
                      className={`btn-reset line-h-reset nowrap rel z3 trans-color pill-radius ${activeTab === index ? 'color-white font-bold' : 'currentColor'}`}
                    >
                      <span className="rel z3">{tab.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="rel max-width-background mar-t-md-lg mar-t-md-md mar-t-lg-sm mar-b-md-lg mar-b-md-md mar-b-lg-sm">
        <div className="absolute-fill hide">
          <div className="absolute-fill bgcolor"></div>
          <div className="absolute-fill zoomable"></div>
        </div>
        <div className="row flex overflow-hidden">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              id={`tabpanel-${index}-att-guarantee`}
              className={`tabs-slide-animation pad-none width-full max-width-group ${activeTab === index ? '' : 'hide'}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}