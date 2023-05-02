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

  <div id="test" >
    <div class="container">
      <h1>New Character</h1>
      <FormKit type="form">
        <FormKit
          type="text"
          name="name"
          id="name"
          validation="required|not:Admin"
          label="Name"
          help="Enter your character's full name"
          placeholder="“Scarlet Sword”"
        />
      </FormKit>
    </div>
  </div>
</template>

<style scoped>


FormKit {
  width: 80% !important;
}

</style>