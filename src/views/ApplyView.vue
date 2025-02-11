<template>
  <div class="flex w-full justify-center">
    <div class="flex w-2/3 flex-col items-center">
      <div class="flex w-fit flex-col gap-y-2 px-5">
        <h1>CV</h1>
        Choose an option for providing your CV:
        <p class="flex gap-x-5">
          <button class="rounded bg-primary px-5 py-2 text-white">
            <FontAwesomeIcon :icon="faUpload" /> Upload Document
          </button>
          <button class="rounded bg-primary px-5 py-2 text-white">
            <FontAwesomeIcon :icon="faFilePen" /> Use content form
          </button>
        </p>
      </div>
      <hr class="my-5 w-full" />
      <div class="flex w-fit flex-col gap-y-2 px-5">
        <h1>Letter of motivation</h1>
        Choose an option for providing your letter of motivation:
        <p class="flex gap-x-5">
          <button class="rounded bg-primary px-5 py-2 text-white">
            <FontAwesomeIcon :icon="faUpload" /> Upload Document
          </button>
          <button class="rounded bg-primary px-5 py-2 text-white">
            <FontAwesomeIcon :icon="faFileCircleQuestion" class="pr-2" />Questionnaire
          </button>
        </p>
      </div>
      <hr class="my-5 w-full" />
      <div class="flex w-fit min-w-[442px] flex-col gap-y-2 px-5">
        <h1>Other Documents</h1>
        <p>Here you can upload other documents.</p>
        <p
          v-if="
            insert.requestedApplicationDocuments && insert.requestedApplicationDocuments.length > 0
          "
        >
          {{ insert.employer }} is requesting you to provide the following documents:
          <b>{{ insert.requestedApplicationDocuments.join(', ') }}</b>
        </p>

        <div class="space-y-2">
          <h2>Uploaded Documents</h2>
          <div class="space-y-4">
            <div v-for="document in uploadedDocuments" :key="document" class="flex gap-x-2">
              <p class="flex-1">{{ document }}</p>
              <button class="rounded bg-slate-200 px-2 py-1 text-white">
                <FontAwesomeIcon :icon="faFile" /> View
              </button>
              <button class="rounded bg-slate-200 px-2 py-1 text-white">
                <FontAwesomeIcon :icon="faMinus" /> Remove
              </button>
            </div>
          </div>
          <button class="rounded bg-primary px-5 py-2 text-white">
            <FontAwesomeIcon :icon="faUpload" /> Upload Document
          </button>
        </div>
        <div v-if="store().previouslyUploadedDocuments.length > 0" class="mt-5 space-y-2">
          <h2>Previously uploaded documents:</h2>
          <div class="space-y-4">
            <div
              v-for="document in store().previouslyUploadedDocuments"
              :key="document"
              class="flex gap-x-2"
            >
              <p class="flex-1">{{ document }}</p>
              <button class="rounded bg-slate-200 px-2 py-1">
                <FontAwesomeIcon :icon="faFile" /> View
              </button>
              <button class="rounded bg-slate-200 px-2 py-1">
                <FontAwesomeIcon :icon="faPlus" /> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-5 w-full" />

      <div class="flex gap-x-5">
        <button class="rounded bg-primary px-5 py-2 text-white">
          <FontAwesomeIcon :icon="faPenToSquare" /> Submit
        </button>
        <button class="rounded bg-slate-200 px-5 py-2">
          <FontAwesomeIcon :icon="faShare" /> Share Application
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '@/stores'
import {
  faFile,
  faFileCircleQuestion,
  faFilePen,
  faMinus,
  faPenToSquare,
  faPlus,
  faShare,
  faUpload
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const insert = computed(() => store().inserts.filter((insert) => insert.id === props.id)[0])

const uploadedDocuments = ref<string[]>([])
</script>

<style scoped lang="postcss">
h1 {
  @apply text-2xl font-bold;
}

h2 {
  @apply text-xl;
}
</style>
