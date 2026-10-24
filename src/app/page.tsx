"use client";

import React, { useState } from "react";
import RoyalPreloader from "@/components/RoyalPreloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LegacyTimeline from "@/components/LegacyTimeline";
import Services from "@/components/Services";
import GrandEvents from "@/components/GrandEvents";
import MenuShowcase from "@/components/MenuShowcase";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import EventEnquiryForm from "@/components/EventEnquiryForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyActionBars from "@/components/StickyActionBars";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function Home() {
  const [isHindi, setIsHindi] = useState(false);

  return (
    <>
      {/* Search Engine Rich Snippet Schema */}
      <LocalBusinessSchema />

      {/* Royal Preloader with SVG Crest Stroke Drawing */}
      <RoyalPreloader />

      {/* Main Single Page Layout */}
      <div className="relative min-h-screen bg-[#FDFBF7] text-[#2D0B0E] flex flex-col selection:bg-[#B3202A] selection:text-white">
        {/* Sticky Royal Header */}
        <Navbar isHindi={isHindi} setIsHindi={setIsHindi} />

        <main className="flex-1">
          {/* 1. Hero Showcase */}
          <Hero isHindi={isHindi} />

          {/* 2. Legacy & Halwai Family Tradition */}
          <LegacyTimeline isHindi={isHindi} />

          {/* 3. Catering & Banquet Services */}
          <Services isHindi={isHindi} />

          {/* 4. Celebrity & Grand Events Showcase */}
          <GrandEvents isHindi={isHindi} />

          {/* 5. Royal Menu Showcase (Filterable) */}
          <MenuShowcase isHindi={isHindi} />

          {/* 6. Visual Gallery & Cinematic Video Player */}
          <Gallery isHindi={isHindi} />

          {/* 7. Why Choose Us (6 Pillars) */}
          <WhyChooseUs isHindi={isHindi} />

          {/* 8. Client Testimonials */}
          <Testimonials isHindi={isHindi} />

          {/* 9. Event Enquiry & WhatsApp Dispatch Form */}
          <EventEnquiryForm isHindi={isHindi} />

          {/* 10. Direct Contact & Dhampur Map */}
          <ContactSection isHindi={isHindi} />
        </main>

        {/* 11. Royal Footer */}
        <Footer isHindi={isHindi} />

        {/* 12. Floating & Mobile Action Bars */}
        <StickyActionBars />
      </div>
    </>
  );
}
