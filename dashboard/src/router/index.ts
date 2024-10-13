// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router"; // Importing router functions
import Home from "@/views/Home.vue"; // Import the Home component
import About from "@/views/About.vue"; // Import the About component

// Define the routes
const routes = [
  {
    path: "/", // Path for the home route
    component: Home, // The component to render for this path
  },
  {
    path: "/about", // Path for the about route
    component: About, // The component to render for this path
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 History Mode
  routes, // Assign the defined routes
});

export default router;
