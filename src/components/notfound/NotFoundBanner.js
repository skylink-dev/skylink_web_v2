'use client'
import React, { useEffect, useState } from 'react';

export default function NotFoundBanner() {
  const [windowWidth, setWindowWidth] = useState(0); // Initialized to 0 for SSR safety

  const desktopBanner = '/assets/error-image.jpg';
  const mobileBanner = '/assets/error-image-mobile.jpg';
  const mobileBreakpoint = 767;

  useEffect(() => {
    // *** ADD THIS LINE: Set the initial windowWidth when the component mounts ***
    setWindowWidth(window.innerWidth); 
    // This code only runs on the client-side, so `window` is defined here.

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  // This logic correctly determines the banner based on windowWidth
  const currentBanner = windowWidth <= mobileBreakpoint && windowWidth !== 0 
                        ? mobileBanner 
                        : desktopBanner;

  return (
    <div className="maxWidthContainer" style={{"paddingTop":"28px"}}>
        <div className="row">
            <div className="heropanel">
                <div 
                    className="heropanel_background" 
                    style={{
                        backgroundImage: `url('${currentBanner}')`,
                        // It's good practice to also include these for background images:
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        // You might also want to set a default height here
                        height: windowWidth <= mobileBreakpoint && windowWidth !== 0 ? '550px' : '300px', // Example height, adjust as needed
                    }}
                >
                </div>
                <div className="heropanel_image">
                    <img src="/assets/error-stroy.webp" width="100%" alt="page not found"></img>
                </div>
                <div className="heropanel_content font-medium att_medium">
                    <div id="heropanel_eyebrow">Page not found</div>
                    <div id="heropanel_heading">Hmm, we couldnt find that</div>
                    <div id="heropanel_subHeading">Try searching for what you need or check out helpful links in the next section.</div>
                </div>
            </div>
        </div>
    </div>
  );
}