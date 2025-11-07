"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  threeColumnData,
  contentBaseData,
  faqContent,
  contentNewsletter,
  bannerContent,
  bgImageContent,
  Buttongroup,
  simpleContent,
  dynamicImageContent,
  contentData,
  promoCardsData,
  faqData,
} from "../../../data/deals";

// Lazy load components
const Banner = dynamic(() => import("@/components/Banner"));
const ThreeColumnLayout = dynamic(() => import("@/components/ColumnLayout"));
const ContentBaseBanner = dynamic(() =>
  import("@/components/ContentBaseBanner")
);
const DualBannerSection = dynamic(() =>
  import("@/components/DualBannerSection")
);
const BGImageRightContent = dynamic(() =>
  import("@/components/BGImageRightContent")
);
const ButtonGroupSection = dynamic(() =>
  import("@/components/ButtonGroupSection")
);
const ImageAndContent = dynamic(() => import("@/components/ImageAndContent"));
const ImageBanner = dynamic(() => import("@/components/ImageBanner"));
const TwoColumnSection = dynamic(() => import("@/components/TwoColumnSection"));
const RightImageLeftContent = dynamic(() =>
  import("@/components/RightImageLeftContents")
);
const SimpleBanner = dynamic(() => import("@/components/SimpleBanner"));
const ColumnsWithImageComponent = dynamic(() =>
  import("@/components/ColumnsWithImageComponent")
);
const NewsLetter = dynamic(() => import("@/components/NewsLetter"));
const Faq = dynamic(() => import("@/components/Faq"));
const SingleFaq = dynamic(() => import("@/components/SingleFaq"));

export default function Page() {
  return (
    <>
      <Banner content={bannerContent} />
      <ThreeColumnLayout columnCount={4} content={threeColumnData} />
      <ContentBaseBanner content={contentBaseData} color="bgcolor" />
      <DualBannerSection />
      <BGImageRightContent content={bgImageContent} />
      <ButtonGroupSection content={Buttongroup} />
      <ImageAndContent
        image="/assets/big-savings-on-skyplay-broadband-deals.jpg"
        content={contentData}
      />
      <ImageBanner />
      <TwoColumnSection title="More ways to save" promoCards={promoCardsData} />
      <RightImageLeftContent
        title="Top unlimited plans with exclusive savings"
        Content={dynamicImageContent}
        order="row-reverse justify-end"
      />
      <SimpleBanner content={simpleContent} />
      <ColumnsWithImageComponent />
      <NewsLetter content={contentNewsletter} />
      <Faq title="Frequently asked questions" content={faqContent} />
      <SingleFaq content={faqData} />
    </>
  );
}
