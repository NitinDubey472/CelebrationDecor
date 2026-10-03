export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  priceRange: string;
  image: string;
  features: string[];
  popularFor: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "birthday",
    title: "Birthday Parties & Milestones",
    category: "Birthday Decor",
    shortDescription:
      "Themed balloon arches, backdrops, and table setups for kids and adults. From first birthdays to milestone celebrations.",
    fullDescription:
      "Celebrate birthdays with show-stopping setups! Whether it's a first birthday with custom marquee numbers, a magical fairy tale arch, or a sleek chrome-and-navy milestone installation, we tailor every color, balloon size, and backdrop detail to your theme.",
    priceRange: "₹2,499 – ₹25,000+",
    image: "/images/all/img_64.jpg",
    features: [
      "Custom balloon garland & arch (organic or classic)",
      "Backdrop options (circular, arched, shimmer, or mesh)",
      "LED neon signs ('Happy Birthday', custom name)",
      "Marquee LED number & letter lights",
      "Character cutouts & themed balloon foil figures",
      "Cake pedestal table setup & matching floor balloons",
    ],
    popularFor: ["1st Birthdays", "18th & 21st Milestones", "50th Golden Jubilee", "Kids Cartoon Themes"],
  },
  {
    id: "baby-shower",
    title: "Baby Shower & Welcome Baby",
    category: "Baby Shower",
    shortDescription:
      "Dreamy pastel setups with clouds, hot air balloons, teddy bears, and elegant dessert table backdrops.",
    fullDescription:
      "Welcome your little blessing into the world with soft pastel aesthetics, fluffy cloud arrangements, teddy bear props, and gender reveal backdrops crafted with gentle attention to detail.",
    priceRange: "₹3,499 – ₹20,000+",
    image: "/images/all/img_35.jpg",
    features: [
      "Pastel pink, baby blue, or gender-neutral sage & gold palettes",
      "Transparent 'BABY' light-up box towers",
      "Giant plush teddy bear & hot air balloon accents",
      "'Oh Baby' or 'Baby Shower' warm LED neon signage",
      "Balloon clouds, crescent moon & star installations",
      "Photo booth framing with dedicated mother's throne seating decor",
    ],
    popularFor: ["Gender Reveal Parties", "Maternity Photo Shoots", "Welcome Baby Home Decor", "Baby Showers"],
  },
  {
    id: "wedding",
    title: "Wedding & Ring Ceremony Stage",
    category: "Wedding & Ring Ceremony",
    shortDescription:
      "Grand floral and balloon arches for mandaps, stages, and photo corners. Traditional meets modern elegance.",
    fullDescription:
      "Elevate your special wedding celebrations with breathtaking luxury stages. We blend metallic chromes, champagne hues, and fresh or faux floral cascades for mandaps, sangeet backdrops, and ring ceremony photo zones.",
    priceRange: "₹7,999 – ₹50,000+",
    image: "/images/all/img_38.jpg",
    features: [
      "Luxe metallic gold, champagne & white organic arches",
      "Integrated floral cascades with roses, orchids & greenery",
      "Warm ambient uplighting and backdrop fairy light curtains",
      "Grand entrance archways & pathway decor",
      "Stage backdrop drapery & romantic neon signage",
      "Custom bride & groom name monogram setups",
    ],
    popularFor: ["Ring Ceremonies & Engagements", "Roka Ceremonies", "Sangeet & Cocktail Nights", "Reception Photo Booths"],
  },
  {
    id: "naming-ceremony",
    title: "Naming Ceremony (Naamkaran)",
    category: "Traditions & Welcomes",
    shortDescription:
      "Soft, welcoming decor for cradle ceremonies and naming celebrations with custom name displays.",
    fullDescription:
      "Honor age-old cultural traditions with a contemporary artistic touch. Our Naamkaran decoration features elegant floral cradle decor, golden name cutouts, and soft balloon arches that keep the celebration reverent yet joyful.",
    priceRange: "₹2,999 – ₹18,000+",
    image: "/images/all/img_01.jpg",
    features: [
      "Cradle / Palna floral and balloon garland draping",
      "Custom acrylic or foil baby name displays",
      "Traditional marigold or pastel floral touchpoints",
      "Floor balloon scatter and entrance welcome board",
      "Compact indoor home setups or spacious banquet styling",
    ],
    popularFor: ["Cradle Ceremonies", "Naamkaran Puja", "Baby Milestone Blessings"],
  },
  {
    id: "shop-opening",
    title: "Store Launch & Corporate Events",
    category: "Corporate",
    shortDescription:
      "Professional inauguration setups, ribbon-cutting arches, and branded balloon installations.",
    fullDescription:
      "Make a powerful brand statement on your launch day. We design branded corporate balloon installations, red carpet ribbon-cutting arches, column pillars, and sleek photo zones that attract footfall and social media buzz.",
    priceRange: "₹4,999 – ₹35,000+",
    image: "/images/all/img_48.jpg",
    features: [
      "Corporate brand color-matched balloon arches",
      "Store entrance organic arches & pillar columns",
      "Ribbon-cutting ceremonial scissor & ribbon tray setup",
      "Logo backdrop photo wall for press & influencers",
      "Long-lasting high-grade balloons suitable for outdoors & indoors",
    ],
    popularFor: ["Retail Store Openings", "Showroom Inaugurations", "Annual Corporate Galas", "Product Launches"],
  },
  {
    id: "room-decoration",
    title: "Room Surprises & Anniversaries",
    category: "Private Celebrations",
    shortDescription:
      "Romantic room setups for anniversaries, proposals, and surprise birthday celebrations.",
    fullDescription:
      "Surprise your partner with an unforgettable transformation of your bedroom, hotel suite, or private lounge. Featuring helium ceiling balloons with ribbon tails, heart arches, romantic fairy lights, and rose petal floor trails.",
    priceRange: "₹1,999 – ₹12,000+",
    image: "/images/all/img_41.jpg",
    features: [
      "Ceiling balloons with hanging curling ribbons & polaroid photos",
      "Heart-shaped balloon arch & LED candle path",
      "Fresh rose petal bed decoration & floral bouquets",
      "'Happy Anniversary' or 'Will You Marry Me' light-up letters",
      "Discreet, rapid 60-90 minute on-site room setup",
    ],
    popularFor: ["Wedding Anniversaries", "Marriage Proposals", "Midnight Birthday Surprises", "Valentine's Day"],
  },
  {
    id: "theme-decoration",
    title: "Theme Decoration & Characters",
    category: "Theme Decor",
    shortDescription:
      "Custom themed setups — jungle safari, superhero, astronaut galaxy, and more. We bring your vision to life.",
    fullDescription:
      "No idea is too wild! From an epic interstellar galaxy with LED astronauts to a wild jungle safari with lifesize animal cutouts or an action-packed superhero universe, we create immersive thematic worlds for kids and dreamers.",
    priceRange: "₹3,999 – ₹30,000+",
    image: "/images/all/img_61.jpg",
    features: [
      "Full theme concept development & color palette curation",
      "Lifesize character cutouts & themed prop stands",
      "3D organic balloon sculptures & themed foil accents",
      "Custom themed graphic backdrops & floor mats",
      "Sound-activated or ambient LED lighting effects",
    ],
    popularFor: ["Astronaut / Space Theme", "Jungle Safari", "Superhero Universe", "Princess & Unicorn World"],
  },
  {
    id: "event-management",
    title: "Full Event Management",
    category: "End-to-End Events",
    shortDescription:
      "End-to-end event planning including catering coordination, entertainment, photography, and complete decoration.",
    fullDescription:
      "Relax and enjoy your event while our experienced team orchestrates every single detail. We oversee venue decoration, stage lighting, sound systems, anchors, photographers, magicians, and cake coordination across Chandigarh, Mohali, and Panchkula.",
    priceRange: "Custom Quote",
    image: "/images/all/img_56.jpg",
    features: [
      "Dedicated on-site event coordinator and stylist",
      "Vendor management (DJ, MC, photographers, caterers)",
      "Timeline planning and stage management",
      "Customized welcome entries and special effect pyro/cold sparks",
      "Complete setup and post-event teardown",
    ],
    popularFor: ["Grand Birthday Galas", "Banquet Hall Weddings", "Corporate Conferences", "Society Festive Nights"],
  },
];
