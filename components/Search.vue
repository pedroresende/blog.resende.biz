<script setup>
import { ref, computed, onMounted } from "vue"
import { useRouter } from "#app"

const router = useRouter()
const searchQuery = ref("")
const posts = ref([])
const showResults = ref(false)

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) {
    return []
  }

  const query = searchQuery.value.toLowerCase()
  return posts.value
    .filter((post) => {
      return (
        post.title?.toLowerCase().includes(query) ||
        post.description?.toLowerCase().includes(query) ||
        post.content?.toLowerCase().includes(query)
      )
    })
    .slice(0, 8)
})

const handleSearch = () => {
  showResults.value = true
}

const hideResults = () => {
  setTimeout(() => {
    showResults.value = false
  }, 200)
}

const selectPost = (post) => {
  searchQuery.value = ""
  showResults.value = false
  console.log(post)
  router.push(post.path)
}

const loadPosts = async () => {
  try {
    const response = await $fetch("/api/search/posts")
    posts.value = response.data || []
    sessionStorage.setItem("posts", JSON.stringify(response.data))
  } catch (error) {
    console.error("Failed to load posts for search:", error)
  }
}

onMounted(() => {
  if (sessionStorage.getItem("posts")) {
    posts.value = JSON.parse(sessionStorage.getItem("posts"))
  } else {
    loadPosts()
  }
})
</script>

<template>
  <div class="relative">
    <div class="relative">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        @focus="showResults = true"
        @blur="hideResults"
        type="text"
        placeholder="Procurar..."
        class="w-64 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <svg
        class="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <div
      v-if="showResults && searchResults.length > 0"
      class="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
    >
      <a
        v-for="post in searchResults"
        :key="post.path"
        :href="post.path"
        @click="selectPost(post)"
        class="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
      >
        <h3 class="font-semibold text-gray-800 text-sm">{{ post.title }}</h3>
        <p class="text-gray-600 text-xs mt-1 line-clamp-2">
          {{ post.description }}
        </p>
      </a>
    </div>

    <div
      v-if="showResults && searchQuery && searchResults.length === 0"
      class="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <div class="px-4 py-3 text-gray-500 text-sm">
        Elementos não encontrados para "{{ searchQuery }}"
      </div>
    </div>
  </div>
</template>
