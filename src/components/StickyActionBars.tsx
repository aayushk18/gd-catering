"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle, Calendar, ChevronUp } from "lucide-react";

export default function StickyActionBars() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Pulsing Quick Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-center gap-3">
        {/* Back to top mini pill */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#1E0407] border border-[#C9A24B]/60 text-[#FFE6A3] shadow-lg flex items-center justify-center hover:bg-[#B3202A] transition-all hover:scale-110 active:scale-95"
            aria-label="Scroll to Top"
            title="Back to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Pulsing Phone Call Button */}
        <a
          href={siteConfig.phones[0].link}
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#B3202A] to-[#E52535] text-white shadow-[0_6px_20px_rgba(179,32,42,0.45)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-[#FFE6A3] animate-bounce"
          style={{ animationDuration: "3s" }}
          aria-label={`Call ${siteConfig.phones[0].display}`}
          title={`Call ${siteConfig.phones[0].display}`}
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* Pulsing WhatsApp Button */}
        <a
          href={siteConfig.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-white animate-[pulseGoldGlow_2.5s_infinite]"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Consultation"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Sticky Bottom Action Bar for Mobile Viewports (Phones) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#1E0407]/95 backdrop-blur-md border-t border-[#C9A24B]/30 px-3 py-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Now Button */}
          <a
            href={siteConfig.phones[0].link}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all border border-white/10 text-center"
          >
            <Phone className="w-4 h-4 text-[#FFE6A3] mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
          </a>

          {/* WhatsApp Chat Button */}
          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white active:scale-95 transition-all shadow text-center"
          >
            <MessageCircle className="w-4 h-4 mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* Enquire / Book Now */}
          <Link
            href="#enquiry"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C9A24B] text-[#2D0B0E] font-bold active:scale-95 transition-all shadow text-center"
          >
            <Calendar className="w-4 h-4 mb-1 text-[#2D0B0E]" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Book Feast</span>
          </Link>
        </div>
      </div>
    </>
  );
}
