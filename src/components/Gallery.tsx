"use client";

import React, { useState } from "react";
import Image from "next/image";
import galleryData from "@/data/gallery.json";
import { Sparkles, Maximize2, X, Play, Pause, Volume2, VolumeX, Eye } from "lucide-react";

interface GalleryProps {
  isHindi: boolean;
}

export default function Gallery({ isHindi }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<"all" | "food" | "events" | "setups">("all");
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryData)[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const filteredItems =
    activeTab === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#FBF3E0]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B3202A]/10 border border-[#B3202A]/20 text-[#B3202A] text-xs font-semibold uppercase tracking-widest mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Visual Splendor</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-bold text-[#B3202A] tracking-wide mb-3">
            {isHindi ? "शाही आयोजनों की भव्य गैलरी" : "Grand Banquet & Culinary Gallery"}
          </h2>

          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>

          <p className="font-body text-[#5C2B2F] text-base leading-relaxed">
            {isHindi
              ? "हमारे शेफ्स की कारीगरी, भव्य मंडप सज्जा और शाही बफ़े की चुनिंदा झलकियाँ।"
              : "A photographic journey through our live tandoor stations, majestic banquet halls, and traditional halwai presentations across India."}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: "all", label: "All Works", labelHindi: "सम्पूर्ण गैलरी" },
            { id: "food", label: "Culinary & Food", labelHindi: "शाही व्यंजन" },
            { id: "events", label: "Weddings & Galas", labelHindi: "विवाह व आयोजन" },
            { id: "setups", label: "Setup & Decor", labelHindi: "सज्जा व बुफे" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#B3202A] text-white shadow-md border border-[#B3202A]"
                    : "bg-[#FDFBF7] text-[#5C2B2F] border border-[#C9A24B]/30 hover:bg-[#F7EBD0]"
                }`}
              >
                {isHindi ? tab.labelHindi : tab.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#C9A24B]/30 cursor-pointer bg-[#F7EBD0] transform hover:-translate-y-1.5 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFE6A3] bg-[#B3202A] px-2 py-0.5 rounded inline-block mb-1">
                  {item.category.toUpperCase()}
                </span>
                <h4 className="font-royal text-xl font-bold leading-snug">{item.title}</h4>
                <p className="font-hindi text-xs text-[#FFE6A3]">{item.titleHindi}</p>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#FFE6A3]" />
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Video Showcase Feature */}
        <div className="card-dark-royal rounded-3xl p-6 sm:p-10 border-2 border-[#C9A24B]/50 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video Player Mockup / Stream */}
            <div className="lg:col-span-8 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#C9A24B]/40 shadow-2xl bg-black">
              <Image
                src="/assets/images/hero-buffet.jpg"
                alt="Cinematic Feast Video Preview"
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  isPlaying ? "opacity-90 scale-105" : "opacity-75"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B3202A] text-white flex items-center justify-center shadow-[0_0_35px_rgba(179,32,42,0.8)] border-2 border-[#FFE6A3] hover:scale-110 active:scale-95 transition-transform"
                  aria-label={isPlaying ? "Pause Video Reel" : "Play Video Reel"}
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
              </div>

              {/* Player Controls Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#FFE6A3]">
                    {isPlaying ? "Playing Reel" : "Cinematic Banquet Showcase"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 hover:text-[#FFE6A3] transition-colors"
                    aria-label="Toggle Audio"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] text-white/70">4K Heritage Reel</span>
                </div>
              </div>
            </div>

            {/* Video Showcase Narrative */}
            <div className="lg:col-span-4 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9A24B] bg-[#C9A24B]/10 px-3 py-1 rounded-full border border-[#C9A24B]/30 inline-block mb-3">
                Behind The Scenes
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                The Symphony of Royal Hospitality
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#FBF3E0]/80 leading-relaxed mb-6">
                Watch our master halwais prepare pure cow ghee sweets, witness live tandoors blazing at midnight, and experience the grand discipline that caters to thousands effortlessly.
              </p>

              <div className="space-y-3 border-t border-white/10 pt-4 text-xs text-[#FFE6A3]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A24B]" />
                  <span>Real Wedding Feasts at Dhampur & Beyond</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A24B]" />
                  <span>Available for Destination Weddings Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#C9A24B] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden border-2 border-[#C9A24B] shadow-2xl">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain bg-black"
              />
            </div>

            <div className="mt-4 text-center text-white">
              <h3 className="font-royal text-2xl font-bold">{lightboxImage.title}</h3>
              <p className="font-hindi text-sm text-[#FFE6A3]">{lightboxImage.titleHindi}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
