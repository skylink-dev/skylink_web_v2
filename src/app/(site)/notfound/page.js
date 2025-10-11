import DynamicCarousel from '@/components/DynamicCarousel'
import IconDetails from '@/components/IconDetails'
import LookForSomething from '@/components/notfound/LookForSomething'
import NotFoundBanner from '@/components/notfound/NotFoundBanner'
import React from 'react'

export default function page() {
    const dynamicSlidesData = [
        {
            imgSrc: '/assets/blogs-01.png',
            title: '',
            subtitle: 'Skylink Broadband',
            description: "Blazing-fast internet up to 1 Gbps to get you back online. Reliable, smooth, and perfect for your connected home.",
            normaltext: "",
            legalText: "",
            link: '/broadband',
        },
        {
            imgSrc: '/assets/blogs-02.png',
            title: '',
            subtitle: 'Skylink Premium OTTs',
            description: "Access Zee5, Amazon Prime, Disney+ and more in one subscription. Start streaming again in seconds.",
            normaltext: "",
            legalText: "",
            link: '/ott',
        },
        {
            imgSrc: '/assets/blogs-03.png',
            title: '',
            subtitle: 'Skylink IPTV',
            description: "Watch 1000+ live channels and regional content in HD. The entertainment you were looking for is right here.",
            normaltext: "",
            legalText: "",
            link: '/iptv',
        },
        {
            imgSrc: '/assets/blogs-04.png',
            subtitle: 'Go Back Home',
            description: "Explore Skylink’s full range of services — IPTV, OTT, broadband, and more. Let’s get you back where you belong.",
            normaltext: "",
            legalText: "",
            link: '/',
        },
    ]
     const IconContent = [{
    icon: (<svg aria-hidden="true" focusable="false" className="svg-accent-att-blue color-black" height="64" width="64" viewBox="0 0 96 96"><path className="svg-base" d="M80 13H16a6 6 0 00-6 6v56a6 6 0 006 6h48v-2H16a4 4 0 01-4-4V25h72v32h2V19a6 6 0 00-6-6zM12 23v-4a4 4 0 014-4h64a4 4 0 014 4v4zm3-5h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"></path><path className="svg-accent" d="M78.17 66.59l9.83-4.8-33.13-13.25 13.24 33.11 4.8-9.8L83.3 82.24 88.56 77zm-5.83 1.86l-4 8.28-9.83-24.6L83.05 62l-8.27 4 11 11-2.48 2.41z"></path></svg>),
    cta: "Get help online"
  }, {
    icon: (<svg aria-label="Icon of laptop and smartphone" aria-hidden="true" focusable="false" className="svg-accent-att-blue color-black" height="64" width="64" viewBox="0 0 96 96"><path className="svg-base" d="M14 64h45v2H8v4a4 4 0 004 4h47v2H12a6 6 0 01-6-6v-6h6V26a6 6 0 016-6h60a6 6 0 016 6v10h-2V26a4 4 0 00-4-4H18a4 4 0 00-4 4zm75.92 15.77V44.23A4.24 4.24 0 0085.68 40H66.3a4.24 4.24 0 00-4.23 4.23v35.54A4.24 4.24 0 0066.3 84h19.38a4.24 4.24 0 004.24-4.23zM85.68 42a2.24 2.24 0 012.24 2.23v35.54A2.24 2.24 0 0185.68 82H66.3a2.23 2.23 0 01-2.23-2.23V44.23A2.23 2.23 0 0166.3 42z"></path><path className="svg-accent" d="M42 71v-2h12v2zm38.3-25.62h-8.62v2h8.62z"></path></svg>),
    cta: "IPTV / DTH"
  }, {
    icon: (<svg aria-label="Icon of smartphone" aria-hidden="true" focusable="false" className="svg-accent-att-blue color-black" height="64" width="64" viewBox="0 0 96 96"><path className="svg-base" d="M68 90H28a6 6 0 01-6-6V12a6 6 0 016-6h40a6 6 0 016 6v72a6 6 0 01-6 6zM28 8a4 4 0 00-4 4v72a4 4 0 004 4h40a4 4 0 004-4V12a4 4 0 00-4-4z"></path><path className="svg-accent" d="M56 15H40v-2h16z"></path></svg>),
    cta: "Accessories"
  }, {
    icon: (<svg aria-label="Icon of phone upgrade" aria-hidden="true" focusable="false" className="svg-accent-att-blue color-black" height="64" width="64" viewBox="0 0 96 96"><path className="svg-base" d="M84 62v15h-2V64.93A38 38 0 0110 48h2a36 36 0 0068.23 16H69v-2zM48 10a38 38 0 00-34 21.07V19h-2v15h15v-2H15.77A36 36 0 0184 48h2a38 38 0 00-38-38z"></path><path className="svg-accent" d="M57 69H39a4 4 0 01-4-4V32a4 4 0 014-4h18a4 4 0 014 4v33a4 4 0 01-4 4zM39 30a2 2 0 00-2 2v33a2 2 0 002 2h18a2 2 0 002-2V32a2 2 0 00-2-2zm13 3h-8v2h8z"></path></svg>),
    cta: "Upgrade / Downgrade"
  }, {
    icon: (<svg aria-label="Icon for adding a line to your plan" aria-hidden="true" focusable="false" className="svg-accent-att-blue color-black" height="64" width="64" viewBox="0 0 96 96"><path className="svg-accent" d="M81.1 76.39l8.52-4.17-29-11.6 11.6 29 4.17-8.52 8.87 8.9L90 85.26zm-5.28 1.32l-3.42 7-8.19-20.5L84.7 72.4l-7 3.42 9.44 9.44-1.89 1.89z"></path><path className="svg-base" d="M49.51 79.56c3.19-2.93 5.9-8.39 7.69-15.8a85.27 85.27 0 002.19-19.24H80A35.89 35.89 0 0175.16 62l1.73 1a38 38 0 10-13.48 13.67l-1-1.72a36 36 0 01-12.9 4.61zm6.1-17.85a31 31 0 00-23.19 0 85.32 85.32 0 01-1.79-17.17h26.76a85.48 85.48 0 01-1.78 17.17zm-25-19.19a83.47 83.47 0 011.78-16.19A31.11 31.11 0 0044 28.57a31 31 0 0011.63-2.28 84.57 84.57 0 011.79 16.23zm49.32 0H59.38a86.17 86.17 0 00-1.89-17.07A31.22 31.22 0 0068 17.23a35.88 35.88 0 0112 25.29zM66.49 15.94A29.35 29.35 0 0157 23.47c-1.76-6.85-4.38-12.14-7.51-15a35.82 35.82 0 0117 7.47zm-11.35 8.38A29.14 29.14 0 0144 26.57a29.18 29.18 0 01-11.09-2.21C35.3 14.6 39.43 8 44 8s8.71 6.58 11.14 16.32zM31 23.51A29.26 29.26 0 0121.47 16a35.72 35.72 0 0117-7.54c-3.1 2.87-5.72 8.19-7.47 15.05zm-11-6.23a31.28 31.28 0 0010.52 8.22 85 85 0 00-1.88 17H8.06A35.91 35.91 0 0120 17.28zM8 44.52h20.63a86.34 86.34 0 001.89 18 31.32 31.32 0 00-10.58 8.22A35.93 35.93 0 018 44.52zm13.46 27.53A29.23 29.23 0 0131 64.51c1.75 6.85 4.37 12.16 7.51 15a35.91 35.91 0 01-17.05-7.46zm11.41-8.39a29.09 29.09 0 0122.29 0C52.65 73.75 48.4 80 44 80c-4.57 0-8.7-6.58-11.13-16.34z"></path></svg>),
    cta: "Explore internet"
  }, {
    icon: (<svg aria-hidden="true" focusable="false" className="svg-accent-att-blue color-black" height="64" width="64" viewBox="0 0 96 96"><path className="svg-accent" d="M48 52a13 13 0 1113-13 13 13 0 01-13 13zm0-24a11 11 0 1011 11 11 11 0 00-11-11z"></path><path className="svg-base" d="M48 86.62l-.71-.71A137.54 137.54 0 0134 69.92C25.11 57.4 20.6 46.35 20.6 37.06a27.43 27.43 0 0154.86 0c0 9.29-4.51 20.34-13.4 32.86a137.54 137.54 0 01-13.32 16zm0-74.83a25.38 25.38 0 00-25.43 25.27c0 19.22 21.26 42.36 25.43 46.71 4.17-4.35 25.43-27.49 25.43-46.71A25.38 25.38 0 0048 11.79z"></path></svg>),
    cta: "Visit a store"
  }];
    return (
        <>
            <NotFoundBanner></NotFoundBanner>
            <LookForSomething></LookForSomething>
            <DynamicCarousel slidesData={dynamicSlidesData}></DynamicCarousel>
            <IconDetails title="How can we help you today?" iconslist={IconContent}></IconDetails>
        </>
    )
}
