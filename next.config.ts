import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'divine-dev-snap-cast.b-cdn.net', protocol: 'https', port: '', pathname: '' }
    ]
  }
};

export default nextConfig;
