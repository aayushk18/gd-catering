"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, ChefHat, Clock, Award, Users, Utensils } from "lucide-react";

interface WhyChooseUsProps {
  isHindi: boolean;
}

const pillars = [
  {
    icon: <ChefHat className="w-7 h-7" />,
    title: "Generational Halwai Mastery",
    titleHindi: "पुश्तैनी हलवाई कारीगरी",
    description: "Centuries-tested sweets and royal savories cooked in pure cow desi ghee, keeping alive the authentic heritage of Gudduramji Halwai.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Uncompromising 5-Star Hygiene",
    titleHindi: "सर्वोच्च स्वच्छता मानक",
    description: "Surgical kitchen discipline, hairnets, sanitized prep stations, RO purified water, and spotless brass and stainless steel equipment.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Farm-Fresh Pure Ingredients",
    titleHindi: "ताज़ी व शुद्ध सामग्री",
    description: "Strictly cold-pressed oils, hand-ground whole spices from Khari Baoli, fresh malai paneer, and unadulterated mawa prepared in-house.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Mega Gathering Capacity",
    titleHindi: "विशाल आयोजनों का अनुभव",
    description: "Battle-tested logistical capability to cater flawlessly to crowds ranging from 200 guests to 25,000+ devotees without food delays.",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Punctual Regal Butler Service",
    titleHindi: "समयबद्ध व अनुशासित सेवा",
    description: "Hot dishes served at the precise second, uniformed captains attending to VIP tables, and seamless coordination throughout your evening.",
  },
  {
    icon: <Utensils className="w-7 h-7" />,
    title: "Bespoke Menus & Live Tasting",
    titleHindi: "कस्टमाइज्ड मेन्यू व टेस्टिंग",
    description: "Tailored to your family traditions: Awadhi, Rajasthani, Satvik, Jain, Continental, Pan-Asian, and live tasting sessions prior to the event.",
  },
];

export default function WhyChooseUs({ isHindi }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 royal-parchment-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B3202A]/10 border border-[#B3202A]/20 text-[#B3202A] text-xs font-semibold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The G.D. Caterers Promise</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-bold text-[#B3202A] tracking-wide mb-3">
            {isHindi ? "हमें क्यों चुनें? छह अटूट स्तंभ" : "The Pillars of Royal Trust & Distinction"}
          </h2>

          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>

          <p className="font-body text-[#5C2B2F] text-base leading-relaxed">
            {isHindi
              ? "जब बात जीवन के सबसे खास उत्सव की हो, तो समझौता कैसा? जानिए क्यों पश्चिमी उत्तर प्रदेश के प्रतिष्ठित परिवार हम पर अटूट विश्वास करते हैं।"
              : "When honouring your esteemed guests at a wedding or celebration, excellence is not an option—it is a sacred obligation."}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="card-royal-glass rounded-3xl p-8 border border-[#C9A24B]/30 hover:border-[#B3202A] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Corner Ornament */}
              <div className="absolute top-2 right-2 w-10 h-10 pointer-events-none opacity-25 group-hover:opacity-75 transition-opacity">
                <Image src="/assets/decor/corner-ornament.svg" alt="Flourish" fill />
              </div>

              {/* Icon Container with gold halo */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFE6A3] to-[#C9A24B] text-[#2D0B0E] flex items-center justify-center mb-6 shadow-md transform group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>

              <h3 className="font-royal text-2xl font-bold text-[#B3202A] group-hover:text-[#8A151D] mb-1">
                {isHindi ? pillar.titleHindi : pillar.title}
              </h3>

              <p className="font-cinzel text-[11px] font-semibold text-[#8A6414] uppercase tracking-wider mb-3">
                {pillar.title}
              </p>

              <p className="font-body text-xs sm:text-sm text-[#5C2B2F] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
