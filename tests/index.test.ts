import { mount } from '@vue/test-utils';
import { test } from 'vitest';
import Component from '../pages/index.vue';

test('increments value on click', async () => {
  // TODO: setup vue query plugin somehow in tests
  const wrapper = mount(Component);
});
