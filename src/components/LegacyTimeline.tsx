"use client";

import React from "react";
import Image from "next/image";
import timelineData from "@/data/timeline.json";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles, History, Flame, Award } from "lucide-react";

interface LegacyTimelineProps {
  isHindi: boolean;
}

export default function LegacyTimeline({ isHindi }: LegacyTimelineProps) {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden royal-parchment-bg">
      {/* Subtle Background Corner Flourishes */}
      <div className="absolute top-4 left-4 w-24 h-24 pointer-events-none opacity-40">
        <Image src="/assets/decor/corner-ornament.svg" alt="Corner Ornament" fill />
      </div>
      <div className="absolute top-4 right-4 w-24 h-24 pointer-events-none opacity-40 transform rotate-90">
        <Image src="/assets/decor/corner-ornament.svg" alt="Corner Ornament" fill />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B3202A]/10 border border-[#B3202A]/20 text-[#B3202A] text-xs font-semibold uppercase tracking-widest mb-3">
            <History className="w-3.5 h-3.5" />
            <span>{isHindi ? "हमारी गौरवशाली विरासत" : "Heritage & Lineage"}</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-bold text-[#B3202A] tracking-wide mb-3">
            {isHindi ? "गुड्डूरामजी हलवाई की पावन परंपरा" : "A Proud Legacy of Gudduramji Halwai"}
          </h2>

          {/* Filigree Divider */}
          <div className="w-72 h-8 mx-auto my-3 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Filigree Divider" fill className="object-contain" />
          </div>

          <p className="font-body text-[#5C2B2F] text-base sm:text-lg leading-relaxed">
            {isHindi
              ? "दशकों पहले धामपुर की पावन धरा पर शुद्ध देसी घी, ईश्वर भक्ति और स्वाद की निष्ठा के साथ जो सफर शुरू हुआ, आज वह आधुनिक भारत के भव्यतम शाही आयोजनों की शान बन चुका है।"
              : "What began decades ago in Dhampur as a revered halwai tradition rooted in pure desi ghee, sacred authenticity, and unmatched taste has blossomed into one of Western Uttar Pradesh's most distinguished royal catering houses."}
          </p>
        </div>

        {/* Narrative Feature Card with Heritage Master Chef Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center card-royal-glass rounded-3xl p-6 sm:p-10 mb-20 shadow-xl border border-[#C9A24B]/40">
          {/* Heritage Image */}
          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A24B]/50 group">
            <Image
              src="/assets/images/halwai-heritage.jpg"
              alt="Traditional Halwai Crafting Pure Desi Ghee Sweets"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A050A]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFE6A3] bg-[#B3202A]/80 px-2.5 py-1 rounded">
                Authentic Karigari
              </span>
              <p className="font-royal text-xl font-semibold mt-1">
                Generations of Pure Desi Ghee Artistry
              </p>
            </div>
          </div>

          {/* Heritage Story Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-script text-3xl sm:text-4xl text-[#B3202A] mb-2">
              The Soul of Traditional Taste
            </span>
            <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#2D0B0E] mb-4">
              From the Sacred Hearth to India&apos;s Grandest Palaces
            </h3>

            <p className="font-body text-[#4A2427] text-sm sm:text-base leading-relaxed mb-4">
              At <strong className="text-[#B3202A]">G.D. Caterers</strong>, our roots are firmly anchored in the esteemed tradition of{" "}
              <strong className="text-[#B3202A]">Gudduramji Halwai</strong>. In a world of commercial compromises, we safeguard ancient recipes where slow simmering in pure cow desi ghee, hand-ground whole spices, and hand-stirred rabri remain non-negotiable.
            </p>

            <p className="font-body text-[#4A2427] text-sm sm:text-base leading-relaxed mb-6">
              Today, while our presentation features imported copper chafers, bespoke brass ware, and multi-cuisine live stations, the heartbeat of our cuisine remains the timeless blessing of our halwai lineage.
            </p>

            {/* Heritage Highlights Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#C9A24B]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B3202A]/10 flex items-center justify-center text-[#B3202A] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#2D0B0E]">Pure Desi Ghee Only</h4>
                  <p className="text-[11px] text-[#6E3B3F]">Zero adulteration guarantee</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B3202A]/10 flex items-center justify-center text-[#B3202A] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#2D0B0E]">Master Halwai Karigars</h4>
                  <p className="text-[11px] text-[#6E3B3F]">Decades of perfected recipes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Animated Heritage Timeline */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="font-royal text-2xl sm:text-3xl font-bold text-[#B3202A]">
              {isHindi ? "विकास यात्रा: एक नज़र" : "The Journey of Distinction"}
            </h3>
            <p className="text-xs text-[#8A151D] tracking-wider uppercase font-cinzel mt-1">
              [Documented Milestones & Family Milestones]
            </p>
          </div>

          {/* Central Golden Spine */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#C9A24B]/20 via-[#C9A24B] to-[#C9A24B]/20 transform -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative">
            {timelineData.map((node, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={node.year + index}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-6 md:gap-12`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="card-royal-glass p-6 sm:p-7 rounded-2xl border-l-4 border-l-[#B3202A] hover:border-l-[#C9A24B] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-cinzel text-xs font-bold px-3 py-1 rounded-full bg-[#B3202A] text-white">
                          {node.year}
                        </span>
                        <span className="text-[11px] font-semibold text-[#8A6414] bg-[#FFE6A3]/60 px-2.5 py-0.5 rounded">
                          {node.highlight}
                        </span>
                      </div>

                      <h4 className="font-royal text-xl sm:text-2xl font-bold text-[#2D0B0E] mb-2">
                        {isHindi ? node.titleHindi : node.title}
                      </h4>

                      <p className="font-body text-[#5C2B2F] text-xs sm:text-sm leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Golden Medallion Dot */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#FDFBF7] border-2 border-[#C9A24B] shadow-[0_0_15px_rgba(201,162,75,0.4)] text-[#B3202A]">
                    <Sparkles className="w-5 h-5 text-[#C9A24B]" />
                  </div>

                  {/* Empty counterpart for balance */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
