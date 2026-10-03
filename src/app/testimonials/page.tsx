import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/testimonials";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Client Reviews — Best Decoration Agency in Chandigarh | CelebrationDecor",
  description:
    "Read real testimonials and reviews from families and corporate clients across Chandigarh, Mohali, and Panchkula who trusted CelebrationDecor for their milestone events.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[var(--color-surface)] to-white py-14 md:py-20 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[var(--color-rose)] font-semibold mb-3">
            Real Stories From Real Hosts
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] leading-tight">
            Client Reviews & <span className="text-[var(--color-primary)]">Love Letters</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
            See how we brought smiles, wonder, and unforgettable beauty to birthdays, baby showers, and grand galas across Chandigarh and the Tricity.
          </p>

          {/* Social Proof Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-dark)] font-medium">
            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-4 py-2 rounded-full border border-amber-200">
              <span className="text-amber-500 font-bold">★ 4.9/5.0</span>
              <span>Average Google Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 px-4 py-2 rounded-full border border-emerald-200">
              <span className="text-emerald-600 font-bold">✓ 100%</span>
              <span>On-Time Track Record</span>
            </div>
            <div className="flex items-center gap-1.5 bg-rose-50 text-rose-900 px-4 py-2 rounded-full border border-rose-200">
              <span className="text-[var(--color-primary)] font-bold">500+</span>
              <span>Celebrations Styled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo if provided */}
                  {t.image && (
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-gray-100">
                      <Image
                        src={t.image}
                        alt={`${t.name}'s celebration setup`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[var(--color-star)] mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  {t.avatar ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-200 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center text-sm font-bold text-[var(--color-primary)] shrink-0">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-dark)]">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[var(--color-rose)] font-medium">
                      {t.event}
                    </p>
                    <p className="text-[11px] text-[var(--color-muted)]">
                      {t.location} • {t.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to leave a review */}
      <section className="bg-[var(--color-surface)] py-12 border-y border-gray-100 text-center">
        <div className="container-max px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[var(--color-dark)]">
            Hosted an Event With Us Recently?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
            We love hearing your stories and seeing your family photos. Share your review directly with our team on WhatsApp!
          </p>
          <div className="mt-5">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi CelebrationDecor! I'd like to leave a review and share photos from our event.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1FB855] rounded-full transition-all shadow-md"
            >
              Share Your Review on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
