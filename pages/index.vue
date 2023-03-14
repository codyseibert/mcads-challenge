<script setup lang="ts">
import { getDentalClaims, type TDentalClaim } from '@/api/getDentalClaims';
import { createDentalClaims } from '@/api/createDentalClaims';
import { Icon } from '@iconify/vue';

const entries = ref<TDentalClaim[]>([]);
const isSuccessMessageVisible = ref(false);

onMounted(async () => {
  entries.value = await getDentalClaims();
});

async function addEntryToTable(event: Event) {
  const formElement = event.currentTarget as HTMLFormElement;
  const formData = new FormData(formElement);
  const createdNpi = await createDentalClaims(formData.get('npi') as string);
  entries.value.push(createdNpi);
  isSuccessMessageVisible.value = true;
  formElement.reset();
}
</script>

<template>
  <h1>Dental Claim Entry</h1>
  <form @submit.prevent="addEntryToTable">
    <label class="usa-label text-bold" for="npi">
      National Provider Identifier (NPI)<br />
      <span class="text-normal">Item 49 - Form XX</span>
    </label>
    <span class="text-italic">For example "1234567890"</span>

    <input
      class="usa-input"
      type="text"
      pattern="^\d{10}$"
      required
      id="npi"
      name="npi"
    />
    <div v-if="isSuccessMessageVisible">
      <Icon class="success" icon="material-symbols:check-circle" />
      Claim Submission Successful
    </div>
    <button type="submit" class="usa-button">Submit</button>
  </form>

  <hr />

  <h2>Submitted Claim history</h2>

  <table class="usa-table">
    <thead>
      <tr>
        <th>NPI</th>
        <th>Time Submitted</th>
      </tr>
    </thead>
    <tr v-for="entry in entries">
      <th>{{ entry.npi }}</th>
      <td>{{ entry.timeSubmitted }}</td>
    </tr>
  </table>
</template>

<style scoped>
.success {
  color: green;
}
</style>
