import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchOn: {
          interaction: true
        }
      }
    }
  },
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "z-WmJHNUAoibdq5ifYvXqoUtMySomvIOL05IEFn6pv0"
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
  vite: {
    plugins: [tailwindcss()]
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxt/image", "nuxt-delay-hydration"],
  delayHydration: {
    debug: process.env.node === "development"
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      routes: ["/sitemap.xml"]
    }
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio"
    }
  }
})
