import { setActivePinia, createPinia } from "pinia";
import { useStepStore } from "@/stores/StepStore";
import { describe, beforeEach, it, expect } from "vitest";

describe("useStepStore", () => {
  let store: any;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useStepStore();
  });

  it("should start with the step at 1", () => {
    expect(store.step).toBe(1);
  });

  it("should increase the step by 1 when nextStep is called", () => {
    store.nextStep();
    expect(store.step).toBe(2);
  });

  it("should decrease the step by 1 when previousStep is called", () => {
    store.nextStep();
    store.previousStep();
    expect(store.step).toBe(1);
  });
});
