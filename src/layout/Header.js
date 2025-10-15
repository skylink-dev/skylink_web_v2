'use client';
import MainMenu from '@/components/MainMenu';
import Menu from '@/components/Menu';
import SecondMenu from '@/components/SecondMenu';
import SiteLogo from '@/components/SiteLogo';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkWidth = () => setIsMobile(window.innerWidth < 1024); // mobile + tablet
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div id="gnavSSR" className="staticGNAV">
      <header id="attgn_header" className="att_gnav_wrapper false">

        {/* Mobile + Tablet Buttons */}
        {isClient && isMobile && (
          <div id="z1_right_zone_mobile" className="flex flex-nowrap items-center justify-center w-full m-0 p-0">
            <Link
              href="https://www.skylink.net.in/wp-content/uploads/large-files/skyplaytv.apk"
              className="btn-primary text-white text-sm font-medium text-center flex-1"
              style={{
                backgroundColor: '#DB4437',
                padding: '10px 4px',
                borderRadius: 0,
                border: 'none',
                borderRight: '1px solid rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.3s ease',
              }}
              download
            >
              Download IPTV App
            </Link>

            <Link
              href="https://activations.skyplay.in/ott_subscription/login/"
              target="_blank"
              className="btn-primary text-white text-sm font-medium text-center flex-1"
              style={{
                backgroundColor: '#F4B400',
                padding: '10px 4px',
                borderRadius: 0,
                border: 'none',
                borderRight: '1px solid rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.3s ease',
              }}
            >
              Claim Your TV/OTT
            </Link>

            <Link
              href="https://www.skylinknet.in/customer_portal/account/sn"
              target="_blank"
              className="btn-primary text-white text-sm font-medium text-center flex-1"
              style={{
                backgroundColor: '#0F9D58',
                padding: '10px 4px',
                borderRadius: 0,
                border: 'none',
                borderRight: '1px solid rgba(255,255,255,0.3)',
                fontSize: '0.75rem',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.3s ease',
              }}
            >
              Quick Pay
            </Link>

            <Link
              href="/plans"
              className="btn-primary text-white text-sm font-medium text-center flex-1"
              style={{
                backgroundColor: '#4285F4',
                padding: '10px 4px',
                borderRadius: 0,
                border: 'none',
                fontSize: '0.75rem',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.3s ease',
              }}
            >
              View Our Plans
            </Link>
          </div>
        )}

        <div className="header-special-div" style={{ marginTop: '12px' }}></div>

        <nav
          id="main-menu"
          className="container flex flex-wrap md:flex-nowrap justify-between items-center rel nopad type-16 false"
          style={{ alignItems: 'center' }}
        >
          <div id="z1_left_zone" className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <div className="inline-flex items-center site-logo-wrap mx-6 md:mx-6"> {/* increased margin-left */}
                <SiteLogo />
              </div>
              <MainMenu className="hidden md:block lg:block" /> {/* hide hamburger/hidden icon on tablet */}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div
            id="z1_right_zone_desktop"
            className="hidden lg:flex flex-nowrap items-center justify-end"
            style={{ marginLeft: '5px', gap: '8px' }}
          >
            <Link
              href="https://www.skylink.net.in/wp-content/uploads/large-files/skyplaytv.apk"
              className="btn-primary text-white text-base font-medium text-center"
              style={{
                backgroundColor: '#DB4437',
                borderRadius: '6px',
                padding: '6px 12px',
                transition: 'background-color 0.3s ease',
              }}
              download
            >
              Download IPTV App
            </Link>

            <Link
              href="https://activations.skyplay.in/ott_subscription/login/"
              target="_blank"
              className="btn-primary text-white text-base font-medium text-center"
              style={{
                backgroundColor: '#F4B400',
                borderRadius: '6px',
                padding: '6px 12px',
                transition: 'background-color 0.3s ease',
              }}
            >
              Claim Your TV/OTT
            </Link>

            <Link
              href="https://www.skylinknet.in/customer_portal/account/sn"
              target="_blank"
              className="btn-primary text-white text-base font-medium text-center"
              style={{
                backgroundColor: '#0F9D58',
                borderRadius: '6px',
                padding: '6px 12px',
                transition: 'background-color 0.3s ease',
              }}
            >
              Quick Pay
            </Link>

            <Link
              href="/plans"
              className="btn-primary text-white text-base font-medium text-center"
              style={{
                backgroundColor: '#4285F4',
                borderRadius: '6px',
                padding: '6px 12px',
                transition: 'background-color 0.3s ease',
              }}
            >
              View Our Plans
            </Link>
          </div>
        </nav>
      </header>

      <style jsx>{`
        /* Hover effects for all buttons */
        :global(#z1_right_zone_mobile a.btn-primary),
        :global(#z1_right_zone_desktop a.btn-primary) {
          transition: all 0.3s ease !important;
        }

        :global(#z1_right_zone_mobile a.btn-primary:hover),
        :global(#z1_right_zone_desktop a.btn-primary:hover) {
          background-color: #DC2626 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        /* Very small screen adjustments */
        @media (max-width: 380px) {
          #z1_right_zone_mobile a.btn-primary {
            font-size: 0.7rem !important;
            padding: 8px 2px !important;
          }
        }

        @media (max-width: 320px) {
          #z1_right_zone_mobile a.btn-primary {
            font-size: 0.65rem !important;
            padding: 6px 1px !important;
          }
        }
      `}</style>
    </div>
  );
}
