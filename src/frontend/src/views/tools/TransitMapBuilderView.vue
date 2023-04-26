<script lang="ts">
import StatusBar from './utils/StatusBar.vue';

export default {
  components:{
    StatusBar
  }
}
</script>

<template>
    <StatusBar :step="1" :length="4"/>
</template>
