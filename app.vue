<script setup lang="ts">
const entries = ref([
  {
    npi: "123427482938",
    timeSubmitted: "2011-10-05T14:48:00.000Z",
  },
  {
    npi: "123427482938",
    timeSubmitted: "2011-10-05T14:48:00.000Z",
  },
  {
    npi: "123427482938",
    timeSubmitted: "2011-10-05T14:48:00.000Z",
  },
]);

const addEntryToTable = (event) => {
  const formData = new FormData(event.currentTarget);
  entries.value.push({
    ...Object.fromEntries(formData.entries()),
    timeSubmitted: new Date().toISOString(),
  } as any);
};
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
      pattern="\d{10,10}"
      id="input-type-text"
      name="npi"
    />
    <div>Claim Submission Successful</div>
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

<style scoped></style>
