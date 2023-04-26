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
</template>
