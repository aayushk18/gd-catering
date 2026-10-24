"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import RoyalCrest from "./RoyalCrest";
import { siteConfig } from "@/data/siteConfig";
import { Calendar, MessageCircle, ChevronDown, Sparkles, Award, ShieldCheck } from "lucide-react";

interface HeroProps {
  isHindi: boolean;
}

const heroSlides = [
  {
    image: "/assets/images/hero-buffet.jpg",
    title: "Grand Royal Wedding Banquets",
    caption: "Exquisite brass chafing spreads, rich aromas & immaculate presentation",
  },
  {
    image: "/assets/images/hero-live-counter.jpg",
    title: "Five-Star Live Gourmet Stations",
    caption: "Live charcoal tandoors, artisanal chaats & interactive world cuisines",
  },
  {
    image: "/assets/images/hero-banquet-hall.jpg",
    title: "Palatial Receptions & Gatherings",
    caption: "Catering 500 to 15,000+ guests with royal dignity and punctuality",
  },
];

export default function Hero({ isHindi }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#1E0407]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            {/* Rich Royal Gradient Vignette: Deep Crimson, Gold Shimmer & Deep Dark Shadows */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0306] via-[#2A050A]/75 to-[#120204]/80" />
          </div>
        ))}
      </div>

      {/* Lightweight CSS Sparkles overlay instead of continuous heavy 60fps canvas loop */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 bg-[radial-gradient(#FFE6A3_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Drifting Silk Gold Wave SVG Background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none opacity-40 bg-[url('/assets/decor/gold-wave.svg')] bg-cover bg-bottom animate-float-slow"
        aria-hidden="true"
      />

      {/* Floating Botanical Parallax Decor (Red Chilli, Lemon, Coriander) */}
      <div className="hidden lg:block absolute top-1/4 left-8 z-20 w-16 h-28 opacity-80 animate-float-slow pointer-events-none">
        <Image src="/assets/decor/chillies.svg" alt="Royal Spices" fill className="object-contain" />
      </div>
      <div className="hidden lg:block absolute top-1/3 right-12 z-20 w-20 h-20 opacity-80 animate-float-reverse pointer-events-none">
        <Image src="/assets/decor/lemon-slice.svg" alt="Fresh Lemon Decor" fill className="object-contain" />
      </div>
      <div className="hidden lg:block absolute bottom-28 left-16 z-20 w-20 h-20 opacity-70 animate-float-slow pointer-events-none">
        <Image src="/assets/decor/coriander.svg" alt="Organic Herb Decor" fill className="object-contain" />
      </div>

      {/* Hero Center Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-36 pb-12 flex-1 flex flex-col items-center justify-center">
        {/* Shimmering Crest Monogram */}
        <div className="mb-4 sm:mb-6 animate-pulse-gold inline-block p-2 rounded-full bg-black/20 backdrop-blur-sm border border-[#C9A24B]/30">
          <RoyalCrest size={100} />
        </div>

        {/* Heritage Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3B070D]/80 backdrop-blur-md border border-[#C9A24B]/40 text-[#FFE6A3] mb-6 shadow-lg">
          <Sparkles className="w-4 h-4 text-[#C9A24B]" />
          <span className="font-script text-xl sm:text-2xl tracking-wide">
            {isHindi ? siteConfig.taglineHindi : siteConfig.tagline}
          </span>
          <Sparkles className="w-4 h-4 text-[#C9A24B]" />
        </div>

        {/* Royal Headline with Word-by-Word Dramatic Stature */}
        <h1 className="font-royal font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-wide leading-tight mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {isHindi ? (
            <span>
              जहाँ हर उत्सव बनता है <span className="gold-text-gradient">एक शाही दावत</span>
            </span>
          ) : (
            <span>
              Where Every Celebration <br className="hidden sm:inline" />
              Becomes a <span className="gold-text-gradient">Royal Feast</span>
            </span>
          )}
        </h1>

        {/* Location & Descriptor Subtext */}
        <p className="font-body text-base sm:text-xl text-[#FBF3E0]/90 max-w-3xl mb-8 leading-relaxed font-light drop-shadow">
          {isHindi ? (
            <>
              धामपुर, बिजनौर एवं सम्पूर्ण उत्तर भारत में भव्य वैवाहिक कैटरिंग, शुद्ध देसी घी मिष्ठान और फाइव-स्टार लाइव काउंटर्स का विश्वसनीय नाम।
            </>
          ) : (
            <>
              {siteConfig.subheadline}
            </>
          )}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary CTA: Book Your Event */}
          <Link
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-[#2D0B0E] bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C9A24B] shadow-[0_6px_25px_rgba(201,162,75,0.4)] hover:shadow-[0_8px_35px_rgba(201,162,75,0.65)] transform hover:-translate-y-1 active:translate-y-0 transition-all text-sm sm:text-base border border-[#FFF6D1]"
          >
            <Calendar className="w-5 h-5" />
            <span>{isHindi ? "शाही उत्सव बुक करें" : "Book Your Royal Event"}</span>
          </Link>

          {/* Secondary CTA: WhatsApp Us */}
          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold tracking-wide text-white bg-[#25D366]/90 hover:bg-[#25D366] shadow-[0_6px_20px_rgba(37,211,102,0.35)] transform hover:-translate-y-1 active:translate-y-0 transition-all text-sm sm:text-base border border-[#4ADE80]/40"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{isHindi ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp"}</span>
          </a>
        </div>
      </div>

      {/* Trust Badges Strip (Halwai Roots, 25K+ Gathering Capacity, Live Counters) */}
      <div className="relative z-20 border-t border-[#C9A24B]/30 bg-[#240408]/90 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C9A24B] shrink-0" />
            <div className="text-left">
              <p className="text-white text-xs sm:text-sm font-semibold">100% Pure Veg</p>
              <p className="text-[#C9A24B] text-[10px] sm:text-xs">Halwai Pure Desi Ghee</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <Award className="w-5 h-5 text-[#C9A24B] shrink-0" />
            <div className="text-left">
              <p className="text-white text-xs sm:text-sm font-semibold">500+ Grand Weddings</p>
              <p className="text-[#C9A24B] text-[10px] sm:text-xs">Dhampur, NCR & Beyond</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#C9A24B] shrink-0" />
            <div className="text-left">
              <p className="text-white text-xs sm:text-sm font-semibold">Live Gourmet Stations</p>
              <p className="text-[#C9A24B] text-[10px] sm:text-xs">Tandoor, Chaat & Wok</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#C9A24B] shrink-0" />
            <div className="text-left">
              <p className="text-white text-xs sm:text-sm font-semibold">15,000+ Capacity</p>
              <p className="text-[#C9A24B] text-[10px] sm:text-xs">Mega Banquet Logistics</p>
            </div>
          </div>
        </div>

        {/* Smooth Scroll Indicator */}
        <div className="mt-2 flex justify-center">
          <Link
            href="#about"
            className="text-[#FFE6A3]/70 hover:text-[#FFE6A3] transition-colors p-1"
            aria-label="Scroll down to legacy section"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
