const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/anime-card' : '',
  assetPrefix: isProd ? '/anime-card' : '',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: 'file-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
