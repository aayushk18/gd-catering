"use client";

import React, { useState, useEffect } from "react";
import RoyalCrest from "./RoyalCrest";

export default function RoyalPreloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const seen = sessionStorage.getItem("gd_preloader_seen");
    if (seen) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      const closeTimer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("gd_preloader_seen", "true");
      }, 350);
      return () => clearTimeout(closeTimer);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF7] transition-all duration-700 ease-in-out ${
        fading ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Royal Experience"
    >
      {/* Subtle royal background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,75,0.18)_0%,_rgba(179,32,42,0.06)_50%,_transparent_75%)] pointer-events-none" />

      {/* Center Crest Stage */}
      <div className="relative flex flex-col items-center justify-center p-6 text-center max-w-sm">
        {/* Animated Royal Crest */}
        <div className="relative mb-6 transform transition-transform duration-1000 scale-110 sm:scale-125">
          <RoyalCrest size={180} animated={true} />
        </div>

        {/* Brand Title with gold and crimson typography */}
        <h2 className="font-royal text-3xl sm:text-4xl font-bold tracking-wider text-[#B3202A] mb-1">
          G.D. CATERERS
        </h2>
        <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#C9A24B] font-semibold mb-2">
          Dhampur
        </p>

        {/* Tagline */}
        <p className="font-script text-xl sm:text-2xl text-[#8A151D] italic mb-6">
          &ldquo;A proud unit of Gudduramji Halwai&rdquo;
        </p>

        {/* Animated Golden Progress Bar */}
        <div className="w-48 h-1 bg-[#F7EBD0] rounded-full overflow-hidden border border-[#C9A24B]/30 relative">
          <div className="h-full bg-gradient-to-r from-[#B3202A] via-[#C9A24B] to-[#F5D061] rounded-full animate-[shimmerWave_2s_infinite]" />
        </div>

        {/* Skip Button for impatient users or screen readers */}
        <button
          onClick={() => {
            setFading(true);
            setTimeout(() => setLoading(false), 300);
          }}
          className="mt-6 text-xs text-[#8A151D]/60 hover:text-[#B3202A] underline font-body tracking-wider transition-colors"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
}
