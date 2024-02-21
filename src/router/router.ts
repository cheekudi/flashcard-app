import type CardViewerVue from "@/views/CardViewer.vue";

import { createRouter, createWebHistory } from "vue-router";
import CardViewer from "@/views/CardViewer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CardViewer,
    },
  ],
});

export default router;
