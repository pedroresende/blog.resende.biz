<script lang="ts" setup>
const getTags = (tags: string[]) => {
  return tags.map(tag => `#${tag}`).join(' ')
}

const getIdentifier = (doc: any) => {
  return doc.id + doc.title
}

onMounted(() => {
  const { $Prism } = useNuxtApp()
  $Prism.highlightAll()
})
</script>

<template>
  <div class="max-w-5xl min-h-screen flex justify-center mx-auto mb-12">
    <main class="w-full">
      <Header />
      <ContentDoc>
        <template v-slot="{ doc }">
          <article class="px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
            <div class="w-full mx-auto space-y-4 text-center">
              <!-- <p class="text-xs font-semibold tracking-wider uppercase">{{ getTags(doc.tags) }}</p> -->
              <h1 class="text-4xl font-bold leading-tight md:text-5xl">{{ doc.title }}</h1>
              <p class="text-sm">por
                <a rel="noopener noreferrer" href="https://www.pedro.resende.biz" target="_blank"
                  class="underline text-green-700">
                  <span itemprop="name">{{ doc.author.name }}</span>
                </a> em
                <time datetime="2021-02-12 15:34:18-0200">{{ doc.date.split('T')[0].replaceAll('-', '/') }}</time>
              </p>
            </div>
            <div v-if="doc.coverImage">
              <img :src="doc.coverImage" :alt="doc.title" class="w-full h-96 object-cover" />
            </div>
            <div class="dark:text-gray-800">
              <p class="overflow-x-auto [&>*]:whitespace-pre">
                <ContentRenderer :value="doc" />
              </p>
            </div>
            <DisqusComments :identifier="getIdentifier(doc)" />
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
