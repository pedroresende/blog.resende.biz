import { defineContentConfig, defineCollection, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "data",
      source: "content/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        author: z.object({
          name: z.string()
        }),
        guid: z.string(),
        permalink: z.string(),
        categories: z.string()
      })
    })
  }
})
