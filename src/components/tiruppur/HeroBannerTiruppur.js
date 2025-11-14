"use client";
import { useState } from "react";
import ContactForm from "../contact/ContactForm";

export default function HeroBannerTUP() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="tailwind-zone">
      <section className="relative overflow-hidden text-center font-inter bg-gradient-to-br from-rose-50 to-rose-200 py-24 mt-8">
        {/* Floating Background Shapes */}
        <div className="absolute top-10 left-5 w-24 h-24 bg-gradient-to-br from-rose-200 to-rose-400 rounded-full opacity-60 animate-float" />
        <div className="absolute bottom-20 right-8 w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full opacity-40 animate-float-reverse" />

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto px-6 sm:px-10">
          <h1 className="text-slate-900 fot-extrabold mb-6 text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
            Tiruppur&apos;s Premium{" "}
            <span className="inline-block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent animate-pulse-text">
              High-Speed Fibernet
            </span>{" "}
            Broadband
          </h1>

          <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg sm:text-xl font-medium">
            Experience lightning-fast, reliable, and unlimited internet for
            homes and businesses in Tiruppur. Stay connected with seamless
            performance and unmatched support.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { number: "1Gbps", label: "Max Speed" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
              { number: "0", label: "Hidden Costs" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 rounded-xl border border-rose-200/40 backdrop-blur-md shadow-sm"
              >
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => setShowContactForm(true)}
            className="relative overflow-hidden px-10 py-4 bg-red-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl"
          >
            Request a Free Callback
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 scale-150 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>
          </button>
        </div>

        {showContactForm && (
          <ContactForm onClose={() => setShowContactForm(false)} />
        )}

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes pulseText {
            0%,
            100% {
              transform: scale(1);
              text-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
            }
            50% {
              transform: scale(1.03);
              text-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
            }
          }

          .animate-pulse-text {
            animation: pulseText 2.5s infinite;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-reverse {
            animation: float 5s ease-in-out infinite reverse;
          }
        `}</style>
      </section>
    </div>
  );
}
