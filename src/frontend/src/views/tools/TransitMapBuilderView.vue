<script lang="ts">
import StatusBar from "./utils/StatusBar.vue";
import { useStepStore } from "@/stores/StepStore";
import EntryStep from "./TransitMapBuilder/EntryStep.vue";
import ProcessingStep from "./TransitMapBuilder/ProcessingStep.vue";
import ResultStep from "./TransitMapBuilder/ResultStep.vue";

export default {
  components: {
    StatusBar,
    EntryStep,
    ProcessingStep,
    ResultStep,
  },
  setup() {
    const stepStore = useStepStore();
    return { stepStore };
  },
};
</script>

<template>
  <div>
    <StatusBar
      :step="stepStore.step"
      :steps="['Graph to analyze', 'Processing', 'Results']"
    />

    <EntryStep v-if="stepStore.step == 1" />
    <ProcessingStep v-if="stepStore.step == 2" />
    <ResultStep v-if="stepStore.step == 3" />
  </div>
</template>
