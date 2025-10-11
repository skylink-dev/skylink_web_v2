import React, { useState } from 'react';

export default function NormalTabs() {
  const [activeTab, setActiveTab] = useState(0);

const tabsData = [
  {
    title: "Streaming Features",
    content: {
      eyebrow: "Skylink Firestick",
      title: "Stream Smarter with Skylink",
      description: [
        "Enjoy high-quality streaming, live TV, and access to thousands of shows and movies.",
        "Everything you love to watch, all in one place."
      ],
      legalText: "",
      cards: [
        {
          heading: "Stream in Full HD",
          description: "Enjoy fast streaming in Full HD and control everything with your Alexa Voice Remote.",
          iconPath1: "/assets/stream-in-full-hd.png",
          iconPath2: ""
        },
        {
          heading: "Endless Entertainment",
          description: "Stream thousands of movies and shows from  Prime Video, Jio Hotstar, and more.",
          iconPath1: "/assets/endless-entertainment.png",
          iconPath2: ""
        },
        {
          heading: "Stream for Free",
          description: "Enjoy free content from YouTube, MXPlayer, NDTV India, India Today, and many others.",
          iconPath1: "/assets/stream-for-free.png",
          iconPath2: ""
        },
        {
          heading: "Watch Live",
          description: "Watch live TV, news, and sports with subscriptions to SonyLIV, Zee5, Jio Hotstar, and more.",
          iconPath1: "/assets/watch-live.png",
          iconPath2: ""
        }
      ]
    }
  },
  {
    title: "Smart Features",
    content: {
      eyebrow: "Alexa Integrated",
      title: "Smarter Control with Alexa",
      description: [
        "Use voice commands to search, control playback, and manage your smart home.",
        "Experience a truly hands-free entertainment experience."
      ],
      legalText: "",
      cards: [
        {
          heading: "TV Controls",
          description: "Power on and adjust volume on your TV using Alexa Voice Remote.",
          iconPath1: "/assets/remote-controls.png",
          iconPath2: ""
        },
        {
          heading: "Alexa Voice Search",
          description: "Search, play, pause, rewind or forward content using just your voice.",
          iconPath1: "/assets/alexa-voice-search.png",
          iconPath2: ""
        },
        {
          heading: "Smart Home Control",
          description: "Control smart devices like cameras and lights using your remote and Alexa.",
          iconPath1: "/assets/smart-home-control.png",
          iconPath2: ""
        }
      ]
    }
  },
  {
    title: "Hardware & Performance",
    content: {
      eyebrow: "High Performance",
      title: "Power Packed Streaming",
      description: [
        "Enjoy fast performance with a powerful processor, strong connectivity, and ample storage.",
        "Smooth, responsive, and built for non-stop entertainment."
      ],
      legalText: "",
      cards: [
        {
          heading: "Upgrade Instantly",
          description: "Plug in and instantly upgrade your TV with intuitive controls and 1080p streaming.",
          iconPath1: "/assets/upgrade-instantly.png",
          iconPath2: ""
        },
        {
          heading: "Powerful Specs",
          description: "Quad-core 1.7 GHz processor, 8 GB storage, and IMG GE8300 GPU for smooth experience.",
          iconPath1: "/assets/powerful-specs.png",
          iconPath2: ""
        },
        {
          heading: "Strong Connectivity",
          description: "Dual-band MIMO Wi-Fi and Bluetooth 5.0 for faster, stable streaming.",
          iconPath1: "/assets/strong-connectivity.png",
          iconPath2: ""
        }
      ]
    }
  },
  {
    title: "Compatibility & Support",
    content: {
      eyebrow: "Everything You Need",
      title: "Plug-and-Play Simplicity",
      description: [
        "Works with a wide range of TVs and accessories. Includes all essentials in the box.",
        "Easy setup, accessible features, and strong support."
      ],
      legalText: "",
      cards: [
        {
          heading: "Voice & Remote Support",
          description: "Alexa Voice Remote controls TV, soundbars, and receivers; comes with top app buttons.",
          iconPath1: "/assets/voice-remote-support.png",
          iconPath2: ""
        },
        {
          heading: "Full Compatibility",
          description: "Supports 1080p/720p output, Dolby Audio, and works with most IR-enabled devices.",
          iconPath1: "/assets/full-compatibility.png",
          iconPath2: ""
        },
        {
          heading: "Accessibility Features",
          description: "VoiceView, screen magnifier, text banner, captions, audio descriptions, and more.",
          iconPath1: "/assets/accessibility-features.png",
          iconPath2: ""
        },
        {
          heading: "Included in the Box",
          description: "Fire TV, Alexa Remote, HDMI extender, USB cable, power adapter, batteries, guide.",
          iconPath1: "/assets/included-in-the-box.png",
          iconPath2: ""
        },
        {
          heading: "Warranty & Support",
          description: "1-year warranty. Terms apply. Regional availability limited to India.",
          iconPath1: "/assets/warranty-support.png",
          iconPath2: ""
        }
      ]
    }
  }
];

  const { eyebrow, title, description, legalText, cards } = tabsData[activeTab].content;

  return (
    <div className="jsx-2547793320 rel max-width-background">
      {/* Tabs */}
      <div className="tabs-panel-large max-width-background mar-t-none mar-b-none">
        <div className="container mobile-scroll-x pad-l-none-sm pad-l-none-md pad-r-none-sm pad-r-none-md">
          <div className="row scrollbar-hidden">
            <div className="grid-col-12 pad-none-md pad-none-sm pad-t-none pad-b-none">
              <div className="tabs-bar tabs-center flex flex-items-stretch pill-radius no-radius-md no-radius-sm mar-t-md-lg mar-t-md-md mar-t-lg-sm mar-b-md-lg mar-b-md-md mar-b-lg-sm">
                <div className="tabs justify-center grid-col-12 flex flex-shrink flex-self-center flex-items-center overflow-hidden overflow-x-scroll scrollbar-hidden color-cobalt-600 pad-t-xxs pad-b-xxs rel col-gap1">
                  {tabsData.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`btn-reset line-h-reset nowrap rel z3 trans-color pill-radius ${activeTab === index ? 'color-white font-bold' : 'currentColor'}`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-width-background bgcolor pad-b-md pad-t-md">
        <div className="container">
          <div className="row flex-wrap">
            <div className="pad-l-xs-lg text-center-md text-center-sm grid-col-4 grid-col-10-md grid-col-12-sm offset1-md">
              <p className="type-eyebrow-xl">{eyebrow}</p>
              <h2 className="no-default-margin heading-xl">{title}</h2>
              <div className="type-base mar-t-xs rte-styles">
                {description.map((line, i) => (
                  <p key={i} className="type-base">{line}</p>
                ))}
              </div>
              <div id="legal_Legal" className="type-legal mar-t-xs">
                <button className="btn-reset nowrap">{legalText}</button>
              </div>
              <div className="mar-t-sm-all">
                <div className="inline-flex gap16 flex-wrap justify-center-md justify-center-sm cta-container">
                  <div>
                    <a href="#" className="jsx-1196099039 btn-primary">Learn more</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap pad-none pad-t-none grid-col-8 grid-col-12-md grid-col-12-sm">
              <div className="row flex-wrap">
                {cards.map((card, index) => (
                  <div key={index} className="pad-b-xs grid-col-6 grid-col-6-md grid-col-6-sm">
                    <div id="offset-card" className="jsx-1560405031 flex flex-row height-full">
                      <div className="jsx-1560405031 icon">
                        <div className="round overflow-hidden flex-shrink-0 bg-att-blue-100 height-xl-all width-xl-all flex flex-centered">
                          <img src={card.iconPath1} width={40} height={40} alt={card.heading} />
                        </div>
                      </div>
                      <div className="jsx-1560405031 flex flex-column justify-between">
                        <div className="jsx-1560405031">
                          <h3 className="no-default-margin heading-sm">{card.heading}</h3>
                          <div className="type-base mar-t-xxs rte-styles">{card.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
