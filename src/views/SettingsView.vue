<template>
  <div class="pt-5 flex flex-col w-full items-center">
    <h1>Settings</h1>
    <ExpandableSection title="General Theme" class="w-[66vw]">
      <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 px-5">
        <p>Accent Color:</p>
        <input type="color" value="#4664AA" />
        <p>Font:</p>
        <select class="bg-transparent outline-none gap-2 border border-gray-300 bg-white px-2 py-1 w-96" >
          <option>Roboto</option>
          <option>Open Sans</option>
          <option>Comic Sans</option>
        </select>
        <p>Font Size:</p>
        <input type="number" value="12" class="bg-transparent outline-none gap-2 border border-gray-300 bg-white px-2 py-1 w-20" />
      </div>

    </ExpandableSection>

    <div class="grid grid-cols-2 w-[66vw] gap-x-10">
      <ExpandableSection title="Information on Search Result Overview">
        <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 px-5">
          <input type="checkbox" />
          <label>Short Description</label>
          <input type="checkbox" />
          <label>Employer</label>
          <input type="checkbox" />
          <label>Location</label>
          <input type="checkbox" />
          <label>Salary</label>
          <input type="checkbox" />
          <label>Working Hours</label>
          <input type="checkbox" />
          <label>Overall Rating</label>
          <input type="checkbox" />
          <label>Diversity Rating</label>
          <input type="checkbox" />
          <label>Overall Social Estimation</label>
          <input type="checkbox" />
          <label>Team Social Estimation</label>
          <input type="checkbox" />
          <label>Customer Social Estimation</label>
        </div>
      </ExpandableSection>

      <ExpandableSection title="Information on Insert Page">
        <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 px-5">
          <input type="checkbox" />
          <label>Short Description</label>
          <input type="checkbox" />
          <label>Employer</label>
          <input type="checkbox" />
          <label>Location</label>
          <input type="checkbox" />
          <label>Salary</label>
          <input type="checkbox" />
          <label>Working Hours</label>

          <input type="checkbox" />
          <label>Link to original Insert</label>
          <input type="checkbox" />
          <label>Contact in company</label>
          <input type="checkbox" />
          <label>Longer Description</label>
          <input type="checkbox" />
          <label>Requirements Description</label>
          <input type="checkbox" />
          <label>Tasks Description</label>
          <input type="checkbox" />
          <label>Benefits Description</label>

          <input type="checkbox" />
          <label>Overall Rating</label>
          <input type="checkbox" />
          <label>Diversity Rating</label>
          <input type="checkbox" />
          <label>Overall Social Estimation</label>
          <input type="checkbox" />
          <label>Team Social Estimation</label>
          <input type="checkbox" />
          <label>Customer Social Estimation</label>
        </div>
      </ExpandableSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExpandableSection from '@/components/ExpandableSection.vue';

</script>
