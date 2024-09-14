// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      disqus: {
        shortname: "blogresendebiz"
      }
    }
  },
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
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-delay-hydration"
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
    },
    preset: "vercel-edge",
  },
  content: {
    navigation: {
      fields: ["title", "publishedAt"]
    },
  }
})
