"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import RoyalCrest from "./RoyalCrest";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle, Menu, X, Calendar, Globe } from "lucide-react";

interface NavbarProps {
  isHindi: boolean;
  setIsHindi: (val: boolean) => void;
}

export default function Navbar({ isHindi, setIsHindi }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: isHindi ? "होम" : "Home", href: "#hero" },
    { name: isHindi ? "विरासत" : "Legacy", href: "#about" },
    { name: isHindi ? "सेवाएं" : "Services", href: "#services" },
    { name: isHindi ? "शाही आयोजन" : "Grand Events", href: "#events" },
    { name: isHindi ? "मेन्यू" : "Menu", href: "#menu" },
    { name: isHindi ? "गैलरी" : "Gallery", href: "#gallery" },
    { name: isHindi ? "विशेषताएं" : "Why Us", href: "#why-us" },
    { name: isHindi ? "प्रशंसा" : "Reviews", href: "#testimonials" },
    { name: isHindi ? "संपर्क" : "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(110,11,19,0.12)] border-b border-[#C9A24B]/30 py-2 sm:py-3"
            : "bg-gradient-to-b from-[#1E0407]/80 via-[#1E0407]/40 to-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Emblem */}
            <Link
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C9A24B] rounded-lg p-1"
            >
              <RoyalCrest size={isScrolled ? 50 : 58} />
              <div className="flex flex-col">
                <span
                  className={`font-royal font-bold tracking-wider text-xl sm:text-2xl transition-colors duration-300 ${
                    isScrolled ? "text-[#B3202A]" : "text-white drop-shadow-md"
                  }`}
                >
                  {isHindi ? siteConfig.brandNameHindi : siteConfig.brandName}
                </span>
                <span
                  className={`font-cinzel text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300 ${
                    isScrolled ? "text-[#C9A24B]" : "text-[#FFE6A3] drop-shadow"
                  }`}
                >
                  {siteConfig.location} &bull; Est. Halwai Lineage
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                    isScrolled
                      ? "text-[#2D0B0E] hover:text-[#B3202A]"
                      : "text-white/90 hover:text-[#FFE6A3] drop-shadow"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Action Buttons: Language Toggle, Quick Call & Book Now */}
            <div className="hidden sm:flex items-center gap-3">
              {/* English / Hindi Toggle */}
              <button
                onClick={() => setIsHindi(!isHindi)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  isScrolled
                    ? "border-[#C9A24B]/40 text-[#8A151D] hover:bg-[#F7EBD0]"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
                title="Toggle Language / भाषा बदलें"
                aria-label="Toggle English or Hindi"
              >
                <Globe className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{isHindi ? "English" : "हिंदी"}</span>
              </button>

              {/* Direct Call Button */}
              <a
                href={siteConfig.phones[0].link}
                className={`p-2 rounded-full border transition-transform hover:scale-105 active:scale-95 ${
                  isScrolled
                    ? "border-[#C9A24B]/40 text-[#B3202A] hover:bg-[#B3202A] hover:text-white"
                    : "border-white/30 text-white hover:bg-white/20"
                }`}
                title={`Call ${siteConfig.phones[0].display}`}
                aria-label="Call Phone Number"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Gold "Book Now" CTA */}
              <Link
                href="#enquiry"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2D0B0E] bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C9A24B] shadow-[0_4px_15px_rgba(201,162,75,0.35)] hover:shadow-[0_6px_20px_rgba(201,162,75,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isHindi ? "बुक करें" : "Book Event"}</span>
              </Link>
            </div>

            {/* Mobile Menu Hamburger Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsHindi(!isHindi)}
                className={`p-1.5 rounded-md text-xs font-bold ${
                  isScrolled ? "text-[#B3202A] bg-[#F7EBD0]" : "text-[#FFE6A3] bg-black/40"
                }`}
                aria-label="Switch Language"
              >
                {isHindi ? "EN" : "हिं"}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? "text-[#B3202A]" : "text-white"
                }`}
                aria-label="Toggle Mobile Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#FDFBF7] p-6 animate-in fade-in duration-300 overflow-y-auto">
          {/* Top Bar with Crest and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-[#C9A24B]/30">
            <div className="flex items-center gap-3">
              <RoyalCrest size={48} />
              <div>
                <h3 className="font-royal font-bold text-xl text-[#B3202A]">G.D. Caterers</h3>
                <p className="font-cinzel text-[10px] tracking-wider text-[#C9A24B] uppercase">Dhampur</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-[#F7EBD0] text-[#B3202A] hover:bg-[#B3202A] hover:text-white transition-colors"
              aria-label="Close Mobile Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 py-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-royal text-2xl text-[#2D0B0E] hover:text-[#B3202A] transition-colors py-1 border-b border-[#C9A24B]/10"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="flex flex-col gap-3 pt-6 border-t border-[#C9A24B]/30">
            <Link
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl text-center font-bold uppercase tracking-wider text-[#2D0B0E] bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C9A24B] shadow-lg"
            >
              {isHindi ? "भव्य आयोजन बुक करें" : "Book Your Royal Feast"}
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.phones[0].link}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#B3202A] text-[#B3202A] font-semibold text-sm hover:bg-[#B3202A] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
