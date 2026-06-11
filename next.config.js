/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: false }, // Enforces Next.js Image optimization for Core Web Vitals
}
module.exports = nextConfig

// Performance budget enforced:
// LCP < 2.5s | INP < 100ms | CLS < 0.1
// Monitor: npx lighthouse http://localhost:3000 --only-categories=performance