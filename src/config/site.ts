/**
 * site.ts — Central configuration for CelebrationDecor
 * =====================================================
 * Edit this ONE file to update all contact details, social links,
 * service offerings, and business information across the entire site.
 */

export const siteConfig = {
  /* ── Business Identity ─────────────────────────────── */
  name: "CelebrationDecor",
  tagline: "We create, you celebrate.",
  description:
    "Premium balloon decoration & event management in Chandigarh. Birthday parties, baby showers, weddings, ring ceremonies, naming ceremonies, and corporate events across Chandigarh, Mohali & Panchkula.",
  url: "https://celebrationdecor.in", // Update with your live domain

  /* ── Contact Details ───────────────────────────────── */
  phone: "+91 88723 63805", // Display format
  phoneRaw: "918872363805", // For WhatsApp link (no spaces, no +)
  whatsapp: "918872363805", // WhatsApp number
  email: "hello@celebrationdecor.in",

  /* ── Address ───────────────────────────────────────── */
  address: {
    street: "270/2 Small Maloya",
    city: "Chandigarh",
    state: "Chandigarh",
    zip: "160025",
    country: "India",
    full: "270/2 Small Maloya, Chandigarh, 160025, India",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=270/2%20Small%20Maloya%2C%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  /* ── Social Links ──────────────────────────────────── */
  social: {
    instagram: "https://instagram.com/celebrationdecor",
    facebook: "https://facebook.com/celebrationdecor",
    whatsappLink: "https://wa.me/918872363805",
  },

  /* ── Gallery Categories ────────────────────────────── */
  galleryCategories: [
    "All",
    "Birthday Decor",
    "Butterfly & Floral",
    "Pastel & Elegant Arches",
    "Baby Shower",
    "Wedding & Ring Ceremony",
    "Shop Opening / Corporate",
  ] as const,

  /* ── Services ──────────────────────────────────────── */
  services: [
    {
      id: "birthday",
      title: "Birthday Parties & Milestones",
      shortDescription:
        "Themed balloon arches, backdrops, and table setups for kids and adults. From first birthdays to milestone celebrations.",
      priceRange: "₹2,499 – ₹25,000+",
      image: "/images/all/img_64.jpg",
    },
    {
      id: "baby-shower",
      title: "Baby Shower & Welcome Baby",
      shortDescription:
        "Dreamy pastel setups with clouds, hot air balloons, teddy bears, and elegant dessert table backdrops.",
      priceRange: "₹3,499 – ₹20,000+",
      image: "/images/all/img_35.jpg",
    },
    {
      id: "wedding",
      title: "Wedding & Ring Ceremony Stage",
      shortDescription:
        "Grand floral and balloon arches for mandaps, stages, and photo corners. Traditional meets modern elegance.",
      priceRange: "₹7,999 – ₹50,000+",
      image: "/images/all/img_38.jpg",
    },
    {
      id: "naming-ceremony",
      title: "Naming Ceremony",
      shortDescription:
        "Soft, welcoming decor for cradle ceremonies and naming celebrations with custom name displays.",
      priceRange: "₹2,999 – ₹18,000+",
      image: "/images/all/img_01.jpg",
    },
    {
      id: "shop-opening",
      title: "Store Launch & Corporate Events",
      shortDescription:
        "Professional inauguration setups, ribbon-cutting arches, and branded balloon installations.",
      priceRange: "₹4,999 – ₹35,000+",
      image: "/images/all/img_48.jpg",
    },
    {
      id: "room-decoration",
      title: "Room Surprises & Anniversaries",
      shortDescription:
        "Romantic room setups for anniversaries, proposals, and surprise birthday celebrations.",
      priceRange: "₹1,999 – ₹12,000+",
      image: "/images/all/img_41.jpg",
    },
    {
      id: "theme-decoration",
      title: "Theme Decoration",
      shortDescription:
        "Custom themed setups — jungle safari, superhero, astronaut galaxy, and more. We bring your vision to life.",
      priceRange: "₹3,999 – ₹30,000+",
      image: "/images/all/img_61.jpg",
    },
    {
      id: "event-management",
      title: "Full Event Management",
      shortDescription:
        "End-to-end event planning including catering coordination, entertainment, photography, and complete decoration.",
      priceRange: "Custom Quote",
      image: "/images/all/img_56.jpg",
    },
  ],

  /* ── Stats ────────────────────────────────────────── */
  stats: [
    { value: "500+", label: "Celebrations Completed" },
    { value: "99%", label: "Positive Reviews Rate" },
    { value: "50+", label: "Signature Design Schemes" },
    { value: "4.9★", label: "Average Google Rating" },
  ],

  /* ── Event Types for Contact Form ──────────────────── */
  eventTypes: [
    "Birthday Party",
    "Baby Shower",
    "Wedding Decoration",
    "Ring Ceremony",
    "Naming Ceremony",
    "Room Decoration",
    "Shop Opening",
    "Corporate Event",
    "Theme Party",
    "Other",
  ],

  /* ── Budget Options ────────────────────────────────── */
  budgetOptions: [
    "Under ₹5,000",
    "₹5,000 – ₹10,000",
    "₹10,000 – ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000+",
  ],
} as const;

export type GalleryCategory = (typeof siteConfig.galleryCategories)[number];
