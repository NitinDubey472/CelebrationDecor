"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

/**
 * HomeTestimonials — "Client Reviews & Love Letters" section
 */
export function HomeTestimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-[var(--color-rose)] font-medium tracking-wider uppercase mb-3">
              Loved in Chandigarh & Tricity
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-dark)] leading-tight">
              Client Reviews & Love Letters
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
            >
              View All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
