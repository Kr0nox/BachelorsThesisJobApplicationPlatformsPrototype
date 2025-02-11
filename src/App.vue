<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden">
    <div class="grid h-16 grid-cols-[110px_auto_50px_40px] gap-5 bg-primary px-5">
      <img src="./assets/KIT-Logo.png" class="my-auto h-12" />
      <div class="flex items-center justify-center">
        <SearchBar
          v-if="router.currentRoute.value.name !== 'Home'"
          v-model="searchText"
          class="w-96"
          @submit="doSearch"
        />
      </div>
      <div><!-- Placeholder --></div>
      <div class="flex cursor-pointer items-center justify-center">
        <FontAwesomeIcon :icon="faUserCircle" class="h-10 text-white" />
      </div>
    </div>
    <div class="flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import { router } from './router'
import { store } from './stores'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const searchText = ref('')
router.afterEach(() => {
  searchText.value = store().search
})

function doSearch(value: string) {
  searchText.value = store().search
  router.push({ name: 'Search', query: { search: value } })
}
</script>
