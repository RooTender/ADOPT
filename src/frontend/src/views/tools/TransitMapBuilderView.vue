<script lang="ts">
import StatusBar from "./utils/Status.vue";
import { useStepStore } from "@/stores/StepStore";
import Entry from "./TransitMapBuilder/Entry.vue";
import Processing from "./TransitMapBuilder/Processing.vue";
import Result from "./TransitMapBuilder/Result.vue";

export default {
  components: {
    StatusBar,
    Entry,
    Processing,
    Result,
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

    <Entry v-if="stepStore.step == 1" />
    <Processing v-if="stepStore.step == 2" />
    <Result v-if="stepStore.step == 3" />
  </div>
</template>
