/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_GOOGLE_TAG_KEY: process.env.NEXT_PUBLIC_GOOGLE_TAG_KEY,
  },
    // Fix the multiple lockfiles warning
    outputFileTracingRoot: process.cwd(),
    // Add Turbopack configuration
    turbopack: {
        root: process.cwd()
  },
};

export default nextConfig;
