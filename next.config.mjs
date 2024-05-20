/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
      images: {
        domains: ['lh3.googleusercontent.com'],
      },
};

export default nextConfig;
