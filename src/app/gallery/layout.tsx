import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balloon Decoration Portfolio — 69+ Real Projects in Chandigarh",
  description:
    "Explore 69+ authentic balloon decoration setups in Chandigarh by CelebrationDecor. From superhero & jungle birthdays to dreamy baby showers, pastel arches, and wedding stages across Chandigarh, Mohali & Panchkula.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
