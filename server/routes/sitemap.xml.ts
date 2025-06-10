import { SitemapStream, streamToPromise } from "sitemap"

export default defineEventHandler(async (event) => {
  const docs = await queryCollection(event, "content")
    .order("meta", "DESC")
    .all()

  const sitemap = new SitemapStream({
    hostname: "https://blog.resende.biz"
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc.meta.permalink,
      changefreq: "monthly"
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
