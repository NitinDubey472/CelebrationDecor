import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow any image — needed for placeholder SVGs saved as .jpg */
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
