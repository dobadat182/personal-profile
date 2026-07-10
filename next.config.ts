import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cho phép truy cập Next.js dev resources qua IP mạng LAN
  allowedDevOrigins: ["192.168.0.226"],
};

export default nextConfig;
