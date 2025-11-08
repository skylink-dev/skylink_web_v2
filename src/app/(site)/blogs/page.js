'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const blogData = [
    {
      imgSrc: '/assets/blogs-01.png',
      title: 'Skylink Fiber Broadband',
      subtitle: 'Speed that connects all of India',
      description: "From Chennai’s tech hubs to Delhi’s bustling streets, enjoy blazing 1 Gbps fiber internet for streaming, gaming, and work without limits.",
      normaltext: "",
      legalText: "Speed varies by location and network conditions.",
      link: '/speed-that-connects-all-of-india',
    },
    {
      imgSrc: '/assets/blogs-02.png',
      title: 'Skylink OTT Universe',
      subtitle: 'All your favorite shows, South to North',
      description: "Stream hits from Sun TV and Vijay TV to Sony and Zee5—one subscription, endless entertainment for every Indian home.",
      normaltext: "",
      legalText: "Content and app availability may vary by region.",
      link: '/all-your-favorite-shows-south-to-north',
    },
    {
      imgSrc: '/assets/blogs-03.png',
      title: 'Skylink IPTV',
      subtitle: '900+ Live Channels in HD, from Punjab to Tamil Nadu',
      description: "Access Tamil, Telugu, Hindi, Punjabi, and Bengali channels with HD clarity and features like pause, rewind, and multi-device support.",
      normaltext: "",
      legalText: "Channel lineup varies by area. Compatible device and internet needed.",
      link: '/live-channels-in-hd-from-punjab-to-tamil-nadu',
    },
    {
      imgSrc: '/assets/blogs-04.png',
      title: 'HD TV, No Setup Boxes',
      subtitle: 'Streamlined TV for every region',
      description: "Enjoy 300+ HD channels with free installation. Watch your favorite South and North Indian channels on Smart TVs or Fire TV without extra hardware.",
      normaltext: "",
      legalText: "Free installation applies to new customers. Smart TV or compatible device required.",
      link: '/streamlined-tv-for-every-region',
    },
    {
      imgSrc: '/assets/blogs-06.png',
      title: 'Entertainment Bundles Tailored for India',
      subtitle: 'IPTV, OTT & Broadband in one plan',
      description: "From Coimbatore to Chandigarh, get the perfect mix of internet, TV, and OTT services that fit your lifestyle and language preferences.",
      normaltext: "",
      legalText: "Bundle content and availability vary by state.",
      link: '/iptv-ott-broadband-in-one-plan',
    },
    {
      imgSrc: '/assets/blogs-07.png',
      title: 'Next-Gen Wi-Fi Everywhere',
      subtitle: 'Strong signals from North to South',
      description: "Wi-Fi 6 routers that deliver fast, stable internet in every corner—whether it’s a Chennai apartment or a Delhi villa.",
      normaltext: "",
      legalText: "Router availability depends on plan.",
      link: '/strong-signals-from-north-to-south',
    },
    {
      imgSrc: '/assets/blogs-08.png',
      title: 'Flexible Plans That Grow With You',
      subtitle: 'Upgrade anytime, hassle-free',
      description: "Need more speed or channels? Switch plans anytime without fees—designed for dynamic lifestyles from Tamil Nadu to Punjab.",
      normaltext: "",
      legalText: "Upgrade eligibility varies by plan.",
      link: '/upgrade-anytime-hassle-free',
    },
    {
      imgSrc: '/assets/blogs-05.png',
      title: 'Parental Controls for Safe Surfing',
      subtitle: 'Protect your family across India',
      description: "Manage content and screen time easily—from Hyderabad to Jaipur—with Skylink intuitive parental control tools.",
      normaltext: "",
      legalText: "Supported on select routers.",
      link: '/protect-your-family-across-india',
    },
    {
      imgSrc: '/assets/blogs-11.png',
      title: 'Smart IoT for Every Indian Home',
      subtitle: 'Connected living from coast to capital',
      description: "Control your home’s lights, fans, and appliances seamlessly—from Kerala’s backwaters to Delhi’s heart—with Skylink-compatible devices.",
      normaltext: "",
      legalText: "Device compatibility may vary.",
      link: '/connected-living-from-coast-to-capital',
    },
    {
      imgSrc: '/assets/blogs-10.png',
      title: 'Cloud Backup Made Simple',
      subtitle: 'Secure your data, no matter where you are',
      description: "Automatically save files, photos, and videos with encrypted cloud storage, optimized for users from South to North India.",
      normaltext: "",
      legalText: "Storage limits and pricing vary by plan.",
      link: '/',
    },
    {
      imgSrc: '/assets/fibernet-image.jpg',
      title: 'Explainer',
      subtitle: 'What’s fiber internet?',
      description: "Between remote work, gaming, streaming videos, social media, email, and so on, many of us spend a huge portion of our lives online. That’s what draws so many people to internet powered by fiber.",
      normaltext: "",
      legalText: '',
      link: '/whats-fiber-internet',
    },
    {
      imgSrc: '/assets/skyplaynextup.jpg',
      title: 'Learn more',
      subtitle: 'Skylink Next Up AnytimeSM',
      description: "If you’re shopping for new internet service or looking to upgrade your home internet plan, having fiber internet installed at your home is simple.",
      normaltext: "",
      legalText: "",
      link: '/skyplay-next-up-anytimesm',
    },
    {
      imgSrc: '/assets/customer-and-industry reviews.jpg',
      title: 'Learn more',
      subtitle: 'Customer and industry reviews',
      description: "Check out the latest customer reviews of Skylink Fiber service and read what industry experts are saying about our fastest internet plans.",
      normaltext: "",
      legalText: "",
      link: '/customer-and-industry-reviews',
    },
    {
      imgSrc: '/assets/helpful-and-support.jpg',
      title: '24/7 Expert Support',
      subtitle: 'Helpful resources',
      description: 'Access round-the-clock assistance, self-help articles, and guided tutorials to make the most of your Skylink services.',
      normaltext: '',
      legalText: '',
      link: '/helpful-resources',
    },
    {
      imgSrc: '/newassets/iptv-skylink.jpg',
      title: 'Explainer',
      subtitle: 'What is IPTV?',
      description: "Internet Protocol Television (IPTV) delivers live TV and on-demand content over your internet connection—no cable box required. It’s the future of entertainment.",
      normaltext: "",
      legalText: '',
      link: '/what-is-iptv',
    },
    {
      imgSrc: '/assets/what-is-iptv-in-skyplay.jpg',
      title: 'Get started',
      subtitle: 'Simple IPTV Setup',
      description: "Getting started with IPTV is easy. Learn how to stream on your favorite devices, including smart TVs, phones, tablets, and more.",
      normaltext: "",
      legalText: "simple-iptv-setup",
      link: '/',
    },
    {
      imgSrc: '/assets/skyplay-IPTV-customer-review-and-rating.jpg',
      title: 'What others say',
      subtitle: 'Customer reviews & ratings',
      description: "Discover what users love about our IPTV service—from smooth streaming to huge on-demand libraries. Real feedback from real viewers.",
      normaltext: "",
      legalText: "",
      link: '/customer-reviews-ratings',
    },
    {
      imgSrc: '/assets/helpful-and-support.jpg',
      title: '',
      subtitle: 'Help & Support',
      description: "Find FAQs, setup tips, and troubleshooting guides to make your IPTV experience seamless.",
      normaltext: "",
      legalText: "",
      link: '/help-support',
    },
    {
      imgSrc: '/assets/skyplay-ott-blog-1.jpg',
      title: 'Skylink OTT Hub',
      subtitle: 'All-in-One Streaming Platform',
      description: "Access Zee5, Disney+, Prime, aha and more in one place. Skylink OTT brings together your favorite apps with a single subscription and smart interface.",
      normaltext: "",
      legalText: "",
      link: '/all-in-one-streaming-platform',
    },
    {
      imgSrc: '/assets/skyplay-ott-blog-2.jpg',
      title: 'Premium Streaming Experience',
      subtitle: 'HD, 4K, and Buffer-Free Playback',
      description: "Enjoy uninterrupted, high-definition streaming across all your devices. Skylink ensures top performance with adaptive quality and zero buffering.",
      normaltext: "",
      legalText: "",
      link: '/hd-and-buffer-free-playback',
    },
    {
      imgSrc: '/assets/skyplay-ott-blog-3.jpg',
      title: 'Curated Content Packs',
      subtitle: 'Tailored for Every Taste',
      description: "From movies to sports to regional dramas, Skylink OTT packages content by interest—so you get exactly what you love, without the fluff.",
      normaltext: "",
      legalText: "",
      link: '/tailored-for-every-taste',
    },
    {
      imgSrc: '/assets/skyplay-ott-blog-04.jpg',
      title: 'One Login, All Access',
      subtitle: 'Unified Control for Multiple Platforms',
      description: "Say goodbye to juggling passwords. Use your Skylink login to access all major OTT platforms and manage everything from a single dashboard.",
      normaltext: "",
      legalText: "",
      link: '/unified-control-for-multiple-platforms',
    },
    {
      imgSrc: '/assets/skyplay-ott-blog-05.jpg',
      title: 'Smart Recommendations',
      subtitle: 'Powered by AI & Viewing Habits',
      description: "Discover your next binge-worthy show with AI-driven recommendations tailored to your preferences and watch history.",
      normaltext: "",
      legalText: "",
      link: '/powered-by-ai-viewing-habits',
    },
    {
      imgSrc: '/assets/skyplay-ott-blog-06.jpg',
      title: 'Watch Anywhere, Anytime',
      subtitle: 'Multi-Device OTT Streaming',
      description: "Stream your favorite shows on TV, mobile, tablet, or laptop. Skylink OTT supports simultaneous logins and viewing on up to 5 devices.",
      normaltext: "",
      legalText: "",
      link: '/multi-device-ott-streaming',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Boost Your Business',
      subtitle: 'End-to-End Marketing Support',
      description: "We provide partners with marketing creatives, regional ads, and promotional guidance to help drive customer acquisition effortlessly.",
      link: '/end-to-end-marketing-support',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Amplify Online Reach',
      subtitle: 'Full-Service Digital Marketing',
      description: "From SEO to paid ads, our digital team ensures your business is visible across platforms—driving qualified leads and visibility.",
      link: '/full-service-digital-marketing',
    },
    {
      imgSrc: '/assets/social-media-pomotions.jpg',
      title: 'Stay Social',
      subtitle: 'Social Media Promotions',
      description: "We run geo-targeted social media campaigns to engage your local audience, build trust, and generate high-intent traffic.",
      link: '/social-media-promotions',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Expand on Ground',
      subtitle: 'Dedicated Sales Teams',
      description: "Get access to our experienced field sales force for door-to-door activations, product demos, and seamless customer conversions.",
      link: '/dedicated sales teams',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Start Strong',
      subtitle: 'Partner Onboarding & Training',
      description: "We provide you with a comprehensive onboarding kit, product training, and continuous sales coaching to set you up for success.",
      link: '/partner-onboarding-training',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Earn More',
      subtitle: '60% Revenue Share Model',
      description: "Skylink partners enjoy a 60% share on each sale—maximize your earnings with minimal operational burden.",
      link: '/revenue-share-model',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Support You Can Count On',
      subtitle: '24/7 Technical Support',
      description: "We handle installation, setup, and tech queries so you can focus on growth—not troubleshooting.",
      link: '/technical-support',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Grow Together',
      subtitle: 'Co-Branded Campaigns',
      description: "Feature your brand in joint marketing campaigns, ads, and materials to build trust and amplify your local presence.",
      link: '/co-branded-campaigns',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Sell With Confidence',
      subtitle: 'Custom Plans for Your Market',
      description: "Offer regionally-optimized plans, bundle IPTV and OTT, and upsell premium options tailored to your local audience.",
      link: '/custom-plans-for-your-market',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Track Everything',
      subtitle: 'Partner Performance Dashboard',
      description: "Monitor leads, sales, commissions, and payouts in real-time via your own partner dashboard—full transparency guaranteed.",
      link: '/partner-performance-dashboard',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Fast & Fair',
      subtitle: 'Monthly Payouts',
      description: "Get paid on time, every month. No delays. No hassles. Your effort deserves reliable reward.",
      link: '/monthly-payouts',
    },
    {
      imgSrc: '/newassets/tv/iptv-skylink.jpg',
      title: 'Join the Movement',
      subtitle: 'Growing Partner Ecosystem',
      description: "Be part of a national network of ISPs, dealers, and resellers building the future of digital entertainment with Skylink.",
      link: '/growing-partner-ecosystem',
    }
  ];
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="SNR_section section">
        <div className="region region--black region--flush-vertical ">
            <div className="region__wrap blog-page-region">
              <div className="snr-banner section">
                <div className="component">
                  <div className="banner">
                    <div className="banner__img">
                      <img src="/assets/dual-banner-bg.jpg" />
                    </div>
                    <div className="banner__content banner__content--right">
                      <div className="content__wrap ">
                        <div className="banner__text banner__text--adjusted-lg">  
                          <div className="banner__headline">
                            <h1 className="banner__headline--text">Blogs</h1>
                          </div>
                          <div className="banner__level3" style={{"display":"none"}}>
                            Timely news and information to stay Cyber Aware and better protect your devices and data.<br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="" id="main-container">
        <div className="page-heading clearfix">
          <div className="container">
            <div className="heading-text">
              <h1 className="entry-title">Latest Stories</h1>
              <section className="w-full px-6 py-12 bg-gray-100 featured-section">
                <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center">
                  <div className='featured-content-wrap'>
                    <span className="featured-category">Featured</span>
                    <h2 className="blog-featured-title">Speed that connects all of India</h2>
                    <p className="description">
                      From Chennai’s tech hubs to Delhi’s bustling streets, enjoy blazing 1 Gbps fiber internet for streaming, gaming, and work without limits.
                    </p>
                  </div>
                  <div>
                    <img src="/assets/blogs-01.png" alt="Service Preview" className="w-full rounded-lg shadow-md" />
                  </div>
                </div>
              </section>

              <section className="w-full px-6 py-12">
                <div className="grid grid-cols-4 gap-2 blog-grid">
                  {currentBlogs.map((blog, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                      <div className="image-wrap">
                        <img src={blog.imgSrc} alt="Image 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                      </div>
                      <div className="content-wrap">
                        <div className="content">
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">{blog.subtitle}</h3>
                          <p className="text-gray-600 mb-4">{blog.description}</p>
                        </div>
                        <a href={`blogs${blog.link}`} className="text-blue-600 hover:underline">Learn More</a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center space-x-2 pagination">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`px-4 py-2 rounded border ${currentPage === i + 1
                          ? 'active'
                          : ''
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
