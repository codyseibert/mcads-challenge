<script setup lang="ts">
import { useGetDentalClaims } from '@/hooks/useGetDentalClaims';
import { useCreateDentalClaims } from '@/hooks/useCreateDentalClaims';
import { Icon } from '@iconify/vue';
import { format, parseISO } from 'date-fns';
import { TDentalClaim } from '~~/api/createDentalClaim';

const isSuccessMessageVisible = ref(false);
const { mutateAsync, isLoading: isSubmittingClaim } = useCreateDentalClaims();
const {
  data: entries,
  isLoading: isLoadingClaims,
  refetch,
} = useGetDentalClaims();

async function addEntryToTable(event: Event) {
  isSuccessMessageVisible.value = false;
  const formElement = event.currentTarget as HTMLFormElement;
  const formData = new FormData(formElement);
  await mutateAsync(formData.get('npi') as string);
  refetch();
  isSuccessMessageVisible.value = true;
  formElement.reset();
}

function getFormattedEntries(entries: TDentalClaim[] = []) {
  return entries.map((entry) => ({
    ...entry,
    timeSubmittedDate: format(parseISO(entry.timeSubmitted), 'MM/dd/yyyy'),
    timeSubmittedTime: format(parseISO(entry.timeSubmitted), 'HH:mm:ss.SSS'),
  }));
}
</script>

<template>
  <h1>Dental Claim Entry</h1>
  <form @submit.prevent="addEntryToTable">
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
    />
    <div v-if="isSubmittingClaim">submitting your claim...</div>
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

  <div v-if="isLoadingClaims">loading...</div>
  <table v-else class="usa-table width-full">
    <thead>
      <tr>
        <th>NPI</th>
        <th>Time Submitted</th>
      </tr>
    </thead>
    <tr v-for="entry in getFormattedEntries(entries)">
      <td>{{ entry.npi }}</td>
      <td>{{ entry.timeSubmittedDate }}<br />{{ entry.timeSubmittedTime }}</td>
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
