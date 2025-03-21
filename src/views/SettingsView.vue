<template>
  <div class="flex w-full flex-col items-center pt-5">
    <h1>Settings</h1>
    <ExpandableSection title="General Theme" class="w-[66vw]">
      <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 px-5">
        <p>Accent Color:</p>
        <input type="color" value="#4664AA" />
        <p>Font:</p>
        <select
          class="w-96 gap-2 border border-gray-300 bg-transparent bg-white px-2 py-1 outline-none"
        >
          <option>Roboto</option>
          <option>Open Sans</option>
          <option>Comic Sans</option>
        </select>
        <p>Font Size:</p>
        <input
          type="number"
          value="12"
          class="w-20 gap-2 border border-gray-300 bg-transparent bg-white px-2 py-1 outline-none"
        />
      </div>
    </ExpandableSection>

    <div class="grid w-[66vw] grid-cols-2 gap-x-10">
      <ExpandableSection title="Information on Search Result Overview">
        <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 px-5">
          <input type="checkbox" />
          <label
            >Short Description <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label>Employer <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500" /></label>
          <input type="checkbox" />
          <label>Location <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500" /></label>
          <input type="checkbox" />
          <label>Salary <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500" /></label>
          <input type="checkbox" />
          <label
            >Working Hours <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Overall Rating <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Diversity Rating <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Overall Social Estimation <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Team Social Estimation <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Customer Social Estimation <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
        </div>
      </ExpandableSection>

      <ExpandableSection title="Information on Insert Page">
        <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 px-5">
          <input type="checkbox" />
          <label
            >Short Description <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label>Employer <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500" /></label>
          <input type="checkbox" />
          <label>Location <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500" /></label>
          <input type="checkbox" />
          <label>Salary <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500" /></label>
          <input type="checkbox" />
          <label
            >Working Hours <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>

          <input type="checkbox" />
          <label
            >Link to original Insert <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Contact in company <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Longer Description <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Requirements Description <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Tasks Description <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Benefits Description <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>

          <input type="checkbox" />
          <label
            >Overall Rating <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Diversity Rating <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Overall Social Estimation <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Team Social Estimation <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
          <input type="checkbox" />
          <label
            >Customer Social Estimation <FontAwesomeIcon :icon="faInfoCircle" class="text-gray-500"
          /></label>
        </div>
      </ExpandableSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpandableSection from '@/components/ExpandableSection.vue'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
