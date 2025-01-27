<template>
  <div class="flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-2 py-1">
    <FontAwesomeIcon :icon="faSearch" class="text-gray-400" />
    <input
      v-model="store().search"
      class="flex-1 border-none bg-transparent outline-none placeholder:text-gray-400"
      placeholder="Search..."
      @keyup.enter="emit('submit', store().search)"
    />
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { store } from '@/stores'

const emit = defineEmits(['submit'])
</script>
