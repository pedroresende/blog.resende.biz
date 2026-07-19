<script setup>
const emit = defineEmits(["loadMorePosts"]);
</script>

<template>
  <div class="w-full text-center">
    <button
      @click="emit('loadMorePosts')"
      class="p-2 rounded-md dark:hover:text-green-700 hover:bg-inherit hover:border-green-700 border mt-4 bg-green-700 text-white hover:text-green-700 cursor-pointer"
    >
      Carregar Mais Posts
    </button>
  </div>
</template>
