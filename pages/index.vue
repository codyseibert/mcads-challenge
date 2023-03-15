<script setup lang="ts">
import { ref } from 'vue';
import { useGetDentalClaims } from '@/hooks/useGetDentalClaims';
import { useCreateDentalClaims } from '@/hooks/useCreateDentalClaims';
import { Icon } from '@iconify/vue';
import { format, parseISO } from 'date-fns';

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

function formatDate(isoDate: string) {
  return format(parseISO(isoDate), 'MM/dd/yyyy');
}

function formatTime(isoDate: string) {
  return format(parseISO(isoDate), 'HH:mm:ss.SSS');
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

  <div v-if="isLoadingClaims">loading...</div>
  <table v-else class="usa-table width-full">
    <thead>
      <tr>
        <th>NPI</th>
        <th>Time Submitted</th>
      </tr>
    </thead>
    <tr v-for="entry in entries">
      <td>{{ entry.npi }}</td>
      <td>
        {{ formatDate(entry.timeSubmitted) }}<br />{{
          formatTime(entry.timeSubmitted)
        }}
      </td>
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
