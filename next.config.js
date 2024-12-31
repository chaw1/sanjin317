// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  */
// await import("./src/env.js");
// import WithPWA from "next-pwa";
//
// const withPWA = WithPWA({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   scope: "/",
//   sw: "service-worker.js",
// });
//
// /**
//  * @type {import('next').NextConfig}
//  */
// const config = withPWA({
//   reactStrictMode: true,
//
//   /**
//    * If you are using `appDir` then you must comment the below `i18n` config out.
//    *
//    * @see https://github.com/vercel/next.js/issues/41980
//    */
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// });
//
// export default config;

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import createNextPWA from "next-pwa";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  // 添加这些可能缺失的属性
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV !== 'production'
    }
  },
  cacheHandler: process.env.NODE_ENV === 'production' ? undefined : undefined,
  cacheMaxMemorySize: 0,
};

const withPWA = createNextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

export default withPWA(nextConfig);