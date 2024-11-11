<script setup lang="ts">
export interface Post {
  slug: string
  title: string
  description: string
  date: string
  permalink: string
}
interface Props {
  posts: Post[]
  numberOfPosts: number
}
const props = defineProps<Props>()

const filteredPosts = computed(() => {
  return props.posts.slice(0, props.numberOfPosts)
})
</script>

<template>
  <article class="pt-4" v-for="(post, index) in filteredPosts" :key="post.slug">
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
</template>
