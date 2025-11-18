"use client";
import Image from "next/image";

export default function TvOttPartners() {
  const ottLogos = [
    "/assets/501 SUN TV.png",
    "/assets/502 VIJAY TV .png",
    "/assets/503 ZEE TAMIL.png",
    "/assets/504 K TV.png",
    "/assets/505 COLORS TAMIL.png",
    "/assets/506 SUN LIFE.png",
    "/assets/507 ADITHYA TV.png",
    "/assets/508 DISCOVERY TAMIL.png",
    "/assets/509 KALAIGNAR TV.png",
    "/assets/510 VIJAY SUPER.png",
    "/assets/511 MEGA TV.png",
    "/assets/512 KALAIGNAR SIRIPOLLI.png",
    "/assets/513 Jaya TV.png",
    "/assets/514 RAJ TV.png",
    "/assets/515 MEGA 24.png",
    "/assets/516 RAJ NAGAICHUVAI.png",
    "/assets/517 DD TAMIL.png",
    "/assets/518 DD PUDHUCHERRY.png",
    "/assets/519 POLIMER TV.png",
    "/assets/520 MK TV.png",
    "/assets/521 MK SIX.png",
    "/assets/522 PEPPERS TV.png",
    "/assets/523 VASANTH TV.png",
    "/assets/524 VELICHAM TV.png",
    "/assets/525 PUTHUYUGAM TV.png",
    "/assets/526 MAKKAL TV.png",
    "/assets/527 CAPTAIN TV.png",
    "/assets/528 TAMILAN TV.png",
    "/assets/529 IMAYAM TV.png",
    "/assets/530 Moon TV.png",
    "/assets/531 VENDHAR TV.png",
    "/assets/532 THANTHI ONE.png",
    "/assets/533 MATHIMUGAM TV.png",
    "/assets/534 DD PUDHUCHERRY.png",
    "/assets/535 Malar TV.png",
    "/assets/536 Vaanvil TV.png",
    "/assets/537 IBC Tamil.png",
    "/assets/540 ZEE THIRAI.png",
    "/assets/541 KALAIGNAR MURASU.png",
    "/assets/542 JAYA MOVIES.png",
    "/assets/543 RAJ DIGITAL PLUS.png",
    "/assets/544 &FLIX.png",
    "/assets/545 SONY PIX.png",
    "/assets/550 SUN MUSIC.png",
    "/assets/551 VIJAY TAKKAR.png",
    "/assets/552 ISAI ARUVI.png",
    "/assets/553 JAYA MAX.png",
    "/assets/554 RAJ MUSIC.png",
    "/assets/555 MEGA MUSIC.png",
    "/assets/556 MK TUNES.png",
    "/assets/557 TUNES 6.png",
    "/assets/558 7S MUSIC.png",
    "/assets/584 SUN NEWS.png",
    "/assets/585 KALAIGNAR SEITHIGAL.png",
    "/assets/586 NEWS 18 TAMIL NADU.png",
    "/assets/587 JAYA PLUS.png",
    "/assets/588 RAJ NEWS.png",
    "/assets/589 POLIMER NEWS.png",
    "/assets/590 THANTHI TV.png",
    "/assets/591 PUTHIYA THALAIMURAI.png",
    "/assets/592 NEW 7 TAMIL.png",
    "/assets/593 CAPTAIN NEWS.png",
    "/assets/594 NEWS TAMIL 24-7.png",
    "/assets/595 NEWS J.png",
    "/assets/596 MALAI MURASU.png",
    "/assets/597 VELICHAM TV.png",
    "/assets/598 Sathiyam TV.png",
    "/assets/599 Win TV.png",
    "/assets/600 1 Yes News.png",
    "/assets/601 M Nadu.png",
    "/assets/602 Tamil Janam.png",
    "/assets/604 Star Sports 1 Tamil.png",
    "/assets/605 Sony Sports Ten 4.png",
    "/assets/611 NICK.png",
    "/assets/612 POGO.png",
    "/assets/613 SONY YAY.png",
    "/assets/614 CARTOON NETWORK.png",
    "/assets/615 DISCOVERY KIDS.png",
    "/assets/616 CHUTTI TV.png",
    "/assets/617 SONIC.png",
    "/assets/618 ETV Balabharat SD.png",
    "/assets/619 HUNGAMA.png",
    "/assets/620 DISNEY CHANNEL.png",
    "/assets/621 SUPER HUNGAMA.png",
    "/assets/622 DISNEY JUNIOR.png",
    "/assets/623 GUBBARE.png",
    "/assets/629 NGC TAMIL.png",
    "/assets/630 TRAVEL XP TAMIL.png",
    "/assets/631 HISTORY TV 18 TAMIL.png",
    "/assets/632 SONY BBC EARTH TAMIL.png",
    "/assets/633 NGC WILD TAMIL.png",
    "/assets/634 STAR LIFE.png",
    "/assets/640 SVBC TTD.png",
    "/assets/641 SVBC 2.png",
    "/assets/642 SRI SANKARA TV.png",
    "/assets/643 SAI TV.png",
    "/assets/644 AASTHA TAMIL.png",
    "/assets/645 MADHA TV.png",
    "/assets/646 ANGEL TV HD.png",
    "/assets/647 NAMBIKKAI TV.png",
    "/assets/648 Jothi.png",
    "/assets/649 Aaseervatham TV.png",
    "/assets/651 Tamil Naptool.png",
    "/assets/654 SUN TV HD.png",
    "/assets/655 VIJAY TV HD.png",
    "/assets/656 ZEE TAMIL HD.png",
    "/assets/657 COLORS TAMIL HD.png",
    "/assets/658 VIJAY SUPER HD.png",
    "/assets/659 K TV HD.png",
    "/assets/660 JAYA TV HD.png",
    "/assets/661 DD TAMIL.png",
    "/assets/662 ZEE THIRAI HD.png",
    "/assets/663 &FLIX HD.png",
    "/assets/664 SONY PIX HD.png",
    "/assets/665 SUN MUSIC HD.png",
    "/assets/666 Star Sports 1 Tamil HD.png",
    "/assets/667 Sony Sports Ten 4 HD.png",
    "/assets/668 DISNEY CHANNEL HD.png",
    "/assets/669 ETV Balabharat HD.png",
    "/assets/670 DISCOVERY CHANNEL HD.png",
    "/assets/671 HISTORY TV 18 TAMIL HD.png",
    "/assets/672 TRAVEL XP TAMIL HD.png",
    "/assets/673 SONY BBC EARTH TAMIL HD.png",
    "/assets/674 ANIMAL PLANET TAMIL HD.png",
    "/assets/675 NGC TAMIL HD.png",
    "/assets/676 NGC WILD TAMIL HD.png",
    "/assets/677 Star Life.png",
  ];

  return (
    <section className="w-full bg-white py-20 font-sans relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-1/4 left-5 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 right-5 w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Included{" "}
            <span className="text-blue-600 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              TV & OTT Partners
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Stream unlimited entertainment with 20+ premium OTT apps and popular
            TV channels.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* First Row */}
          <div className="flex gap-8 animate-scroll mb-6">
            {[...ottLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-20 relative opacity-100 transition-all duration-300 p-3 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md"
              >
                <Image
                  src={logo.startsWith("/assets/") ? logo : `/assets/${logo}`}
                  alt="OTT Logo"
                  width={140}
                  height={70}
                  className="object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second Row (Reverse Animation) */}
          <div className="flex gap-8 animate-scroll-reverse">
            {[...ottLogos].reverse().map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-20 relative opacity-100 transition-all duration-300 p-3 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md"
              >
                <Image
                  src={logo.startsWith("/assets/") ? logo : `/assets/${logo}`}
                  alt="OTT Logo"
                  width={140}
                  height={70}
                  className="object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-144px * 10 - 2rem * 10));
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-144px * 10 - 2rem * 10));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
}