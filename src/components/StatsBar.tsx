"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/**
 * StatsBar — Animated counters matching the design screenshot.
 * Uses placeholder values from siteConfig — replace with your real numbers.
 */
export function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] font-serif">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
