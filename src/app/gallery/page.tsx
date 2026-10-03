"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { siteConfig, type GalleryCategory } from "@/config/site";
import { CTABanner } from "@/components/CTABanner";

const categoryDescriptions: Record<string, string> = {
  All: "Browse all 69 handcrafted setups by CelebrationDecor — the best decoration agency in Chandigarh, Mohali & Panchkula.",
  "Birthday Decor": "Custom birthday decoration in Chandigarh featuring superhero, jungle safari, Cocomelon, and milestone marquee light setups.",
  "Butterfly & Floral": "Whimsical butterfly & fresh floral balloon arches in Chandigarh for enchanted birthdays, cradle ceremonies, and garden parties.",
  "Pastel & Elegant Arches": "Sophisticated pastel and chrome balloon decoration in Chandigarh for milestone 18th, 21st, 40th, and 50th golden jubilees.",
  "Baby Shower": "Dreamy baby shower decoration Chandigarh with pastel clouds, hot air balloons, teddy bears, and gender reveal backdrops.",
  "Wedding & Ring Ceremony": "Royal wedding decoration Chandigarh, engagement stages, sangeet photo booths, and intimate romantic cabana setups.",
  "Shop Opening / Corporate": "Professional store launch and corporate balloon agency in Chandigarh for ribbon-cutting ceremonies and branded backdrops.",
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[var(--color-surface)] to-white py-14 md:py-20 border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[var(--color-rose)] font-semibold mb-3">
            Real Work in Chandigarh, Mohali & Panchkula
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] leading-tight">
            Balloon Decoration <span className="text-[var(--color-primary)]">Gallery in Chandigarh</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
            Every photo shown here is an authentic installation designed, styled, and completed by our in-house team. As the premier decoration agency in Chandigarh, explore all 69 genuine setups across birthday decoration, baby showers, weddings, and corporate events.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="section-padding !pt-8">
        <div className="container-max">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {siteConfig.galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[var(--color-primary)] text-white shadow-md shadow-red-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "All" ? "All Categories" : `${category} in Chandigarh`}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-[var(--color-muted)] italic bg-rose-50/50 py-2.5 px-4 rounded-xl border border-rose-100/60 inline-block">
              ✨ {categoryDescriptions[selectedCategory] || categoryDescriptions["All"]}
            </p>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} — ${item.category} Balloon Decoration in Chandigarh`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-sm text-[var(--color-dark)] text-xs font-semibold px-4 py-2 rounded-full shadow">
                        🔍 Click to Enlarge
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[var(--color-dark)]">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-dark)] leading-snug">
                        {item.title}
                      </h3>
                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-md border border-gray-100"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Book this setup */}
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi! I loved this setup from your gallery: "${item.title}". Can you give me price and availability details?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#25D366] hover:underline flex items-center gap-1"
                      >
                        Ask on WhatsApp
                      </a>
                      <Link
                        href={`/contact?theme=${encodeURIComponent(item.title)}`}
                        className="text-xs font-semibold text-[var(--color-primary)] hover:underline"
                      >
                        Book Style →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase font-semibold tracking-wider text-[var(--color-rose)]">
                  {activeModalItem.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[var(--color-dark)] mt-1">
                  {activeModalItem.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {activeModalItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi! I'd love to recreate this exact setup for my upcoming event: "${activeModalItem.title}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-6 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1FB855] rounded-full transition-colors"
                  >
                    WhatsApp Inquire About This Setup
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="py-3 px-6 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </div>
  );
}
