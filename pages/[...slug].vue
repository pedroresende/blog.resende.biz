<script lang="ts" setup>
import { onMounted } from "vue"
import { cleanUpDate } from "~/lib/cleanUpDate"
const route = useRoute()

const getTags = (tags: string[]) => tags?.map((tag) => `#${tag}`).join(" ")

interface Content {
  meta: {
    title: string
    tags: string[]
    author: {
      name: string
    }
    date: string
    coverImage?: string
    categories?: string[]
  }
}

const { data: doc } = await useAsyncData(route.path, () => {
  // @ts-expect-error
  return queryCollection<any>("content").path(route.path).first()
})

useHead({
  meta: [
    {
      hid: "description",
      name: "description",
      content: (doc as unknown as Content)?.meta?.title
    }
  ]
  // script: [
  //   {
  //     src: "https://blogresendebiz.disqus.com/embed.js",
  //     async: true,
  //     defer: true
  //   }
  // ]
})

// const resetDisqus = () => {
//   if (!window.DISQUS) return
//   DISQUS.reset({
//     reload: true,
//     config: function () {
//       this.page.identifier = `${route.params.slug}`
//       this.page.url = `https://blog.resende.biz/${route.params.slug}`
//     }
//   })
// }

onMounted(() => {
  const { $Prism } = useNuxtApp()
  $Prism.highlightAll()

  // resetDisqus()
})
</script>

<template>
  <div class="max-w-5xl min-h-screen flex justify-center mx-auto">
    <main class="w-full">
      <Header />
      <article
        class="px-6 lg:py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900"
        v-if="doc"
      >
        <div class="w-full mx-auto space-y-4 text-center">
          <p class="text-xs font-semibold tracking-wider uppercase">
            {{ getTags(doc.meta.tags) }}
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
              <span itemprop="name">{{ doc.meta.author.name }}</span>
            </a>
            em
            {{ cleanUpDate(doc.meta.date) }}
          </p>
        </div>

        <div v-if="doc.meta.coverImage">
          <img
            :src="doc.meta.coverImage"
            :alt="doc.meta.title"
            class="w-full h-96 object-cover"
          />
        </div>
        <ContentRenderer :value="doc" />
        <div id="disqus_thread"></div>
        <Author :author="doc?.meta.author" />
      </article>
      <article
        class="px-6 lg:py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900"
        v-else
      >
        <h1 class="text-4xl font-bold leading-tight md:text-5xl text-center">
          404 - Documento não encontrado
        </h1>
        <div id="disqus_thread"></div>
        <Author author="Pedro Resende" />
      </article>
    </main>
  </div>
</template>
