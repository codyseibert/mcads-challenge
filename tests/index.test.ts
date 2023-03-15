import { render, fireEvent } from "@testing-library/vue";
import { test } from "vitest";
import Component from "../pages/index.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

test("increments value on click", async () => {
  const wrapper = render(Component, {
    global: {
      plugins: [VueQueryPlugin],
    },
  });

  const input = wrapper.getByLabelText(/National Provider Identifier/);

  await fireEvent.update(input, "123456789");

  const submitButton = wrapper.getByText("Submit");

  await fireEvent.click(submitButton);
});
