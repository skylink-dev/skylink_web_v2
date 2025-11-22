import React from "react";
import dynamic from "next/dynamic";
import { dynamicSlidesData, IconContent } from "../../../data/notfound";
const DynamicCarousel = dynamic(() => import("@/components/DynamicCarousel"));
const IconDetails = dynamic(() => import("@/components/IconDetails"));
const LookForSomething = dynamic(() =>
  import("@/components/notfound/LookForSomething")
);
const NotFoundBanner = dynamic(() =>
  import("@/components/notfound/NotFoundBanner")
);

export default function page() {
  return (
    <>
      <NotFoundBanner />
      <LookForSomething />
      <DynamicCarousel
        title="Let's get you connected"
        slidesData={dynamicSlidesData}
      />
      <IconDetails title="How can we help you today?" iconslist={IconContent} />
    </>
  );
}
