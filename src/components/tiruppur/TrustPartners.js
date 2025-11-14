"use client";
import Image from "next/image";

export default function TrustedPartners() {
  const logos = [
    "/assets/ABT.png",
    "/assets/amex alloys.png",
    "/assets/annapoorna.png",
    "/assets/emerald.png",
    "/assets/haribhavanam.png",
    "/assets/hoglund.png",
    "/assets/infinite.png",
    "/assets/INNOBOON.png",
    "/assets/kanmalai.png",
    "/assets/kpr college.png",
    "/assets/ksg-college-logo.png",
    "/assets/mobi.png",
    "/assets/pack and back.png",
    "/assets/prithivi.png",
    "/assets/prominanace.png",
    "/assets/rivigo.png",
    "/assets/snow man.png",
    "/assets/sns college of technologt.png",
    "/assets/vserve business.png",
    "/assets/wavicle.png",
  ];

  return (
    <section className="w-full bg-white py-16 font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/5 left-5 w-20 h-20 bg-gradient-to-br from-red-50 to-red-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 right-5 w-16 h-16 bg-gradient-to-br from-red-200 to-red-400 rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Trusted by{" "}
            <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              4000+
            </span>{" "}
            Partners
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Collaborating with industry leaders across Tiruppur for reliable connectivity solutions
          </p>
        </div>

        {/* Logo Slider Container */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* First Slider */}
          <div className="flex gap-8 animate-scroll mb-6">
            {[...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 relative opacity-100 transition-all duration-300 p-3 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md"
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={120}
                  height={60}
                  className="object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>

          {/* Second Slider (Reverse) */}
          <div className="flex gap-8 animate-scroll-reverse">
            {[...logos].reverse().map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 relative opacity-100 transition-all duration-300 p-3 bg-white rounded-lg shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md"
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={120}
                  height={60}
                  className="object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
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
            transform: translateX(calc(-128px * 10 - 2rem * 10));
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-128px * 10 - 2rem * 10));
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