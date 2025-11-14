"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  bannerContent,
  iconMenuData,
  flexCardData,
  rightContentFlexData,
  dynamicSlidesData,
  contentBaseBanner2,
  flexCardDataNorth,
  rightContentFlexDataNorth,
} from "../../../data/ott";

// Lazy load components
const Banner = dynamic(() => import("@/components/Banner"));
const IconMenu = dynamic(() => import("@/components/IconMenu"));
const FlexCard = dynamic(() => import("@/components/FlexCard"));
const RectangleBanner = dynamic(() => import("@/components/RectangleBanner"));
const DynamicCarousel = dynamic(() => import("@/components/DynamicCarousel"));
const ContentBaseBanner = dynamic(() =>
  import("@/components/ContentBaseBanner")
);

export default function Page() {
  const dummy = () => {
    console.log("test");
  };
  return (
    <>
      <Banner content={bannerContent} />
      <FlexCard
        title="Stream Smarter with OTT"
        rightImage="/assets/favorite-ott.png"
        leftImage="/assets/ott-banner.jpeg"
        mobileleftImage="/assets/skyplay-ott-hills-image.jpg"
        mobileRightImage="/assets/skyplay-flex-bannerbottom.jpg"
        contentData={flexCardData}
        rightContentData={rightContentFlexData}
        optionalColor="color-white"
      />
      <RectangleBanner
        backgroundImage="/assets/skyplay-map.jpg"
        eyebrow="Introducing the Skylink Guarantee"
        heading={`Connectivity, refined for real life.`}
        description={`Fiber that keeps up with your day, built for dependable performance and everyday comfort`}
        subDescription = {`Available at no extra cost for eligible customers across India.`}
        buttonText="Learn More"
        buttonLink="/internet"
      />
      <DynamicCarousel slidesData={dynamicSlidesData} />
      <ContentBaseBanner content={contentBaseBanner2} color="bg-gray-200" />
    </>
  );
}
