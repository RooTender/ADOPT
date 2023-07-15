<script lang="ts">
import ProgressBar from "./ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
  name: "status-bar",
  props: {
    step: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array<String>,
      required: true,
    },
  },
  methods: {
    getStepsCount(): number {
      return this.steps.length;
    },
  },
};
</script>

<template>
  <div class="px-10 text-center">
    <h1 class="my-8 text-3xl">{{ steps[step - 1] }}</h1>
    <ProgressBar class="my-8" :step="step" :length="getStepsCount()" />
  </div>
</template>
