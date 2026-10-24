"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { siteConfig } from "@/data/siteConfig";
import { Send, CheckCircle2, MessageCircle, Mail, Phone, Calendar, Users, MapPin, Sparkles } from "lucide-react";

interface EventEnquiryFormProps {
  isHindi: boolean;
}

export default function EventEnquiryForm({ isHindi }: EventEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding Banquet",
    eventDate: "",
    guestCount: "",
    cityVenue: "Dhampur",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim() || formData.phone.length < 10)
      newErrors.phone = "Valid 10-digit mobile number required";
    if (!formData.eventDate) newErrors.eventDate = "Please choose your event date";
    if (!formData.guestCount || Number(formData.guestCount) < 50)
      newErrors.guestCount = "Please enter estimated guest count (min 50)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger Royal Confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#B3202A", "#F5D061", "#FAF5E8"],
      });
    } catch {
      // ignore
    }

    // Prepare WhatsApp Message
    const text = `*New Royal Catering Enquiry - G.D. Caterers, Dhampur*
---------------------------------------
👑 *Host Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || "Not provided"}
🎉 *Event Type:* ${formData.eventType}
📅 *Event Date:* ${formData.eventDate}
👥 *Estimated Guests:* ${formData.guestCount}
📍 *City & Venue:* ${formData.cityVenue}
💬 *Special Requests / Menu Notes:* ${formData.message || "None"}
---------------------------------------
_Sent via G.D. Caterers Official Website Portal_`;

    const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  return (
    <section id="enquiry" className="relative py-20 sm:py-28 royal-parchment-bg overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B3202A]/10 border border-[#B3202A]/20 text-[#B3202A] text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservations & Menu Consultations</span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl font-bold text-[#B3202A] tracking-wide mb-3">
            {isHindi ? "शाही आयोजन हेतु संपर्क करें" : "Book Your Royal Feast"}
          </h2>

          <div className="w-64 h-8 mx-auto my-2 relative">
            <Image src="/assets/decor/filigree-divider.svg" alt="Divider" fill className="object-contain" />
          </div>

          <p className="font-body text-[#5C2B2F] text-sm sm:text-base leading-relaxed">
            {isHindi
              ? "नीचे विवरण भरें। फॉर्म सबमिट करते ही आपकी पूछताछ सीधे हमारे मुख्य बुकिंग नंबर (+91 9012841000) पर व्हाट्सएप के माध्यम से प्रेषित कर दी जाएगी।"
              : "Share your date and estimated guests. Upon submission, your customized requirement will be sent directly to our master booking manager via WhatsApp."}
          </p>
        </div>

        {/* Form Container */}
        <div className="card-royal-glass rounded-3xl p-8 sm:p-12 border-2 border-[#C9A24B]/40 shadow-2xl relative overflow-hidden">
          {/* Corner Flourish */}
          <div className="absolute top-2 left-2 w-14 h-14 pointer-events-none opacity-30">
            <Image src="/assets/decor/corner-ornament.svg" alt="Flourish" fill />
          </div>
          <div className="absolute top-2 right-2 w-14 h-14 pointer-events-none opacity-30 transform rotate-90">
            <Image src="/assets/decor/corner-ornament.svg" alt="Flourish" fill />
          </div>

          {submitted ? (
            <div className="text-center py-12 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full bg-[#16A34A]/10 text-[#16A34A] mx-auto flex items-center justify-center mb-6 border-2 border-[#16A34A]/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-royal text-3xl font-bold text-[#2D0B0E] mb-3">
                {isHindi ? "आपकी पूछताछ सफलतापूर्वक प्राप्त हुई!" : "Royal Enquiry Dispatched Successfully!"}
              </h3>

              <p className="font-body text-[#5C2B2F] text-sm max-w-md mx-auto mb-6 leading-relaxed">
                {isHindi
                  ? "व्हाट्सएप चैट स्वतः खुल रही है। यदि न खुले, तो कृपया नीचे दिए बटन पर क्लिक करें।"
                  : "We have transferred your event details to WhatsApp. Our catering director will contact you promptly to finalize per-plate packages and complimentary tasting."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#8A151D] underline font-semibold hover:text-[#B3202A]"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Shri Rajesh Agarwal"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A] placeholder:text-[#8A151D]/40"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>}
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9012841000"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A] placeholder:text-[#8A151D]/40"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A] placeholder:text-[#8A151D]/40"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                    Type of Celebration *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A]"
                  >
                    <option value="Wedding Banquet">Grand Wedding Banquet</option>
                    <option value="Pre-Wedding / Sangeet / Mehendi">Pre-Wedding / Sangeet / Mehendi</option>
                    <option value="Engagement & Roka Ceremony">Engagement & Roka Ceremony</option>
                    <option value="Religious Function & Bhandara">Religious Mahabhandara / Puja</option>
                    <option value="Corporate Gala / Conference">Corporate Gala / Conference</option>
                    <option value="Anniversary & Birthday Celebration">Anniversary & Birthday Party</option>
                    <option value="Other Custom Gathering">Other Custom Feast</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Event Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A]"
                  />
                  {errors.eventDate && <p className="text-xs text-red-600 mt-1 font-medium">{errors.eventDate}</p>}
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                    Estimated Guests *
                  </label>
                  <input
                    type="number"
                    min="50"
                    step="50"
                    required
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    placeholder="e.g. 500"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A] placeholder:text-[#8A151D]/40"
                  />
                  {errors.guestCount && <p className="text-xs text-red-600 mt-1 font-medium">{errors.guestCount}</p>}
                </div>

                {/* City & Venue */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                    City & Venue Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cityVenue}
                    onChange={(e) => setFormData({ ...formData, cityVenue: e.target.value })}
                    placeholder="e.g. Dhampur / Bijnor"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A] placeholder:text-[#8A151D]/40"
                  />
                </div>
              </div>

              {/* Custom Message / Specific Counters */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D0B0E] mb-2">
                  Special Requirements & Food Preferences
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify live counter preferences (e.g., Live Chaat, Desi Ghee Jalebi, Satvik food, specific cuisines)..."
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#C9A24B]/40 text-[#2D0B0E] text-sm focus:outline-none focus:ring-2 focus:ring-[#B3202A] placeholder:text-[#8A151D]/40"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-[#2D0B0E] bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C9A24B] shadow-[0_6px_25px_rgba(201,162,75,0.4)] hover:shadow-[0_8px_35px_rgba(201,162,75,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm sm:text-base flex items-center justify-center gap-3 cursor-pointer border border-[#FFE6A3]"
              >
                <Send className="w-5 h-5 text-[#2D0B0E]" />
                <span>{isHindi ? "व्हाट्सएप पर शाही बुकिंग प्रेषित करें" : "Dispatch Enquiry to WhatsApp (+91 9012841000)"}</span>
              </button>

              <p className="text-center text-[11px] text-[#6E3B3F]">
                🔒 Your privacy is sacred. We never share contacts. Direct consultation with our family directors.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
