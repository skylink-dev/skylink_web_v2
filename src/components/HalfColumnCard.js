import React, { useEffect, useState } from 'react';
import Link from 'next/link'

export default function HalfColumnCard({ titlecontent, items, color }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
       useEffect(() => {
            const checkMobile = () => setIsMobile(window.innerWidth <= 768);
          setIsMounted(true);
          checkMobile();
          window.addEventListener('resize', checkMobile);
          return () => window.removeEventListener('resize', checkMobile);
        }, [isMobile]);

  return (
    <div className="jsx-2913604578">
      <div className="max-width-background  bgcolor mar-b-none pad-b-none mar-t-none pad-t-none theme-base-bg">
        <div className="container rel">
          {titlecontent ? 
          <div className="row flex-wrap justify-center">
            <div className="text-center grid-col-10">
              <p className="type-eyebrow-xxl">{titlecontent.sub}</p>
              <h2 className="mar-b-xs heading-xxl">{titlecontent.title}</h2>
              <div className="jsx-2913604578 cta-container">
                <Link id="flexCardPanel-Shop-now-lnk-4651" aria-label="Shop all smartphones" href="/plans" className="jsx-1196099039 btn-secondary ">{titlecontent.cta}</Link>
                </div>
            </div>
          </div>
          : ""}
          <div className="row flex-wrap flex-items-stretch justify-center">
            {items.map((item, index) => (
              <div className="grid-col-6" key={index}>
                <div
                  className="jsx-1695256195 jsx-2300775981 card flex-card radius-lg rel bgcolor theme-light-bg-img flex-card-background"
                  style={{backgroundImage: `url(${isMobile && item.mobileimage ? item.mobileimage : item.image})`}}
                >
                  <div className={`jsx-1695256195 jsx-2300775981 row flex card-height-tall rel flex-column ${index === 0 ? color : ''}`}>
                    <div className="jsx-1695256195 jsx-2300775981 flex-1 grid-col-6 pad-r-none-lg pad-b-none pad-md-lg pad-md-md pad-lg-sm pad-r-none">
                      <div className="jsx-1695256195 jsx-2300775981 ">
                        <p className="type-eyebrow-md">{item.subtitle}</p>
                        <h3 className="heading-md">{item.title}</h3>
                        <div className="type-base mar-t-xs rte-styles">{item.description}</div>
                        <div id={`card-${index}-legal_Legal`} className="type-legal mar-t-xxs">
                          <span>{item.legalText}</span>
                          <button className="btn-reset nowrap" aria-label="See details about this offer"></button>
                        </div>
                        <div className="cta-container mar-t-xs">
                          <Link 
                            className="btn-primary"
                            id={`button-${index}`}
                            type="button"
                            aria-label="Order Samsung phone"
                            href={item.link}
                          >
                            Shop now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="jsx-1695256195 jsx-2300775981 flex-3 height-full width-full radius-lg radius-t-none overflow-hidden grid-col-6 pad-b-none pad-r-none hide pad-t-none-md pad-t-none-lg pad-l-none-sm pad-t-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
