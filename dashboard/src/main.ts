import { createApp } from "vue"; // Importing createApp from Vue
import App from "./App.vue"; // Importing the root App component
import router from "./router";

// Create the Vue application instance
const app = createApp(App);

// Use the router in the app
app.use(router); // Register the router

// Mount the app to the DOM
app.mount("#app"); // Mount the Vue app to the #app element
