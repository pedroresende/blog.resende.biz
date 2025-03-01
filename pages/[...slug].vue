<script lang="ts" setup>
import { onMounted } from "vue"
import { cleanUpDate } from "~/lib/cleanUpDate"
const route = useRoute()

const getTags = (tags: string[]) => tags?.map((tag) => `#${tag}`).join(" ")

useHead({
  meta: [
    {
      hid: "description",
      name: "description",
      content: route.params.slug
    }
  ],
  script: [
    {
      src: "https://blogresendebiz.disqus.com/embed.js",
      async: true,
      defer: true
    }
  ]
})

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
                {{ cleanUpDate(doc.date) }}
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
              <p class="overflow-x-auto *:whitespace-pre *:text-wrap">
                <ContentRenderer :value="doc" />
              </p>
            </div>
            <div id="disqus_thread"></div>
            <Author :author="doc?.author" />
          </article>
        </template>
        <template #not-found>
          <article
            class="px-6 lg:py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900"
          >
            <h1
              class="text-4xl font-bold leading-tight md:text-5xl text-center"
            >
              404 - Document not found
            </h1>
            <div id="disqus_thread"></div>
            <Author author="Pedro Resende" />
          </article>
        </template>
      </ContentDoc>
    </main>
  </div>
</template>
