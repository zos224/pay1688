/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  styledComponents: true,
  copyChart: {
    src: ["{{ROOT}}/node_modules/chart.js/dist/chart.cjs"],
    dest: "{{BUILD}}",
  },
  headers: [
    {
      key: "Cross-Origin-Embedder-Policy",
      value: "unsafe-none",
    },
  ],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true
  },
  transpilePackages: ["antd", "@ant-design", "@babel"],
};

module.exports = nextConfig;
