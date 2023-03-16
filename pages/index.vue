<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGetDentalClaims } from '~~/hooks/useGetDentalClaims';
import { useCreateDentalClaims } from '~~/hooks/useCreateDentalClaims';
import { Icon } from '@iconify/vue';
import { format, parseISO } from 'date-fns';

const npi = ref<string>('');
const isSuccessMessageVisible = ref(false);
const { mutateAsync, isLoading: isSubmittingClaim } = useCreateDentalClaims();

const {
  data: claims,
  isLoading: isLoadingClaims,
  refetch,
  isRefetching: isRefreshingClaims,
} = useGetDentalClaims();

async function submitDentalClaim() {
  isSuccessMessageVisible.value = false;
  await mutateAsync(npi.value);
  refetch();
  isSuccessMessageVisible.value = true;
  npi.value = '';
}

const formattedClaims = computed(() => {
  return [...claims.value]
    .map((claim) => ({
      ...claim,
      timeSubmittedDate: format(parseISO(claim.timeSubmitted), 'MM/dd/yyyy'),
      timeSubmittedTime: format(parseISO(claim.timeSubmitted), 'HH:mm:ss.SSS'),
    }))
    .sort((a, b) => b.timeSubmitted.localeCompare(a.timeSubmitted));
});
</script>

<template>
  <h1>Dental Claim Entry</h1>
  <form @submit.prevent="submitDentalClaim">
    <label class="usa-label text-bold" for="npi">
      National Provider Identifier (NPI)<br />
      <span class="text-normal">Item 49 - Form XX</span><br />
      <span class="text-normal text-italic">For example "1234567890"</span>
    </label>

    <input
      class="usa-input"
      type="text"
      pattern="^\d{10}$"
      required
      id="npi"
      name="npi"
      v-model="npi"
    />
    <div role="alert" aria-busy="true" v-if="isSubmittingClaim">
      submitting your claim...
    </div>

    <div v-if="isSuccessMessageVisible">
      <Icon class="success" icon="material-symbols:check-circle" />
      Claim Submission Successful
    </div>
    <button :disabled="isSubmittingClaim" type="submit" class="usa-button">
      Submit
    </button>
  </form>

  <hr />

  <h2>Submitted Claim history</h2>

  <div v-if="isRefreshingClaims">refreshing claims...</div>
  <div v-if="isLoadingClaims">loading...</div>
  <table v-else class="usa-table width-full">
    <thead>
      <tr>
        <th>NPI</th>
        <th>Time Submitted</th>
      </tr>
    </thead>
    <tr
      v-for="claim in formattedClaims"
      :key="`${claim.npi}-${claim.timeSubmitted}`"
    >
      <td>{{ claim.npi }}</td>
      <td>{{ claim.timeSubmittedDate }}<br />{{ claim.timeSubmittedTime }}</td>
    </tr>
  </table>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form button {
  align-self: flex-start;
}

.success {
  color: green;
}
</style>
