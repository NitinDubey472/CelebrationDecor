import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { HomeServicesPreview } from "@/components/HomeServicesPreview";
import { HomeGalleryPreview } from "@/components/HomeGalleryPreview";
import { HomeTestimonials } from "@/components/HomeTestimonials";
import { CTABanner } from "@/components/CTABanner";

/**
 * Home Page — CelebrationDecor
 * =============================
 * Hero → Stats → "Anatomy of Our Decor Craft" (services) →
 * Gallery Preview → Testimonials → CTA Banner
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HomeServicesPreview />
      <HomeGalleryPreview />
      <HomeTestimonials />
      <CTABanner />
    </>
  );
}
