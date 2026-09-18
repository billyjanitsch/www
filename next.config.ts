import type { NextConfig } from "next";

export default {
  cacheComponents: true,
  images: {
    qualities: [95],
  },
  partialPrefetching: true,
  typedRoutes: true,
} satisfies NextConfig;
