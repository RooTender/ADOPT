import { defineStore } from "pinia";

export const useStepStore = defineStore({
  id: "counter",
  state: () => ({
    step: 1,
  }),
  actions: {
    nextStep() {
      this.step++;
    },
    previousStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
  },
});
