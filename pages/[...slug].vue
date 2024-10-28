<script lang="ts" setup>
import { onMounted } from "vue"
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const getTags = (tags: string[]) => tags?.map((tag) => `#${tag}`).join(" ")

const resetDisqus = () => {
  if (!window.DISQUS) return
  DISQUS.reset({
    reload: true,
    config: function () {
      this.page.identifier = `${route.params.slug}`
      this.page.url = `https://blog.resende.biz/${route.params.slug}`
    }
  })
}

onMounted(() => {
  const { $Prism } = useNuxtApp()
  $Prism.highlightAll()
  ;(function () {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script")
    s.src = `https://${runtimeConfig.public.disqus.shortname}.disqus.com/embed.js`
    s.setAttribute("identifier", route.params.slug)
    s.setAttribute("url", `https://blog.resende.biz/${route.params.slug}`)
    ;(d.head || d.body).appendChild(s)
  })()
  resetDisqus()
})
</script>

<template>
  <div class="max-w-5xl min-h-screen flex justify-center mx-auto">
    <main class="w-full">
      <Header />
      <ContentDoc>
        <template v-slot="{ doc }">
          <article
            class="px-6 lg:py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900"
          >
            <div class="w-full mx-auto space-y-4 text-center">
              <p class="text-xs font-semibold tracking-wider uppercase">
                {{ getTags(doc.tags) }}
              </p>
              <h1 class="text-4xl font-bold leading-tight md:text-5xl">
                {{ doc.title }}
              </h1>
              <p class="text-sm">
                por
                <a
                  rel="noopener noreferrer"
                  href="https://www.pedro.resende.biz"
                  target="_blank"
                  class="underline text-green-700"
                >
                  <span itemprop="name">{{ doc.author.name }}</span>
                </a>
                em
                <time datetime="2021-02-12 15:34:18-0200">{{
                  doc.date.split("T")[0].replaceAll("-", "/")
                }}</time>
              </p>
            </div>
            <div v-if="doc.coverImage">
              <img
                :src="doc.coverImage"
                :alt="doc.title"
                class="w-full h-96 object-cover"
              />
            </div>
            <div class="dark:text-gray-800">
              <p class="overflow-x-auto [&>*]:whitespace-pre [&>*]:text-wrap">
                <ContentRenderer :value="doc" />
              </p>
            </div>
            <div id="disqus_thread"></div>
            <Author :author="doc?.author" />
          </article>
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </main>
  </div>
</template>
