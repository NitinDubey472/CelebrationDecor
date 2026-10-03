import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { StatsBar } from "@/components/StatsBar";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About CelebrationDecor — Event Management Company in Chandigarh",
  description:
    "Meet Chandigarh's premier balloon agency and top event management company in Chandigarh. Specializing in bespoke balloon decoration in Chandigarh, Mohali, and Panchkula for birthdays, baby showers, and weddings.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--color-surface)] to-white py-16 md:py-24 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-[var(--color-rose)] font-semibold mb-3">
                The CelebrationDecor Story
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] leading-tight">
                Pioneering High-End <span className="text-[var(--color-primary)]">Balloon Artistry</span> in Chandigarh
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
                Founded with a mission to elevate celebratory occasions from standard party setups into immersive, visual spectacles, CelebrationDecor is Chandigarh&apos;s leading boutique decoration studio.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                We believe that every milestone — a child&apos;s first giggle in a jungle safari, an intimate wedding proposal with rose petals, or a glamorous 50th golden jubilee — deserves a bespoke canvas crafted with passion, precision, and architectural balance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-full transition-all shadow-md shadow-red-200"
                >
                  Book a Consultation
                </Link>
                <a
                  href={`tel:+${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[var(--color-dark)] bg-white border border-gray-300 hover:border-gray-400 rounded-full transition-all"
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/about/about-hero.jpg"
                  alt="CelebrationDecor luxury balloon arch installation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* The 4 Pillars */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-[var(--color-rose)] font-semibold mb-2">
              Our Principles
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-dark)]">
              The Four Pillars of Our Craft
            </h2>
            <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
              Why families and event planners across Chandigarh, Mohali, and Panchkula trust CelebrationDecor for their grandest occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-gray-100 hover:border-red-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-100/60 text-[var(--color-primary)] flex items-center justify-center font-bold text-xl mb-4">
                🎨
              </div>
              <h3 className="font-semibold text-lg text-[var(--color-dark)]">Custom Color Palettes</h3>
              <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                We use custom layering and double-stuffing methods to produce nuanced hues — dusty rose, matte sage, champagne chrome, and velvety lavender that match your outfits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-gray-100 hover:border-red-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100/60 text-amber-600 flex items-center justify-center font-bold text-xl mb-4">
                🏗️
              </div>
              <h3 className="font-semibold text-lg text-[var(--color-dark)]">Rigid Staging & Safety</h3>
              <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                No flimsy frames. We engineer our circular arches and marquee walls with heavy-duty metal structures and weighted stabilizers safe around playful children.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-gray-100 hover:border-red-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/60 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4">
                🌿
              </div>
              <h3 className="font-semibold text-lg text-[var(--color-dark)]">Eco-Conscious Latex</h3>
              <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                We prioritize 100% natural, biodegradable latex balloons sourced from responsible manufacturers, ensuring minimal ecological footprint.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-gray-100 hover:border-red-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">
                ⚡
              </div>
              <h3 className="font-semibold text-lg text-[var(--color-dark)]">Promptness & Cleanliness</h3>
              <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                We always complete setup well before your function begins and ensure prompt, courteous post-event clean-up if requested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craft in Action Showcase */}
      <section className="bg-[var(--color-surface)] py-16 border-t border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-[var(--color-rose)] font-semibold">
                Serving the Entire Tricity Region
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-dark)]">
                Local Presence, Unmatched Expertise
              </h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Operating right from Chandigarh, we have decorated across top venues including JW Marriott, Hyatt Regency, Taj Chandigarh, clubhouses, resort banquets, and intimate terrace homes in Sectors 8, 9, 10, 11, 33, 35, Phase 3B2, Phase 7 Mohali, MDC Sector 4 Panchkula, and Zirakpur.
              </p>
              <ul className="space-y-2 pt-2">
                {["Chandigarh (All Sectors 1 through 70)", "Mohali (Phase 1–11, Aerocity, Homeland)", "Panchkula (Sectors 1–28, Mansa Devi Complex)", "Zirakpur, Kharar & New Chandigarh"].map((loc) => (
                  <li key={loc} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--color-text)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/about/craft-1.jpg"
                  alt="Jungle safari theme setup in Chandigarh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md mt-6">
                <Image
                  src="/images/about/craft-2.jpg"
                  alt="Butterfly floral balloon arch in Chandigarh"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
