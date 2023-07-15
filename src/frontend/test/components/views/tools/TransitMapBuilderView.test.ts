import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { waitForRender } from "@test_utils";

import StatusBar from "@/views/tools/utils/Status.vue";

import Entry from "@/views/tools/TransitMapBuilder/Entry.vue";
import Processing from "@/views/tools/TransitMapBuilder/Processing.vue";
import Result from "@/views/tools/TransitMapBuilder/Result.vue";
import TransitMapBuilder from "@/views/tools/TransitMapBuilderView.vue";

describe("TransitMapBuilder", () => {
  it("should render the correct status bar", () => {
    const wrapper = mount(TransitMapBuilder, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const statusBar = wrapper.findComponent(StatusBar);

    expect(statusBar.props("step")).toBe(1);
    expect(statusBar.props("steps")).toHaveLength(3);
  });

  it("should render the Entry component when the step is 1", () => {
    const wrapper = mount(TransitMapBuilder, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const entry = wrapper.findComponent(Entry);

    expect(entry.exists()).toBe(true);
  });

  it("should render the Processing component when the step is 2", () => {
    const wrapper = mount(TransitMapBuilder, {
      global: {
        plugins: [createTestingPinia()],
      },
      propsData: {
        stepStore: {
          step: 2,
        },
      },
    });

    waitForRender(() => {
      const processing = wrapper.findComponent(Processing);

      expect(processing.exists()).toBe(true);
    });
  });

  it("should render the Result component when the step is 3", () => {
    const wrapper = mount(TransitMapBuilder, {
      propsData: {
        stepStore: {
          step: 3,
        },
      },
    });

    waitForRender(() => {
      const result = wrapper.findComponent(Result);

      expect(result.exists()).toBe(true);
    });
  });
});
