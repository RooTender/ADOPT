<script setup lang="ts"></script>

<script lang="ts">
export default {
    name: 'status-bar',
    data () {
      return {}
    }
}
</script>

<template>
    <div class="container">
        <ul class="progressbar">
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
            <li>Step 5</li>
        </ul>
    </div>
</template>

<style scoped>
.container{
  width: 100%;
  position: absolute;
  z-index: 1;
}
.progressbar li{
  float: left;
  width: 20%;
  position: relative;
  text-align: center;
}
</style>