/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_GOOGLE_TAG_KEY: process.env.NEXT_PUBLIC_GOOGLE_TAG_KEY,
  },
    output: {
        // Specify the output file tracing root to fix the multiple lockfiles warning
        fileTracingRoot: process.cwd(),
  },
};

export default nextConfig;
