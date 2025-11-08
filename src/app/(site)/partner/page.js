"use client";
import dynamic from "next/dynamic";
import React from "react";
// import ContactFormNew from "@/components/ContactFormNew";
// import DynamicCarousel from "@/components/DynamicCarousel";
// import Faq from "@/components/Faq";
// import ImageAndContent from "@/components/ImageAndContent";
// import RectangleBanner from "@/components/RectangleBanner";
// import RightImageLeftContent from "@/components/RightImageLeftContents";
// import SimpleColumnSection from "@/components/SimpleColumnSection";
// import SpeedBanner from "@/components/SpeedBanner";

const ContactFormNew = dynamic(() => import("@/components/ContactFormNew"));
const DynamicCarousel = dynamic(() => import("@/components/DynamicCarousel"));
const Faq = dynamic(() => import("@/components/Faq"));
const ImageAndContent = dynamic(() => import("@/components/ImageAndContent"));
const RectangleBanner = dynamic(() => import("@/components/RectangleBanner"));
const RightImageLeftContent = dynamic(() =>
  import("@/components/RightImageLeftContents")
);
const SimpleColumnSection = dynamic(() =>
  import("@/components/SimpleColumnSection")
);
const SpeedBanner = dynamic(() => import("@/components/SpeedBanner"));

