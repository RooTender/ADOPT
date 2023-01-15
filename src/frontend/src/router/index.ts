import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ToolsView from "../views/ToolsView.vue";
import TransitMapBuilderView from "../views/tools/TransitMapBuilderView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/tools",
      name: "tools",
      component: ToolsView,
    },
    {
      path: "/tools/tmb",
      name: "transit map builder",
      component: TransitMapBuilderView,
    },
  ],
});

export default router;
