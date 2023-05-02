<script lang="ts">
import StatusBar from './utils/Status.vue';

export default {
  components:{
    StatusBar
  }
}
</script>

<template>
  <StatusBar :step="1" :steps="['Graph to analyze', 'Processing', 'Results']"/>

  <div class="lg:mx-20">
    <FormKit type="form">
      <FormKit
        type="file"
        validation="required|not:Admin"
        label="Bus stop data"
        multiple="false"
        accept=".csv"
        help="Insert CSV with bus stops data"
      />
    </FormKit>
  </div>
</template>

<style scoped>
FormKit {
  width: 80% !important;
}
</style>
