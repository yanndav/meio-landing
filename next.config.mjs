/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kzlreivheudzkctawbgm.supabase.co",
      },
    ],
  },
};

export default nextConfig;
