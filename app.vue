<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en"
  },
  titleTemplate: "%s | Blog.resende.biz",
  meta: [
    {
      name: "description",
      content: "Blog Resende"
    }
  ]
})
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
  >
    <NuxtPage />
    <NuxtRouteAnnouncer />
  </div>
</template>

<style>
.page-enter-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
