<script setup lang="ts">
import { ref } from "vue"
const numberOfPosts = ref(10)
const posts = await queryContent().sort({ date: -1 }).find()

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
        <article
          v-for="(post, index) in posts"
          :key="post.slug"
          v-show="index <= numberOfPosts"
          class="pt-4 mx-4 lg:mx-0"
        >
          <h2 class="text-xl mb-2">
            <nuxt-link :to="`${post.permalink}`" class="hover:text-green-700">
              {{ post.title }}
            </nuxt-link>
          </h2>
          <h3 class="text-sm text-gray-600">
            {{ post.date.split("T")[0].replaceAll("-", "/") }}
          </h3>
          <span class="text">
            {{ post.description }}
          </span>
          <p class="text-sm text-gray-700 hover:text-green-700 mt-2">
            <nuxt-link :to="`${post.permalink}`" title="Read more">
              Continuar a Ler >
            </nuxt-link>
          </p>
        </article>
        <div class="w-full text-center">
          <button
            @click="loadMorePosts"
            class="p-2 rounded-md hover:dark:text-green-700 hover:bg-inherit border mt-4 bg-green-700 text-white"
          >
            Carregar Mais Posts
          </button>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>
