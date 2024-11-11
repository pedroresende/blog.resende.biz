// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://blogresendebiz.disqus.com/embed.js",
          async: true,
          defer: true
        }
      ]
    },
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
  modules: ["@nuxt/content", "@nuxt/image", "nuxt-delay-hydration"],
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
    },
    preset: "service-worker"
  },
  content: {
    navigation: {
      fields: ["title", "publishedAt"]
    }
  }
})
