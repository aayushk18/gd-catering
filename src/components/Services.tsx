"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import servicesData from "@/data/services.json";
import { Crown, Sparkles, Flame, Sun, Briefcase, HeartHandshake, Users, ArrowRight } from "lucide-react";

interface ServicesProps {
  isHindi: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Crown: <Crown className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export default function Services({ isHindi }: ServicesProps) {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#FBF3E0]/70 overflow-hidden">
      {/* Decorative filigree background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#C9A24B] block mb-2">
            Royal Catering Solutions
          </span>
          <h2 className="font-royal text-3xl sm:text-5xl font-bold text-[#B3202A] tracking-wide mb-3">
            {isHindi ? "हमारी विशिष्ट शाही सेवाएं" : "Bespoke Catering & Hospitality"}
          </h2>
          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>
          <p className="font-body text-[#5C2B2F] text-base leading-relaxed">
            {isHindi
              ? "पारिवारिक मांगलिक कार्यों से लेकर वृहद राष्ट्रीय सम्मेलनों तक, हमारी हर सेवा में झलकती है राजसी भव्यता और आत्मीय सत्कार।"
              : "From intimate holy ceremonies to palatial wedding banquets for thousands, every service is orchestrated with regal elegance, culinary precision, and heartfelt warmth."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`relative group rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "card-dark-royal text-white border-[#C9A24B] md:col-span-2 lg:col-span-1 shadow-2xl"
                    : "card-royal-glass text-[#2D0B0E] hover:-translate-y-1.5 hover:shadow-xl"
                }`}
              >
                {/* Gold Corner Ornament */}
                <div className="absolute top-2 right-2 w-12 h-12 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                  <Image src="/assets/decor/corner-ornament.svg" alt="Flourish" fill />
                </div>

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isFeatured
                          ? "bg-[#C9A24B] text-[#2D0B0E] shadow-[0_0_20px_rgba(201,162,75,0.4)]"
                          : "bg-[#B3202A]/10 text-[#B3202A]"
                      }`}
                    >
                      {iconMap[service.icon] || <Sparkles className="w-6 h-6" />}
                    </div>

                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                        isFeatured
                          ? "bg-[#B3202A] text-white"
                          : "bg-[#FFE6A3]/70 text-[#8A6414]"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-royal text-2xl font-bold tracking-wide mb-3 ${
                      isFeatured ? "text-white" : "text-[#B3202A]"
                    }`}
                  >
                    {isHindi ? service.titleHindi : service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 font-body ${
                      isFeatured ? "text-[#FBF3E0]/80" : "text-[#5C2B2F]"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Inquiry Link */}
                <Link
                  href="#enquiry"
                  className={`inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase group-hover:gap-3 transition-all ${
                    isFeatured ? "text-[#FFE6A3]" : "text-[#B3202A]"
                  }`}
                >
                  <span>{isHindi ? "आयोजन प्लान करें" : "Plan This Event"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
