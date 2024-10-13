import { createApp } from "vue"; // Importing createApp from Vue
import App from "./App.vue"; // Importing the root App component
import { createRouter, createWebHistory } from "vue-router"; // Importing router functions
import Home from "./views/Home.vue"; // Correctly importing the Home component
import About from "./views/About.vue";

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

// Create the Vue application instance
const app = createApp(App);

// Use the router in the app
app.use(router); // Register the router

// Mount the app to the DOM
app.mount("#app"); // Mount the Vue app to the #app element
