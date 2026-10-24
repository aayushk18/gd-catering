"use client";

import React, { useState } from "react";
import Image from "next/image";
import testimonialsData from "@/data/testimonials.json";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, Sparkles } from "lucide-react";

interface TestimonialsProps {
  isHindi: boolean;
}

export default function Testimonials({ isHindi }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const review = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-[#FBF3E0]/70 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B3202A]/10 border border-[#B3202A]/20 text-[#B3202A] text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Honoured Host Feedback</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-bold text-[#B3202A] tracking-wide mb-3">
            {isHindi ? "सम्मानित यजमानों के अनुभव" : "Words of Gratitude & Praise"}
          </h2>

          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>

          <p className="font-body text-[#5C2B2F] text-base leading-relaxed">
            {isHindi
              ? "हमारे सम्मानित परिवारों और आयोजकों की सन्तुष्टि ही हमारी सबसे बड़ी पूँजी है। (समीक्षाएं नमूने के तौर पर स्पष्ट रूप से अंकित हैं)"
              : "Read heartfelt experiences from families and institutions who entrusted their grandest days to our care. (Sample placeholder reviews clearly labelled)."}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative card-royal-glass rounded-3xl p-8 sm:p-12 border-2 border-[#C9A24B]/40 shadow-2xl overflow-hidden">
          {/* Subtle Background Watermark Crest */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none">
            <Image src="/assets/logo/crest.svg" alt="Watermark Crest" fill />
          </div>

          <div className="flex flex-col items-center text-center">
            {/* Sample Review Badge */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B3202A] bg-[#B3202A]/10 border border-[#B3202A]/20 px-3 py-1 rounded-full mb-6">
              Sample Placeholder Review Slot
            </span>

            {/* 5-Star Rating */}
            <div className="flex items-center gap-1.5 text-[#C9A24B] mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C9A24B]" />
              ))}
            </div>

            {/* Review Quote */}
            <blockquote className="font-royal text-xl sm:text-3xl text-[#2D0B0E] font-medium leading-relaxed max-w-3xl mb-8 italic">
              &ldquo;{review.review}&rdquo;
            </blockquote>

            {/* Host Details */}
            <div className="space-y-1">
              <h4 className="font-royal text-xl font-bold text-[#B3202A]">
                {review.name}
              </h4>
              <p className="font-body text-xs text-[#8A6414] font-semibold">
                {review.relation} &bull; {review.event}
              </p>
              <p className="text-[11px] text-[#6E3B3F]/70">
                {review.date}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#C9A24B]/20 w-full justify-between">
              <span className="text-xs text-[#8A151D] font-cinzel">
                0{activeIndex + 1} / 0{testimonialsData.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-[#F7EBD0] hover:bg-[#B3202A] text-[#B3202A] hover:text-white transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-[#F7EBD0] hover:bg-[#B3202A] text-[#B3202A] hover:text-white transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
