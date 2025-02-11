<template>
  <RouterLink
    :to="{
      name: 'Insert',
      params: { id: insert.id }
    }"
    class="m-auto grid grid-cols-[auto_70px] rounded-md border-2 border-gray-300 p-2"
  >
    <h1>{{ insert.name }}</h1>
    <div class="col-span-1 row-start-2 flex flex-wrap gap-x-5 gap-y-2 text-gray-500">
      <div><FontAwesomeIcon :icon="faSuitcase" /> {{ insert.employer }}</div>
      <div><FontAwesomeIcon :icon="faClock" /> {{ insert.hours }}h/w</div>
      <div><FontAwesomeIcon :icon="faPersonShelter" /> {{ insert.workLocation }}</div>
      <div>
        <FontAwesomeIcon :icon="faMoneyBill" />
        {{
          insert.salary.length == 1 ? insert.salary[0] : `${insert.salary[0]}-${insert.salary[1]}`
        }}€/y
      </div>
      <div>
        <FontAwesomeIcon :icon="faStar" />
        {{ insert.ratings.Overall }}
      </div>
      <div>
        <FontAwesomeIcon :icon="faPeopleGroup" />
        {{ (insert.socialGuess.customers + insert.socialGuess.team) / 2 }}
      </div>
    </div>
    <div
      class="row-span-2 flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 p-1"
    >
      <img src="@/assets/small.png" />
    </div>
    <p class="row-stat-3 col-span-2">{{ insert.short }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Insert } from '@/model/Insert'
import {
  faClock,
  faMoneyBill,
  faPeopleGroup,
  faPersonShelter,
  faStar,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { PropType } from 'vue'

defineProps({
  insert: {
    type: Object as PropType<Insert>,
    required: true
  }
})
</script>
