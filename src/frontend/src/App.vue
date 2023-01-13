<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="m-4">
    <header>
      <img
        class="h-16 md:h-20 lg:h-24 mx-auto"
        alt="logo"
        src="./assets/images/example-logo.png"
      />
    </header>
    <nav
      class="my-4 flex flex-row justify-center space-x-4 md:space-x-8 lg:space-x-16 navbar"
    >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.navbar > *:hover {
  text-decoration: underline;
}

.navbar > a.router-link-exact-active {
  font-weight: bold;
}
</style>
