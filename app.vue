<script setup>
const entries = [
  {
    npi: '123427482938',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
  {
    npi: '123427482938',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
  {
    npi: '123427482938',
    timeSubmitted: '2011-10-05T14:48:00.000Z',
  },
];
</script>

<template>
  <h1>Dental Claim Entry</h1>
  <form>
    <label class="usa-label text-bold" for="input-type-text">
      National Provider Identifier (NPI)<br />
      <span class="text-normal">Item 49 - Form XX</span>
    </label>
    <span class="text-italic">For example "1234567890"</span>

    <input
      class="usa-input"
      type="text"
      pattern="\d{10,10}"
      id="input-type-text"
      name="input-type-text"
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
