"use client";

import { useState, useTransition } from "react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    eventType: string;
    eventDate: string;
    venue: string;
    budget: string;
    message: string;
  }>({
    name: "",
    phone: "",
    eventType: siteConfig.eventTypes[0],
    eventDate: "",
    venue: "",
    budget: siteConfig.budgetOptions[1],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      // Build WhatsApp message
      const text = `🎉 *New Event Consultation Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate || "TBD"}
*Venue / Sector:* ${formData.venue || "Chandigarh / Tricity"}
*Budget:* ${formData.budget}
*Notes / Theme:* ${formData.message || "None specified"}

Sent via CelebrationDecor Website Booking Form.`;

      const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
      setSubmitted(true);

      // Open WhatsApp in new tab or redirect
      window.open(whatsappUrl, "_blank");
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[var(--color-surface)] to-white py-14 md:py-20 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[var(--color-rose)] font-semibold mb-3">
            Plan Your Next Celebration in Chandigarh
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] leading-tight">
            Book a Free <span className="text-[var(--color-primary)]">Styling Consultation</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
            Tell us about your upcoming celebration. We will formulate a tailored theme, color scheme, and transparent cost estimate in under 30 minutes.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Info & Map */}
      <section className="section-padding !pt-12">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
              <h2 className="font-serif text-2xl font-bold text-[var(--color-dark)] mb-2">
                Send Us Your Event Details
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mb-8">
                Fill out the quick form below. On submission, you&apos;ll be instantly connected with our lead decorator on WhatsApp.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl mb-3">
                    ✓
                  </div>
                  <h3 className="font-bold text-lg text-emerald-900">
                    Booking Request Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-2">
                    We opened WhatsApp to connect you directly with our stylist. If WhatsApp didn&apos;t open automatically,{" "}
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold"
                    >
                      click here to chat now
                    </a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-gray-500 underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Gurpreet Singh"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 00000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-white"
                      >
                        {siteConfig.eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                        Venue / Sector in Tricity
                      </label>
                      <input
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        placeholder="e.g. Sector 35 Chandigarh / Phase 7 Mohali"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-white"
                      >
                        {siteConfig.budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-dark)] mb-1.5">
                      Tell Us About Your Theme / Ideas
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We want an astronaut space galaxy arch with marquee 4 lights and navy chrome balloons..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all shadow-lg shadow-red-200 hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Connect with Stylist on WhatsApp</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Contact & Location Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[var(--color-surface)] p-8 rounded-3xl border border-gray-100">
                <h3 className="font-serif text-xl font-bold text-[var(--color-dark)] mb-6">
                  Direct Contact & Studio
                </h3>

                <ul className="space-y-6">
                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold tracking-wider text-[var(--color-muted)]">
                        Phone Call
                      </p>
                      <a
                        href={`tel:+${siteConfig.phoneRaw}`}
                        className="text-base font-bold text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">
                        Mon–Sun: 9:00 AM – 9:00 PM
                      </p>
                    </div>
                  </li>

                  {/* WhatsApp */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#25D366] shadow-sm flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold tracking-wider text-[var(--color-muted)]">
                        WhatsApp Fast Response
                      </p>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-emerald-700 hover:underline"
                      >
                        +{siteConfig.whatsapp}
                      </a>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">
                        Instant quote & color schemes
                      </p>
                    </div>
                  </li>

                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold tracking-wider text-[var(--color-muted)]">
                        Studio Location
                      </p>
                      <p className="text-sm font-semibold text-[var(--color-dark)] mt-0.5">
                        {siteConfig.address.full}
                      </p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">
                        Serving Chandigarh, Mohali, and Panchkula
                      </p>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold tracking-wider text-[var(--color-muted)]">
                        Email Us
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-semibold text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md h-72 w-full">
                <iframe
                  src={siteConfig.address.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CelebrationDecor Chandigarh Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
