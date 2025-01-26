<template>
  <div class="flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-2 py-1">
    <FontAwesomeIcon :icon="faSearch" class="text-gray-400" />
    <input
      v-model="val"
      class="flex-1 border-none bg-transparent outline-none placeholder:text-gray-400"
      placeholder="Search..."
      @keyup.enter="emit('submit', val)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: false
  }
})

const emit = defineEmits(['update:modelValue', 'submit'])

const _val: Ref<string | null> = ref(null)
const val = computed({
  get: () => {
    if (_val.value === null) {
      return props.modelValue
    } else {
      return _val.value
    }
  },
  set: (value: string) => {
    _val.value = value
    emit('update:modelValue', value)
  }
})

watch(
  () => props.modelValue,
  (val) => {
    _val.value = val
  }
)
</script>
