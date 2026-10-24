"use client";

import React, { useState } from "react";
import Image from "next/image";
import menuData from "@/data/menu.json";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles, Download, CheckCircle, UtensilsCrossed, ArrowUpRight, X } from "lucide-react";

interface MenuShowcaseProps {
  isHindi: boolean;
}

export default function MenuShowcase({ isHindi }: MenuShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDish, setSelectedDish] = useState<(typeof menuData.items)[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? menuData.items
      : menuData.items.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-20 sm:py-28 royal-parchment-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B3202A]/10 border border-[#B3202A]/20 text-[#B3202A] text-xs font-semibold uppercase tracking-widest mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Royal Culinary Repertoire</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-bold text-[#B3202A] tracking-wide mb-3">
            {isHindi ? "शाही मेन्यू व विशिष्ट व्यंजन" : "The Royal Feast Menu Showcase"}
          </h2>

          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>

          <p className="font-body text-[#5C2B2F] text-base leading-relaxed mb-6">
            {isHindi
              ? "पारंपरिक हलवाई देसी घी की मिठाइयों से लेकर पाँच-सितारा लाइव काउंटर्स तक, हमारे हर व्यंजन में है शुद्धता और राजसी स्वाद।"
              : "Slow-cooked in pure desi ghee and crafted with hand-ground generational spices. Explore our customizable catering spreads with per-plate starting pricing."}
          </p>

          {/* Download Full Menu Action Button */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                "Namaste G.D. Caterers! Please share your full PDF Catering Menu Card & per-plate packages."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#2D0B0E] bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C9A24B] shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>{isHindi ? "सम्पूर्ण मेन्यू डाउनलोड / प्राप्त करें (WhatsApp)" : "Download Full Menu (PDF on WhatsApp)"}</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {menuData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#B3202A] text-white shadow-lg border border-[#B3202A] scale-105"
                    : "bg-[#FDFBF7] text-[#5C2B2F] border border-[#C9A24B]/30 hover:bg-[#F7EBD0]"
                }`}
              >
                {isHindi ? cat.labelHindi : cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDish(item)}
              className="group card-royal-glass rounded-3xl overflow-hidden border border-[#C9A24B]/35 hover:border-[#B3202A] transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div>
                {/* Dish Photography */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#F7EBD0]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {/* Top Badges: Veg Badge + Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {/* Pure Veg Green Dot Badge */}
                    <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow border border-[#16A34A]/40">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                      <span className="text-[10px] font-bold text-[#15803D] uppercase tracking-wider">
                        100% Pure Veg
                      </span>
                    </div>

                    {item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#B3202A] px-2.5 py-1 rounded-full shadow">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Starting Price Plate Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-[#FFE6A3]/40">
                    <span className="text-[10px] text-[#FFE6A3] block uppercase tracking-wider">
                      Starting from
                    </span>
                    <span className="font-royal text-base sm:text-lg font-bold text-white">
                      {item.startingPrice} <span className="text-xs font-normal">/ plate</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-royal text-2xl font-bold text-[#B3202A] group-hover:text-[#8A151D] transition-colors mb-1">
                    {isHindi ? item.nameHindi : item.name}
                  </h3>

                  <p className="font-cinzel text-[11px] tracking-wider uppercase text-[#C9A24B] font-semibold mb-3">
                    {item.name}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-[#5C2B2F] line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Detail prompt */}
              <div className="px-6 pb-6 pt-2 border-t border-[#C9A24B]/15 flex items-center justify-between text-xs text-[#8A151D] font-semibold group-hover:text-[#B3202A]">
                <span>{isHindi ? "सामग्री व विवरण देखें" : "View Dish Details & Catering Options"}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl card-royal-glass rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A24B]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#B3202A] transition-colors"
              aria-label="Close Dish Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 w-full">
              <Image src={selectedDish.image} alt={selectedDish.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFE6A3] bg-[#B3202A] px-2.5 py-1 rounded">
                  {selectedDish.tag || "Signature Preparation"}
                </span>
                <h3 className="font-royal text-3xl font-bold mt-1">{selectedDish.name}</h3>
                <p className="font-hindi text-sm text-[#FFE6A3]">{selectedDish.nameHindi}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C9A24B]/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#16A34A]" />
                  <span className="text-xs font-bold text-[#15803D] uppercase">100% Pure Vegetarian</span>
                </div>
                <div>
                  <span className="text-xs text-[#6E3B3F]">Starting from </span>
                  <span className="font-royal text-2xl font-bold text-[#B3202A]">{selectedDish.startingPrice}</span>
                  <span className="text-xs text-[#6E3B3F]"> / plate</span>
                </div>
              </div>

              <p className="font-body text-[#4A2427] text-sm leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {/* Halwai Standard Assurance */}
              <div className="bg-[#FFE6A3]/30 rounded-2xl p-4 border border-[#C9A24B]/30 mb-6 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#8A6414] shrink-0 mt-0.5" />
                <p className="text-xs text-[#6A4705] leading-relaxed">
                  Prepared strictly under traditional halwai hygiene standards. Customizable for satvik, jain, or low-spice preferences upon request.
                </p>
              </div>

              {/* Modal CTA */}
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                    `Namaste G.D. Caterers! I would like to include ${selectedDish.name} in my event catering menu.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors"
                >
                  Enquire for this dish on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
