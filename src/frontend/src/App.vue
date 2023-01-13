<script setup lang="ts">
import { toNumber } from "@vue/shared";
import { RouterLink, RouterView } from "vue-router";
</script>

<script lang="ts">
export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
      handler(to, _) {
        document.title = "MTAS";

        if (to.name !== undefined && to.name !== null) {
          let routeName = to.name;
          let title = routeName.charAt(0).toUpperCase() + routeName.slice(1);
          document.title = `MTAS - ${title}`;
        }
      },
    },
  },
};
</script>

<template>
  <div class="container mx-auto m-4">
    <nav>
      <div class="flex flex-wrap items-center justify-between px-8">
        <img
          src="./assets/images/example-logo.png"
          class="h-8 md:h-10 mr-3"
          alt="MTAS logo"
        />

        <div class="w-auto space-x-8 md:space-x-16 navbar">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/tools">Tools</RouterLink>
          <a href="https://github.com/RooTender/MTAS" target="_blank">Github</a>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.navbar > *:hover {
  text-decoration: underline;
}

.navbar > a.router-link-exact-active {
  font-weight: bold;
}
</style>
