<template>
  <div class="mt-[30vh] flex w-full flex-col items-center gap-y-5">
    <SearchBar class="w-1/2 text-2xl" @submit="doSearch" />
    <div class="flex w-1/2 items-center gap-2">
      <div
        class="flex w-1/2 items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-2 py-1"
      >
        <FontAwesomeIcon :icon="faLocation" class="text-gray-400" />
        <input
          class="flex-1 border-none bg-transparent outline-none placeholder:text-gray-400"
          placeholder="Location"
        />
      </div>
      <label>Radius:</label>
      <input
        type="number"
        class="flex-1 rounded-full border-2 border-gray-300 bg-transparent bg-white px-1 py-1 outline-none placeholder:text-gray-400"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { router } from '@/router'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

function doSearch(value: string) {
  router.push({ name: 'Search', query: { search: value } })
}
</script>
