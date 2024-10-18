import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

// Define the routes
const routes = [
  {
    path: "/",
    component: Home,
    meta: { showChart: true }, // Metadata to show the chart on the Home route
  },
  {
    path: "/about",
    component: About,
    meta: { showChart: false }, // Metadata to hide the chart on the About route
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
