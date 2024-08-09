import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API: process.env.NEXT_API,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/media/images/**",
      },
      { protocol: "http", hostname: "*" },
    ],
  },
};

export default withNextIntl(nextConfig);
