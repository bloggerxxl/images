// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
    images: {
      domains: ['github.com', 'raw.githubusercontent.com', "bloggerxxl.github.io"], // Add trusted domains here
    },
  };
  
  export default nextConfig;
  