<script setup lang="ts">
import { ref } from 'vue'
import { getDentalClaims, addDentalClaim } from '@/api/claimStateController';
import { Icon } from '@iconify/vue';

const claims = getDentalClaims();
const npi = ref<String>();
const isSuccessMessageVisible = ref(false);


async function submitDentalClaim() {
  await addDentalClaim(npi.value as string)
  isSuccessMessageVisible.value = true;
  npi.value = "";
}
</script>

<template>
  <h1>Dental Claim Entry</h1>
  <form @submit.prevent="submitDentalClaim">
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
      v-model="npi"
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
    <tr v-for="claim in claims" :key="claim.timeSubmitted">
      <th>{{ claim.npi }}</th>
      <td>{{ claim.timeSubmitted }}</td>
    </tr>
  </table>
</template>

<style scoped>
.success {
  color: green;
}
</style>
