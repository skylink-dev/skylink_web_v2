"use client";

import dynamic from "next/dynamic";
import {
  cardData,
  slidesData,
  slidesData2,
  iconCard,
  dynamicImageContent,
  IconContent,
  contentNewsletter,
  bannerContent,
  iconMenuData,
  IcontitleData,
  dynamicSlidesData,
  flexCardData,
  rightContentFlexData,
  faqData,
} from "../../data/Home";

import HomeContactForm from "@/components/contact/ContactForm";
import React, { useState } from "react";

import { homeIconiconList } from "@/data/home/homeIconImages";
import ThreeBannerModern from "@/components/contact/ThreeBanner";

import SkylinkQuickPayPage from "@/components/SkylinkQuickPayPage";
import SpeedTestBanner from "@/components/SpeedTest";
import NewIconMenu from "@/components/home/NewIconMenu";
const Banner = dynamic(() => import("@/components/Banner"));
const DynamicCarousel = dynamic(() => import("@/components/DynamicCarousel"));
const FlexCard = dynamic(() => import("@/components/FlexCard"), { ssr: false });
const HalfColumnCard = dynamic(() => import("@/components/HalfColumnCard"));
const HeroSlider = dynamic(() => import("@/components/HeroSlider"));
const IconCard = dynamic(() => import("@/components/IconCard"));
const IconDetails = dynamic(() => import("@/components/IconDetails"));
const IconMenu = dynamic(() => import("@/components/IconMenu"));
const NewsLetter = dynamic(() => import("@/components/NewsLetter"));
const RectangleBanner = dynamic(() => import("@/components/RectangleBanner"));
const RightImageLeftContent = dynamic(() =>
  import("@/components/RightImageLeftContents")
);
const AvailabilityComponents = dynamic(() =>
  import("@/components/AvailabilityComponents")
);
const SingleFaq = dynamic(() => import("@/components/SingleFaq"));
const Slider = dynamic(() => import("@/components/Slider"));
/**
 *
 * @returns Icon Data
 */
export const newIconiconList = [
  {
    id: 1,
    icon: "/newassets/home/new_icons/Internet.gif",
    title: "Internet",
    linkdata: "/internet",
  },
  {
    id: 2,
    icon: "/newassets/home/new_icons/tv.gif",
    title: "TV",
    linkdata: "/tv",
  },
  {
    id: 3,
    icon: "/newassets/home/new_icons/ott.gif",
    title: "OTT",
    linkdata: "/ott",
  },
  {
    id: 4,
    icon: "/newassets/home/new_icons/fire-stick.gif",
    title: "Skylink Fire Tv",
    linkdata: "/firestick",
  },
  {
    id: 6,
    icon: "/newassets/home/new_icons/deals.gif",
    title: "Deals",
    linkdata: "/deals",
  },

  {
    id: 8,
    icon: "/newassets/home/new_icons/accessories.gif",
    title: "Accessories",
    linkdata: "/accessories",
  },
];

export default function Home() {
  // const testiconMenuData = [
  //   { id: 1, icon: FaGlobe, title: "Internet", linkdata: "/internet" },
  //   { id: 2, icon: FaTv, title: "TV", linkdata: "/tv" },
  //   { id: 3, icon: FaVideo, title: "OTT", linkdata: "/ott" },
  //   { id: 4, icon: FaFire, title: "Skylink Fire Tv", linkdata: "/firestick" },
  //   { id: 5, icon: FaHandshake, title: "Partner", linkdata: "/partner" },
  //   { id: 6, icon: FaWifi, title: "Deals", linkdata: "/deals" },
  //   { id: 7, icon: FaTruckMoving, title: "Shifting", linkdata: "/moving" },
  //   {
  //     id: 8,
  //     icon: FaHeadphones,
  //     title: "Accessories",
  //     linkdata: "/accessories",
  //   },
  // ];
  const [activeId, setActiveId] = useState(1);
  const dummy = () => {
    console.log("test");
  };

  // ← Define this function
  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you can call your API or show a message
  };
  return (
    <>
      {/* <SkylinkQuickPayPage /> */}

      <NewIconMenu content={newIconiconList} />

      {/* <IconMenu onSelect={dummy} content={homeIconiconList} /> */}
      {/* <ThreeDIconMenu
        content={testiconMenuData}
        activeId={activeId}
        onSelect={(id) => setActiveId(id)}
      /> */}

      {/* <Banner content={bannerContent} /> */}
      {/* <HomeContactForm onSubmit={handleFormSubmit} /> */}

      <ThreeBannerModern />
      <AvailabilityComponents />
      <FlexCard
        title="For Every Age. Every Stage. Every Connection."
        rightImage="/assets/skyplay-card-right.jpg"
        leftImage="/assets/skyplay-flex-card-left.jpg"
        mobileleftImage="/assets/skyplay-banner-mobile.jpg"
        mobileRightImage="/assets/skyplay-flex-bannerbottom.jpg"
        contentData={flexCardData}
        rightContentData={rightContentFlexData}
        optionalColor=""
      />
      <Slider slides={slidesData} color="bg-att-blue-000" />
      {/* Need to rework on the slider component */}
      {/* */}
      <RectangleBanner
        backgroundImage="/assets/skyplay-map.jpg"
        eyebrow="Your Day, Powered by Skylink"
        heading={`Connectivity, Refined for Real Life.`}
        description={`Fiber that keeps up with your day, built for dependable performance and everyday comfort`}
        subDescription={`Available at no extra cost for eligible customers across India.`}
        buttonText="Explore Our Plans"
        buttonLink="/plans"
      />

      <HalfColumnCard items={cardData} />
      <DynamicCarousel
        title="Let's get you connected"
        slidesData={dynamicSlidesData}
      />
      <RightImageLeftContent
        title="Everything Works Better Together"
        Content={dynamicImageContent}
      />
      <SpeedTestBanner />
      <IconDetails title="How can we help you today?" iconslist={IconContent} />
      <NewsLetter content={contentNewsletter} />

      {/* <IconCard titleData={IcontitleData} cardData={iconCard} />
      <Slider
        title="Upgrade Your Home Tech Experience"
        slides={slidesData2}
        color="bg-gray-200"
      />
    <SingleFaq content={faqData} />
    
      
      <NewsLetter content={contentNewsletter} /> */}
    </>
  );
}
