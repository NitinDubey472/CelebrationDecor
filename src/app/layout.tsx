import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

/* ── Google Fonts ── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: {
    default: "Best Balloon & Event Decoration Agency in Chandigarh | CelebrationDecor",
    template: `%s | CelebrationDecor Chandigarh`,
  },
  description:
    "CelebrationDecor is the best decoration agency in Chandigarh. Specializing in balloon decoration in Chandigarh, birthday decoration, baby shower decor, wedding decoration, and full event management across Chandigarh, Mohali & Panchkula.",
  keywords: [
    "best decoration agency in Chandigarh",
    "decoration agency in Chandigarh",
    "balloon decoration in Chandigarh",
    "balloon agency in Chandigarh",
    "birthday decoration in Chandigarh",
    "birthday party organiser Chandigarh",
    "baby shower decoration Chandigarh",
    "wedding decoration Chandigarh",
    "balloon decorators near me",
    "theme party decoration Chandigarh",
    "event management company Chandigarh",
    "balloon decoration Mohali",
    "balloon decoration Panchkula",
    "CelebrationDecor",
    "270/2 Small Maloya Chandigarh",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Best Balloon & Event Decoration Agency in Chandigarh | CelebrationDecor",
    description:
      "Premier balloon decoration & event management agency in Chandigarh. Top-rated birthday decoration, baby shower setups, theme parties, and wedding decor in Chandigarh, Mohali & Panchkula.",
    images: [
      {
        url: `${siteConfig.url}/images/all/img_64.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Balloon & Event Decoration Agency in Chandigarh - CelebrationDecor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Balloon & Event Decoration Agency in Chandigarh | CelebrationDecor",
    description:
      "Premier balloon decoration & event management company in Chandigarh. Birthday party organiser, baby shower decor, and wedding decoration Chandigarh.",
    images: [`${siteConfig.url}/images/all/img_64.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7188",
    longitude: "76.7262",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Chandigarh",
    },
    {
      "@type": "City",
      name: "Mohali",
    },
    {
      "@type": "City",
      name: "Panchkula",
    },
  ],
  keywords:
    "best decoration agency in Chandigarh, decoration agency in Chandigarh, balloon decoration in Chandigarh, balloon agency in Chandigarh, birthday decoration in Chandigarh, birthday party organiser Chandigarh, baby shower decoration Chandigarh, wedding decoration Chandigarh, balloon decorators near me, theme party decoration Chandigarh, event management company Chandigarh",
  image: `${siteConfig.url}/images/all/img_64.jpg`,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.whatsappLink,
  ],
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
