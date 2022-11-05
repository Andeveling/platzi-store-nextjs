/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* Environment variable's production */
  /* Next.js comes with built-in support for environment variables */
  env: {
    key: "llave valor",
  },
  /* Deploy a Next.js application under a sub-path of a domain*/
  basePath: "./dist",
  /* Gzip for compress project */
  compress: true,
  /* Redirects */
  redirects: async () => [
    {
      source: "/si-llegan-aca-mandalos-al-destino",
      destination: "/eldestino",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
