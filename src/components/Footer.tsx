"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import RoyalCrest from "./RoyalCrest";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle, MapPin, ArrowUp, Heart } from "lucide-react";

interface FooterProps {
  isHindi: boolean;
}

export default function Footer({ isHindi }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#150204] text-white pt-16 pb-28 sm:pb-16 border-t-2 border-[#C9A24B]/30 overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none transform translate-x-20 -translate-y-20">
        <Image src="/assets/logo/crest.svg" alt="Watermark" fill />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <RoyalCrest size={64} />
              <div>
                <h3 className="font-royal text-2xl sm:text-3xl font-bold tracking-wider text-white">
                  {siteConfig.brandName}
                </h3>
                <p className="font-cinzel text-xs tracking-[0.25em] text-[#C9A24B] uppercase">
                  {siteConfig.location} &bull; Uttar Pradesh
                </p>
              </div>
            </div>

            <p className="font-script text-2xl text-[#FFE6A3] italic">
              &ldquo;{isHindi ? siteConfig.taglineHindi : siteConfig.tagline}&rdquo;
            </p>

            <p className="font-body text-xs sm:text-sm text-[#FBF3E0]/70 max-w-sm leading-relaxed">
              Carrying forward the glorious lineage of Gudduramji Halwai with five-star royal wedding catering, authentic pure desi ghee preparations, and impeccable hospitality across India.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#C9A24B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF3E0]/80">
              <li>
                <Link href="#hero" className="hover:text-[#FFE6A3] transition-colors">
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#FFE6A3] transition-colors">
                  Our Halwai Heritage & Legacy
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFE6A3] transition-colors">
                  Wedding & Banquet Services
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-[#FFE6A3] transition-colors">
                  Celebrity & Grand Events
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#FFE6A3] transition-colors">
                  Royal Menu Showcase
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#FFE6A3] transition-colors">
                  Banquet & Culinary Gallery
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-[#FFE6A3] transition-colors">
                  Why Choose G.D. Caterers
                </Link>
              </li>
              <li>
                <Link href="#enquiry" className="hover:text-[#FFE6A3] transition-colors">
                  Book Your Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#C9A24B]">
              Direct Contact Details
            </h4>
            <div className="space-y-2.5 text-xs text-[#FBF3E0]/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <a href={siteConfig.phones[0].link} className="hover:text-white transition-colors">
                  {siteConfig.phones[0].display}
                </a>
                <span>/</span>
                <a href={siteConfig.phones[1].link} className="hover:text-white transition-colors">
                  {siteConfig.phones[1].display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 90128 41000
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#B3202A] text-xs font-semibold tracking-wider text-white border border-[#C9A24B]/30 transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FBF3E0]/50 gap-4">
          <p>
            &copy; 2026 {siteConfig.brandName}, Dhampur. All rights reserved. &bull; A proud unit of Gudduramji Halwai.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with royal devotion & culinary mastery</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
