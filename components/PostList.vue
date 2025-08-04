<script setup lang="ts">
import { cleanUpDate } from "~/lib/cleanUpDate";
export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  meta: {
    permalink: string;
    tags: string[];
  };
}
interface Props {
  posts: Post[];
  numberOfPosts: number;
}
const props = defineProps<Props>();

const filteredPosts = computed(() => {
  return props.posts.slice(0, props.numberOfPosts);
});
</script>

<template>
  <article class="pt-4" v-for="post in filteredPosts" :key="post.slug">
    <h2 class="text-xl mb-2">
      <nuxt-link :to="`${post.meta.permalink}`" class="hover:text-green-700">
        {{ post.title }}
      </nuxt-link>
    </h2>
    <h3 class="text-sm text-gray-600">
      {{ cleanUpDate(post.date) }}
    </h3>
    <span class="text">
      {{ post.description }}
    </span>
    <p class="text-sm text-gray-700 hover:text-green-700 mt-2">
      <nuxt-link :to="`${post.meta.permalink}`" title="Read more">
        Continuar a Ler >
      </nuxt-link>
    </p>
  </article>
</template>
