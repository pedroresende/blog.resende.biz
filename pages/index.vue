<script setup lang="ts">
import { ref } from "vue"
import type { Post } from "~/components/PostList.vue"
const numberOfPosts = ref(10)
const posts = (await queryContent()
  .sort({ date: -1 })
  .find()) as unknown as Post[]

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Blog Resende"
    }
  ]
})

const loadMorePosts = () => {
  numberOfPosts.value += 10
}
</script>

<template>
  <div class="max-w-5xl min-h-screen flex justify-center mx-auto">
    <main class="w-full">
      <Header />
      <section class="space-y-4 divide-y bg-gray-100 px-6">
        <PostList :posts="posts" :numberOfPosts="numberOfPosts" />
        <Pagination @loadMorePosts="loadMorePosts" />
      </section>
      <Footer />
    </main>
  </div>
</template>
