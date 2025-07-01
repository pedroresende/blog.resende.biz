<script lang="ts" setup>
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
  return queryCollection<any>("content").path(route.path).first()
})

useHead({
  title: doc?.value?.title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: doc?.value?.title
    }
  ]
})

onMounted(() => {
  const { $Prism } = useNuxtApp()
  $Prism.highlightAll()
})
</script>

<template>
  <div class="max-w-5xl min-h-screen flex justify-center mx-auto">
    <main class="w-full min-h-full dark:bg-gray-100">
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
        <DisqusComments identifier="{{route.params.slug}}" />
        <Author :author="doc?.meta.author" />
      </article>
      <article class="px-6 lg:py-24 mx-auto dark:text-gray-900" v-else>
        <h1
          class="text-4xl font-bold leading-tight md:text-5xl text-center py-30"
        >
          404 - Documento não encontrado
        </h1>
        <DisqusComments identifier="{{route.params.slug}}" />
        <Author author="Pedro Resende" />
      </article>
    </main>
  </div>
</template>
