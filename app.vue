<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: '%s | Blog.resende.biz',
  meta: [
    {
      name: 'description',
      content: 'Blog Resende',
    },
  ]
})
</script>

<template>
  <div>
    <NuxtPage />
    <NuxtRouteAnnouncer />
  </div>
</template>

<style>
.page-enter-active,
.page-enter-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
