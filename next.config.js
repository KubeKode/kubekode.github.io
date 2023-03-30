/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const repo = "kubekode.github.io";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
