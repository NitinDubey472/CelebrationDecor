"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  priceRange: string;
  href: string;
  index: number;
}

/**
 * ServiceCard — Rounded card with image, title, description, and enquire button.
 * Used on both the Home page (preview) and Services page (full listing).
 */
export function ServiceCard({
  title,
  description,
  image,
  priceRange,
  href,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${title} — Professional Balloon Decoration in Chandigarh`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {/* Price badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-[var(--color-dark)]">
          {priceRange}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[var(--color-dark)] leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
        >
          Enquire Now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
