<script setup>
import { ref, onMounted, watch } from "vue"

const theme = ref("light")

onMounted(() => {
  const stored = localStorage.getItem("theme")
  if (stored) theme.value = stored

  document.documentElement.classList.toggle("dark", theme.value === "dark")
})

watch(theme, (value) => {
  document.documentElement.classList.toggle("dark", value === "dark")
  localStorage.setItem("theme", value)
})

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light"
}

const isDark = computed(() => theme.value === "dark")
</script>

<template>
  <button
    @click="toggleTheme"
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 p-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
  >
    <Transition name="theme-toggle" mode="out-in">
      <!-- Sun icon for light mode -->
      <svg
        v-if="!isDark"
        key="sun"
        class="w-5 h-5 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>

      <!-- Moon icon for dark mode -->
      <svg
        v-else
        key="moon"
        class="w-5 h-5 text-blue-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
    </Transition>
  </button>
</template>

<style scoped>
.theme-toggle-enter-active,
.theme-toggle-leave-active {
  transition: all 0.2s ease-in-out;
}

.theme-toggle-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.theme-toggle-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}
</style>
