'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import {
  tablecontent,
  providersData,
  dynamicImageContent,
  iconMoreDetailcontent,
  faqContent,
  faqSecondContent,
  iconCard,
  IcontitleData,
  dynamicSlidesData,
  CotentImageCarouselData,
  flexCardData,
  rightContentFlexData,
  contentData,
  HeroContent,
  SpeedContent,
  simpleContent
} from "../../../data/internet";
const auth = { userName: "John Doe", isLoggedIn: true };
const PricingPlans = dynamic(() => import('@/components/PricingPlans'));
const HeroBanner = dynamic(() => import('@/components/HeroBanner'));
const AvailabilityComponents = dynamic(() => import('@/components/AvailabilityComponents'));
const RightImageLeftContent = dynamic(() => import('@/components/RightImageLeftContents'));
const ImageAndContent = dynamic(() => import('@/components/ImageAndContent'));
const IconMoreDetails = dynamic(() => import('@/components/IconMoreDetails'));
const Faq = dynamic(() => import('@/components/Faq'));
const IconCard = dynamic(() => import('@/components/IconCard'));
const DynamicCarousel = dynamic(() => import('@/components/DynamicCarousel'));
const ContentandImageCarousel = dynamic(() => import('@/components/ContentandImageCarousel'));
const FlexCard = dynamic(() => import('@/components/FlexCard'), { ssr: false });
const IconFlexBanner = dynamic(() => import('@/components/IconFlexBanner'));
const SimpleBanner = dynamic(() => import('@/components/SimpleBanner'));
const Whereat = dynamic(() => import('@/components/Whereat'));
const SpeedBanner = dynamic(() => import('@/components/SpeedBanner'));

export default function Page() {
  return (
    <>
      <HeroBanner content={HeroContent} />
      <AvailabilityComponents />
      <SpeedBanner color="color-white" mainImage="/assets/level-up-projects.jpg" content={SpeedContent} />
      <FlexCard
       auth={auth}
        title=""
        rightImage="/assets/wireless-home-internet.jpg"
        mobileleftImage="/assets/wireless-home-internet.jpg"
        contentData={flexCardData}
        rightContentData={rightContentFlexData}
        optionalColor="color-white"
      />
      <IconFlexBanner />
      <SimpleBanner color="color-white" content={simpleContent} />
      <IconCard titleData={IcontitleData} cardData={iconCard} />
      <PricingPlans
        heading="The choice is simple"
        subtitle="There’s never been a better time to switch! See how Skylink stacks up against the competition."
        providers={providersData}
        content={tablecontent}
      />
      <RightImageLeftContent title="Now with incredible features" Content={dynamicImageContent} />
      <ImageAndContent image="/assets/tv-a-bundle-for-your-home-business.jpg" content={contentData} />
      <ContentandImageCarousel slidesData={CotentImageCarouselData} />
      <IconMoreDetails content={iconMoreDetailcontent} />
      <DynamicCarousel title="Got a few minutes to learn more?" slidesData={dynamicSlidesData} color="bg-white" />
      <Faq title="More reasons to love Skylink Fiber internet" content={faqSecondContent} />
      <Faq title="You’ve asked. We’ve answered." content={faqContent} />
      <Whereat />
    </>
  );
}
