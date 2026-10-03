"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/config/site";

/**
 * HomeServicesPreview — "The Anatomy of Our Decor Craft" section
 * Shows first 4 services with a "View All" link.
 */
export function HomeServicesPreview() {
  const previewServices = siteConfig.services.slice(0, 4);

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        {/* Section header */}
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-[var(--color-rose)] font-medium tracking-wider uppercase mb-3">
            What We Bring to Your Celebration
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-dark)] leading-tight">
            Curating high-craft environments for the milestones that matter most.
          </h2>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            We master the art of deep, craft-driven balloon artistry. Our studio
            command expert-level balloon installations, delicate floral accents,
            custom props, and precision engineering for every celebration.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              image={service.image}
              priceRange={service.priceRange}
              href={`/contact?service=${service.id}`}
              index={index}
            />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            Explore All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
