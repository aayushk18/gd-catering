"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageCircle, MapPin, Clock, Mail, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  isHindi: boolean;
}

export default function ContactSection({ isHindi }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#1F0407] text-white overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,75,0.12)_0%,_rgba(31,4,7,0.95)_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#C9A24B] block mb-2">
            Direct Reach & Consultation
          </span>
          <h2 className="font-royal text-3xl sm:text-5xl font-bold tracking-wide mb-3">
            {isHindi ? "सीधा संपर्क व कार्यालय" : "Connect with G.D. Caterers"}
          </h2>
          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>
          <p className="font-body text-[#FBF3E0]/80 text-sm sm:text-base leading-relaxed">
            {isHindi
              ? "धामपुर स्थित हमारे मुख्य कार्यालय में पधारें अथवा कॉल व व्हाट्सएप द्वारा सीधे बातचीत करें।"
              : "Visit our heritage head office in Dhampur or speak directly with our catering founders for custom menu tastings and dates."}
          </p>
        </div>

        {/* Contact Grid: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Cards & Numbers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Numbers Card */}
            <div className="card-dark-royal rounded-3xl p-6 sm:p-8 border border-[#C9A24B]/40 shadow-xl">
              <h3 className="font-royal text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C9A24B]" />
                <span>Direct Hotline & Bookings</span>
              </h3>
              <p className="text-xs text-[#FBF3E0]/70 mb-6">
                Tap below to speak immediately with our booking desk:
              </p>

              <div className="space-y-3">
                {siteConfig.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={phone.link}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-[#B3202A] border border-[#C9A24B]/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A24B]/20 text-[#FFE6A3] flex items-center justify-center group-hover:bg-white group-hover:text-[#B3202A] transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#C9A24B] block">
                          Primary Booking Line {idx + 1}
                        </span>
                        <span className="font-royal text-xl sm:text-2xl font-bold text-white">
                          {phone.display}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#FFE6A3] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}

                {/* WhatsApp Quick Link */}
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366] border border-[#25D366]/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#25D366] transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#4ADE80] block">
                        Official WhatsApp
                      </span>
                      <span className="font-royal text-xl sm:text-2xl font-bold text-white">
                        +91 90128 41000
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Address & Working Hours */}
            <div className="card-dark-royal rounded-3xl p-6 sm:p-8 border border-[#C9A24B]/40 shadow-xl space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A24B] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm text-white">Office & Kitchen Location</h4>
                  <p className="text-xs text-[#FFE6A3] font-mono mt-1">
                    {siteConfig.address.full}
                  </p>
                  <p className="text-[11px] text-[#FBF3E0]/60 mt-0.5">
                    District Bijnor, Uttar Pradesh - 246761
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                <Clock className="w-5 h-5 text-[#C9A24B] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm text-white">Consultation Hours</h4>
                  <p className="text-xs text-[#FBF3E0]/80 mt-0.5">
                    Monday &ndash; Sunday: 8:00 AM &ndash; 10:00 PM (IST)
                  </p>
                  <p className="text-[11px] text-[#4ADE80] mt-0.5 font-medium">
                    24/7 Support Available for Ongoing Event Operations
                  </p>
                </div>
              </div>

              {/* Social Channels with placeholders */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A24B] block mb-3">
                  Follow Our Culinary Journey
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-[#B3202A] text-white border border-white/10 transition-colors"
                    aria-label="Instagram Profile Placeholder"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-[#B3202A] text-white border border-white/10 transition-colors"
                    aria-label="Facebook Profile Placeholder"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                    </svg>
                  </a>
                  <a
                    href={siteConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-[#B3202A] text-white border border-white/10 transition-colors"
                    aria-label="YouTube Channel Placeholder"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed for Dhampur */}
          <div className="lg:col-span-7 h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-[#C9A24B]/50 shadow-2xl relative">
            <iframe
              src={siteConfig.address.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="G.D. Caterers Location in Dhampur, Uttar Pradesh"
              className="grayscale-[30%] contrast-[110%] w-full h-full"
            />
            {/* Overlay Map Badge */}
            <div className="absolute top-4 left-4 bg-[#1E0407]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C9A24B]/40 text-white shadow-lg">
              <span className="text-[10px] font-bold text-[#C9A24B] uppercase tracking-wider block">
                Serving Area
              </span>
              <p className="font-royal text-base font-bold">
                Dhampur, Bijnor, Haridwar, Meerut, Delhi NCR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
