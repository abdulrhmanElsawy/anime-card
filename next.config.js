const isProd = process.env.NODE_ENV === 'production';


/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/abdelrhman-elsawy' : '',
    assetPrefix: isProd ? '/abdelrhman-elsawy' : '',
    
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

