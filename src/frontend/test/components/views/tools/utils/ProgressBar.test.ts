import { mount, VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import ProgressBar from "@/views/tools/utils/ProgressBar.vue";

const step = 2;
const length = 5;

describe("ProgressBar", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(ProgressBar, {
      propsData: {
        step,
        length,
      },
    });
  });

  it("should return true when the step is less than or equal to the index", () => {
    const result = wrapper.vm.isActive(2);

    expect(result).toBe(true);
  });

  it("should return false when the step is greater than the index", () => {
    const result = wrapper.vm.isActive(3);

    expect(result).toBe(false);
  });
});
