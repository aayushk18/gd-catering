"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import eventsData from "@/data/events.json";
import { siteConfig } from "@/data/siteConfig";
import { ChevronLeft, ChevronRight, MapPin, Users, Calendar, Sparkles } from "lucide-react";

interface GrandEventsProps {
  isHindi: boolean;
}

export default function GrandEvents({ isHindi }: GrandEventsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
  };

  const currentEvent = eventsData[currentIndex];

  return (
    <section id="events" className="relative py-20 sm:py-28 bg-[#2A050A] text-white overflow-hidden">
      {/* Background Decorative glow & filigree */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,75,0.15)_0%,_rgba(42,5,10,0.95)_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE6A3]/10 border border-[#C9A24B]/40 text-[#FFE6A3] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>VIP & High-Profile Portfolio</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-bold tracking-wide mb-3">
            {isHindi ? (
              <span>
                भारत के सबसे भव्य आयोजनों का <span className="gold-text-gradient">विश्वसनीय साथी</span>
              </span>
            ) : (
              <span>
                Trusted at India&apos;s <span className="gold-text-gradient">Grandest Celebrations</span>
              </span>
            )}
          </h2>

          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>

          <p className="font-body text-[#FBF3E0]/80 text-sm sm:text-base leading-relaxed">
            {isHindi
              ? "प्रतिष्ठित औद्योगिक घरानों, शाही शादियों और विशाल जन-समारोहों के लिए बेदाग प्रबंध। (स्थान व नाम केवल उदाहरण हेतु हैं)"
              : "Orchestrating bespoke catering for distinguished industrialist weddings, prestigious palace galas, and mega gathering conventions. (Slots marked for approved client photography)."}
          </p>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative card-dark-royal rounded-3xl overflow-hidden border-2 border-[#C9A24B]/50 shadow-2xl p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Event Showcase Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24B]/40">
              <Image
                src={currentEvent.image}
                alt={currentEvent.eventName}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Event Location Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs text-[#FFE6A3]">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{currentEvent.cityYear}</span>
              </div>
            </div>

            {/* Event Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C9A24B] bg-[#C9A24B]/10 px-3 py-1 rounded-full border border-[#C9A24B]/30 inline-block mb-3">
                  Placeholder Showcase Slot
                </span>

                <h3 className="font-royal text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug">
                  {currentEvent.eventName}
                </h3>

                <p className="font-cinzel text-xs text-[#FFE6A3] tracking-wider mb-4">
                  Host: {currentEvent.clientName}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#FBF3E0]/90">
                    <Users className="w-4 h-4 text-[#C9A24B]" />
                    <span><strong>Scale:</strong> {currentEvent.guestCount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#FBF3E0]/90">
                    <Sparkles className="w-4 h-4 text-[#C9A24B]" />
                    <span><strong>Curated Concept:</strong> {currentEvent.theme}</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-[#C9A24B] pl-4 italic text-xs sm:text-sm text-[#FBF3E0]/80 font-body mb-6">
                  &ldquo;{currentEvent.quote}&rdquo;
                </blockquote>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-[#C9A24B]">
                  <span>0{currentIndex + 1}</span>
                  <span>/</span>
                  <span>0{eventsData.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevEvent}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-[#C9A24B] hover:text-[#2D0B0E] transition-all"
                    aria-label="Previous Event"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextEvent}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-[#C9A24B] hover:text-[#2D0B0E] transition-all"
                    aria-label="Next Event"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Strip (Events, Guests Served, Years Legacy, Master Chefs) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-black/40 border border-[#C9A24B]/30 backdrop-blur-md">
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-royal text-3xl sm:text-5xl font-bold gold-text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#FBF3E0]/90 font-medium">
                {isHindi ? stat.labelHindi : stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
