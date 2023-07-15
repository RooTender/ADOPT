import { mount } from "@vue/test-utils";
import { waitForRender } from "@test_utils";
import { describe, it, expect } from "vitest";
import StatusBar from "@/views/tools/utils/StatusBar.vue";
import Status from "@/views/tools/utils/Status.vue";

describe("status", () => {
  it("should render the correct step number", () => {
    const wrapper = mount(Status, {
      propsData: {
        step: 2,
        steps: ["Step 1", "Step 2", "Step 3"],
      },
    });

    waitForRender(() => {
      const h1 = wrapper.find("h1");

      expect(h1.text).toBe("Step 2");
    });
  });

  it("should render the correct number of steps", () => {
    const wrapper = mount(Status, {
      propsData: {
        step: 2,
        steps: ["Step 1", "Step 2", "Step 3"],
      },
    });

    waitForRender(() => {
      const statusBar = wrapper.findComponent(StatusBar);

      expect(statusBar.props("step")).toBe(2);
      expect(statusBar.props("steps")).toBe(3);
    });
  });
});
