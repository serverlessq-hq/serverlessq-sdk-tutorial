const { withServerlessQ } = require("@serverlessq/nextjs");
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    title: "hello",
  },
};

module.exports = withServerlessQ(nextConfig);
