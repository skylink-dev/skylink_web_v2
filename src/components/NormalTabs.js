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
        cards: [
          {
            heading: "Stream in Full HD",
            description: "Enjoy fast streaming in Full HD and control everything with your Alexa Voice Remote.",
            iconPath1: "/assets/stream-in-full-hd.png"
          },
          {
            heading: "Endless Entertainment",
            description: "Stream thousands of movies and shows from Prime Video, Jio Hotstar, and more.",
            iconPath1: "/assets/endless-entertainment.png"
          },
          {
            heading: "Stream for Free",
            description: "Enjoy free content from YouTube, MXPlayer, NDTV India, India Today, and many others.",
            iconPath1: "/assets/stream-for-free.png"
          },
          {
            heading: "Watch Live",
            description: "Watch live TV, news, and sports with subscriptions to SonyLIV, Zee5, Jio Hotstar, and more.",
            iconPath1: "/assets/watch-live.png"
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
        cards: [
          {
            heading: "TV Controls",
            description: "Power on and adjust volume on your TV using Alexa Voice Remote.",
            iconPath1: "/assets/remote-controls.png"
          },
          {
            heading: "Alexa Voice Search",
            description: "Search, play, pause, rewind or forward content using just your voice.",
            iconPath1: "/assets/alexa-voice-search.png"
          },
          {
            heading: "Smart Home Control",
            description: "Control smart devices like cameras and lights using your remote and Alexa.",
            iconPath1: "/assets/smart-home-control.png"
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
        cards: [
          {
            heading: "Upgrade Instantly",
            description: "Plug in and instantly upgrade your TV with intuitive controls and 1080p streaming.",
            iconPath1: "/assets/upgrade-instantly.png"
          },
          {
            heading: "Powerful Specs",
            description: "Quad-core 1.7 GHz processor, 8 GB storage, and IMG GE8300 GPU for smooth experience.",
            iconPath1: "/assets/powerful-specs.png"
          },
          {
            heading: "Strong Connectivity",
            description: "Dual-band MIMO Wi-Fi and Bluetooth 5.0 for faster, stable streaming.",
            iconPath1: "/assets/strong-connectivity.png"
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
        cards: [
          {
            heading: "Voice & Remote Support",
            description: "Alexa Voice Remote controls TV, soundbars, and receivers; comes with top app buttons.",
            iconPath1: "/assets/voice-remote-support.png"
          },
          {
            heading: "Full Compatibility",
            description: "Supports 1080p/720p output, Dolby Audio, and works with most IR-enabled devices.",
            iconPath1: "/assets/full-compatibility.png"
          },
          {
            heading: "Accessibility Features",
            description: "VoiceView, screen magnifier, text banner, captions, audio descriptions, and more.",
            iconPath1: "/assets/accessibility-features.png"
          },
          {
            heading: "Included in the Box",
            description: "Fire TV, Alexa Remote, HDMI extender, USB cable, power adapter, batteries, guide.",
            iconPath1: "/assets/included-in-the-box.png"
          },
          {
            heading: "Warranty & Support",
            description: "1-year warranty. Terms apply. Regional availability limited to India.",
            iconPath1: "/assets/warranty-support.png"
          }
        ]
      }
    }
  ];

  const { eyebrow, title, description, cards } = tabsData[activeTab].content;

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200 w-full max-w-4xl">
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2">
              {tabsData.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-4 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 text-center ${
                    activeTab === index
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {activeTab === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 rounded-xl" />
                  )}
                  <span className="relative z-10">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
              
              {/* Left Content */}
              <div className="lg:col-span-4 text-center lg:text-left">
                {eyebrow && (
                  <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">
                    {eyebrow}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {title}
                </h2>
                <div className="space-y-4 mb-6">
                  {description.map((line, i) => (
                    <p key={i} className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button
                        onClick={() => window.location.href = '/internet'}
                        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                        Learn more
                    </button>
                </div>
              </div>

              {/* Right Content - Cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cards.map((card, index) => (
                    <div 
                      key={index} 
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg border border-gray-200 hover:border-red-300 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <img 
                              src={card.iconPath1} 
                              width={24} 
                              height={24} 
                              alt={card.heading}
                              className="filter brightness-0 invert"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                            {card.heading}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {card.description}
                          </p>
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
    </div>
  );
}
