import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CelebrationDecor — Balloon Agency & Decorators in Chandigarh",
  description:
    "Get in touch with CelebrationDecor at 270/2 Small Maloya, Chandigarh. Call/WhatsApp +91 88723 63805 to book your birthday decoration, baby shower, or event setup in Chandigarh, Mohali, and Panchkula.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
