<template>
  <div class="mt-[30vh] flex w-full justify-center">
    <SearchBar class="w-1/2 text-2xl" @submit="doSearch" />
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { router } from '@/router'

function doSearch(value: string) {
  router.push({ name: 'Search', query: { search: value } })
}
</script>
