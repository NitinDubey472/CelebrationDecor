"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";

/**
 * HomeGalleryPreview — Shows a 2x3 grid of featured gallery images
 * with a link to the full gallery page.
 */
export function HomeGalleryPreview() {
  const featured = galleryItems.slice(0, 6);

  return (
    <section className="bg-[var(--color-surface)] section-padding">
      <div className="container-max">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-[var(--color-rose)] font-medium tracking-wider uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-dark)] leading-tight">
            How Your Dream Decor Comes Alive
          </h2>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            No subcontractors, no compromises. Our verified 3-step design workflow delivers
            precise, customized setups and unforgettable results every time.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {featured.map((item) => (
            <motion.div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={`${item.title} — Balloon Decoration in Chandigarh`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View gallery link */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white rounded-full transition-all"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