export default function page() {
  const columnSaveContent2 = [
    {
      icon: (
        <svg
          aria-label=" "
          aria-hidden="true"
          focusable="false"
          className="svg-accent-att-blue color-black"
          height="64"
          width="64"
          viewBox="0 0 96 96"
        >
          <path
            className="svg-base"
            d="M83 33H13v18h5v29a6 6 0 006 6h48a6 6 0 006-6V51h5zm-7 47a4 4 0 01-4 4H24a4 4 0 01-4-4V51h56zm5-31H15V35h66z"
          ></path>
          <path
            className="svg-accent"
            d="M49 46h-2v-8h2zm0 8h-2v27h2zm18-34a10 10 0 01-10 10H39a10 10 0 119-14.33A10 10 0 0167 20zm-28 8h8v-8a8 8 0 10-8 8zm26-8a8 8 0 10-16 0v8h8a8 8 0 008-8z"
          ></path>
        </svg>
      ),
      title: "How Stable?",
      description:
        "Our network is designed with multi-layer redundancy and 99.9% uptime, ensuring your services stay online even during peak load.",
      cta: "Watch Live",
    },
    {
      icon: (
        <svg
          aria-label="A smartphone trade in"
          aria-hidden="true"
          focusable="false"
          className="svg-accent-att-blue color-black"
          height="64"
          width="64"
          viewBox="0 0 96 96"
        >
          <path
            className="svg-base"
            d="M68 6H28a6 6 0 00-6 6v72a6 6 0 006 6h40a6 6 0 006-6V12a6 6 0 00-6-6zm4 78a4 4 0 01-4 4H28a4 4 0 01-4-4V12a4 4 0 014-4h40a4 4 0 014 4zM56 15H40v-2h16z"
          ></path>
          <path
            className="svg-accent"
            d="M57 56a6 6 0 01-6 6h-2v5h-2v-5h-7v-2h11a4 4 0 000-8h-6a6 6 0 010-12h2v-5h2v5h7v2H45a4 4 0 000 8h6a6 6 0 016 6z"
          ></path>
        </svg>
      ),
      title: "How Reliable?",
      description:
        "Experience worry-free connectivity with enterprise-grade equipment, real-time monitoring, and always-on technical support.",
      cta: "Browse Content",
    },
    {
      icon: (
        <svg
          aria-label="A phone upgrade"
          aria-hidden="true"
          focusable="false"
          className="svg-accent-att-blue color-black"
          height="64"
          width="64"
          viewBox="0 0 96 96"
        >
          <path
            className="svg-base"
            d="M74 12v72a6 6 0 01-6 6H28a6 6 0 01-6-6V58h2v26a4 4 0 004 4h40a4 4 0 004-4V12a4 4 0 00-4-4H28a4 4 0 00-4 4v26h-2V12a6 6 0 016-6h40a6 6 0 016 6zm-18 1H40v2h16z"
          ></path>
          <path
            className="svg-accent"
            d="M44.17 49H10v-2h34.16L31.73 34.57l1.41-1.41L48 48 33.14 62.86l-1.41-1.42z"
          ></path>
        </svg>
      ),
      title: "How Fast?",
      description:
        "Backed by high-speed fiber and optimized routing, our solutions deliver blazing-fast performance, no matter the time of day.",
      cta: "Explore Devices",
    },
    {
      icon: (
        <svg
          aria-label="Activearmor "
          aria-hidden="true"
          focusable="false"
          className="svg-accent-att-blue color-black"
          height="64"
          width="64"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.1 22.107a28.985 28.985 0 0 0-3.115 2.723C7.354 28.498 4.343 33.32 2.531 38A30.775 30.775 0 0 1 2 32.331C2 15.58 15.44 2 32.022 2c1.135 0 2.254.069 3.357.193.581.401 1.172.877 1.769 1.453 3.762 3.634 7.03 8.788 8.74 13.786.266.778.492 1.566.683 2.364-4.703-2.635-9.725-3.74-14.46-3.74a29.831 29.831 0 0 0-14.717 3.892 30.013 30.013 0 0 0-3.294 2.16Zm34.837-5.417c.576 1.706 1 3.502 1.258 5.352.177 1.272.27 2.572.285 3.885.048 4.439-.855 9.05-2.927 13.417-2.292 4.835-6.008 9.366-11.267 12.551l.164.056.189.063c3 .925 6.389 1.415 9.804 1.415 2.059 0 4.037-.179 5.873-.527a13.12 13.12 0 0 0 2.142-.595c4.687-5.297 7.543-12.327 7.543-20.043 0-13.459-8.691-24.832-20.63-28.55 3.181 3.601 5.975 8.258 7.566 12.976Zm-3.159 39.452c-3.678 0-7.49-.5-10.95-1.533-1.001-.297-1.994-.661-2.976-1.075a29.603 29.603 0 0 1-3.447-1.718A29.998 29.998 0 0 1 17.143 40.21c-2.221-4.095-3.627-8.939-3.594-14.21-.281.257-.56.515-.83.785-3.71 3.678-6.873 8.812-8.464 13.737-.27.836-.44 1.614-.54 2.351C8.051 54.058 18.98 62 31.786 62A30.106 30.106 0 0 0 50 55.905c-1.37.15-2.783.237-4.222.237Z"
            fill=""
          ></path>
        </svg>
      ),
      title: "How Trusted?",
      description:
        "Thousands of partners rely on Skylink for critical infrastructure. Proven performance. Proven trust. Proven results.",
      cta: "Set Controls",
    },
  ];
  const faqSecondContent = [
    {
      title: "What makes Skylink Fiber internet different?",
      content:
        "Skylink Fiber uses cutting-edge fiber optic technology to deliver internet at ultra-high speeds directly to your home. Unlike cable internet that relies on copper wires, fiber provides faster, more consistent speeds with low latency. As of 2025, Skylink offers plans up to 5 GIG, with maximum single-device wired speeds of 4.7Gbps. Performance may vary by location. Check your address for availability.",
    },
    {
      title: "Internet powered by Skylink Fiber",
      content:
        "From streaming in 4K to managing smart homes, Skylink Fiber keeps up with modern demands. Choose from multiple plans — 300 Mbps, 500 Mbps, 1 GIG, 2 GIG, and 5 GIG — all designed to deliver fast, seamless internet for every type of user. All plans include Wi-Fi 6 support, unlimited data, and professional installation.",
    },
    {
      title: "Smarter homes with the Skylink Smart Home Manager",
      content:
        "Take control of your digital life with the Skylink Smart Home Manager app. Set up parental controls, manage connected devices, optimize speed by device, and track data usage — all in one place. Compatible with Skylink fiber gateways supporting Wi-Fi 6 and Wi-Fi 6E.",
    },
    {
      title: "Truly unlimited data at home",
      content:
        "Every Skylink Fiber plan includes unlimited data. That means no data caps, no overage charges, and no throttling — just reliable, high-speed internet no matter how much you stream, game, or work from home.",
    },
  ];
  const contentData = {
    subtitle: "Join the Skylink Network",
    title: "Partner with Purpose",
    description: "",
    contentlists: [
      "Engage new customers with a trusted digital brand",
      "Offer high-demand services under your identity",
      "Grow faster with recurring revenue opportunities",
      "Leverage onboarding, training, and co-marketing support",
      "Join a network of future-focused partners across India",
      "Collaborate for innovation, growth, and customer success",
    ],
  };
  const contentData2 = {
    subtitle: "Why Choose Skylink",
    title: "A Superior Choice",
    description: "",
    contentlists: [
      "Unified platform for broadband, OTT & IPTV",
      "Enterprise-grade uptime and performance",
      "White-label support with branding flexibility",
      "Real-time monitoring and scalable infrastructure",
      "Access to premium OTT content and TV packages",
      "24/7 technical and business support",
      "Track record of reliability and partner success",
    ],
  };
  const contentData3 = {
    subtitle: "Technology That Drives Success",
    title: "Built on Innovation",
    description: "",
    contentlists: [
      "High-speed broadband on robust infrastructure",
      "Cloud-based IPTV and OTT delivery for seamless scalability",
      "End-to-end encrypted networks ensuring secure data flow",
      "Real-time analytics to monitor performance and user trends",
      "Flexible APIs for system integration and partner customization",
      "Smart provisioning, auto-failover, and advanced device management",
    ],
  };
  const dynamicImageContent = [
    {
      img: "/assets/tech-forward-partnerships.jpg",
      icon: "/assets/teamwork.png",
      title: "Tech-Forward Partnerships",
      description:
        "Leverage cutting-edge broadband built for next-gen businesses.",
    },
    {
      img: "/assets/nationwide-reach.jpg",
      icon: "/assets/pan-india.png",
      title: "Nationwide Reach",
      description:
        "Offer services pan India with our expanding, reliable network.",
    },
    {
      img: "/assets/robust-infrastructure.jpg",
      icon: "/assets/robust-architecture-new.png",
      title: "Robust Infrastructure",
      description:
        "Built on the latest hardware to ensure speed and stability.",
    },
    {
      img: "/assets/ready-for-the-new-generation.jpg",
      icon: "/assets/new-generation.png",
      title: "Ready for the New Generation",
      description:
        "Enable experiences tailored for today’s connected families.",
    },
  ];
  const SpeedContent = {
    headingTop: "Join the Skylink Family",
    headingMain: "Grow with us.<br/>Shape the future.",
    description:
      "Partner with Skylink to deliver broadband, OTT, and TV across India. Built on trust, growth, and shared success.",
    subDescription:
      "Perfect for ISPs, cable operators, and local entrepreneurs.",
    ctaText: "Start your partnership today.",
    ctaLink: "/partner-with-us",
    slides: [
      {
        title: "Create Local Impact",
        content:
          "Create long-term value by connecting families and shaping a digitally empowered future. Skylink partners become pillars of their local communities.",
        legal: "Partnership terms vary by region. Subject to approval.",
        image: "/assets/nextgen-wifi.jpg",
      },
      {
        title: "Empower the Nxt-Gen",
        content:
          "Help the next generation thrive with reliable internet, educational content, and smart home technology. Together, we bridge the digital gap.",
        legal: "Devices and services availability based on plan and region.",
        image: "/assets/device-upgrade-program.jpg",
      },
      {
        title: "Grow with Confidence",
        content:
          "Join a platform built for sustainable growth. With Skylink, you get modern tools, scalable infrastructure, and a trusted brand to power your business journey.",
        legal: "Tools and dashboards provided post onboarding.",
        image: "/assets/shield.jpg",
      },
      {
        title: "Stronger Together",
        content:
          "Skylink believes in collaboration. Our partner network is a family where knowledge-sharing, support, and innovation fuel shared success.",
        legal: "Active engagement programs and community events available.",
        image: "/assets/home-wifi.jpg",
      },
    ],
  };

  const dynamicSlidesData = [
    {
      imgSrc: "/newassets/tv/iptv-skylink.jpg",
      title: "Boost Your Business",
      subtitle: "End-to-End Marketing Support",
      description:
        "We provide partners with marketing creatives, regional ads, and promotional guidance to help drive customer acquisition effortlessly.",
      link: "/",
    },
    {
      imgSrc: "/newassets/tv/iptv-skylink.jpg",
      title: "Amplify Online Reach",
      subtitle: "Full-Service Digital Marketing",
      description:
        "From SEO to paid ads, our digital team ensures your business is visible across platforms—driving qualified leads and visibility.",
      link: "/",
    },
    {
      imgSrc: "/assets/digital-marketing.jpg",
      title: "Stay Social",
      subtitle: "Social Media Promotions",
      description:
        "We run geo-targeted social media campaigns to engage your local audience, build trust, and generate high-intent traffic.",
      link: "/",
    },
    {
      imgSrc: "/newassets/tv/iptv-skylink.jpg",
      title: "Expand on Ground",
      subtitle: "Dedicated Sales Teams",
      description:
        "Get access to our experienced field sales force for door-to-door activations, product demos, and seamless customer conversions.",
      link: "/",
    },
    {
      imgSrc: "/assets/partner-onboarding-training.jpg",
      title: "Start Strong",
      subtitle: "Partner Onboarding & Training",
      description:
        "We provide you with a comprehensive onboarding kit, product training, and continuous sales coaching to set you up for success.",
      link: "/",
    },
    {
      imgSrc: "/newassets/tv/iptv-skylink.jpg",
      title: "Earn More",
      subtitle: "60% Revenue Share Model",
      description:
        "Skylink partners enjoy a 60% share on each sale—maximize your earnings with minimal operational burden.",
      link: "/",
    },
    {
      imgSrc: "/assets/24-7-technical-support.jpg",
      title: "Support You Can Count On",
      subtitle: "24/7 Technical Support",
      description:
        "We handle installation, setup, and tech queries so you can focus on growth—not troubleshooting.",
      link: "/",
    },
    {
      imgSrc: "/newassets/tv/iptv-skylink.jpg",
      title: "Grow Together",
      subtitle: "Co-Branded Campaigns",
      description:
        "Feature your brand in joint marketing campaigns, ads, and materials to build trust and amplify your local presence.",
      link: "/",
    },
    {
      imgSrc: "/newassets/tv/iptv-skylink.jpg",
      title: "Sell With Confidence",
      subtitle: "Custom Plans for Your Market",
      description:
        "Offer regionally-optimized plans, bundle IPTV and OTT, and upsell premium options tailored to your local audience.",
      link: "/",
    },
    {
      imgSrc: "/assets/partner-performance-dashboard.jpg",
      title: "Track Everything",
      subtitle: "Partner Performance Dashboard",
      description:
        "Monitor leads, sales, commissions, and payouts in real-time via your own partner dashboard—full transparency guaranteed.",
      link: "/",
    },
    {
      imgSrc: "/assets/monthly-payouts.jpg",
      title: "Fast & Fair",
      subtitle: "Monthly Payouts",
      description:
        "Get paid on time, every month. No delays. No hassles. Your effort deserves reliable reward.",
      link: "/",
    },
    {
      imgSrc: "/assets/growing-partner-ecosystem.jpg",
      title: "Join the Movement",
      subtitle: "Growing Partner Ecosystem",
      description:
        "Be part of a national network of ISPs, dealers, and resellers building the future of digital entertainment with Skylink.",
      link: "/",
    },
  ];

  return (
    <>
      <RectangleBanner
        backgroundImage="/assets/benefits-of-partnering.jpg"
        eyebrow="Blazing Fast, Always Reliable, Truly Affordable!"
        heading={`Benefits of Partnering`}
        description={`Partnering with Skylink unlocks high-margin opportunities, 24/7 support, and advanced technology. With scalable data centers and widespread POPs, you’ll deliver fast, reliable internet and IPTV solutions that drive business growth and customer satisfaction.`}
        buttonText="Learn More"
        buttonLink="/guarantee"
      />
      <SimpleColumnSection
        title="What’s Right for You?"
        columns={columnSaveContent2}
      />
      <div style={{ marginTop: "-50px" }}>
        <ImageAndContent
          image="/assets/partner-with-purpose.jpg"
          content={contentData}
        />
      </div>
      <div style={{ marginTop: "-100px", marginBottom: "-70px" }}>
        <ImageAndContent
          row="row-reverse"
          image="/assets/a-superior choice.jpg"
          content={contentData2}
        />
      </div>
      <RightImageLeftContent
        row="row-reverse"
        title="Empowering Growth with Smart Technology"
        Content={dynamicImageContent}
      />
      <div style={{ marginTop: "-35px" }}>
        <ImageAndContent
          row="row-reverse"
          image="/assets/build-on-innovation.jpg"
          content={contentData3}
        />
      </div>
      <SpeedBanner
        color="color-white"
        mainImage="/newassets/partner/grow-with-us.jpg"
        content={SpeedContent}
      />
      <DynamicCarousel
        title="Marketing and Support"
        slidesData={dynamicSlidesData}
        color="bg-gray-200"
      />
      <ContactFormNew />
      <Faq
        title="More reasons to love Skylink Fiber internet"
        content={faqSecondContent}
      />
    </>
  );
}
