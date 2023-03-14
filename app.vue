<template>
  <form>
    <label class="usa-label npi-form-label" for="input-type-text"
      >National Provider Identifier (NPI)</label
    >
    <span class="hint">For example "1234567890"</span>

    <input
      class="usa-input"
      type="text"
      pattern="\d{10,10}"
      id="input-type-text"
      name="input-type-text"
    />

    <button type="submit" class="usa-button">Submit</button>
  </form>
</template>

<style>
.npi-form-label {
  font-weight: bold;
}

.hint {
  font-style: italic;
}
</style>
