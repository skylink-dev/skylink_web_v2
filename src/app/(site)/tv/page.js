'use client';
import dynamic from 'next/dynamic';
import React from 'react';

import {
  providersData,
  columnSaveContent2,
  dynamicSlidesData,
  faqSecondContent,
  contentNewsletter,
  contentBaseBanner2,
  contentBaseBanner,
  contentData2,
  contentData,
  columnSaveContent,
  dynamicImageContent,
  titlecontentData,
  cardData,
  tablecontent,
  cartcontent,
  simplecolumncontent,
  IconContent,
  threeColumnData,
  bannerContent,
  faqData
} from "../../../data/tv";


const Banner = dynamic(() => import('@/components/Banner'));
const CardColumn = dynamic(() => import('@/components/CardColumn'));
const ThreeColumnLayout = dynamic(() => import('@/components/ColumnLayout'));
const ContentBaseBanner = dynamic(() => import('@/components/ContentBaseBanner'));
const DynamicCarousel = dynamic(() => import('@/components/DynamicCarousel'));
const Faq = dynamic(() => import('@/components/Faq'));
const HalfColumnCard = dynamic(() => import('@/components/HalfColumnCard'));
const IconDetails = dynamic(() => import('@/components/IconDetails'));
const ImageAndContent = dynamic(() => import('@/components/ImageAndContent'));
const NewsLetter = dynamic(() => import('@/components/NewsLetter'));
const PricingPlans = dynamic(() => import('@/components/PricingPlans'));
const RectangleBanner = dynamic(() => import('@/components/RectangleBanner'));
const RightImageLeftContent = dynamic(() => import('@/components/RightImageLeftContents'));
const SimpleColumnSection = dynamic(() => import('@/components/SimpleColumnSection'));
const SingleFaq = dynamic(() => import('@/components/SingleFaq'));

export default function Page() {
  return (
    <>
      <Banner content={bannerContent} />
      <ThreeColumnLayout columnCount={4} content={threeColumnData} />
      <IconDetails title="Explore Skylink IPTV" iconslist={IconContent} />
      <SimpleColumnSection title="IPTV Built with You in Mind" columns={simplecolumncontent} />
      <RectangleBanner backgroundImage="/assets/skyplay-map.jpg"
  eyebrow="Introducing the Skylink Guarantee"
  heading={`Pan-India reliable connectivity<br/>Unbeatable plans you’ll love.<br/>Support that puts you first.`}
  description={`All guaranteed — or we’ll make it right. Available to all eligible customers across India at <span className="nowrap"> no extra cost</span>`}
  buttonText="Learn More"
  buttonLink="/guarantee" />
      <ImageAndContent image="/assets/skyplay-tv-7.jpg" content={contentData} />
      <HalfColumnCard titlecontent={titlecontentData} items={cardData} color="color-white" />
      <CardColumn title="Get the device that gets you" repeatcontent={cartcontent} />
      <PricingPlans
        heading="See how we stack up against the competition"
        subtitle="When it comes to your choice of the best deals, wire plans, and flexible payment options, we’ve got you covered."
        providers={providersData}
        content={tablecontent}
      />
      <RightImageLeftContent
        title="Top unlimited plans with exclusive savings"
        order="row-reverse justify-end"
        Content={dynamicImageContent}
      />
      <SimpleColumnSection title="Switch and save" columns={columnSaveContent} />
      <ImageAndContent image="/assets/ultimate-iptv-experience.jpg" content={contentData2} />
      <ContentBaseBanner content={contentBaseBanner} color="bg-att-blue-000" />
      <SimpleColumnSection title="Find more plans to fit your needs" columns={columnSaveContent2} />
      <ContentBaseBanner content={contentBaseBanner2} color="bg-gray-200" />
      <NewsLetter content={contentNewsletter} />
      <DynamicCarousel title="More articles and resources" slidesData={dynamicSlidesData} color="bg-gray-200" />
      <Faq title="More reasons to love Skylink Fiber internet" content={faqSecondContent} />
      <SingleFaq content={faqData} />
    </>
  );
}
