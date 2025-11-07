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
import { useState } from "react";
import ThreeBannerModern from "@/components/contact/ThreeBanner";
import { homeIconiconList } from "@/data/home/homeIconImages";
const Banner = dynamic(() => import("@/components/Banner"));
const DynamicCarousel = dynamic(() => import("@/components/DynamicCarousel"));
const FlexCard = dynamic(() => import("@/components/FlexCard"));
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
const SingleFaq = dynamic(() => import("@/components/SingleFaq"));
const Slider = dynamic(() => import("@/components/Slider"));

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
      <IconMenu onSelect={dummy} content={homeIconiconList} />
      {/* <ThreeDIconMenu
        content={testiconMenuData}
        activeId={activeId}
        onSelect={(id) => setActiveId(id)}
      /> */}

      {/* <Banner content={bannerContent} /> */}
      {/* <HomeContactForm onSubmit={handleFormSubmit} /> */}

      <ThreeBannerModern />
      <FlexCard
        title="Speed You Need. Connection You Trust. Entertainment You Love"
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
        eyebrow="Introducing the Skylink Guarantee"
        heading={`Pan-India reliable connectivity<br/>Unbeatable plans you’ll love.<br/>Support that puts you first.`}
        description={`All guaranteed — or we’ll make it right. Available to all eligible customers across India at <span class="nowrap"> no extra cost</span>`}
        buttonText="Learn More"
        buttonLink="/guarantee"
      />
      <HalfColumnCard items={cardData} />
      <DynamicCarousel
        title="Let's get you connected"
        slidesData={dynamicSlidesData}
      />
      <RightImageLeftContent
        title="The Tripleplay difference"
        Content={dynamicImageContent}
      />
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
