/**
 * testimonials.ts — Testimonial data
 * ====================================
 * Real client reviews and experiences from celebrations across Chandigarh & Tricity.
 */

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  location: string;
  date: string;
  rating: number; // 1-5
  quote: string;
  avatar?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Ananya Sharma",
    event: "Aadya's 2nd Birthday",
    location: "Sector 35, Chandigarh",
    date: "August 2026",
    rating: 5,
    quote:
      "CelebrationDecor exceeded all our expectations for Aadya's 2nd birthday! The pastel circular arch with the golden crown and LED neon sign was stunning. Every single guest complimented the setup.",
    avatar: "/images/testimonials/client-1.jpg",
    image: "/images/testimonials/client-1.jpg",
  },
  {
    id: "t2",
    name: "Pooja & Rohan Malhotra",
    event: "Pastel Cloud Baby Shower",
    location: "Phase 7, Mohali",
    date: "July 2026",
    rating: 5,
    quote:
      "The gender reveal and baby shower balloon installation was pure magic. The team arrived right on schedule, finished the setup without any stress, and the illuminated BABY boxes were the highlight of our photos!",
    avatar: "/images/testimonials/client-2.jpg",
    image: "/images/testimonials/client-2.jpg",
  },
  {
    id: "t3",
    name: "Vikram & Simranjit Singh",
    event: "Aahan's 4th Astronaut Birthday",
    location: "Sector 8, Panchkula",
    date: "September 2026",
    rating: 5,
    quote:
      "Our son wanted a space galaxy astronaut theme and CelebrationDecor brought it to life down to the smallest detail. The marquee lights, metallic chrome balloons, and astronaut cutout were sensational.",
    avatar: "/images/testimonials/client-3.jpg",
    image: "/images/testimonials/client-3.jpg",
  },
  {
    id: "t4",
    name: "Harpreet Gill",
    event: "Grand 39th Milestone Gala",
    location: "Sector 10, Chandigarh",
    date: "September 2026",
    rating: 5,
    quote:
      "Sophisticated, punctual, and extremely creative. The navy blue and chrome silver balloon crescent arch with giant 39 marquee lights set the perfect mood for our evening celebration.",
    avatar: "/images/testimonials/client-4.jpg",
    image: "/images/testimonials/client-4.jpg",
  },
  {
    id: "t5",
    name: "Mehak & Arjun Verma",
    event: "Wild One Jungle Safari 1st Birthday",
    location: "Sector 20, Panchkula",
    date: "June 2026",
    rating: 5,
    quote:
      "From the lush greenery wall to the cute safari animal cutouts and organic olive-gold balloons, everything was picture-perfect. Best event decor team in Chandigarh Tricity without a doubt!",
    avatar: "/images/services/birthday.jpg",
    image: "/images/services/birthday.jpg",
  },
  {
    id: "t6",
    name: "Kavita Sethi",
    event: "Enchanted Butterfly Birthday",
    location: "Sector 9, Chandigarh",
    date: "May 2026",
    rating: 5,
    quote:
      "The 3D butterfly backdrop with rose gold and pink balloons made my daughter feel like a princess. Very professional team, polite crew, and transparent pricing with zero surprises.",
    avatar: "/images/services/room.jpg",
    image: "/images/services/room.jpg",
  },
];
