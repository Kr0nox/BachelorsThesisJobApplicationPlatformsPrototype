<template>
  <div class="flex max-h-full w-full justify-center gap-x-5 overflow-hidden py-5">
    <div class="h-min-full overflow-scroll rounded bg-slate-100 px-2">
      <ExpandableSection title="Location">
        <div class="flex flex-col gap-y-1">
          <span class="flex gap-x-2"
            ><div class="min-w-[114px]">Max Distance</div>
            <input class="w-28" type="number" />km</span
          >
          <span class="flex gap-x-2"
            ><div class="min-w-[114px]">Max Travel Time</div>
            <input class="w-28" type="number" />m</span
          >
          <button class="rounded border border-slate-200 bg-white px-2 py-1">
            <FontAwesomeIcon :icon="faMapMarkerAlt" /> Select Start
          </button>
          <span><input type="checkbox" /> Public Transport</span>
          <span><input type="checkbox" /> Car</span>
          <span><input type="checkbox" /> Bike</span>
          <span><input type="checkbox" /> Walk</span>
        </div>
      </ExpandableSection>
      <ExpandableSection title="Remote options">
        <div class="flex flex-col gap-y-1">
          <span><input type="checkbox" /> Fully remote</span>
          <span><input type="checkbox" /> Fully on site</span>
          <span><input type="checkbox" /> Hybrid</span>
        </div>
      </ExpandableSection>
      <ExpandableSection title="Hours and salary">
        <div class="flex flex-col gap-y-1">
          <span><input type="checkbox" /> 31-40 h/w</span>
          <span><input type="checkbox" /> 21-30 h/w</span>
          <span><input type="checkbox" /> 11-20 h/w</span>
          <span><input type="checkbox" /> 10 h/w</span>

          <span>Minimum yearly Salary</span>
          <div class="flex items-center gap-x-1">
            <input v-model="salaryValue" type="range" min="0" max="500000" step="100" />
            <input v-model="salaryValue" class="w-24" type="number" />€/y
          </div>
        </div>
      </ExpandableSection>
      <ExpandableSection title="Social aspects">
        <div class="flex flex-col gap-y-1">
          <span><input type="checkbox" /> Has Team</span>
        </div>
      </ExpandableSection>
    </div>

    <div class="w-[800px] overflow-auto">
      <div class="space-y-5">
        <InsertBanner v-for="insert of store().inserts" :key="insert.id" :insert="insert" />
      </div>

      <hr class="mb-2 mt-5 border-t border-gray-300" />

      <h2 class="mb-2">Related inserts:</h2>
      <div class="space-y-5">
        <InsertBanner v-for="insert of store().inserts" :key="insert.id" :insert="insert" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InsertBanner from '@/components/InsertBanner.vue'
import { store } from '@/stores'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ExpandableSection from '@/components/ExpandableSection.vue'
import { ref } from 'vue'

defineProps({
  search: {
    type: String,
    default: '',
    required: false
  }
})

const salaryValue = ref(25000)
</script>

<style scoped lang="postcss">
input[type='number'] {
  @apply rounded border border-slate-200 px-1;
}
</style>
