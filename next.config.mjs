/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.allsafeeg.com",
      },
    ],
  },
};

export default nextConfig;
