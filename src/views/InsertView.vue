<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex w-full justify-center">
    <div class="w-2/3">
      <div class="flex flex-col items-center gap-y-5">
        <h1 class="text-xl font-bold">{{ insert.name }}</h1>
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-gray-500">
          <div><FontAwesomeIcon :icon="faSuitcase" /> {{ insert.employer }}</div>
          <div><FontAwesomeIcon :icon="faClock" /> {{ insert.hours }}h/w</div>
          <div><FontAwesomeIcon :icon="faPersonShelter" /> {{ insert.workLocation }}</div>
          <div>
            <FontAwesomeIcon :icon="faMoneyBill" />
            {{
              insert.salary.length == 1
                ? insert.salary[0]
                : `${insert.salary[0]}-${insert.salary[1]}`
            }}€/y
          </div>
        </div>
        <p v-if="insert.link">
          <a class="link" href="https://www.kit.edu">Go to {{ insert.employer }}'s website</a>
        </p>
        <p v-if="insert.contact">
          Direct contact in company: <a class="link" :href="insert.contact">{{ insert.contact }}</a>
        </p>
        <div class="flex gap-x-5">
          <RouterLink :to="{ name: 'Apply', params: { id: id } }">
            <button class="rounded bg-primary px-5 py-2 text-white">
              <FontAwesomeIcon :icon="faPenToSquare" /> Apply now
            </button>
          </RouterLink>
          <button class="rounded bg-slate-200 px-5 py-2">
            <FontAwesomeIcon :icon="faBookmark" /> Save
          </button>
          <button class="rounded bg-slate-200 px-5 py-2">
            <FontAwesomeIcon :icon="faShare" /> Share
          </button>
        </div>
      </div>

      <hr class="my-5" />

      <div v-if="insert.location" class="flex flex-col items-center">
        <div class="flex gap-x-2">
          <FontAwesomeIcon :icon="faMapMarkerAlt" class="h-6" />
          <span class="h-6">Location:</span>
          <div>
            <p v-if="insert.location.street">
              <span>{{ insert.location.street }}</span>
              <span v-if="insert.location.houseNumber">{{ insert.location.houseNumber }}</span>
            </p>
            <p>
              <span v-if="insert.location.zip">{{ insert.location.zip }}</span>
              <span>{{ insert.location.city }}</span>
            </p>
          </div>
        </div>

        <hr class="my-5 w-full" />
      </div>
      <div class="flex items-center px-5">
        {{ insert.short }}
      </div>
      <hr class="my-5" />
      <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 px-5">
        <h2
          v-for="[i, part] of descriptionOrder.entries()"
          :key="part + '-key'"
          class="col-start-1 font-bold"
          :style="{ gridRowStart: i + 1 }"
        >
          {{ part }}
        </h2>
        <p
          v-for="[i, part] of descriptionOrder.entries()"
          :key="part + '-text'"
          class="col-start-2"
          :style="{ gridRowStart: i + 1 }"
          v-html="insert.description[part]"
        ></p>
      </div>
      <hr class="my-5" />
      <div class="grid w-fit grid-cols-[auto_auto_auto] grid-rows-2 gap-x-2 gap-y-4 px-5">
        <h2 class="">Ratings</h2>
        <div>
          <FontAwesomeIcon class="text-gray-500" :icon="faStar" />
          <span class="text-gray-500">Overall</span>
          {{ insert.ratings.Overall }}
        </div>
        <div>
          <FontAwesomeIcon class="text-gray-500" :icon="faPeopleGroup" />
          <span class="text-gray-500">Diversity</span>
          {{ insert.ratings.Diversity }}
        </div>

        <h2>Social Contact</h2>
        <div>
          <FontAwesomeIcon class="text-gray-500" :icon="faStar" />
          <span class="text-gray-500">Team</span>
          {{ insert.socialGuess.team }}
        </div>
        <div>
          <FontAwesomeIcon class="text-gray-500" :icon="faPeopleGroup" />
          <span class="text-gray-500">Customers</span>
          {{ insert.socialGuess.customers }}
        </div>
      </div>
      <hr class="my-5" />
      <div class="grid grid-cols-[auto_1fr] gap-x-2 px-5">
        <span>Response Time:</span><span>Latest 01.04.2025</span>
        <span>First round of Interviews:</span><span>14.04.2025 - 21.04.2025</span>
        <span>Second round of Interviews:</span><span>28.04.2025 - 30.04.2025</span>
      </div>
      <div class="px-5 pt-5">
        <h2 class="font-bold">What to Expect in Your First Weeks:</h2>
        <p>
          <b>Onboarding & Setup:</b> Gain access to internal tools, set up your development environment, and complete essential training.
        </p>
        <p>
          <b>Team Introductions:</b> Meet your colleagues, understand team structures, and get familiar with communication channels.
        </p>
        <p>
          <b>Codebase Exploration:</b> Review documentation, explore the repository, and work on small starter tasks to familiarize yourself with the tech stack.
        </p>
        <p>
          <b>Pair Programming & Mentorship:</b> Collaborate with team members, participate in code reviews, and receive guidance from a mentor or senior developer.
        </p>
        <p>
          <b>First Contributions:</b> Begin working on minor bug fixes or features, applying team best practices and coding standards.
        </p>
        <p>
          <b>Agile Routines: </b>Join stand-ups, sprint planning, and retrospectives to understand workflows and project management processes.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '@/stores'
import { computed } from 'vue'
import {
  faClock,
  faMoneyBill,
  faPersonShelter,
  faSuitcase,
  faMapMarkerAlt,
  faPenToSquare,
  faBookmark,
  faShare,
  faPeopleGroup,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { DescriptionPart } from '@/model/Insert'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const insert = computed(() => store().inserts.filter((insert) => insert.id === props.id)[0])

const descriptionOrder = [
  DescriptionPart.REQUIREMENTS,
  DescriptionPart.TASKS,
  DescriptionPart.OFFER,
  DescriptionPart.TEXT
]
</script>
