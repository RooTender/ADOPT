<script lang="ts">
import StatusBar from './utils/Status.vue';

export default {
  components:{
    StatusBar
  }
}
</script>

<template>
    <StatusBar :step="3" :steps="['Graph to analyze', 'Processing', 'Results']"/>
</template>
