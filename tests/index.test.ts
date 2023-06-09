import { render, fireEvent } from '@testing-library/vue';
import { vi, test, expect, beforeEach } from 'vitest';
import Component from '../pages/index.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

beforeEach(() => {
  vi.mock('~~/hooks/getRuntimeConfig', () => ({
    getRuntimeConfig: () => ({
      public: {
        useMock: true,
      },
    }),
  }));
});

test('a user can not submit a claim with an invalid NPI', async () => {
  const wrapper = render(Component, {
    global: {
      plugins: [VueQueryPlugin],
    },
  });
  const npiInput = wrapper.getByLabelText(/National Provider Identifier/);

  const invalidNPI = '444';
  await fireEvent.update(npiInput, invalidNPI);

  const submitButton = wrapper.getByText('Submit');

  expect(npiInput);

  await fireEvent.click(submitButton);

  const loadingAlert = wrapper.queryByRole('alert');
  expect(loadingAlert).toBeNull();
});

test('newly submitted claims will be appended to the table below', async () => {
  const wrapper = render(Component, {
    global: {
      plugins: [VueQueryPlugin],
    },
  });
  const npiInput = wrapper.getByLabelText(/National Provider Identifier/);

  const validNPI = '0133713370';
  await fireEvent.update(npiInput, validNPI);

  const submitButton = wrapper.getByText('Submit');

  expect(npiInput);

  await fireEvent.click(submitButton);

  const loadingAlert = wrapper.queryByRole('alert');
  expect(loadingAlert).not.toBeNull();

  const cell = await wrapper.findByRole('cell', {
    name: validNPI,
  });
  expect(cell).toBeDefined();
});

// TODO: write a test that verifies the sort order of the table rows

// TODO: write a test that verifies the ui loads with the expected data from the api
