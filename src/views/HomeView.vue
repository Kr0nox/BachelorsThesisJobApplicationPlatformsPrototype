<template>
  <div class="mt-[30vh] flex w-full justify-center">
    <SearchBar v-model="searchText" class="w-1/2 text-2xl" @submit="doSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import { router } from '@/router'
import { store } from '@/stores'

const searchText = ref('')

function doSearch(value: string) {
  store().search = value
  router.push({ name: 'Search', query: { search: value } })
}
</script>
