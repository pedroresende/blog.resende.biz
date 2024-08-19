// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  image: {
    domains: ["blog.resende.biz"],
  },
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxt/image", "nuxt-disqus"],
  disqus: {
    shortname: "blogresendebiz",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      ignore: ["/api"],
    },
  },
  content: {
    navigation: {
      fields: ["title", "publishedAt"],
    },
    experimental: {
      search: true,
    },
  },
});
