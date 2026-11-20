import type { NextConfig } from "next";

export default {
  cacheComponents: true,
  images: {
    qualities: [95],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
      },
    },
  },
  typedRoutes: true,
} satisfies NextConfig;
