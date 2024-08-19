<script setup lang="ts">
const posts = await queryContent().sort({ date: -1 }).find()

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Blog Resende",
    },
  ],
})

</script>

<template>
  <div
    class="max-w-5xl min-h-screen flex justify-center mx-auto mb-12"
  >
    <main class="w-full">
      <Header />
      <section class="space-y-4 divide-y bg-gray-100 px-6 ">
        <article v-for="post of posts" :key="post.slug" class="pt-4 mx-4 lg:mx-0">
          <h2 class="text-xl mb-2 text-gray-500 hover:text-blue-800">
            <nuxt-link :to="`${post.permalink}`" class="hover:text-green-700">
              {{ post.title }}
            </nuxt-link>
          </h2>
          <h3 class="text-sm text-gray-300 dark:text-gray-400">
            {{ post.date.split('T')[0].replaceAll('-', '/') }}
          </h3>
          <span class="text">
            {{ post.description }}
          </span>
        </article>
      </section>
    </main>
  </div>
</template>
