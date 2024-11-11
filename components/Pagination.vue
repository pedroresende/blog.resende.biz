<script setup>
const emit = defineEmits(["loadMorePosts"])
</script>

<template>
  <div class="w-full text-center">
    <button
      @click="emit('loadMorePosts')"
      class="p-2 rounded-md hover:dark:text-green-700 hover:bg-inherit border mt-4 bg-green-700 text-white"
    >
      Carregar Mais Posts
    </button>
  </div>
</template>
