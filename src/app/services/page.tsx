import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Balloon Decoration in Chandigarh & Event Services | CelebrationDecor",
  description:
    "CelebrationDecor is the premier balloon agency and decoration agency in Chandigarh. Expert birthday party organiser Chandigarh, baby shower decoration Chandigarh, wedding decoration, and theme party setups.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[var(--color-surface)] to-white py-16 md:py-20 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[var(--color-rose)] font-semibold mb-3">
            Best Decoration Agency in Chandigarh, Mohali & Panchkula
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] leading-tight">
            Balloon Decoration & <span className="text-[var(--color-primary)]">Event Services in Chandigarh</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
            As your trusted birthday party organiser in Chandigarh and leading event management company in Chandigarh, we craft jaw-dropping balloon decoration in Chandigarh for baby showers, ring ceremonies, corporate openings, and private celebrations across Tricity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi CelebrationDecor! I'd like a custom package quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1FB855] rounded-full transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat for Instant Quote
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-[var(--color-dark)] bg-white border border-gray-300 hover:border-gray-400 rounded-full transition-all shadow-sm"
            >
              Book Consultation Form
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-16 lg:space-y-24">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-dark)] shadow">
                        {service.priceRange}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-rose)] mb-2">
                      {service.category}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-dark)] leading-snug">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features List */}
                    <div className="mt-5 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-dark)]">
                        What&apos;s Included:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-text)]">
                            <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular For */}
                    <div className="mt-5 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-[var(--color-muted)] font-medium">Ideal For:</span>
                      {service.popularFor.map((tag) => (
                        <span key={tag} className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-full transition-all shadow-md shadow-red-100"
                      >
                        Enquire for This Setup
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi CelebrationDecor, I'm interested in the "${service.title}" package. Could you share more details?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#25D366] bg-emerald-50 hover:bg-emerald-100 rounded-full transition-all"
                      >
                        WhatsApp Stylist
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="bg-[var(--color-surface)] py-16 border-t border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-dark)]">
              The CelebrationDecor Quality Promise
            </h2>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              We take celebration decor seriously so you can enjoy your special day completely worry-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-xl mb-4">
                ⏱
              </div>
              <h3 className="font-semibold text-base text-[var(--color-dark)]">100% On-Time Setup Guarantee</h3>
              <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                Our crew arrives at least 2 hours before your guests to ensure every balloon and light is perfectly in place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4">
                🌿
              </div>
              <h3 className="font-semibold text-base text-[var(--color-dark)]">Premium Biodegradable Latex</h3>
              <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                We use high-grade European and American latex balloons with double-stuffing technique for true, rich designer hues that stay full for 24+ hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl mb-4">
                ✨
              </div>
              <h3 className="font-semibold text-base text-[var(--color-dark)]">Tailored Color Palette Mockups</h3>
              <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                Share your dress, cake, or venue photo and our styling lead will generate an exact color palette matching your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
