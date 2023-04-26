<script setup lang="ts"></script>

<template>
  <div class="px-10 text-center">
    <h1 class="my-8 text-3xl">Tools</h1>
    <p class="my-8">
      The MTAS project's "Tools" section provides tools to improve public
      transit systems by analyzing and providing insights for informed decision
      making.
    </p>
  </div>
  <div class="px-10 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
    <router-link to="/tools/tmb" custom v-slot="{ navigate }">
      <div role="link" @click="navigate">
        <h1>Transit Map Builder</h1>
        <p>Generate transit maps fast and easy</p>
      </div>
    </router-link>
    <router-link to="/tools/datagrammer" custom v-slot="{ navigate }">
      <div role="link" @click="navigate">
        <h1>Datagrammer</h1>
        <p>...</p>
      </div>
    </router-link>
    <router-link to="/tools/datagrammer" custom v-slot="{ navigate }">
      <div role="link" @click="navigate">
        <h1>Datagrammer</h1>
        <p>...</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
div[role] {
  padding: 2rem;
  text-align: center;
  cursor: pointer;
}

div[role]:hover {
  background-color: #212121 !important;
  color: #eeeeee;
  transition: all 0.5s ease;
}

div[role] > h1 {
  font-weight: bold;
}

div[role]:nth-child(5n + 1) {
  background-color: #edede9;
}

div[role]:nth-child(5n + 2) {
  background-color: #efeae6;
}

div[role]:nth-child(5n + 3) {
  background-color: #f5ebe0;
}

div[role]:nth-child(5n + 4) {
  background-color: #eadfd7;
}

div[role]:nth-child(5n + 5) {
  background-color: #f1e9e4;
}
</style>
