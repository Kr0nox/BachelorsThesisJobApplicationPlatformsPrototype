<template>
  <div class="flex w-full justify-center py-5">
    <div></div>
    <div class="w-[800px] space-y-5">
      <InsertBanner v-for="insert of store().inserts" :key="insert.id" :insert="insert" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InsertBanner from '@/components/InsertBanner.vue'
import { store } from '@/stores'

defineProps({
  search: {
    type: String,
    default: '',
    required: false
  }
})
</script>
