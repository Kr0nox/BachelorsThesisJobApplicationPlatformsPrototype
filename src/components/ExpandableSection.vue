<template>
  <div class="py-1">
    <h2 class="border-b border-gray-300 px-1">
      <FontAwesomeIcon :icon="expanded ? faChevronDown : faChevronRight" /> {{ title }}
    </h2>
    <div v-if="expanded"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const expanded = ref(false)
</script>
