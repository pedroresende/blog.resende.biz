// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },
  routeRules: {
    "**": {
      headers: {
        "frame-ancestors": "https://help.disqus.com/"
      }
    }
  },
  image: {
    domains: ["blog.resende.biz"]
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-delay-hydration",
    "@nuxthq/studio"
  ],
  delayHydration: {
    debug: process.env.node === "development"
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      routes: ["/sitemap.xml"]
    }
  },
  content: {
    navigation: {
      fields: ["title", "publishedAt"]
    }
  }
})